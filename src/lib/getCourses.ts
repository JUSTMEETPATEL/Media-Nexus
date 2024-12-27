// lib/getCourses.ts
import prisma from './prisma';

export default async function getCourses() {
  const courses = await prisma.course.findMany({
    include: {
      slots: true, // Ensure you fetch the slots for each course
    },
  });

  return courses.map(course => ({
    id: course.id,
    name: course.name,
    slots: course.slots.map(slot => ({
      id: slot.id.toString(), // Ensure slot id is a string (for consistency)
      remaining: slot.remaining,
    })),
  }));
}
