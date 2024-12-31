import React from 'react';

interface Props {
  params: Promise<{ courseId: string }>;
}

const Page = async (props: Props) => {
  const params = await props.params;
  const slotId = 1;

  //get-slot api

  const slotResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/get-slot`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId: params.courseId,
        slotId, // replace with orignal slotId
      }),
    }
  );
  if (!slotResponse.ok) {
    console.error('Error:', slotResponse.status, slotResponse.statusText);
    return null;
  }

  const slotData = await slotResponse.json();
  const slots = slotData.existingEnquiriesCount;

  //get-enquiry api

  const enquiryResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/get-enquiry`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId: params.courseId,
        slotId,
      }),
    }
  );
  if (!enquiryResponse.ok) {
    console.error('Error:', enquiryResponse.status, enquiryResponse.statusText);
    return null;
  }
  const enquiryData = await enquiryResponse.json();
  const enquiries = enquiryData.enquiry;

  //get-assignment api

  const assignmentResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/get-assignment`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId: params.courseId,
        slotId,
      }),
    }
  );
  if (!assignmentResponse.ok) {
    console.error(
      'Error:',
      assignmentResponse.status,
      assignmentResponse.statusText
    );
    return null;
  }
  const assignmentData = await assignmentResponse.json();
  const assignment = assignmentData.assignment;

  return (
    <div className="container mx-auto p-4">
      <h2 className="pt-44">Slots: {slots}</h2>
      <h2 className="pt-10">Enquiries:</h2>
      <ul>
        {enquiries.map(
          (enquiry: {
            id: string;
            name: string;
            whatsappNumber: string;
            email: string;
            courseId: string;
            slotId: string;
            createdAt: string;
            paymentVerified: boolean;
          }) => (
            <li key={enquiry.id}>
              <div>ID: {enquiry.id}</div>
              <div>Name: {enquiry.name}</div>
              <div>WhatsApp Number: {enquiry.whatsappNumber}</div>
              <div>Email: {enquiry.email}</div>
              <div>Course ID: {enquiry.courseId}</div>
              <div>Slot ID: {enquiry.slotId}</div>
              <div>
                Created At: {new Date(enquiry.createdAt).toLocaleString()}
              </div>
              <div>
                Payment Verified: {enquiry.paymentVerified ? 'Yes' : 'No'}
              </div>
            </li>
          )
        )}
      </ul>
      <h2 className="pt-10">Assignment: </h2>
      <ul>
        {assignment.map(
          (assignment: {
            title: string;
            description: string;
            deadline: string;
          }) => (
            <li key={assignment.title}>
                <div>Id : </div>
              <div>Title: {assignment.title}</div>
              <div>Description: {assignment.description}</div>
              <div>Deadline: {new Date(assignment.deadline).toLocaleString()}</div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Page;
