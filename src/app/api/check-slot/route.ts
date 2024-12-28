import { NextResponse } from "next/server";
import  prisma  from "@/lib/prisma"; // Adjust import path if needed

export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const { courseId, slotId } = await req.json();

    // Query the database to check if any enquiry exists with the given courseId and slotId
    const existingEnquiry = await prisma.enquiry.findFirst({
      where: {
        courseId,
        slotId,
      },
    });

    // If an enquiry is found, it means the slot is unavailable
    if (existingEnquiry) {
      return NextResponse.json({ isAvailable: false });
    }

    // If no enquiry is found, it means the slot is available
    return NextResponse.json({ isAvailable: true });
  } catch (error) {
    console.error("Error checking slot availability:", error);
    return NextResponse.json({ isAvailable: false, error: "Internal Server Error" });
  }
}
