import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID!,
  key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    // Validate amount (ensure it's a positive number)
    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount provided' },
        { status: 400 }
      );
    }

    // Create Razorpay Order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert amount to paise
      currency: 'INR',
      receipt: 'receipt#' + Math.floor(Math.random() * 1000), // Random receipt number
      payment_capture: true, // Automatic payment capture after success
    });

    // Return the orderId as a response
    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);

    // Type casting the error object to `Error` type
    const errorMessage = (error as Error).message;

    // Return error response in case of failure
    return NextResponse.json(
      { error: 'Failed to create Razorpay order', details: errorMessage },
      { status: 500 }
    );
  }
}
