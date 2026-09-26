import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/roofingData';
import { ServiceItem } from '../types';

interface ServicesCarouselProps {
  onSelectService: (serviceId: string) => void;
  onViewServiceDetail?: (service: ServiceItem) => void;
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({
  onSelectService,
  onViewServiceDetail,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SERVICES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
  };

  // Wireframe geometric icons matching Screenshot 7
  const renderServiceIcon = (type: string) => {
    switch (type) {
      case 'installation':
        return (
          <svg className="w-9 h-9 stroke-[#F95700] fill-none" viewBox="0 0 40 40">
            <polygon points="20,6 6,32 34,32" strokeWidth="2.2" strokeLinejoin="round" />
            <line x1="14" y1="32" x2="20" y2="18" strokeWidth="2" />
            <line x1="26" y1="32" x2="20" y2="18" strokeWidth="2" />
          </svg>
        );
      case 'replacement':
        return (
          <svg className="w-9 h-9 stroke-[#F95700] fill-none" viewBox="0 0 40 40">
            <circle cx="16" cy="20" r="10" strokeWidth="2.2" />
            <circle cx="24" cy="20" r="10" strokeWidth="2.2" />
          </svg>
        );
      case 'repair':
        return (
          <svg className="w-9 h-9 stroke-[#F95700] fill-none" viewBox="0 0 40 40">
            <path d="M20 7L33 30H7L20 7Z" strokeWidth="2.2" strokeLinejoin="round" />
            <ellipse cx="20" cy="23" rx="8" ry="4" strokeWidth="2" />
          </svg>
        );
      case 'inspection':
        return (
          <svg className="w-9 h-9 stroke-[#F95700] fill-none" viewBox="0 0 40 40">
            <path d="M8 26L20 12L32 26L20 30L8 26Z" strokeWidth="2.2" strokeLinejoin="round" />
            <line x1="20" y1="12" x2="20" y2="30" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-8 sm:py-14 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-sm border border-neutral-200/60 space-y-10">
        
        {/* Header (Exact Copy from Screenshot 7) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs sm:text-sm font-semibold text-[#F95700] tracking-wide">
            --- Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900 tracking-tight">
            Let&apos;s Build a Roof That Lasts
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We offer roofing solutions for homes and businesses, ensuring durable craftsmanship and reliable protection.
          </p>
        </div>

        {/* 4 Cards Grid (Matching Layout of Screenshot 7) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const isFeatured = currentIndex === idx;
            return (
              <div
                key={service.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  if (onViewServiceDetail) {
                    onViewServiceDetail(service);
                  } else {
                    onSelectService(service.id);
                  }
                }}
                className={`group flex flex-col justify-between p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FBF9F6] border transition-all duration-300 cursor-pointer ${
                  isFeatured
                    ? 'border-[#F95700] ring-2 ring-[#F95700]/20 shadow-md -translate-y-1'
                    : 'border-neutral-200/70 hover:border-[#F95700]/50 hover:shadow-lg'
                }`}
              >
                {/* Upper Content: Custom Wireframe Icon & Text */}
                <div className="space-y-4">
                  <div className="p-1">
                    {renderServiceIcon(service.iconType)}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900 group-hover:text-[#F95700] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed min-h-[44px]">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Lower Content: Real Photographic Showcase (Matching Screenshot 7) */}
                <div className="mt-6 space-y-3">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 shadow-inner">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Instant Quote Callout */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:text-[#F95700] transition-colors">
                    <span>From {service.startingPrice}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#F95700]">
                      Details &amp; Quote <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Carousel Bottom Pagination Controls (Matching Screenshot 7) */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            onClick={prevSlide}
            aria-label="Previous service"
            className="w-9 h-9 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {SERVICES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-neutral-900' : 'w-2 bg-neutral-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next service"
            className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
