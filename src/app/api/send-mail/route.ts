import { NextResponse } from "next/server";
import { generateBookingPDF } from "@/utils/pdf";
import { sendBookingEmail } from "@/utils/email";

export async function POST(req: Request) {
    try {
        const { name, email, courseName, slotName, amount, bookingDate } = await req.json();

        if (!name || !email || !courseName || !slotName || !amount || !bookingDate) {
            return NextResponse.json({ success: false, error: "Missing required fields" });
        }

        const pdfBytes = await generateBookingPDF({
            name,
            email,
            courseName,
            slotName,
            amount,
            bookingDate,
        });

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
