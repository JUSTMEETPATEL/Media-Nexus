/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Props {
  transaction: any;
  user: any;
  course: any;
  slot: any;
}

const DownloadButton = ({ transaction, user, course, slot }: Props) => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add the logo
    doc.addImage('/srm-logo.png', 'PNG', 15, 10, 30, 30);

    // Add the text "MEDIA NEXUS"
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0); // Black color for "MEDIA"
    doc.text('MEDIA', 155, 25);
    doc.setTextColor(0, 255, 255); // Cyan color for "NEXUS"
    doc.text('NEXUS', 155, 35);

    doc.setFontSize(18);
    doc.setTextColor(0, 0, 255); // Blue color for the title
    doc.text('Booking Confirmed!', 105, 60, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text('Thank you for your payment. Your booking details are as follows:', 105, 70, { align: 'center' });

    // Create a table for the booking details
    autoTable(doc, {
      startY: 80,
      head: [['Field', 'Details']],
      body: [
        ['User Name', user.name],
        ['Email', user.email],
        ['Phone', user.whatsappNumber],
        ['Course', course.name],
        ['Slot', slot.slotName],
        ['Transaction ID', transaction.transactionId],
        ['Payment Status', transaction.status],
        ['Amount Paid', transaction.amount],
      ],
      theme: 'striped',
      headStyles: { fillColor: [0, 0, 255] },
    });

    // Save the PDF
    doc.save('booking_details.pdf');
  };

  return (
    <button onClick={downloadPDF} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      Download Your Details
    </button>
  );
};

export default DownloadButton;

