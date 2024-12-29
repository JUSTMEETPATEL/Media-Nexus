import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import './facility-showcase.css'

export default function FacilityShowcase() {
  const facilities = [
    {
      title: "RECORDING STUDIO",
      image: "/infra-7.png",
      gridArea: "recording"
    },
    {
      title: "ANIMATION STUDIO",
      image: "/infra-2.png",
      gridArea: "animation"
    },
    {
      title: "GRAPHICS LAB",
      image: "/infra-8.png",
      gridArea: "graphics"
    },
    {
      title: "VISUAL STUDIO",
      image: "/infra-4.png",
      gridArea: "visual"
    },
    {
      title: "GREEN SCREEN STUDIO",
      image: "/infra-1.png",
      gridArea: "green"
    },
    {
      title: "PHOTOGRAPHY STUDIO",
      image: "/infra-5.png",
      gridArea: "photo"
    },
    {
      title: "EDIT SUITE",
      image: "/infra-6.png",
      gridArea: "edit"
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-12">
      <div className="grid gap-2 mt-8 md:grid md:grid-cols-4 md:grid-rows-3 md:gap-2"
           style={{
             display: 'grid',
             gridTemplateAreas: `
               "header header visual photo"
               "recording animation green edit"
               "recording graphics green edit"
             `,
             gridTemplateColumns: 'repeat(4, 1fr)',
             gridTemplateRows: 'auto repeat(2, 200px)'
           }}
      >
        <div className="col-span-2 mt-16 pt-8" style={{ gridArea: 'header' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">STATE-OF-THE-ART</span>
            <br />
            <span className="text-gray-800">FACILITY</span>
          </h1>
        </div>

        {facilities.map((facility) => (
          <Card 
            key={facility.title}
            className="group overflow-hidden transition-transform duration-300 hover:scale-105 mt-8"
            style={{ gridArea: facility.gridArea }}
          >
            <CardContent className="p-0 relative h-full">
              <div className="relative h-full">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <h2 className="text-white text-sm md:text-base font-bold tracking-wider">
                    {facility.title}
                  </h2>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
      </div>
    </div>
  );}



