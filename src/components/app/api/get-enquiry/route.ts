import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { slotId, courseId } = await req.json();

  try {
    const enquiry = await prisma.enquiry.findMany({
      where: {
        courseId: parseInt(courseId),
        slotId: parseInt(slotId),
      },
    });

    return NextResponse.json({
      message: 'Enquiry fetched successfully',
      enquiry,
    });
  } catch (error) {
    console.error('Error fetching enquiry:', error);
    return NextResponse.json(
      { message: 'Failed to fetch enquiry' },
      { status: 500 }
    );
  }
}
