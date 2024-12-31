import nodemailer from 'nodemailer';

export async function sendBookingEmail(
  recipientEmail: string,
  pdfBytes: Uint8Array
) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use Gmail or any other supported email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const pdfBuffer = Buffer.from(pdfBytes);

  const mailOptions = {
    from: '"Media Nexus" <medianexus@srmorg.com>',
    to: recipientEmail,
    subject: 'Your Booking Receipt',
    text: 'Please find attached your booking receipt.',
    attachments: [
      {
        filename: 'BookingReceipt.pdf',
        content: pdfBuffer,
        contentType: 'application/pdf',
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}
