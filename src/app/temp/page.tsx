"use client";

import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import React from 'react';

const Page = () => {
    const handleSubmit = async (formData: FormData) => { 
        const email = formData.get('email') as string;
        const name = formData.get('name') as string;
        const whatsappNumber = formData.get('whatsapp') as string;
        const slotId = 1;
        const courseId = 1;
      
        if (!email || !name || !whatsappNumber || !courseId || !slotId) {
          toast({ title: 'Please fill in all fields'});
          return;
        }
      
        try {
          const response = await fetch('/api/invite-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name, whatsappNumber, courseId, slotId }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            toast({ title: 'Enquiry submitted successfully' });
          } else {
            toast({ title: data.message || 'Failed to submit enquiry'});
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to submit enquiry';
          toast({ title: errorMessage });
        }
      };
      
  return (
    <div className="pt-7">
      <form action={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="whatsapp" className="block text-gray-700 mb-2">
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter WhatsApp number"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Page;
