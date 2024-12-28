/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';  // This line makes this component a Client Component

import { jsPDF } from 'jspdf';

interface Props {
  transaction: any;
  user: any;
  course: any;
  slot: any;
}

const DownloadButton = ({ transaction, user, course, slot }: Props) => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Booking Confirmed!', 20, 20);
    doc.text('Thank you for your payment. Your booking details are as follows:', 20, 30);
    doc.setFontSize(12);
    doc.text(`User Name: ${user.name}`, 20, 40);
    doc.text(`Email: ${user.email}`, 20, 50);
    doc.text(`Phone: ${user.whatsappNumber}`, 20, 60);
    doc.text(`Course: ${course.name}`, 20, 70);
    doc.text(`Slot: ${slot.slotName}`, 20, 80);
    doc.text(`Transaction ID: ${transaction.transactionId}`, 20, 90);
    doc.text(`Payment Status: ${transaction.status}`, 20, 100);
    doc.text(`Amount Paid: ${transaction.amount}`, 20, 110);

    // Save the PDF
    doc.save('booking_details.pdf');
  };

  return (
    <button onClick={downloadPDF} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">
      Download Your Details
    </button>
  );
};

export default DownloadButton;
