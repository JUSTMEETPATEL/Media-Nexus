/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.createMany({
    data: [
      { name: 'SHORT FILM MAKING' },
      { name: 'DIGITAL PHOTOGRAPHY' },
      { name: 'EDITING TECHNIQUES' },
      { name: 'SOCIAL MEDIA DESIGN' },
      { name: '3D ANIMATION' },
    ],
  });

  const coursesList = await prisma.course.findMany();

  for (const course of coursesList) {
    await prisma.slot.createMany({
      data: [
        { courseId: course.id, slotName: 'Morning' },
        { courseId: course.id, slotName: 'Evening' },
      ],
    });
  }
}

main()
  .then(() => console.log('Seeding complete!'))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
