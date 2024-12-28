import React from 'react';
import Image from 'next/image';
interface Mentor {
  name: string;
  description: string;
  image: string;
  
  
}

const mentors: Mentor[] = [
  
  {
    name: 'Visual Studio',
   
    image: '/infra-1.png',
    
    description:
      'The green screen studio enables students to create dynamic content, explore visual effects, and master storytelling .',
  },
  {
    name: 'Digital Studio',
    description:
      'The photography studio provides professional equiment and lightning for hands-on learning in various photography projects. ',
    
    image: '/infra-2.png',
    
  },
  {
    name: 'Animation Lab',
    description:
      'The animation lab offers advanced tools for 2D/3D creation, fostering storytelling, design and visual effects.',
    
    image: '/infra-3.png',

    
  },
  {
  name: 'Animation Lab',
    description:
      'The dubbing studio offers professional tools for mastering voiceovers, audio synchronization, sound design, and mixing.',
    
    image: '/infra-4.png',},
  
];

const MentorsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 pt-20 ">
      <h1 className="text-6xl font-bold mb-12 text-gray-900 mt-12">
        Our Infrastructure
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {mentors.map((mentor, index) => (
          <a
            key={index}
            
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer w-full sm:w-96"
          >
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={380}
              height={240}
              priority={index < 3}
              loading={index >= 3 ? 'lazy' : 'eager'}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-gray-800 font-extrabold ">
                {mentor.name}
              </h2>
              {/* <p className="text-orange-700 text-lg font-bold">
                {mentor.designation}
              </p> */}
              <p className="text-gray-500">{mentor.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MentorsPage;
