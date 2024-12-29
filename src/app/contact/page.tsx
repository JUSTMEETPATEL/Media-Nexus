import Image from 'next/image';
import { MapPin, Phone, Mail, Monitor } from 'lucide-react';
import Navbar from '@/components/navbar';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
                HOW TO
                <br />
                <span className="text-cyan-400">FIND US</span>
              </h1>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-cyan-400 text-lg sm:text-xl font-semibold mb-2">
                    ADDRESS
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base">
                    Bharathi Salai, Ramapuram,
                    <br />
                    Chennai, Tamil Nadu 600089
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-cyan-400 text-lg sm:text-xl font-semibold mb-2">
                    CALL US
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base">+91 9384088566</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-cyan-400 text-lg sm:text-xl font-semibold mb-2">
                    EMAIL
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base">medianexus@srmorg.com</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Monitor className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-cyan-400 text-lg sm:text-xl font-semibold mb-2">
                    WEBSITE
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base">www.medianexus.srmorg.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden hidden md:block">
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
        <div className="text-center text-slate-900 py-8 text-sm sm:text-base">
          A Venture of SRM IST Ramapuram
        </div>
      </div>
    </main>
  );
}

