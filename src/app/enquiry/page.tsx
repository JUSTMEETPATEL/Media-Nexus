/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import slotSchema from "@/lib/slotSchema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Script from "next/script";
import { redirect } from "next/navigation";

// Function to check if the slot is available
const checkSlotAvailability = async (courseId: number, slotId: number) => {
  const response = await fetch('/api/check-slot', {
    method: 'POST',
    body: JSON.stringify({ courseId, slotId }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return data.isAvailable; // API returns { isAvailable: true/false }
};

// Function to create Razorpay order
const createRazorpayOrder = async (amount: number) => {
  const response = await fetch('/api/create-order', {
    method: 'POST',
    body: JSON.stringify({ amount }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return data.orderId;
};

export default function EnquiryForm() {
  const form = useForm<z.infer<typeof slotSchema>>({
    resolver: zodResolver(slotSchema),
    defaultValues: {
      name: "",
      whatsappNumber: "",
      email: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [slotError, setSlotError] = useState<string | null>(null);

  const onSubmit = async (data: z.infer<typeof slotSchema>) => {
    setIsLoading(true);
    setSlotError(null);

    try {
      // Check slot availability before submission
      const isSlotAvailable = await checkSlotAvailability(data.courseId, data.slotId);

      if (!isSlotAvailable) {
        setSlotError("This slot is already booked. Please choose another one.");
        setIsLoading(false);
        return; // Stop the form submission if slot is unavailable
      }

      // Step 1: Create Razorpay order
      const amount = 100; // Replace with actual amount from form or data
      const orderId = await createRazorpayOrder(amount);

      if (orderId) {
        // Step 2: Initialize Razorpay Checkout
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_ID, // Public key
          amount: amount * 100, // Amount in paise
          currency: "INR",
          order_id: orderId, // Order ID from backend
          name: "Your Company Name",
          description: "Payment for Enquiry",
          handler: async function (response: any) {
            // Step 3: Handle payment success
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

            // Step 4: Verify payment signature
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              body: JSON.stringify({
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
              }),
              headers: { "Content-Type": "application/json" },
            });

            const result = await verifyResponse.json();
            if (result.success) {
              // Payment success, now update the form data and transaction details
              const dbUpdateResponse = await fetch("/api/db-update", {
                method: "POST",
                body: JSON.stringify({
                  userId: data.email, // Make sure this is the correct field
                  transactionId: razorpay_payment_id, 
                  amount,
                  status: "completed", // Use the actual status
                  courseId: data.courseId,
                  slotId: data.slotId,
                  name: data.name,
                  whatsappNumber: data.whatsappNumber,
                  email: data.email,
                }),
                headers: { "Content-Type": "application/json" },
              });
              
              const dbUpdateResult = await dbUpdateResponse.json();
              if (dbUpdateResult.success) {
                console.log("Payment verified and database updated");
              } 
              
              redirect(`/booking/${razorpay_payment_id}`); // Redirect to booking page
            }
          },
          prefill: {
            name: data.name,
            email: data.email,
            contact: data.whatsappNumber,
          },
          notes: {
            address: "Your Company Address",
          },
        };

        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSlotError("There was an error checking the slot availability or creating the order. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Razorpay Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive" // Make sure it loads after the page is interactive
      />
      <Card className="relative overflow-hidden border border-gray-100 bg-white shadow-xl pt-24">
        <CardContent className="relative p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Form fields for Name, WhatsApp, Email, Course, and Slot */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="whatsappNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp No.</FormLabel>
                    <FormControl>
                      <Input placeholder="9876543210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="xyz@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="courseId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Preferred</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value?.toString()}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">3D Animation</SelectItem>
                          <SelectItem value="2">Short Film Making</SelectItem>
                          <SelectItem value="3">Digital Photography</SelectItem>
                          <SelectItem value="4">Editing Techniques</SelectItem>
                          <SelectItem value="5">Social Media Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slotId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slot Preferred</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value?.toString()}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Morning Slot</SelectItem>
                          <SelectItem value="2">Evening Slot</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {slotError && <div className="text-red-500 text-sm">{slotError}</div>}
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit Enquiry"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
