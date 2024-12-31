import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                  ADDRESS
                </h3>
                <p className="text-gray-300 hover:text-white transition-colors block cursor-pointer">
                  Bharathi Salai, Ramapuram,
                  <br />
                  Chennai, Tamil Nadu 600089
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/25 transition-shadow duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.052282371464!2d80.17675707507752!3d13.032342637288668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d11f9ca625%3A0xf77d1733be7b5b74!2sSRM%20Institute%20Of%20Science%20And%20Technology!5e0!3m2!1sen!2sin!4v1735624350971!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                CALL US
              </h3>
              <a
                href="tel:+919384088566"
                className="text-gray-300 hover:text-white transition-colors hover:underline inline-block"
              >
                +91 9384088566
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                EMAIL
              </h3>
              <a
                href="mailto:medianexus@srmorg.com"
                className="text-gray-300 hover:text-white transition-colors hover:underline inline-block"
              >
                medianexus@srmorg.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              CONNECT WITH US
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/iie_srmrmp/"
                className="p-3 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-cyan-500 hover:to-cyan-400 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@SRMISTRamapuram"
                className="p-3 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-cyan-500 hover:to-cyan-400 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/SRMISTRamapuram/"
                className="p-3 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-cyan-500 hover:to-cyan-400 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/school/iie-srm-ist-rmp/"
                className="p-3 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-cyan-500 hover:to-cyan-400 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Links and Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-8">
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors relative group inline-block cursor-pointer"
              >
                Terms & Conditions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors relative group inline-block cursor-pointer"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SRMIST Ramapuram. All rights
              reserved.
            </p>
          </div>
        </div>
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </footer>
  );
}
