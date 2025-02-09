'use client';

import React, { useState, useEffect } from 'react';
import AssignmentAccordion from './components/assignment-accordion';
import { Loader } from '@/components/ui/loader';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';

interface Assignment {
  // Define the structure of an assignment here
  // This is a placeholder, adjust according to your actual data structure
  id: string;
  title: string;
  description: string;
  deadline: string;
}

const Page = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const router = useRouter();
  const session = useSession();

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
        setIsLoading(false);
        return;
      }

      const { role } = await response.json();

      if (role === 'admin') {
        router.push('/admin');
      } else if (role === 'faculty') {
        router.push('/faculty');
      } else if (role === 'user') {
        return true;
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching role:', error);
      setIsLoading(false);
    }
  };

  const isUser = checkUserRole();

  if(!isUser){
    router.push('/sign-in');
  }

  useEffect(() => {
    const fetchAssignments = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/get-assignment`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              courseId: params.courseId,
              slotId: params.slotId,
            }),
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setAssignments(data.assignment);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssignments();
  }, [params.courseId, params.slotId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-32 max-w-3xl text-center">
        <h1 className="text-4xl text-red-500 mb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-32 max-w-3xl">
      <h1 className="text-6xl text-center mb-24">
        Your<span className="text-cyan-400"> Assignments</span>
      </h1>
      <AssignmentAccordion assignment={assignments} />
    </div>
  );
};

export default Page;
