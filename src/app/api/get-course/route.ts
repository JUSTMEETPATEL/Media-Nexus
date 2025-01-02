import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      console.log('Email missing in request');
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const enquiry = await prisma.enquiry.findFirst({
      where: { email },
      select: {
        courseId: true,
        slotId: true,
      },
    });

    if (!enquiry) {
      console.log('No enquiry found for email:', email);
      return NextResponse.json(
        { error: 'No enquiry found for this email' },
        { status: 404 }
      );
    }
    console.log('Sending successful response:', enquiry);
    return NextResponse.json(enquiry, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Detailed error in API:', {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error('Unknown error in API:', error);
    }
    return NextResponse.json(
      { error: 'Internal Server Error', details: (error as Error).message },
      { status: 500 }
    );
  }
}
