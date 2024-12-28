import { NextResponse } from "next/server";
import { generateBookingPDF } from "@/utils/pdf"; // Path to your PDF utility
import { sendBookingEmail } from "@/utils/email"; // Path to your email utility

export async function POST(req: Request) {
  try {
    const { name, email, courseName, slotName, amount, bookingDate } = await req.json();

    // Validate input
    if (!name || !email || !courseName || !slotName || !amount || !bookingDate) {
      return NextResponse.json({ success: false, error: "Missing required fields" });
    }

    // Generate the PDF
    const pdfBytes = await generateBookingPDF({
      name,
      email,
      courseName,
      slotName,
      amount,
      bookingDate,
    });

    // Send the email
    await sendBookingEmail(email, pdfBytes);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
    } else {
      console.error("Error sending email:", error);
    }
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
