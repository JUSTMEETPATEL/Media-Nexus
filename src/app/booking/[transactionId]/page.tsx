import { notFound } from 'next/navigation';
import DownloadButton from './components/download-button';

interface Props {
  params: Promise<{ transactionId: string }>;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const transactionId = params.transactionId;
  console.log("Transaction Id: ", transactionId);

  const origin = process.env.NEXT_PUBLIC_API_ORIGIN || 'http://localhost:3000';
  console.log("Origin: ", origin);

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
    console.error("Failed to send email:", emailData.error);
  } else {
    console.log("Email sent successfully!");
  }

  return (
    <div className="pt-24">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your payment. Your booking details are as follows:</p>
      <ul>
        <li><strong>User Name:</strong> {user.name}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Phone:</strong> {user.whatsappNumber}</li>
        <li><strong>Course:</strong> {course.name}</li>
        <li><strong>Slot:</strong> {slot.slotName}</li>
        <li><strong>Transaction ID:</strong> {transaction.transactionId}</li>
        <li><strong>Payment Status:</strong> {transaction.status}</li>
        <li><strong>Amount Paid:</strong> {transaction.amount}</li>
      </ul>

      {/* Using the Client Component */}
      <DownloadButton transaction={transaction} user={user} course={course} slot={slot} />
    </div>
  );
}
