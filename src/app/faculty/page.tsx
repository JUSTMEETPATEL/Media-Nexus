import React, { useEffect, useState } from 'react';

type Enquiry = {
  courseId: number;
  slotId: number;
};

const FetchEnquiries = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const sessionToken = '<your_session_token>'; // Replace with actual session token
        const response = await fetch('/api/get-enquiries', {
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

    fetchEnquiries();
  }, []);

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
