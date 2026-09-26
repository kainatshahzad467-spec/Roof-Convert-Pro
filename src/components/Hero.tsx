import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/roofingData';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section id="home" className="relative pt-3 sm:pt-4 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* Cinematic Hero Container */}
      <div className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden shadow-2xl border border-black/10 bg-neutral-900 flex flex-col justify-between">
        
        {/* Background Roof Photography */}
        <div className="absolute inset-0">
          <img
            src={ASSETS.hero}
            alt="Luxury modern architectural black tile roof with glowing clerestory windows"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center select-none"
          />
          {/* Subtle vignette & bottom gradient scrim to guarantee WCAG AA contrast for text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/90 pointer-events-none" />
        </div>

        {/* Big Subtle "ROVEN" Sky Backdrop Text (Matching Screenshot 1 & 2) */}
        <div 
          aria-hidden="true" 
          className="absolute top-16 sm:top-20 left-0 right-0 flex justify-center pointer-events-none select-none z-10"
        >
          <span className="font-display font-extrabold text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-none text-white/18 tracking-widest uppercase">
            ROVEN
          </span>
        </div>

        {/* Top Spacer for floating Navbar */}
        <div className="h-28 sm:h-32" />

        {/* Bottom Hero Headline & Action Overlay (Centered Alignment) */}
        <div className="relative z-20 px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12 lg:pb-14 pt-16 flex justify-center">
          <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 mx-auto w-fit">
            
            {/* Row 1: Left description + "LET'S BUILD A" */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 sm:gap-4 lg:gap-5">
              <p className="text-white/75 text-[11px] sm:text-xs md:text-[13px] font-normal leading-[1.35] text-center sm:text-right shrink-0">
                Delivering durable roofing systems with<br />quality and expert craftsmanship.
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-display font-medium text-white tracking-tight uppercase leading-none text-center sm:text-left">
                LET&apos;S BUILD A
              </h1>
            </div>

            {/* Row 2: "ROOF THAT LASTS" + "Get Started" Pill Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 sm:gap-5 lg:gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] xl:text-[4.7rem] font-display font-medium text-white tracking-tight uppercase leading-none text-center sm:text-left">
                ROOF THAT LASTS
              </h2>

              {/* Get Started Pill Button */}
              <div className="shrink-0 flex items-center justify-center">
                <button
                  onClick={onGetStarted}
                  className="group inline-flex items-center gap-3 bg-white hover:bg-neutral-100 text-neutral-900 pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span className="font-medium text-neutral-900">Get Started</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F95700] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
