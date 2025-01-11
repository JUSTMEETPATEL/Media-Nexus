import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { courseId, slotId } = await req.json();

    // Get the start date (6 months ago)
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 5); // Gets last 6 months including current
    startDate.setDate(1); // Start from first of the month
    startDate.setHours(0, 0, 0, 0);

    // Get all enquiries for the specified course and slot within date range
    const enquiries = await prisma.enquiry.groupBy({
      by: ['createdAt'],
      where: {
        courseId: parseInt(courseId),
        slotId: parseInt(slotId),
        createdAt: {
          gte: startDate,
        },
      },
      _count: {
        id: true,
      },
    });

    // Create a map of all months with 0 counts
    const months: { [key: string]: number } = {};
    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const monthKey = date.toISOString().substring(0, 7); // YYYY-MM format
      months[monthKey] = 0;
    }

    // Fill in actual counts
    enquiries.forEach((entry) => {
      const monthKey = entry.createdAt.toISOString().substring(0, 7);
      if (months[monthKey] !== undefined) {
        months[monthKey] = entry._count.id;
      }
    });

    // Convert to array format expected by the chart
    const chartData = Object.entries(months)
      .map(([date, count]) => ({
        date,
        count,
      }))
      .reverse(); // Show oldest to newest

    return NextResponse.json({ data: chartData });
  } catch (error) {
    console.error('Error in get-enrollment-stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch enrollment statistics' },
      { status: 500 }
    );
  }
}
