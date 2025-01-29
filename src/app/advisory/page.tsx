import React from 'react';
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';

interface AdvisoryMember {
  name: string;
  role: string;
  imageUrl: string;
}

const advisoryMembers: AdvisoryMember[] = [
  {
    name: 'Mr. Chinni Jayanth',
    role: 'Actor and Filmmaker',
    imageUrl: '/chinni.png',
  },
  {
    name: 'Dr. Shobana',
    role: 'Indian Vocalist and Former Actor',
    imageUrl: '/fac-6.png',
  },
  {
    name: 'Ms. Revathi',
    role: 'Actor and Filmmaker',
    imageUrl: '/revathi.png',
  },
  {
    name: 'Mr. P.Vasu',
    role: 'Veteran Filmmaker',
    imageUrl: '/vasu.png',
  },
  {
    name: 'Mr.Vishnuvardhan',
    role: 'Filmmaker',
    imageUrl: '/Vishnu.jpg',
  },
  {
    name: 'Dr. Sridhar Krishnaswami',
    role: 'Editor-in-Chief, New India Abroad',
    imageUrl: '/sridhar.png',
  },
];

const AdvisoryBoard: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto text-center pt-16">
        <h2 className="text-6xl font-bold mb-16">
          <span className="text-cyan-500">Advisory</span>{' '}
          <span className="text-black">Board</span>
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {advisoryMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col relative 
              before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300
              hover:before:shadow-[0_0_30px_2px_rgba(0,255,255,0.3)] hover:before:opacity-100
              border border-gray-200 hover:border-cyan-300"
            >
              <CardHeader className="flex w-[300px] h-[300px]">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-lg"
                  loading="lazy"
                />
              </CardHeader>

              <div className="text-center z-10 bg-white text-black p-4 rounded-b-lg">
                <h1 className="text-xl font-bold mb-2">{member.name}</h1>
                <p className="text-sm sm:text-base text-gray-600">
                  {member.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
