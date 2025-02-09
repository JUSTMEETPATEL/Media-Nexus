import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authClient } from '@/lib/auth-client';

export async function POST(req: Request) {
  const { email, name, whatsappNumber, courseId, slotId } = await req.json();

  console.log('Received data:', {email, name, whatsappNumber, courseId, slotId});

  const { error } = await authClient.signIn.magicLink({
    email,
    callbackURL: '/dashboard', //redirect after successful login (optional)
  });
  if (error) {
    console.error('Error sending magic link:', error);
    return NextResponse.json(
      { message: 'Error sending magic link' },
      { status: 500 }
    );
  }
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
