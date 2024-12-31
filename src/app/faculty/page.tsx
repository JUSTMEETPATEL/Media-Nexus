import React, { useEffect, useState } from 'react';
import { useSession } from '@/lib/auth-client'; // Assuming useSession is correctly set up

type Enquiry = {
  courseId: number;
  slotId: number;
};

const FetchEnquiries = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Get session data, including the token
  const { data: session } = useSession();

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        // Ensure the session is available and contains the token
        if (!session || !session.session.id) {
          setError('Session not found. Please log in.');
          return;
        }

        const sessionToken = session.session.id; // Extract token from session

        const response = await fetch('/api/get-course', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error);
          return;
        }

        const data = await response.json();
        setEnquiries(data.enquiries);
      } catch (err) {
        console.error('Error fetching enquiries:', err);
        setError('Failed to fetch enquiries.');
      }
    };

    // Only fetch enquiries if session exists
    if (session?.session.id) {
      fetchEnquiries();
    }
  }, [session]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!enquiries) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Enquiries</h1>
      <ul>
        {enquiries.map((enquiry, index) => (
          <li key={index}>
            Course ID: {enquiry.courseId}, Slot ID: {enquiry.slotId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchEnquiries;
