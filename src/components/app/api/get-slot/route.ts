import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { courseId, slotId } = await req.json();

    const existingEnquiriesCount = await prisma.enquiry.count({
      where: {
        courseId: parseInt(courseId),
        slotId: parseInt(slotId),
      },
    });

    return NextResponse.json(
      {
        message: 'Enquiry fetched successfully',
        existingEnquiriesCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error checking slot availability:', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch enquiry',
      },
      { status: 500 }
    );
  }
}
