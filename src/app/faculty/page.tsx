import React from 'react';
import Image from 'next/image';
interface Mentor {
  name: string;
  description: string;
  image: string;
  designation: string;
  link: string;
}

const mentors: Mentor[] = [
//   {
//     name: 'Suganya S',
//     description: 'Expert in Software Development with 10 years of experience.',
//     designation: 'M.Tech., Ph.D.',
//     image: '/fac-1.png',
//     link: 'https://drive.google.com/file/d/1LCWBk-Rqq0-jC5Fiuu4CSo6c3y3pcqNZ/view?usp=sharing',
//   },
  {
      name: 'Dr.Akash',
      designation: 'Professor and Head',
      image: '/Prabakaran.png',
      link: 'https://drive.google.com/file/d/1kya_fywVK6qjOu9oKtChy_ko5rbnx-tv/view?usp=sharing',
      description: 'Department of Media Studies, College of Science and Humanities, SRM Institute of Science and Technology, Ramapuram Campus.',
  },
  {
    name: 'Mr.Akshe',
    designation: 'Professor and Head',
    image: '/Prabakaran.png',
    link: 'https://drive.google.com/file/d/1kya_fywVK6qjOu9oKtChy_ko5rbnx-tv/view?usp=sharing',
    description: 'Department of Media Studies, College of Science and Humanities, SRM Institute of Science and Technology, Ramapuram Campus.',
},
{
    name: 'Ms. Sinduja',
    designation: 'Professor and Head',
    image: '/Prabakaran.png',
    link: 'https://drive.google.com/file/d/1kya_fywVK6qjOu9oKtChy_ko5rbnx-tv/view?usp=sharing',
    description: 'Department of Media Studies, College of Science and Humanities, SRM Institute of Science and Technology, Ramapuram Campus.',
},
  {
    name: 'Mr. Akash',
    description: 'Department of Media Studies, College of Science and Humanities, SRM Institute of Science and Technology, Ramapuram Campus.',
    designation: 'Assistant Professor',
    image: '/Yuvarani.jpg',
    link: 'https://drive.google.com/file/d/1w1CrrMvTKI8oX7WvDvfDhevFnfQnZgul/view?usp=sharing',
  },
  {
    name: 'Ms. Padmavathy',
    description: 'Department of Media Studies, College of Science and Humanities, SRM Institute of Science and Technology, Ramapuram Campus.',
    designation: 'Assistant Professor',
    image: '/Shanmuga.jpg',
    link: 'https://drive.google.com/file/d/1pGomZ8CQOzTOhRZ1iVJHSQwhmdb3k9A6/view?usp=sharing',
  },
  {
    name: 'Keerthana S',
    description: 'Professional in Digital Marketing and SEO strategies.',
    designation: 'B.Sc., M.Sc.',
    image: '/fac-6.png',
    link: 'https://drive.google.com/file/d/1wkWxCceUwJyYM9o8SA_WTT0YP8BiEMpQ/view?usp=sharing',
  },
];

const MentorsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 pt-20 mb-8">
    <h1 className="text-6xl font-bold mb-4 text-gray-900 mt-12">
      Meet Our Facuties
    </h1>
      <p className="text-lg text-center mb-16 max-w-2xl text-orange-700 mt-4">
      Our Faculty section highlights accomplished educators with academic and industry expertise. They bring real-world insights, fostering creativity and practical knowledge to guide students, ensuring they are well-equipped to excel as future leaders in the dynamic media industry.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {mentors.map((mentor, index) => (
          <a
            key={index}
            href={mentor.link}
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
              <h2 className="text-xl text-gray-800 font-extrabold ">{mentor.name}</h2>
              <p className="text-orange-700 text-lg font-bold">{mentor.designation}</p>
              <p className="text-gray-500">{mentor.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MentorsPage;
