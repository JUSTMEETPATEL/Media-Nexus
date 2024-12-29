import { rgb } from 'pdf-lib';
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

  // Add the logo (optional)
  // Use your logo image in base64 or embed it similarly if required
  const logoUrl = '/srm-logo.png';
  const logoBytes = await fetch(logoUrl).then(res => res.arrayBuffer());
  const logoImage = await pdfDoc.embedPng(logoBytes);
  page.drawImage(logoImage, { x: 15, y: 650, width: 30, height: 30 });

  // Add the title "Booking Confirmed!" with styling
  page.drawText('Booking Confirmed!', {
    x: 105,
    y: 650,
    size: 18,
    font,
    color: rgb(0, 0, 1), // Blue color for the title
  });

  // Add a subtitle thanking the user for the payment
  page.drawText('Thank you for your payment. Your booking details are as follows:', {
    x: 105,
    y: 630,
    size: 12,
    font,
    color: rgb(0, 0, 0), // Black color for the subtitle
  });

  // Create the table-like structure for booking details
  const detailsStartY = 580;
  const fieldWidth = 150;
  const rowHeight = 20;

  const drawTableRow = (y: number, field: string, value: string) => {
    page.drawText(field, { x: 50, y, size: 12, font });
    page.drawText(value, { x: 50 + fieldWidth, y, size: 12, font });
  };

  drawTableRow(detailsStartY, 'User Name', details.name);
  drawTableRow(detailsStartY - rowHeight, 'Email', details.email);
  drawTableRow(detailsStartY - rowHeight * 2, 'Course', details.courseName);
  drawTableRow(detailsStartY - rowHeight * 3, 'Slot', details.slotName);
  drawTableRow(detailsStartY - rowHeight * 4, 'Amount Paid', `INR ${details.amount.toFixed(2)}`);
  drawTableRow(detailsStartY - rowHeight * 5, 'Booking Date', details.bookingDate);

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

