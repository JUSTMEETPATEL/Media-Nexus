'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

type Enquiry = {
  courseId: number;
  slotId: number;
};

const Page = () => {
  const session = useSession();
  const router = useRouter();
  // const [role, setRole] = useState<string | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!session.data) return;

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
        // setRole(role);

        if (role === 'admin') {
          router.push('/admin');
        } else if (role === 'faculty') {
          router.push('/faculty');
        } else if (role === 'user') {
          fetchEnquiries(); // Fetch user's enquiries
        }
      } catch (error) {
        console.error('Error fetching role:', error);
      }
    };

    const fetchEnquiries = async () => {
      try {
        // if (!session.data?.session.id) {
        //   setError('Session not found. Please log in.');
        //   return;
        // }

        const email = session.data?.user.email;

        const response = await fetch('/api/get-course', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error);
          return;
        }

        const data = await response.json();
        console.log(data);
        setEnquiries(data);
      } catch (err) {
        console.error('Error fetching enquiries:', err);
        setError('Failed to fetch enquiries.');
      }
    };

    checkUserRole();
  }, [session.data, router]);

  if (!session.data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl text-black font-bold">Unauthorized...</h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {session.data?.user.email}!
      </h1>
      <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-md">
        {error && <div className="text-red-500 mb-4">Error: {error}</div>}
        {!enquiries ? (
          <div>Loading...</div>
        ) : (
          <ul>
            
                <li>{enquiries.courseId}</li>
                <li>{enquiries.slotId}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Page;
