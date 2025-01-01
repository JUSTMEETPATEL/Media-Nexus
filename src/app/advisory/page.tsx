import React from 'react';
import Image from 'next/image';
import { InfiniteScrollCards } from '@/components/infinite-scroll-cards';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface AdvisoryMember {
  name: string;
  role: string;
  imageUrl: string;
}

const advisoryMembers: AdvisoryMember[] = [
  {
    name: 'Mr. Chinni Jayanth',
    role: 'Indian Actor and Director',
    imageUrl: '/chinni.png',
  },
  {
    name: 'Ms. Shobana Ravi',
    role: 'Indian Vocalist and Former Actor',
    imageUrl: '/fac-6.png',
  },
  {
    name: 'Ms. Revathi',
    role: 'Indian Actress and Director',
    imageUrl: '/revathi.png',
  },
  {
    name: 'Mr. P.Vasu',
    role: 'Indian Director',
    imageUrl: '/vasu.png',
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
          <InfiniteScrollCards>
            {[...advisoryMembers, ...advisoryMembers].map((member, index) => (
              // <div
              //   key={index}
              //   className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
              // >
              //   <Image
              //     src={member.imageUrl}
              //     width={320}
              //     height={320}
              //     alt={member.name}
              //     className="w-80 h-80 object-cover shadow-lg"
              //     style={{ aspectRatio: '1 / 1' }}
              //   />
              //   <h3 className="mt-4 text-2xl font-semibold text-gray-800">
              //     {member.name}
              //   </h3>
              //   <p className="mt-2 text-gray-600 text-lg">{member.role}</p>
              // </div>
              <Card
                key={index}
                className="bg-white shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col"
              >
                <CardHeader className="flex w-[300px] h-[300px]">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </CardHeader>

                <div className="text-center z-10 bg-white text-black">
                  <h1 className="text-md font-bold">{member.name}</h1>
                  <p className="text-sm sm:text-base text-gray-600">
                    {member.role}
                  </p>
                </div>
              </Card>
            ))}
          </InfiniteScrollCards>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
