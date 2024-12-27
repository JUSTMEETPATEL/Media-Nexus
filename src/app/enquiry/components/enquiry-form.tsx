// app/components/EnquiryForm.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import slotSchema from '@/lib/slotSchema';

interface Slot {
  id: string;
  remaining: number;
}

interface Course {
  id: number;
  name: string;
  slots: Slot[];
}

interface EnquiryFormProps {
  courses: Course[];
}

export default function EnquiryForm({ courses }: EnquiryFormProps) {
  const form = useForm<z.infer<typeof slotSchema>>({
    resolver: zodResolver(slotSchema),
  });

  async function onSubmit(values: z.infer<typeof slotSchema>) {
    // Create the payload to send in the POST request
    const payload = {
      name: values.name,
      whatsappNumber: values.whatsappNumber,
      email: values.email,
      courseId: values.courseId,
      slotId: values.slotId,
    };
  
    // Make the POST request to /api/enquiry
    const response = await fetch('/api/enquiry', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log('Enquiry submitted successfully');
    } else {
      console.error('Failed to submit enquiry');
    }
  }
  

  return (
    <Card className="relative overflow-hidden border border-gray-100 bg-white shadow-xl">
      <CardContent className="relative p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
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
            
            {/* WhatsApp Number Field */}
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

            {/* Email Field */}
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

            {/* Course Field */}
            <FormField
              control={form.control}
              name="courseId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Preferred</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value?.toString()}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id.toString()}>
                            {course.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Slot Field */}
            <FormField
              control={form.control}
              name="slotId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slot Preferred</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value.toString()}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses
                          .find((course) => course.id === parseInt(form.watch('courseId')?.toString() || '0'))
                          ?.slots.map((slot) => (
                            <SelectItem key={slot.id} value={slot.id}>
                              Slot {slot.id} (Remaining: {slot.remaining})
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit">Submit Enquiry</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
