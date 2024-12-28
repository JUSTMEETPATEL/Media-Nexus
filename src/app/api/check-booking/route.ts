import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { transactionId } = await req.json(); // Parse the request body to get transactionId

  try {
    // Use `findFirst` to query by `transactionId` instead of `findUnique`
    const transaction = await prisma.transaction.findFirst({
      where: { transactionId: transactionId }, // Use transactionId instead of id
      include: {
        enquiry: {
          include: {
            course: true,
            slot: true,
          },
        },
      },
    });

    // If no transaction is found, return 404
    if (!transaction) {
      return NextResponse.json(
        { message: 'Transaction not found' },
        { status: 404 }
      );
    }

    // Return the transaction details
    return NextResponse.json({
      message: 'Booking confirmed',
      transaction,
      user: transaction.enquiry,
      course: transaction.enquiry.course,
      slot: transaction.enquiry.slot,
    });
  } catch (error) {
    console.error('Error fetching booking details:', error);
    return NextResponse.json(
      { message: 'Failed to fetch booking details' },
      { status: 500 }
    );
  }
}
