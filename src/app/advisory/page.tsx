import React from "react";
import Image from "next/image";

interface AdvisoryMember {
  name: string;
  role: string;
  imageUrl: string;
}

const advisoryMembers: AdvisoryMember[] = [
  {
    name: "Mr. Chinni Jayanth",
    role: "Indian Actor and Director",
    imageUrl: "/chinni.png", 
  },
  {
    name: "Ms. Shobana Ravi",
    role: "Indian Vocalist and Former Actor",
    imageUrl: "/shobana.png",
  },
  {
    name: "Ms. Revathi",
    role: "Indian Actress and Director",
    imageUrl: "/revathi.png", 
  },
];

const AdvisoryBoard: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto text-center pt-16">
        <h2 className="text-6xl font-bold mb-16">
          <span className="text-cyan-500">Advisory</span> <span className="text-black">Board</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
          {advisoryMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
              <Image
              src={member.imageUrl}
              alt={member.name}
              className="w-80 h-80 object-cover shadow-lg"
              style={{ aspectRatio: '1 / 1' }}
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="mt-2 text-gray-600 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
