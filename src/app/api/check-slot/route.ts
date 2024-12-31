import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { courseId, slotId } = await req.json();

    const existingEnquiriesCount = await prisma.enquiry.count({
      where: {
        courseId,
        slotId,
      },
    });

    if (existingEnquiriesCount < 30) {
      return NextResponse.json({ isAvailable: true });
    }

    return NextResponse.json({ isAvailable: false });
  } catch (error) {
    console.error('Error checking slot availability:', error);
    return NextResponse.json({
      isAvailable: false,
      error: 'Internal Server Error',
    });
  }
}
