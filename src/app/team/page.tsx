import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  section: 'academic' | 'industrial';
}

export default function TeamShowcase() {
  const teamMembers: TeamMember[] = [
    {
      name: 'DR. M PRABHAKARAN',
      role: 'TEAM LEADER',
      image: '/Prabakaran.png',
      section: 'academic',
    },
    {
      name: 'MS. YUVARANI',
      role: 'FOUNDATION & DRAFTING',
      image: '/Yuvarani.jpg',
      section: 'academic',
    },
    {
      name: 'DR. SHANMUGAMATHAI',
      role: 'SYSTEM ANALYSIS',
      image: '/Shanmuga.jpg',
      section: 'academic',
    },
    {
      name: 'MS KEERTHANA S',
      role: 'FOUNDATION & DRAFTING',
      image: '/Keerthana.jpg',
      section: 'academic',
    },
    {
      name: 'DHARANI R',
      role: 'DIRECTOR SCREENWRITER',
      image: '/dharani.png',
      section: 'industrial',
    },
    {
      name: 'AKHILESH M',
      role: 'CHOREOGRAPHER',
      image: '/akhilesh.png',
      section: 'industrial',
    },
    {
      name: 'V LSABU JOSEPH',
      role: 'VIDEO EDITOR',
      image: '/sabu.png',
      section: 'industrial',
    },
  ];

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
          {teamMembers
            .filter((member) => member.section === 'academic')
            .map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
              >
                <div className="p-1 shadow-lg">
                  <div className="relative w-[250px] h-[300px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-2 px-3 py-1 w-full shadow-lg">
                  <h3 className="font-bold text-sm">{member.name}</h3>
                  <p className="text-xs">{member.role}</p>
                </div>
              </div>
            ))}
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
          {teamMembers
            .filter((member) => member.section === 'industrial')
            .map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center mb-8 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="p-1 shadow-lg">
                  <div className="relative w-[250px] h-[300px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-2 px-3 py-1 w-full shadow-lg">
                  <h3 className="font-bold text-sm">{member.name}</h3>
                  <p className="text-xs">{member.role}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
