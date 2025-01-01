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
import { useParams } from 'next/navigation';
import { StudentChart } from './components/student-chart';
import { Loader2 } from 'lucide-react';

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
      </div>
    </div>
  );
};

export default Page;
