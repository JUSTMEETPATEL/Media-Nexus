import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { courseId, slotId } = await req.json();

  try {
    const assignment = await prisma.assignment.findMany({
      where: {
        courseId: parseInt(courseId),
        slotId: parseInt(slotId),
      },
      select: {
        title: true,
        description: true,
        deadline: true,
        assignedBy: true,
      },
    });

    if (!assignment) {
      return NextResponse.json(
        { message: 'Assignment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Assignment fetched successfully',
      assignment,
    });
  } catch (error) {
    console.error('Error fetching assignment:', error);
    return NextResponse.json(
      { message: 'Failed to fetch assignment' },
      { status: 500 }
    );
  }
}
