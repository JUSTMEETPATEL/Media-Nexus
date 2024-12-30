import { authClient } from "@/lib/auth-client";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { 
    userId, 
    transactionId, 
    amount, 
    status, 
    courseId, 
    slotId, 
    name, 
    whatsappNumber, 
    email 
    } = await req.json();
  
    console.log("Received data:", {
    userId, transactionId, amount, status, courseId, slotId, name, whatsappNumber, email
    });
  
    if (!userId || !transactionId || !amount || !status || !courseId || !slotId || !name || !whatsappNumber || !email) {
    console.error("Missing required fields");
    return NextResponse.json({ message: 'Missing required data' }, { status: 400 });
    }
  
    let enquiry = await prisma.enquiry.findFirst({
    where: { email, courseId, slotId },
    });
  
    if (!enquiry) {
    enquiry = await prisma.enquiry.create({
      data: {
      email,
      name,
      whatsappNumber,
      courseId,
      slotId,
      },
    });
    console.log("New Enquiry created:", enquiry);
    } else {
    console.log("Enquiry found:", enquiry);
    }
  
    const transaction = await prisma.transaction.create({
    data: {
      enquiryId: enquiry.id,
      amount,
      status,
      transactionId,
    },
    });
  
    console.log("Transaction created:", transaction);
  
    await prisma.enquiry.update({
    where: { id: enquiry.id },
    data: { paymentVerified: true },
    });

    const {error } = await authClient.signIn.magicLink({
      email,
      callbackURL: "/dashboard" //redirect after successful login (optional)
  });
  if (error) {
      console.error("Error sending magic link:", error);
      return NextResponse.json({ message: 'Error sending magic link' }, { status: 500 });
  }
  
    return NextResponse.json({ message: 'Payment details updated successfully', transaction });
  } catch (error) {
    if (error instanceof Error) {
    console.error('Error updating payment details:', error.message);
    return NextResponse.json({ message: `Error: ${error.message}` }, { status: 500 });
    }
  
    console.error('Error updating payment details:', error);
    return NextResponse.json({ message: 'Failed to update payment details' }, { status: 500 });
  }
}
