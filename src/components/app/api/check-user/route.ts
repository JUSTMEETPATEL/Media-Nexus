import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust the import path based on your project structure

// Define the request body type
interface CheckUserRequest {
  email: string;
}

interface CheckUserResponse {
  exists: boolean;
  message: string;
}

// POST /api/check-user
export async function POST(req: Request): Promise<Response> {
  try {
    const body: CheckUserRequest = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    // Check if the user exists in the Users table
    const user = await prisma.user.findUnique({
      where: { email },
    });

    const response: CheckUserResponse = user
      ? { exists: true, message: 'User already exists.' }
      : { exists: false, message: 'User does not exist.' };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error checking user:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
