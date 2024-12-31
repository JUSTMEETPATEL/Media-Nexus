/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import slotSchema from '@/lib/slotSchema';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import Script from 'next/script';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

// Helper functions remain the same
const checkSlotAvailability = async (courseId: number, slotId: number) => {
  const response = await fetch('/api/check-slot', {
    method: 'POST',
    body: JSON.stringify({ courseId, slotId }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  return data.isAvailable;
};

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
      name: '',
      whatsappNumber: '',
      email: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [slotError, setSlotError] = useState<string | null>(null);

  // onSubmit handler remains the same
  const onSubmit = async (data: z.infer<typeof slotSchema>) => {
    setIsLoading(true);
    setSlotError(null);

    try {
      //check-user API call remains the same
      const response = await fetch('/api/check-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      const fetchUserData = await response.json();
      console.log(fetchUserData);
      if (fetchUserData.exists) {
        toast({
          title: 'User already exists',
          description:
            'User already exists with this email. Please login to continue.',
        });
        window.location.href = '/sign-in';
        return;
      }

      const isSlotAvailable = await checkSlotAvailability(
        data.courseId,
        data.slotId
      );

      if (!isSlotAvailable) {
        setSlotError('This slot is already booked. Please choose another one.');
        setIsLoading(false);
        return;
      }

      const amount = 100; //Specify the amount for the course
      const orderId = await createRazorpayOrder(amount);

      if (orderId) {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
          amount: amount * 100,
          currency: 'INR',
          order_id: orderId,
          name: 'Media Nexus',
          description: 'Payment for Enquiry',
          handler: async function (response: any) {
            const {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            } = response;

            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              body: JSON.stringify({
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
              }),
              headers: { 'Content-Type': 'application/json' },
            });

            const result = await verifyResponse.json();
            if (result.success) {
              const dbUpdateResponse = await fetch('/api/db-update', {
                method: 'POST',
                body: JSON.stringify({
                  userId: data.email,
                  transactionId: razorpay_payment_id,
                  amount,
                  status: 'completed',
                  courseId: data.courseId,
                  slotId: data.slotId,
                  name: data.name,
                  whatsappNumber: data.whatsappNumber,
                  email: data.email,
                }),
                headers: { 'Content-Type': 'application/json' },
              });

              const dbUpdateResult = await dbUpdateResponse.json();
              if (dbUpdateResult.success) {
                console.log('Payment verified and database updated');
                //WIP: Migrate the email sending logic to the API
              }
              //WIP: Get Pass from the api generated randomly

              redirect(`/booking/${razorpay_payment_id}`);
            }
          },
          prefill: {
            name: data.name,
            email: data.email,
            contact: data.whatsappNumber,
          },
          notes: {
            address: 'Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089',
          },
        };

        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSlotError(
        'There was an error checking the slot availability or creating the order. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-12 md:pt-24 p-4 md:p-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-28 px-4 md:px-8">
          {/* Left Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 mt-12 col-span-1 md:col-span-1"
          >
            <h1 className="text-5xl font-bold">
              ENQUIRE{' '}
              <span className="text-cyan-400 inline-block hover:scale-105 transition-transform">
                NOW!!!
              </span>
            </h1>
            <p className="text-gray-600">
              Enquire now for more information on our programs, admissions, and
              opportunities to advance your career.
            </p>
          </motion.div>

          {/* Middle Section - Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative group col-span-1 md:col-span-1"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <Card className="relative bg-white p-8 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:-translate-y-1 w-full md:min-w-[400px]">
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="NAME"
                              {...field}
                              className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                                focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                                hover:border-cyan-300 transform hover:-translate-y-0.5
                                bg-gray-50 hover:bg-white"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="whatsappNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Whatapps No."
                              {...field}
                              className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                                focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                                hover:border-cyan-300 transform hover:-translate-y-0.5
                                bg-gray-50 hover:bg-white"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="E Mail.ID"
                              {...field}
                              className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                                focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                                hover:border-cyan-300 transform hover:-translate-y-0.5
                                bg-gray-50 hover:bg-white"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="courseId"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value?.toString()}
                            >
                              <SelectTrigger
                                className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                                focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                                hover:border-cyan-300 transform hover:-translate-y-0.5
                                bg-gray-50 hover:bg-white"
                              >
                                <SelectValue placeholder="Course Preferred" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">3D Animation</SelectItem>
                                <SelectItem value="2">
                                  Short Film Making
                                </SelectItem>
                                <SelectItem value="3">
                                  Digital Photography
                                </SelectItem>
                                <SelectItem value="4">
                                  Editing Techniques
                                </SelectItem>
                                <SelectItem value="5">
                                  Social Media Design
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="slotId"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value?.toString()}
                            >
                              <SelectTrigger
                                className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                                focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                                hover:border-cyan-300 transform hover:-translate-y-0.5
                                bg-gray-50 hover:bg-white"
                              >
                                <SelectValue placeholder="Slot Preferred" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">Morning Slot</SelectItem>
                                <SelectItem value="2">Evening Slot</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {slotError && (
                      <div className="text-red-500 text-sm">{slotError}</div>
                    )}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-cyan-400 hover:bg-cyan-500 text-white p-6 rounded-lg
                        transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                        active:translate-y-0 active:shadow-md
                        disabled:opacity-50 disabled:cursor-not-allowed
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400 before:to-cyan-300
                        before:opacity-0 hover:before:opacity-100 before:transition-opacity relative overflow-hidden"
                    >
                      <span className="relative">
                        {isLoading ? 'Submitting...' : 'Submit'}
                      </span>
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative min-w-[400px] h-[450px] hidden md:block col-span-1 md:col-span-1"
          >
            <Image
              src="/enquire.png"
              alt="Customer Service Representative"
              fill
              className="object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02] shadow-xl"
              style={{ objectPosition: 'center center' }}
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
