/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useParams, useRouter } from 'next/navigation';
import { StudentChart } from './components/student-chart';
import { Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { authClient, useSession } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';

interface Enquiry {
  id: string;
  name: string;
  whatsappNumber: string;
  email: string;
  createdAt: string;
  paymentVerified: boolean;
}

interface Assignment {
  title: string;
  description: string;
  deadline: string;
  assignedBy: string;
}

interface ChartData {
  date: string;
  count: number;
}

const Page = () => {
  const params = useParams();
  const courseId = params.courseId as string;
  const [selectedSlot, setSelectedSlot] = useState('1');
  const [slots, setSlots] = useState(0);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const router = useRouter();

  const checkUserRole = async () => {
    try {
      const response = await fetch('/api/check-role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: session.data?.user.email }),
      });

      if (!response.ok) {
        console.error('Error:', response.status, response.statusText);

        return;
      }

      const { role } = await response.json();

      if (role === 'user') {
        router.push('/dashboard');
      } else if (role === 'faculty') {
        router.push('/faculty');
      } else if (role === 'admin') {
        return true;
      }
    } catch (error) {
      console.error('Error fetching role:', error);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch enrollment stats for chart
      const statsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/get-enrollment-stats`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseId,
            slotId: parseInt(selectedSlot),
          }),
        }
      );
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setChartData(statsData.data);
      }

      // Fetch slots
      const slotResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/get-slot`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseId,
            slotId: parseInt(selectedSlot),
          }),
        }
      );
      if (slotResponse.ok) {
        const slotData = await slotResponse.json();
        setSlots(slotData.existingEnquiriesCount);
      }

      // Fetch enquiries
      const enquiryResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/get-enquiry`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseId,
            slotId: parseInt(selectedSlot),
          }),
        }
      );
      if (enquiryResponse.ok) {
        const enquiryData = await enquiryResponse.json();
        setEnquiries(enquiryData.enquiry);
      }

      // Fetch assignments
      const assignmentResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/get-assignment`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseId,
            slotId: parseInt(selectedSlot),
          }),
        }
      );
      if (assignmentResponse.ok) {
        const assignmentData = await assignmentResponse.json();
        setAssignments(assignmentData.assignment);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (formData: FormData) => { 
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const whatsappNumber = formData.get('whatsapp') as string;
    const slotId = Number(selectedSlot);
  
    if (!email || !name || !whatsappNumber || !courseId || !slotId) {
      toast({ title: 'Please fill in all fields'});
      return;
    }
  
    try {
      const response = await fetch('/api/enquiry', {
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
      toast({ title: 'Something went wrong' });
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [courseId, selectedSlot]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!session.data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl text-black font-bold">Unauthorized...</h1>
        {/* <h5>You will be redirected in 5sec ...</h5> */}
      </div>
    );
  }

  const isFaculty = checkUserRole();

  if (!isFaculty) {
    router.push('/');
  }

  return (
    <div className="min-h-screen bg-cyan-50 p-8 pt-44">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Course Management</span>
              <div className="w-48">
                <Select value={selectedSlot} onValueChange={setSelectedSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Morning Slot</SelectItem>
                    <SelectItem value="2">Evening Slot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              Current Bookings: {slots}
            </div>
          </CardContent>
        </Card>

        {/* Chart Section */}
        <StudentChart data={chartData} />

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Registered Students */}
          <Card>
            <CardHeader>
              <CardTitle>Registered Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {enquiries.map((enquiry) => (
                  <Card
                    key={enquiry.id}
                    className="p-4 transition-all duration-300 hover:shadow-md hover:bg-cyan-100"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{enquiry.name}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            enquiry.paymentVerified
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {enquiry.paymentVerified
                            ? 'Payment Verified'
                            : 'Pending Payment'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>Email: {enquiry.email}</p>
                        <p>WhatsApp: {enquiry.whatsappNumber}</p>
                        <p>
                          Joined:{' '}
                          {new Date(enquiry.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Task Details */}
          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((task) => (
                  <Card
                    key={task.title}
                    className="p-4 transition-all duration-300 hover:shadow-md hover:bg-cyan-100"
                  >
                    <div className="space-y-2">
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-gray-600">
                        {task.description}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">
                          Due: {new Date(task.deadline).toLocaleDateString()}
                        </span>
                        <span className="text-gray-500">
                          {new Date(task.deadline).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Assigned by: {task.assignedBy}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Add New Students */}

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
      </div>
    </div>
  );
};

export default Page;
