'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const programs = [
  { id: '1', title: '3D ANIMATION' },
  { id: '2', title: 'SHORT FILM MAKING' },
  { id: '3', title: 'DIGITAL PHOTOGRAPHY' },
  { id: '4', title: 'EDITING TECHNIQUES' },
  { id: '5', title: 'SOCIAL MEDIA DESIGN' },
];

export default function AssignmentPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = programs.find((p) => p.id === courseId);

  const [slot, setSlot] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ slot, title, description, deadline });
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {course.title}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Create a new assignment
          </p>
        </div>
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
          <CardHeader>
            <CardTitle className="text-center">Assignment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="slot" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Choose Slot
                </label>
                <Select onValueChange={setSlot}>
                  <SelectTrigger className="w-full mt-1 transition-all duration-300 hover:border-cyan-400 focus:border-cyan-400 focus:ring focus:ring-cyan-300 focus:ring-opacity-50">
                    <SelectValue placeholder="Select a slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Title of Task
                </label>
                <Input
                  id="title"
                  type="text"
                  required
                  className="mt-1 transition-all duration-300 hover:border-cyan-400 focus:border-cyan-400 focus:ring focus:ring-cyan-300 focus:ring-opacity-50"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Task Description
                </label>
                <Textarea
                  id="description"
                  required
                  className="mt-1 transition-all duration-300 hover:border-cyan-400 focus:border-cyan-400 focus:ring focus:ring-cyan-300 focus:ring-opacity-50"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Set Deadline
                </label>
                <Input
                  id="deadline"
                  type="datetime-local"
                  required
                  className="mt-1 transition-all duration-300 hover:border-cyan-400 focus:border-cyan-400 focus:ring focus:ring-cyan-300 focus:ring-opacity-50"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

