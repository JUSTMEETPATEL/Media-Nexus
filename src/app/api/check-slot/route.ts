import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust import path if needed

export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const { courseId, slotId } = await req.json();

    // Count the number of existing enquiries for the given courseId and slotId
    const existingEnquiriesCount = await prisma.enquiry.count({
      where: {
        courseId,
        slotId,
      },
    });

    // If the number of participants is less than 30, the slot is available
    if (existingEnquiriesCount < 30) {
      return NextResponse.json({ isAvailable: true });
    }

    // If the number of participants is 30 or more, the slot is full
    return NextResponse.json({ isAvailable: false });
  } catch (error) {
    console.error("Error checking slot availability:", error);
    return NextResponse.json({ isAvailable: false, error: "Internal Server Error" });
  }
}
