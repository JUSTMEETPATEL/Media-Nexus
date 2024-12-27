import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON request body
    const body = await req.json();

    if (!body) {
      // If the body is null or undefined, return an error response
      return NextResponse.json(
        { error: 'Invalid request body.' },
        { status: 400 }
      );
    }

    // Extract the relevant data
    const { name, whatsappNumber, email, courseId, slotId } = body;

    // Save the enquiry data to the database using Prisma
    const newEnquiry = await prisma.enquiry.create({
      data: {
        name,
        whatsappNumber,
        email,
        courseId,
        slotId,
      },
    });

    // Assuming the submission is successful
    return NextResponse.json(
      { message: 'Enquiry submitted successfully.', data: newEnquiry },
      { status: 200 }
    );
  } catch (error) {
    // Log the error and return a failure response
    console.error('Error submitting enquiry:', error);
    return NextResponse.json(
      { error: 'Failed to submit enquiry.' },
      { status: 500 }
    );
  }
}
