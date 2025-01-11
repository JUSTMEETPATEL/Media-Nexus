import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID!,
  key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount provided' },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt: 'receipt#' + Math.floor(Math.random() * 1000),
      payment_capture: true,
    });

    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);

    const errorMessage = (error as Error).message;

    return NextResponse.json(
      { error: 'Failed to create Razorpay order', details: errorMessage },
      { status: 500 }
    );
  }
}
