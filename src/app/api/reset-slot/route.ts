import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Make sure prisma is correctly set up

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({ error: 'Course ID is required' });
    }

    try {
      // Reset the slots for the given courseId by clearing the slotId from the Enquiry model
      await prisma.enquiry.updateMany({
        where: {
          courseId,
        },
        data: {
          slotId: undefined, // Reset slotId (you can also reset other fields if needed)
        },
      });

      return res.status(200).json({ success: true, message: 'Slots have been reset' });
    } catch (error) {
      console.error('Error resetting slots:', error);
      return res.status(500).json({ error: 'Failed to reset slots' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
