import { PDFDocument, StandardFonts } from 'pdf-lib';

export async function generateBookingPDF(details: {
  name: string;
  email: string;
  courseName: string;
  slotName: string;
  amount: number;
  bookingDate: string;
}) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([500, 700]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const amountText = `Amount Paid: INR ${details.amount.toFixed(2)}`; 

  page.drawText(`Booking Details`, { x: 50, y: 650, size: 20, font });
  page.drawText(`Name: ${details.name}`, { x: 50, y: 600, size: 12, font });
  page.drawText(`Email: ${details.email}`, { x: 50, y: 580, size: 12, font });
  page.drawText(`Course: ${details.courseName}`, { x: 50, y: 560, size: 12, font });
  page.drawText(`Slot: ${details.slotName}`, { x: 50, y: 540, size: 12, font });
  page.drawText(`Booking Date: ${details.bookingDate}`, { x: 50, y: 520, size: 12, font });
  page.drawText(amountText, { x: 50, y: 500, size: 12, font });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
