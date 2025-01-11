import Image from 'next/image';
import Link from 'next/link';
import { Youtube } from 'lucide-react';

const videos = [
  {
    id: 1,
    youtubeId: 'obRsrjUG9YY',
    title: 'Profile Video | School Of Media Studies',
  },
  {
    id: 2,
    youtubeId: 'nYSqgpijkT0',
    title: 'Rise And Vote | Election Anthem | A Music video',
  },
  {
    id: 3,
    youtubeId: 'H432NTlSFNI',
    title: 'ONAM 24 - Post AV | SRM Ramapuram ',
  },
  {
    id: 4,
    youtubeId: 'HUAsI3zrt8E',
    title: 'Onam 22 | Celebration | SRM Ramapuram',
  },
  {
    id: 5,
    youtubeId: 'Irkcg_43Zwo',
    title: 'SRM Ramapuram VISCOM INFRASTRUCTURE PHOTO GALLERY - 2022',
  },
  {
    id: 6,
    youtubeId: 'E15LA46I8mw',
    title: 'Master class with Mari selvaraj | SRM Ramapuram',
  },
  {
    id: 7,
    youtubeId: 'iqh0rSlBeRI',
    title: 'Script to screen- A masterclass with K.G. Balasubraman',
  },
  { id: 8, youtubeId: 'nzJuu2OJ6Xo', title: 'Bomb- Team Introduction AV ' },
  {
    id: 9,
    youtubeId: 'kfSCy07Ok7w',
    title: 'Manjummel Boys team interaction - INTRODUCTION AV',
  },
];

export function VideoGallery() {
  return (
    <div className="container mx-auto px-8 py-16 ">
      <h1 className="text-5xl font-bold mt-24 pb-12 text-center">
        Video{' '}
        <span className="text-cyan-400 inline-block hover:scale-105 transition-transform">
          Gallery
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          >
            <Image
              src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
              alt={video.title}
              width={640}
              height={360}
              className="w-full h-56 object-cover transition duration-300 group-hover:scale-110"
            />
            <div className="absolute top-2 left-2 bg-white rounded-full p-1">
              <Youtube className="w-6 h-6 text-red-600" />
            </div>
            <Link
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white opacity-80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h2 className="text-white font-semibold">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
