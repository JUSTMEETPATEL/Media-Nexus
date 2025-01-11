// route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    // First check if request body exists
    if (!req.body) {
      return NextResponse.json(
        { message: 'Request body is missing', success: false },
        { status: 400 }
      );
    }

    const body = await req.json();

    // Validate required fields
    if (
      !body.email ||
      !body.title ||
      !body.deadline ||
      !body.slotId ||
      !body.courseId
    ) {
      return NextResponse.json(
        { message: 'Missing required fields', success: false },
        { status: 400 }
      );
    }

    const { email, title, description, deadline, slotId, courseId } = body;

    // Validate data types
    if (
      !Number.isInteger(Number(courseId)) ||
      !Number.isInteger(Number(slotId))
    ) {
      return NextResponse.json(
        { message: 'Invalid courseId or slotId format', success: false },
        { status: 400 }
      );
    }

    // Create assignment with proper date handling
    const assignment = await prisma.assignment.create({
      data: {
        assignedBy: email,
        title,
        description: description || '', // Handle optional field
        deadline: new Date(deadline), // Ensure proper date conversion
        courseId: Number(courseId),
        slotId: Number(slotId),
      },
    });

    return NextResponse.json({
      message: 'Assignment created successfully',
      success: true,
      data: assignment,
    });
  } catch (error) {
    console.error('Error creating assignment:', error);
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : 'Failed to create assignment',
        success: false,
      },
      { status: 500 }
    );
  }
}
