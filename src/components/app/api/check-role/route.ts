import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust the path as needed

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ role: user.role }, { status: 200 });
  } catch (error) {
    console.error('Error in API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
