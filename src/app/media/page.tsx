import { Suspense } from "react"
import { ExternalLink } from 'lucide-react'

export default function MediaCoverage() {
  return (
    <div className="min-h-screen pt-32 bg-cyan-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-cyan-900 mb-8">Media Coverage</h1>
        
        <div className="grid gap-8">
          {/* Video Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <Suspense fallback={<div className="w-full h-full bg-cyan-100 animate-pulse" />}>
                  <iframe
                    src="https://www.youtube.com/embed/41Shxjx-72M"
                    title="YouTube video player 1"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Suspense>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-cyan-900 mb-2">Video Coverage</h2>
                <a 
                  href="https://youtu.be/41Shxjx-72M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700"
                >
                  Watch on YouTube
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <Suspense fallback={<div className="w-full h-full bg-cyan-100 animate-pulse" />}>
                  <iframe
                    src="https://www.youtube.com/embed/927wdNpf1DE"
                    title="YouTube video player 2"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Suspense>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-cyan-900 mb-2">Video Coverage</h2>
                <a 
                  href="https://youtu.be/927wdNpf1DE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700"
                >
                  Watch on YouTube
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
