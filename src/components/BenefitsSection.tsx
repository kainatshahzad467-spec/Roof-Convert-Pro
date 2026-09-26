import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/roofingData';

interface BenefitsSectionProps {
  onTalkToUs: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onTalkToUs }) => {
  const [quickSqFt, setQuickSqFt] = useState(2200);
  const [quickMaterial, setQuickMaterial] = useState<'shingle' | 'metal' | 'tile'>('metal');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const priceRates: Record<string, number> = {
    shingle: 4.8,
    metal: 9.5,
    tile: 13.0,
  };

  const calculatedMin = Math.round(quickSqFt * priceRates[quickMaterial] * 0.9);
  const calculatedMax = Math.round(quickSqFt * priceRates[quickMaterial] * 1.15);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone) return;
    setQuickSubmitted(true);
  };

  return (
    <section className="py-8 sm:py-14 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* High-Contrast Dark Container */}
      <div className="bg-[#101010] text-white rounded-[28px] sm:rounded-[38px] p-6 sm:p-12 lg:p-16 shadow-2xl border border-neutral-800">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Heading & Contractor Highlight Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-4">
              <div className="text-xs sm:text-sm font-semibold text-[#F95700] tracking-wide">
                --- Benefits
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] xl:text-[2.5rem] font-display font-bold text-white tracking-tight leading-snug">
                Let&apos;s create a roof that really holds up!
              </h2>
            </div>

            {/* Contractor Card - Fixed Alignment */}
            <div className="bg-neutral-900/90 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-neutral-800 flex flex-row items-center gap-4 sm:gap-5">
              {/* Contractor Real Photo */}
              <div className="w-20 h-24 sm:w-28 sm:h-32 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-neutral-800 self-center">
                <img
                  src={ASSETS.contractor}
                  alt="Master roofing specialist holding drill"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Text and Button Container - Centered */}
              <div className="flex flex-col justify-center space-y-3 flex-1 text-left">
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  We aim to be your top roofing choice by prioritizing quality, honesty, and customer satisfaction.
                </p>
                <div>
                  <button
                    onClick={onTalkToUs}
                    className="group inline-flex items-center gap-2 bg-[#F95700] hover:bg-[#E04E00] text-white font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Let&apos;s Talk to Us</span>
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white text-[#F95700] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Value Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 border-t lg:border-t-0 lg:border-l border-neutral-800/80 pt-8 lg:pt-0 lg:pl-12">
            
            {/* Pillar 1: Premium Materials */}
            <div className="space-y-3">
              <div className="w-12 h-12 flex items-center justify-center text-white">
                <svg className="w-10 h-10 stroke-white fill-none" viewBox="0 0 40 40">
                  <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" strokeWidth="1.8" />
                  <line x1="20" y1="4" x2="20" y2="36" strokeWidth="1.8" />
                  <line x1="6" y1="12" x2="34" y2="28" strokeWidth="1.5" />
                  <line x1="34" y1="12" x2="6" y2="28" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold text-white">
                Premium Materials
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We select high-quality roofing materials from trusted brands for durability.
              </p>
            </div>

            {/* Pillar 2: Fast Turnaround */}
            <div className="space-y-3">
              <div className="w-12 h-12 flex items-center justify-center text-white">
                <svg className="w-10 h-10 stroke-white fill-none" viewBox="0 0 40 40">
                  <rect x="8" y="10" width="8" height="20" rx="4" transform="rotate(-25 12 20)" strokeWidth="1.8" />
                  <rect x="18" y="10" width="8" height="20" rx="4" transform="rotate(-25 22 20)" strokeWidth="1.8" />
                  <rect x="28" y="10" width="8" height="20" rx="4" transform="rotate(-25 32 20)" strokeWidth="1.8" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold text-white">
                Fast Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We select high-quality roofing materials from trusted brands for durability.
              </p>
            </div>

            {/* Pillar 3: Honest Pricing */}
            <div className="space-y-3">
              <div className="w-12 h-12 flex items-center justify-center text-white">
                <svg className="w-10 h-10 stroke-white fill-none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="14" strokeWidth="1.8" />
                  <path d="M20 6 A14 14 0 0 1 34 20 A7 7 0 0 1 20 27 A7 7 0 0 1 13 20" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="20" cy="20" r="4" strokeWidth="1.8" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold text-white">
                Honest Pricing
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Receive clear, upfront estimates with no hidden costs or unexpected surprises.
              </p>
            </div>

            {/* Pillar 4: Free Roof Inspection */}
            <div className="space-y-3">
              <div className="w-12 h-12 flex items-center justify-center text-white">
                <svg className="w-10 h-10 stroke-white fill-none" viewBox="0 0 40 40">
                  <polygon points="20,6 28,11 20,16 12,11" strokeWidth="1.8" />
                  <polygon points="12,16 20,21 20,31 12,26" strokeWidth="1.8" />
                  <polygon points="28,16 28,26 20,31 20,21" strokeWidth="1.8" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold text-white">
                Free Roof Inspection
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We select high-quality roofing materials from trusted brands for durability.
              </p>
            </div>

          </div>

        </div>

        {/* Lead-Generation Instant Quote Section */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-neutral-800">
          <div className="bg-neutral-900/70 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-800 max-w-4xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#F95700] uppercase tracking-wider">
                  Instant Calculator
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Get a Free Estimate in 30 Seconds
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Select your roof size and material for an immediate estimated price range.
                </p>
              </div>

              {/* Live Price Tag */}
              <div className="bg-neutral-950 px-5 py-3 rounded-2xl border border-neutral-800 text-right">
                <span className="text-[11px] text-neutral-400 block">Estimated Cost:</span>
                <span className="text-xl sm:text-2xl font-display font-bold text-[#F95700] tabular-nums">
                  ${calculatedMin.toLocaleString()} –${calculatedMax.toLocaleString()}
                </span>
              </div>
            </div>

            {quickSubmitted ? (
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/80 flex items-center gap-3 text-emerald-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <strong>Estimate reserved!</strong> Our technician will call {quickPhone} to confirm your free drone inspection date.
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="text-neutral-400 block mb-1">Roof Size ({quickSqFt} sq ft):</label>
                    <input
                      type="range"
                      min="1000"
                      max="4500"
                      step="100"
                      value={quickSqFt}
                      onChange={(e) => setQuickSqFt(Number(e.target.value))}
                      className="w-full accent-[#F95700] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-neutral-400 block mb-1">Material Preference:</label>
                    <div className="grid grid-cols-3 gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800">
                      {(['shingle', 'metal', 'tile'] as const).map((mat) => (
                        <button
                          key={mat}
                          type="button"
                          onClick={() => setQuickMaterial(mat)}
                          className={`py-1 rounded text-[11px] font-medium capitalize transition-colors ${
                            quickMaterial === mat
                              ? 'bg-[#F95700] text-white'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          {mat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-neutral-400 block mb-1">Your Phone for Inspection:</label>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        className="w-full px-3 py-1.5 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-[#F95700]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-[#F95700] hover:bg-[#E04E00] text-white rounded-lg text-xs font-semibold shrink-0 transition-colors cursor-pointer"
                      >
                        Claim Free Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Free on-site drone survey included with zero obligation</span>
                  </div>
                  <button
                    type="button"
                    onClick={onTalkToUs}
                    className="text-[#F95700] hover:underline"
                  >
                    Need Commercial / Custom Assessment? →
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};