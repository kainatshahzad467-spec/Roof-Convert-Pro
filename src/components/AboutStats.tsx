import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ASSETS, STATS } from '../data/roofingData';

interface AboutStatsProps {
  onLearnMore: () => void;
}

export const AboutStats: React.FC<AboutStatsProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-8 sm:py-12 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-16 shadow-sm border border-neutral-200/60">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story, Copy & Stats */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* Header Content Group with refined spacing */}
            <div className="space-y-6 sm:space-y-8">
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F95700] tracking-wider">
                <span>--- About Us</span>
              </div>

              {/* Main Headline Group with clean separation */}
              <div className="space-y-4 max-w-xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-neutral-900 leading-[1.3] tracking-tight">
                  We provide expert roofing solutions with quality craftsmanship and reliable service.
                </h2>
                
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Whether you need a new installation, repair, or replacement, our skilled team is dedicated to ensuring your roof lasts.
                </p>

                {/* Yahan text-neutral-500 ko text-neutral-600 kar diya hai */}
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed pt-2">
                  We want to be your top choice for roofing by prioritizing quality, being honest, and ensuring our customers are happy.
                </p>
              </div>
            </div>

            {/* Action Button: Learn More */}
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="group inline-flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Learn More</span>
                <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

            {/* Metrics Bar (Exact Numbers from Screenshot 3 & 4) */}
            <div className="pt-8 sm:pt-10 border-t border-neutral-100">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#F95700] tabular-nums tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-neutral-600 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photo Pair (Matching Screenshot 3) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            
            {/* Photo 1: Precision Shingles & Decking */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-100 shadow-sm border border-neutral-200/50 group">
              <img
                src={ASSETS.residentialMetal}
                alt="Precision architectural standing seam metal roofing on cedar home"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-medium">Standing Seam Architectural Finish</span>
              </div>
            </div>

            {/* Photo 2: Roofer Working on Pitch */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-100 shadow-sm border border-neutral-200/50 mt-6 sm:mt-10 group">
              <img
                src={ASSETS.serviceRepair}
                alt="Expert roofer in safety gear performing precision flashing repair"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-medium">Certified Master Craftsmen</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};