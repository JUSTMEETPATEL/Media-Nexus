import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = await req.json();

    // Ensure the Razorpay secret is available
    const razorpaySecret = process.env.RAZORPAY_SECRET; // Update to use RAZORPAY_SECRET
    if (!razorpaySecret) {
      console.error("RAZORPAY_SECRET is not set in the environment variables.");
      return NextResponse.json(
        { success: false, message: "Internal Server Error: Razorpay secret not set." },
        { status: 500 }
      );
    }

    // Generate the expected signature using your Razorpay key secret
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', razorpaySecret)
      .update(body)
      .digest('hex');

    if (razorpay_signature === expectedSignature) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: 'Payment verification failed' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
