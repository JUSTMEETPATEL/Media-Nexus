import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// Define the GET API route
export async function GET(request: Request) {
  try {
    // Extract session token from Authorization header
    const authHeader = request.headers.get('Authorization');
    const sessionToken = authHeader?.replace('Bearer ', '');

    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Session token is required' },
        { status: 401 }
      );
    }

    // Find session and associated user
    const session = await prisma.session.findUnique({
      where: { token: sessionToken },
      include: { user: true },
    });

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Invalid session or user not found' },
        { status: 401 }
      );
    }

    const userEmail = session.user.email;

    // Fetch enquiries for the user
    const enquiries = await prisma.enquiry.findMany({
      where: { email: userEmail },
      select: {
        courseId: true,
        slotId: true,
      },
    });

    // Return the response
    return NextResponse.json({ enquiries }, { status: 200 });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
