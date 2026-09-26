import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/roofingData';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-8 sm:py-14 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-sm border border-neutral-200/60">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Title & Help Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-semibold text-[#F95700] tracking-wide">
                --- Frequently Asked
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900 tracking-tight">
                Clear Answers to Common Roofing Questions
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Everything you need to know about warranties, insurance claims, materials, and turnaround times.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-neutral-200/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F95700] flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">Have a specific roof query?</h4>
                  <p className="text-xs text-neutral-500">Speak directly with a licensed engineer.</p>
                </div>
              </div>
              <button
                onClick={onAskQuestion}
                className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call or Request Callback</span>
              </button>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 divide-y divide-neutral-100">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4 sm:py-5">
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full flex items-center justify-between gap-4 text-left font-display font-semibold text-base sm:text-lg text-neutral-900 hover:text-[#F95700] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#F95700] text-white' : 'text-neutral-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-sm text-neutral-600 leading-relaxed pr-8 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
