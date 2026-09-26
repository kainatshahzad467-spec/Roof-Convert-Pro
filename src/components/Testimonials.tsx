import React from 'react';
import { Star, Play, Quote } from 'lucide-react';
import { ASSETS, TESTIMONIALS } from '../data/roofingData';

interface TestimonialsProps {
  onOpenVideo: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenVideo }) => {
  return (
    <section className="py-8 sm:py-14 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-sm border border-neutral-200/60 space-y-10">
        
        {/* Title (Exact Copy from Screenshot 9) */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900 tracking-tight">
            Trusted by Homeowners <br className="hidden sm:block" />
            and Businesses
          </h2>
        </div>

        {/* Bento Grid Layout (Matching Screenshot 9) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Big Vertical Craftsman Portrait (Matching Screenshot 9) */}
          <div className="md:col-span-4 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/60 relative group min-h-[380px] md:min-h-[460px]">
            <img
              src={ASSETS.serviceRepair}
              alt="Friendly master roofing specialist working on luxury roof"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#F95700] font-semibold">
                  Local Crew
                </span>
                <p className="font-display font-bold text-base sm:text-lg">
                  Dedicated On-Site Roofing Craftsmen
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Testimonial Cards & Video Walkthrough Player (Matching Screenshot 9) */}
          <div className="md:col-span-8 flex flex-col justify-between gap-6">
            
            {/* Top Row: Two Testimonial Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Review 1: James W. */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl sm:rounded-3xl border border-neutral-200/70 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  {/* 5 Orange Stars */}
                  <div className="flex items-center gap-1 text-[#F95700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F95700]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {TESTIMONIALS[0].content}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200/60 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden shrink-0 border border-neutral-300">
                      <img
                        src={TESTIMONIALS[0].avatar}
                        alt={TESTIMONIALS[0].name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-neutral-900">
                        {TESTIMONIALS[0].name}
                      </h4>
                      <p className="text-[11px] text-neutral-500">
                        {TESTIMONIALS[0].role}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-neutral-400 rotate-180" />
                </div>
              </div>

              {/* Review 2: David B. */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl sm:rounded-3xl border border-neutral-200/70 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  {/* 5 Orange Stars */}
                  <div className="flex items-center gap-1 text-[#F95700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F95700]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {TESTIMONIALS[1].content}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200/60 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden shrink-0 border border-neutral-300">
                      <img
                        src={TESTIMONIALS[1].avatar}
                        alt={TESTIMONIALS[1].name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-neutral-900">
                        {TESTIMONIALS[1].name}
                      </h4>
                      <p className="text-[11px] text-neutral-500">
                        {TESTIMONIALS[1].role}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-neutral-400 rotate-180" />
                </div>
              </div>

            </div>

            {/* Bottom Row: 1 Testimonial Card & 1 Video Walkthrough Player */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              
              {/* Review 3: Emma R. */}
              <div className="sm:col-span-5 bg-[#FAF7F2] p-6 rounded-2xl sm:rounded-3xl border border-neutral-200/70 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  {/* 5 Orange Stars */}
                  <div className="flex items-center gap-1 text-[#F95700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F95700]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {TESTIMONIALS[2].content}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200/60 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden shrink-0 border border-neutral-300">
                      <img
                        src={TESTIMONIALS[2].avatar}
                        alt={TESTIMONIALS[2].name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-neutral-900">
                        {TESTIMONIALS[2].name}
                      </h4>
                      <p className="text-[11px] text-neutral-500">
                        {TESTIMONIALS[2].role}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-neutral-400 rotate-180" />
                </div>
              </div>

              {/* Video Walkthrough Player Preview Card (Exact Match to Screenshot 9) */}
              <div
                onClick={onOpenVideo}
                className="sm:col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-md cursor-pointer group min-h-[220px]"
              >
                <img
                  src={ASSETS.chaletWalkthrough}
                  alt="Mountain Chalet Roof Walkthrough Video"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />

                {/* Play Button Icon */}
                <div className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/90 text-neutral-950 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <Play className="w-4 h-4 fill-neutral-950 ml-0.5" />
                </div>

                {/* Video Player Scrubber Bar (Matching Screenshot 9) */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-white space-y-1.5 z-10">
                  
                  {/* Progress Line */}
                  <div className="h-1 w-full bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F95700] w-1/3 rounded-full" />
                  </div>

                  {/* Player Controls & Timestamp (5:07 / 15:28) */}
                  <div className="flex items-center justify-between text-[11px] text-neutral-300">
                    <div className="flex items-center gap-2">
                      <Play className="w-3 h-3 fill-white" />
                      <span className="font-mono tabular-nums">5:07 / 15:28</span>
                    </div>

                    <div className="flex items-center gap-2 text-[10px]">
                      <span className="font-bold border border-white/40 px-1 rounded">CC</span>
                      <span className="font-bold text-[#F95700]">HD</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
