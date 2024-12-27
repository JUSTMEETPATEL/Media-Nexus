'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function EnquiryForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      <div className="mx-auto max-w-6xl animate-fadeIn py-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr,1.5fr,1fr]">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-4 animate-slideInLeft">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              ENQUIRE{' '}
              <span className="text-cyan-500 animate-pulse">NOW!!!</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Enquire now for more information on our programs, admissions, and
              opportunities to advance your career.
            </p>
          </div>

          {/* Middle Section - Form */}
          <Card
            className="relative overflow-hidden border border-gray-100 bg-white shadow-xl transition-all duration-500 
            hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-[1.02]
            before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] 
            before:bg-gradient-to-r before:from-transparent before:via-cyan-400/10 before:to-transparent"
          >
            <CardContent className="relative p-6">
              <form className="space-y-4">
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <Input
                    placeholder="NAME"
                    className="h-12 border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-500 
                    focus:border-cyan-400 focus:ring-cyan-400/50 transition-all duration-300"
                  />
                </div>
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <Input
                    placeholder="Whatapps No."
                    className="h-12 border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-500 
                    focus:border-cyan-400 focus:ring-cyan-400/50 transition-all duration-300"
                  />
                </div>
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <Input
                    type="email"
                    placeholder="E Mail.ID"
                    className="h-12 border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-500 
                    focus:border-cyan-400 focus:ring-cyan-400/50 transition-all duration-300"
                  />
                </div>
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <Select>
                    <SelectTrigger
                      className="h-12 border-2 border-gray-200 bg-white text-gray-900 
                      focus:border-cyan-400 focus:ring-cyan-400/50 transition-all duration-300"
                    >
                      <SelectValue placeholder="Course Preferred" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-900 border-gray-200">
                      <SelectItem value="short-film">
                        SHORT FILM MAKING
                      </SelectItem>
                      <SelectItem value="photography">
                        DIGITAL PHOTOGRAPHY
                      </SelectItem>
                      <SelectItem value="editing">
                        EDITING TECHNIQUES
                      </SelectItem>
                      <SelectItem value="social-media">
                        SOCIAL MEDIA DESIGN
                      </SelectItem>
                      <SelectItem value="animation">3D ANIMATION</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <Select>
                    <SelectTrigger
                      className="h-12 border-2 border-gray-200 bg-white text-gray-900 
                      focus:border-cyan-400 focus:ring-cyan-400/50 transition-all duration-300"
                    >
                      <SelectValue placeholder="Slot Preferred" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-900 border-gray-200">
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold
                  transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg
                  hover:shadow-cyan-400/50"
                  size="lg"
                >
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Section - Image */}
          <div className="hidden md:block animate-slideInRight">
            <Image
              src="/placeholder.svg"
              alt="Customer support representative"
              width={400}
              height={500}
              className="h-full w-full rounded-lg object-cover transform transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
