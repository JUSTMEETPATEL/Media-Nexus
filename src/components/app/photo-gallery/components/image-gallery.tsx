'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/gallery-1.jpeg',
  '/gallery-2.jpeg',
  '/gallery-3.jpeg',
  '/gallery-4.jpeg',
  '/gallery-5.jpeg',
  '/gallery-6.jpeg',
  '/gallery-7.jpeg',
  '/gallery-8.jpeg',
  '/gallery-9.jpeg',
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-[3/2] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105 p-4 bg-gray-100"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseImage}
        >
          <div className="max-w-7xl max-h-full p-4">
            <Image
              src={selectedImage}
              alt="Enlarged image"
              width={1920}
              height={1080}
              className="object-contain max-h-[90vh] max-w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
