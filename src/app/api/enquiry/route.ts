import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body) {
      return NextResponse.json(
        { error: 'Invalid request body.' },
        { status: 400 }
      );
    }

    const { name, whatsappNumber, email, courseId, slotId } = body;

    const newEnquiry = await prisma.enquiry.create({
      data: {
        name,
        whatsappNumber,
        email,
        courseId,
        slotId,
      },
    });

    return NextResponse.json(
      { message: 'Enquiry submitted successfully.', data: newEnquiry },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return NextResponse.json(
      { error: 'Failed to submit enquiry.' },
      { status: 500 }
    );
  }
}
