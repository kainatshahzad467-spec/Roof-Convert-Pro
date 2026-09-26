import React, { useState } from 'react';
import { Phone, Calendar, ArrowUp, X, MessageSquare, ShieldAlert } from 'lucide-react';

interface FloatingContactWidgetProps {
  onOpenQuote: () => void;
  onOpenCallback: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({
  onOpenQuote,
  onOpenCallback,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Expanded Quick Options */}
      {isOpen && (
        <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-neutral-200/80 mb-2 w-64 space-y-2.5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <span className="text-xs font-bold text-neutral-900 font-display flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Roofing Dispatch
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-neutral-700 p-0.5 rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href="tel:18005557683"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-orange-50 hover:bg-orange-100/80 text-[#F95700] text-xs font-semibold transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-[#F95700] text-white flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-bold">(800) 555-ROOF</div>
              <div className="text-[10px] text-neutral-500 font-normal">Call Now · 24/7 Available</div>
            </div>
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenCallback();
            }}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-neutral-100 text-neutral-800 text-xs font-semibold transition-colors cursor-pointer text-left"
          >
            <div className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <div>
              <div>Request 15-Min Callback</div>
              <div className="text-[10px] text-neutral-500 font-normal">Have an engineer call you</div>
            </div>
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenQuote();
            }}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors cursor-pointer text-left shadow-sm"
          >
            <div className="w-7 h-7 rounded-full bg-[#F95700] text-white flex items-center justify-center shrink-0">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <div>
              <div>Free Inspection &amp; Quote</div>
              <div className="text-[10px] text-neutral-300 font-normal">Instant 24-point drone scan</div>
            </div>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Roofing Assistance Menu"
        className="group flex items-center gap-2.5 bg-neutral-950 hover:bg-black text-white px-4 py-3 rounded-full shadow-2xl border border-neutral-700/80 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold tracking-wide">
          {isOpen ? 'Close' : 'Roof Emergency & Quote'}
        </span>
        <div className="w-6 h-6 rounded-full bg-[#F95700] flex items-center justify-center text-white">
          <Phone className="w-3 h-3" />
        </div>
      </button>
    </div>
  );
};
