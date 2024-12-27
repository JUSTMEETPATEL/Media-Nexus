import React from 'react';
interface Mentor {
    name: string;
    description: string;
    image: string;
    designation: string;
    link: string;
}

const mentors: Mentor[] = [
    {
        name: 'Suganya S',
        description: 'Expert in Software Development with 10 years of experience.',
        designation: 'M.Tech., Ph.D.',
        image: '/fac-1.png',
        link: 'https://drive.google.com/file/d/1LCWBk-Rqq0-jC5Fiuu4CSo6c3y3pcqNZ/view?usp=sharing',
    },
    {
        name: 'Dr. J.H.Akash',
        description: 'Specialist in Data Science and Machine Learning.',
        designation: 'B.Sc., M.Sc., Ph.D.',
        image: '/fac-2.png',
        link: 'https://drive.google.com/file/d/1kya_fywVK6qjOu9oKtChy_ko5rbnx-tv/view?usp=sharing',
    },
    {
        name: 'Akshej S Menon',
        description: 'Experienced in Project Management and Agile methodologies.',
        designation: 'B.Sc., M.Sc.',
        image: '/fac-3.png',
        link: 'https://drive.google.com/file/d/1w1CrrMvTKI8oX7WvDvfDhevFnfQnZgul/view?usp=sharing',
    },
    {
        name: 'K.Akash',
        description: 'Expert in Cybersecurity and Network Security.',
        designation: 'B.Sc., M.Sc.',
        image: '/fac-4.png',
        link: 'https://drive.google.com/file/d/1nMH5GoIuZ-rQewFyS5oXoEVQdbDK-3Zw/view?usp=sharing',
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 pt-20 mb-8">
            <h1 className="text-6xl font-bold mb-4 text-white mt-12">Meet Our Team of Mentors</h1>
            <p className="text-lg text-center mb-16 max-w-2xl text-white mt-4">
                Our team of mentors consists of industry experts with years of experience in their respective fields. They are dedicated to guiding you through your learning journey and helping you achieve your goals.
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
                        <img src={mentor.image} alt={mentor.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{mentor.name}</h2>
                            <p className="text-gray-700">{mentor.designation}</p>
                            <p className="text-gray-700">{mentor.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MentorsPage;
