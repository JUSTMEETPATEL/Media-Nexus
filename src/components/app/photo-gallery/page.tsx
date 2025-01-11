import ImageGallery from './components/image-gallery';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mt-24 pb-12 text-center">
        Photo{' '}
        <span className="text-cyan-400 inline-block hover:scale-105 transition-transform">
          Gallery
        </span>
      </h1>
      <ImageGallery />
    </main>
  );
}
