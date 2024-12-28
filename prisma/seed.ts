import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Courses
  const courses = await prisma.course.createMany({
    data: [
      { name: '3D Animation' },
      { name: 'Short Film Making' },
      { name: 'Digital Photography' },
      { name: 'Editing Techniques' },
      { name: 'Social Media Design' },
    ],
    skipDuplicates: true, // Prevents duplicate courses if the seed is run multiple times
  });

  console.log('Courses seeded:', courses);

  // Seed Slots for each course
  const slotsData = await prisma.course.findMany({
    select: {
      id: true, // Get course IDs
    },
  });

  const slotData = slotsData.flatMap((course) => [
    { courseId: course.id, slotName: 'Morning Slot' },
    { courseId: course.id, slotName: 'Evening Slot' },
  ]);

  await prisma.slot.createMany({ data: slotData, skipDuplicates: true });

  console.log('Slots seeded:', slotData);

  // Example for transactions - these would be dynamically created after the enquiry is submitted
  // Ensure there's no dummy data for Enquiries and Transactions in this seed file.

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
