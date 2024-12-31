import { notFound } from 'next/navigation';
import DownloadButton from './components/download-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  params: Promise<{ transactionId: string }>;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const transactionId = params.transactionId;
  console.log('Transaction Id: ', transactionId);

  const origin = process.env.NEXT_PUBLIC_API_ORIGIN || 'http://localhost:3000';
  console.log('Origin: ', origin);

  // Fetch booking details
  const bookingRes = await fetch(`${origin}/api/check-booking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ transactionId }),
  });

  const bookingData = await bookingRes.json();

  if (bookingData.message === 'Transaction not found') {
    notFound();
  }

  const { transaction, user, course, slot } = bookingData;

  // Send the email
  const emailRes = await fetch(`${origin}/api/send-mail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      courseName: course.name,
      slotName: slot.slotName,
      amount: transaction.amount,
      bookingDate: transaction.createdAt,
    }),
  });

  const emailData = await emailRes.json();

  if (!emailData.success) {
    console.error('Failed to send email:', emailData.error);
  } else {
    console.log('Email sent successfully!');
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-32 max-w-3xl">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:border-cyan-400 animate-fadeIn">
        <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          <CardTitle className="text-2xl sm:text-3xl font-bold">
            Booking Confirmed!
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-gray-700">
            Thank you for your payment. Your booking details are as follows:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <InfoItem label="User Name" value={user.name} />
            <InfoItem label="Email" value={user.email} />
            <InfoItem label="Phone" value={user.whatsappNumber} />
            <InfoItem label="Course" value={course.name} />
            <InfoItem label="Slot" value={slot.slotName} />
            <InfoItem
              label="Transaction ID"
              value={transaction.transactionId}
            />
            <InfoItem label="Payment Status" value={transaction.status} />
            <InfoItem label="Amount Paid" value={`₹${transaction.amount}`} />
          </div>
          <div className="mt-6 sm:mt-8">
            <DownloadButton
              transaction={transaction}
              user={user}
              course={course}
              slot={slot}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs sm:text-sm font-medium text-gray-500">
        {label}
      </span>
      <span className="text-base sm:text-lg font-semibold text-gray-900">
        {value}
      </span>
    </div>
  );
}
