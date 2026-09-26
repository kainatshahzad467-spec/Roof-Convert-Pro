import React, { useState } from 'react';
import { X, PhoneCall, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [urgency, setUrgency] = useState<'emergency' | 'standard'>('standard');
  const [issue, setIssue] = useState('leak');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-neutral-950 text-white p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F95700] mb-1">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct Dispatch</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Request Rapid Callback
          </h3>
          <p className="text-neutral-400 text-xs mt-1">
            Speak directly with a Master Roofing Technician in under 15 minutes.
          </p>
        </div>

        {/* Form / Confirmation */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-display text-neutral-900">
                Callback Requested!
              </h4>
              <p className="text-neutral-600 text-xs leading-relaxed">
                Thank you <strong>{name}</strong>. Senior Technician Vance will call <strong>{phone}</strong> in approximately 10–15 minutes.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Urgency Level */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                  Urgency Level
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('standard')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      urgency === 'standard'
                        ? 'border-[#F95700] bg-orange-50/50 text-[#F95700]'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    General Inquiry (Today)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('emergency')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      urgency === 'emergency'
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    Active Leak / Urgent
                  </button>
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                  Topic of Discussion
                </label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                >
                  <option value="leak">Active Roof Leak / Water Infiltration</option>
                  <option value="storm">Recent Storm / Hail Damage Assessment</option>
                  <option value="quote">Free Estimate &amp; Pricing Question</option>
                  <option value="metal">Metal vs Shingle Architectural Advice</option>
                  <option value="commercial">Commercial Flat Roof / TPO System</option>
                </select>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number for Callback *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#F95700] hover:bg-[#E04E00] text-white font-semibold rounded-full text-xs shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Connecting to Dispatch...</span>
                  ) : (
                    <>
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Request Immediate Callback</span>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Licensed Field Technicians · 100% Confidential</span>
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
