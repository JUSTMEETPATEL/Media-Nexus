import { InfiniteScrollCards } from '@/components/infinite-scroll-cards';
import { Card, CardHeader } from '@/components/ui/card';
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
      name: 'DR. M PRABHAKARAN',
      role: 'Film Maker',
      image: '/Prabakaran.png',
      section: 'academic',
      resumeUrl: '',
    },
    {
      name: 'Mr. Akash',
      role: 'Visual Storyteller',
      image: '/akash.jpeg',
      section: 'academic',
      resumeUrl:
        'https://drive.google.com/file/d/1nMH5GoIuZ-rQewFyS5oXoEVQdbDK-3Zw/view?usp=drive_link',
    },
    {
      name: 'Mr. Akshej',
      role: 'Visual Editor',
      image: '/Akshej.jpg',
      section: 'academic',
      resumeUrl:
        'https://drive.google.com/file/d/1w1CrrMvTKI8oX7WvDvfDhevFnfQnZgul/view?usp=drive_link',
    },
    {
      name: 'MS. YUVARANI',
      role: 'Animation and Graphics',
      image: '/Yuvarani.jpg',
      section: 'academic',
      resumeUrl: '',
    },
    {
      name: 'Ms. Sinduja',
      role: 'Visual Storyteller',
      image: '/sinduja.jpg',
      section: 'academic',
      resumeUrl: '',
    },
    {
      name: 'Ms. Padmavathy,',
      role: 'Film Making',
      image: '/padmavathy.jpg',
      section: 'academic',
      resumeUrl: '',
    },
    {
      name: 'DR. Shanmuganathan',
      role: 'Visual Editor',
      image: '/Shanmuga.jpg',
      section: 'academic',
      resumeUrl:
        'https://drive.google.com/file/d/1X1hvoG9r3TEoYcJ66dZjLnXmA_Kfw4AZ/view?usp=drive_link',
    },
    {
      name: 'MS KEERTHANA S',
      role: 'Media Specialist',
      image: '/Keerthana.jpg',
      section: 'academic',
      resumeUrl:
        'https://drive.google.com/file/d/1wkWxCceUwJyYM9o8SA_WTT0YP8BiEMpQ/view?usp=drive_link',
    },
    {
      name: 'DHARANI R',
      role: 'DIRECTOR SCREENWRITER',
      image: '/dharani.png',
      section: 'industrial',
      resumeUrl: '',
    },
    {
      name: 'AKHILESH M',
      role: 'CHOREOGRAPHER',
      image: '/akhilesh.png',
      section: 'industrial',
      resumeUrl: '',
    },
    {
      name: 'V LSABU JOSEPH',
      role: 'VIDEO EDITOR',
      image: '/sabu.png',
      section: 'industrial',
      resumeUrl: '',
    },
  ];

  const academicMembers = teamMembers.filter(
    (member) => member.section === 'academic'
  );
  const industrialMembers = teamMembers.filter(
    (member) => member.section === 'industrial'
  );

  return (
    <div className="container mx-auto p-4">
      {/* Main Title */}
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 border-2 border-blue-500 inline-block px-6 py-2">
            CREATIVE TEAM
          </h1>
        </div>
      </div>

      {/* Academic Expert Section */}
      <div className="space-y-6 mb-16">
        <div className="text-center mb-6">
          <div className="text-4xl font-semibold inline-block px-4 py-1">
            <span className="text-black">ACADEMIC</span>{' '}
            <span className="text-cyan-400">EXPERT</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <InfiniteScrollCards>
            {[...academicMembers, ...academicMembers].map((member, index) => (
              <Link
                key={index}
                href={member.resumeUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  className="bg-white shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col"
                >
                  <CardHeader className="flex w-[300px] h-[300px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </CardHeader>

                  <div className="text-center z-10 bg-white text-black">
                    <h1 className="text-md font-bold uppercase">
                      {member.name}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">
                      {member.role}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </InfiniteScrollCards>
        </div>
      </div>

      {/* Industrial Expert Section */}
      <div className="space-y-6">
        <div className="text-center mb-6">
          <div className="text-4xl font-semibold inline-block px-4 py-1">
            <span className="text-black">INDUSTRIAL</span>{' '}
            <span className="text-cyan-500">EXPERT</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <InfiniteScrollCards>
            {[...industrialMembers, ...industrialMembers].map(
              (member, index) => (
                <Card
                  key={index}
                  className="bg-white shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col"
                >
                  <CardHeader className="flex w-[300px] h-[300px]">
                    <Image
                      src={member.image}
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
              )
            )}
          </InfiniteScrollCards>
        </div>
      </div>
    </div>
  );
}
