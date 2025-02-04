import './facility-showcase.css';
import { LayoutGrid } from '@/components/ui/layout-grid';

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Visual Studio</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our green screen facility is equipped with the latest technology to
        provide a seamless and immersive experience. Whether you&apos;re
        shooting a film, creating visual effects, or conducting a virtual event,
        our green screen studio offers the perfect environment to bring your
        vision to life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Edit suite</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our edit suite is designed for professional video editing and
        post-production. With high-end equipment and software, it provides a
        comfortable and efficient workspace for editors to craft their projects
        to perfection.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Recording studio
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our recording studio is equipped with state-of-the-art equipment and
        facilities to provide a professional and creative environment for
        musicians and sound engineers. Whether you&apos;re recording music,
        voice overs, or podcasts, our studio offers the perfect space to capture
        high-quality audio.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Photo studio</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our photo studio is equipped with state-of-the-art equipment and
        facilities to provide a professional and creative environment for
        photographers. Whether you&apos;re a beginner or an experienced
        photographer, our studio offers the perfect space to capture stunning
        images.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Visual studio</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our visual studio is equipped with high-end equipment and facilities to
        provide a professional and creative environment for visual artists and
        designers. Whether you&apos;re creating digital art, illustrations, or
        graphics, our studio offers the perfect space to unleash your
        creativity.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <div className="max-w-2xl"></div>
        <p className="font-bold md:text-4xl text-xl text-white">Visual studio</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Our visual studio is equipped with high-end equipment and facilities to
          provide a professional and creative environment for visual artists and
          designers. Whether you&apos;re creating digital art, illustrations, or
          graphics, our studio offers the perfect space to unleash your
          creativity.
        </p>
      </div>
    
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail: '/greenscreen.webp',
    title: 'Visual Studio',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/edit-suite.jpg',
    title: 'Edit Suite',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail: '/recording.jpg',
    title: 'Recording Studio',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail: '/photostudio.webp',
    title: 'Photo Studio',
  },

  {
    id: 6,
    content: <SkeletonSix />,
    className: 'md:col-span-1',
    thumbnail: '/infra-4.png',
    title: 'Music Studio',
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: 'md:col-span-1',
    thumbnail: '/2d-lab .png',
    title: '2D-Lab',
  },
];

export default function FacilityShowcase() {
  return (
    <div className="container relative h-screen mx-auto p-4">
      <h1 className="text-3xl text-center md:text-5xl font-bold mb-4 mt-28">
        <span className="text-cyan-400 mr-2">STATE-OF-THE-ART</span>
        <span className="text-gray-800">FACILITY</span>
      </h1>
      <LayoutGrid cards={cards} />
    </div>
  );
}
