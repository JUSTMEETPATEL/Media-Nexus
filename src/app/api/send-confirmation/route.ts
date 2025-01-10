import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use Gmail or any other supported email service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, whatsappNumber, courseId, slotId, preferredDateTime } = body;

    // Format the datetime
    const formattedDateTime = new Date(preferredDateTime).toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // Create email content
    const mailOptions = {
      from: '"Media Nexus" <medianexus@srmorg.com>',
      to: email,
      subject: 'Confirmation of Your Course Registration',
      html: `
        <h1>Thank you for registering, ${name}!</h1>
        <p>Our team will contact you at your preferred time. Here are the details you submitted:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>WhatsApp Number:</strong> ${whatsappNumber}</li>
          <li><strong>Course:</strong> ${getCourseNameById(courseId)}</li>
          <li><strong>Preferred Slot:</strong> ${getSlotNameById(slotId)}</li>
          <li><strong>Preferred Date and Time:</strong> ${formattedDateTime}</li>
        </ul>
        <p>If you need to make any changes, please contact our support team.</p>
        <p>We look forward to helping you on your learning journey!</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Confirmation email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return NextResponse.json(
      { error: 'Failed to send confirmation email' },
      { status: 500 }
    );
  }
}

function getCourseNameById(id: string): string {
  const courses: { [key: string]: string } = {
    '1': '3D Animation',
    '2': 'Short Film Making',
    '3': 'Digital Photography',
    '4': 'Editing Techniques',
    '5': 'Social Media Design',
  };
  return courses[id] || 'Unknown Course';
}

function getSlotNameById(id: string): string {
  const slots: { [key: string]: string } = {
    '1': 'Morning Slot',
    '2': 'Evening Slot',
  };
  return slots[id] || 'Unknown Slot';
}

