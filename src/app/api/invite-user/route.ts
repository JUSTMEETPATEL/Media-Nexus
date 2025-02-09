import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { email, name, whatsappNumber, courseId, slotId } = await req.json();

  if (!email || !name || !whatsappNumber || !courseId || !slotId) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  try {
    const enquiry = await prisma.enquiry.create({
      data: {
        email,
        name,
        whatsappNumber,
        courseId: parseInt(courseId),
        slotId: parseInt(slotId),
      },
    });

    console.log('New Enquiry created:', enquiry);

    return NextResponse.json({
      message: 'Enquiry created successfully',
      enquiry,
    });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return NextResponse.json(
      { message: 'Failed to create enquiry' },
      { status: 500 }
    );
  }
}

