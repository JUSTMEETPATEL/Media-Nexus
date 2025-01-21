'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  section: 'academic' | 'industrial';
  resumeUrl?: string;
}

export default function TeamShowcase() {
  const teamMembers: TeamMember[] = [
    {
      name: 'DR. PRABHAKARAN V',
      role: 'Film Making and Film Studies',
      image: '/Prabakaran.png',
      section: 'academic',
      resumeUrl: '/placeholder',
    },
    {
      name: 'Dr. SHANMUGA NATHAN S',
      role: 'Visual Editing and Photography',
      image: '/Shanmuga.jpg',
      section: 'academic',
      resumeUrl:
        'https://drive.google.com/file/d/1X1hvoG9r3TEoYcJ66dZjLnXmA_Kfw4AZ/view?usp=drive_link',
    },
    {
      name: 'Ms. YUVARANI P',
      role: 'Graphics and Animation',
      image: '/Yuvarani.jpg',
      section: 'academic',
      resumeUrl: '/placeholder',
    },
    {
      name: 'Mr. ARUNKUMAR S',
      role: 'Graphics and Animation',
      image: '', // Provide image path if available
      section: 'academic',
      resumeUrl: '/placeholder',
    },
    {
      name: 'Ms. PADMAVATHY PS',
      role: 'Film Making and Script Writing',
      image: '/padmavathy.jpg',
      section: 'academic',
      resumeUrl: '/placeholder',
    },
    {
      name: 'Dr. AKASH J.H',
      role: 'Visual Editing and Photography',
      image: '/akash-jh.JPG',
      section: 'academic',
      resumeUrl:
        'https://drive.google.com/file/d/1kya_fywVK6qjOu9oKtChy_ko5rbnx-tv/view?usp=sharing',
    },
    {
      name: 'Mr. AKSHEJ S',
      role: 'Visual Editor',
      image: '/Akshej.jpg',
      section: 'academic',
      resumeUrl:
        'https://drive.google.com/file/d/1w1CrrMvTKI8oX7WvDvfDhevFnfQnZgul/view?usp=drive_link',
    },
    {
      name: 'Ms. SINDHUJA M.S',
      role: 'Visual Storytelling',
      image: '/Sinduja.jpg',
      section: 'academic',
      resumeUrl: '/placeholder',
    },
    {
      name: 'Mr. AKASH K',
      role: 'Visual Storytelling',
      image: '/akash.jpeg',
      section: 'academic',
      resumeUrl:
        'https://drive.google.com/file/d/1nMH5GoIuZ-rQewFyS5oXoEVQdbDK-3Zw/view?usp=drive_link',
    },
    {
      name: 'Ms. KEERTHANA S',
      role: 'UI/UX Designer and Graphics Designer',
      image: '/Keerthana.jpg',
      section: 'academic',
      resumeUrl:
        'https://drive.google.com/file/d/1wkWxCceUwJyYM9o8SA_WTT0YP8BiEMpQ/view?usp=drive_link',
    },
    {
      name: 'Ms. SUGANYA S',
      role: 'Graphics Designer',
      image: '', // Provide image path if available
      section: 'academic',
      resumeUrl: '/placeholder',
    },
    {
      name: 'Mr.DHARANI R',
      role: 'DIRECTOR SCREENWRITER',
      image: '/Dharani R.png',
      section: 'industrial',
      resumeUrl: '/placeholder',
    },
    {
      name: 'Mr.AKHILESH M',
      role: 'CINEMATOGRAPHER',
      image: '/Akilesh Kathamuthu.png',
      section: 'industrial',
      resumeUrl: '/placeholder',
    },
    {
      name: 'Mr.V LSABU JOSEPH',
      role: 'VIDEO EDITOR',
      image: '/sabu.jpg',
      section: 'industrial',
      resumeUrl: '/placeholder',
    },
  ];

  const academicMembers = teamMembers.filter(
    (member) => member.section === 'academic'
  );
  const industrialMembers = teamMembers.filter(
    (member) => member.section === 'industrial'
  );

  const [academicStartIndex, setAcademicStartIndex] = useState(0);
  const [industrialStartIndex, setIndustrialStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = (section: 'academic' | 'industrial') => {
    if (section === 'academic') {
      setAcademicStartIndex((prev) => Math.max(0, prev - 1));
    } else {
      setIndustrialStartIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = (section: 'academic' | 'industrial') => {
    const members =
      section === 'academic' ? academicMembers : industrialMembers;
    if (section === 'academic') {
      setAcademicStartIndex((prev) =>
        Math.min(members.length - cardsToShow, prev + 1)
      );
    } else {
      setIndustrialStartIndex((prev) =>
        Math.min(members.length - cardsToShow, prev + 1)
      );
    }
  };

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <Link
      href={member.resumeUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-[250px]"
    >
      <Card className="bg-white shrink-0 transform transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col h-full hover:border-cyan-400 hover:border-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
        <CardHeader className="flex-grow p-0">
          <div className="relative w-full pt-[100%]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </CardHeader>
        <div className="text-center z-10 bg-white text-black p-4">
          <h1 className="text-md font-bold uppercase">{member.name}</h1>
          <p className="text-sm sm:text-base text-gray-600">{member.role}</p>
        </div>
      </Card>
    </Link>
  );

  const renderMemberCards = (members: TeamMember[], startIndex: number) => {
    return members
      .slice(startIndex, startIndex + cardsToShow)
      .map((member, index) => (
        <MemberCard key={`${member.name}-${index}`} member={member} />
      ));
  };

  const NavigationButton = ({
    onClick,
    disabled,
    direction,
  }: {
    onClick: () => void;
    disabled: boolean;
    direction: 'left' | 'right';
  }) => (
    <Button
      onClick={onClick}
      variant="outline"
      size="icon"
      className="shrink-0 transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {direction === 'left' ? (
        <ChevronLeft className="h-6 w-6" />
      ) : (
        <ChevronRight className="h-6 w-6" />
      )}
    </Button>
  );

  return (
    <div className="container mx-auto p-4">
      {/* Main Title */}
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 border-2 border-blue-500 inline-block px-4 sm:px-6 py-2">
            CREATIVE TEAM
          </h1>
        </div>
      </div>

      {/* Academic Expert Section */}
      <div className="space-y-6 mb-16">
        <div className="text-center mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold inline-block px-4 py-1">
            <span className="text-black">ACADEMIC</span>{' '}
            <span className="text-cyan-400">EXPERT</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <NavigationButton
            onClick={() => handlePrev('academic')}
            disabled={academicStartIndex === 0}
            direction="left"
          />
          <div className="flex gap-6 overflow-hidden w-full sm:w-auto">
            {renderMemberCards(academicMembers, academicStartIndex)}
          </div>
          <NavigationButton
            onClick={() => handleNext('academic')}
            disabled={
              academicStartIndex >= academicMembers.length - cardsToShow
            }
            direction="right"
          />
        </div>
      </div>

      {/* Industrial Expert Section */}
      <div className="space-y-6">
        <div className="text-center mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold inline-block px-4 py-1">
            <span className="text-black">INDUSTRIAL</span>{' '}
            <span className="text-cyan-500">EXPERT</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <NavigationButton
            onClick={() => handlePrev('industrial')}
            disabled={industrialStartIndex === 0}
            direction="left"
          />
          <div className="flex gap-6 overflow-hidden w-full sm:w-auto">
            {renderMemberCards(industrialMembers, industrialStartIndex)}
          </div>
          <NavigationButton
            onClick={() => handleNext('industrial')}
            disabled={
              industrialStartIndex >= industrialMembers.length - cardsToShow
            }
            direction="right"
          />
        </div>
      </div>
    </div>
  );
}
