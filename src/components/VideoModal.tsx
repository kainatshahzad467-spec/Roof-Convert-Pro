import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck } from 'lucide-react';
import { ASSETS } from '../data/roofingData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestInspection: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onRequestInspection,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(33);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-neutral-950 rounded-3xl shadow-2xl border border-neutral-800 overflow-hidden my-6">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-neutral-800 text-white">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="text-sm sm:text-base font-display font-semibold">
              Project Walkthrough: Highland Alpine Chalet Standing Seam Restoration
            </h4>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center group overflow-hidden">
          <img
            src={ASSETS.chaletWalkthrough}
            alt="Alpine Chalet Standing Seam Metal Roof Walkthrough"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />

          {/* Video Overlay / Play-Pause Trigger */}
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity"
          >
            {!isPlaying && (
              <div className="w-20 h-20 rounded-full bg-white/90 text-neutral-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                <Play className="w-8 h-8 fill-neutral-950 ml-1" />
              </div>
            )}
          </div>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-white space-y-2">
            
            {/* Progress Scrubber */}
            <div className="relative h-1.5 w-full bg-white/30 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-[#F95700] rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#F95700] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#F95700] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-neutral-300 tabular-nums">05:07 / 15:28</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-bold">CC</span>
                <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-bold text-[#F95700]">4K HD</span>
                <Maximize2 className="w-4 h-4 cursor-pointer hover:text-[#F95700]" />
              </div>
            </div>

          </div>
        </div>

        {/* Video Context & Call to Action */}
        <div className="p-6 bg-neutral-900 border-t border-neutral-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Tested to 140 MPH Mountain Gale Winds & 80 lbs/sqft Snow Load</span>
            </div>
            <p className="text-xs text-neutral-400">
              Master Craftsmanship walkthrough hosted by Senior Field Inspector Robert Vance.
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestInspection();
            }}
            className="px-6 py-2.5 bg-[#F95700] hover:bg-[#E04E00] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md transition-colors cursor-pointer"
          >
            Book Free On-Site Inspection
          </button>
        </div>

      </div>
    </div>
  );
};
