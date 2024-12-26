import Image from "next/image"
import { MapPin, Phone, Mail, Monitor } from 'lucide-react'
import Navbar from "@/components/navbar"

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-white">
                HOW TO
                <br />
                <span className="text-[#FF5733]">FIND US</span>
              </h1>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#FF5733]" />
                </div>
                <div>
                  <h3 className="text-[#FF5733] text-xl font-semibold mb-2">ADDRESS</h3>
                  <p className="text-gray-300">
                    Bharathi Salai, Ramapuram,
                    <br />
                    Chennai, Tamil Nadu 600089
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Phone className="h-6 w-6 text-[#FF5733]" />
                </div>
                <div>
                  <h3 className="text-[#FF5733] text-xl font-semibold mb-2">CALL US</h3>
                  <p className="text-gray-300">+91 9384088566</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Mail className="h-6 w-6 text-[#FF5733]" />
                </div>
                <div>
                  <h3 className="text-[#FF5733] text-xl font-semibold mb-2">EMAIL</h3>
                  <p className="text-gray-300">medianexus@srmorg.com</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Monitor className="h-6 w-6 text-[#FF5733]" />
                </div>
                <div>
                  <h3 className="text-[#FF5733] text-xl font-semibold mb-2">WEBSITE</h3>
                  <p className="text-gray-300">www.medianexus.srmorg.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/contact.jpg?height=600&width=800"
              alt="Workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-400 py-8">
          A Venture of SRM IST Ramapuram
        </div>
      </div>
    </main>
  )
}

