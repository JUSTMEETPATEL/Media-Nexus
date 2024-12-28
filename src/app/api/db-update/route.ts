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
  
      // Check if all required data is provided
      if (!userId || !transactionId || !amount || !status || !courseId || !slotId || !name || !whatsappNumber || !email) {
        console.error("Missing required fields");
        return NextResponse.json({ message: 'Missing required data' }, { status: 400 });
      }
  
      // Check if Enquiry exists based on email, courseId, and slotId
      let enquiry = await prisma.enquiry.findFirst({
        where: { email, courseId, slotId },
      });
  
      if (!enquiry) {
        // If Enquiry doesn't exist, create a new one
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
  
      // Create a new transaction
      const transaction = await prisma.transaction.create({
        data: {
          enquiryId: enquiry.id,
          amount,
          status,
          transactionId,
        },
      });
  
      console.log("Transaction created:", transaction);
  
      // Update the Enquiry to mark it as payment verified
      await prisma.enquiry.update({
        where: { id: enquiry.id },
        data: { paymentVerified: true },
      });
  
      return NextResponse.json({ message: 'Payment details updated successfully', transaction });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error updating payment details:', error.message); // Log only the message part
        return NextResponse.json({ message: `Error: ${error.message}` }, { status: 500 });
      }
  
      console.error('Error updating payment details:', error);
      return NextResponse.json({ message: 'Failed to update payment details' }, { status: 500 });
    }
  }
  