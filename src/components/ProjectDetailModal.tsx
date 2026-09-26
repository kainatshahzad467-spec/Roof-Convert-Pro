import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, Hammer, ShieldCheck, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual or Interactive Comparison Slider */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full bg-neutral-900 overflow-hidden select-none">
          {project.beforeImage ? (
            <div className="relative w-full h-full">
              {/* After Image */}
              <img
                src={project.image}
                alt={`${project.title} - Finished Restoration`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-4 right-4 z-10 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md font-medium">
                After Restoration
              </span>

              {/* Before Image with Clip Path */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <img
                  src={project.beforeImage}
                  alt={`${project.title} - Before Restoration`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute bottom-4 left-4 z-10 bg-[#F95700]/90 text-white text-xs px-2.5 py-1 rounded-md font-medium">
                  Before Damage
                </span>
              </div>

              {/* Slider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 cursor-ew-resize"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-lg text-xs font-bold">
                  ↔
                </div>
              </div>

              {/* Invisible interactive range input for touch/mouse drag */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <span className="bg-[#F95700] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {project.category}
            </span>
            <span className="bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#F8F5F0] border border-neutral-200 text-xs sm:text-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-500">
                <MapPin className="w-3.5 h-3.5 text-[#F95700]" />
                <span>Location</span>
              </div>
              <p className="font-semibold text-neutral-800">{project.location}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-500">
                <Clock className="w-3.5 h-3.5 text-[#F95700]" />
                <span>Turnaround</span>
              </div>
              <p className="font-semibold text-neutral-800">{project.duration}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-500">
                <Hammer className="w-3.5 h-3.5 text-[#F95700]" />
                <span>Specification</span>
              </div>
              <p className="font-semibold text-neutral-800 truncate">{project.material}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Warranty</span>
              </div>
              <p className="font-semibold text-neutral-800">50-Year Protected</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-neutral-100">
            <div className="text-xs text-neutral-500 text-center sm:text-left">
              Interested in a similar roof specification for your property?
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F95700] hover:bg-[#E04E00] text-white font-medium rounded-full text-sm shadow-md transition-colors"
            >
              <span>Get Quote for Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
