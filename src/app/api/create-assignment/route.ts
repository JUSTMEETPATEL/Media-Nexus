import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { email, title,description,deadline,slotId,courseId } = await req.json();

  try {
    const assignment = await prisma.assignment.create({
        data: {
            assignedBy: email,
            title,
            description,
            deadline,
            courseId: parseInt(courseId),
            slotId: parseInt(slotId),
        }
        });


    return NextResponse.json({
      message: 'Assignment created successfully',
      assignment
    });
  } catch (error) {
    console.error('Error creating assignment:', error);
    return NextResponse.json(
      { message: 'Failed to create assignment' },
      { status: 500 }
    );
  }
}