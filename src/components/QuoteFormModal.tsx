import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Calendar, Calculator, Home, Building2 } from 'lucide-react';
import { SERVICES } from '../data/roofingData';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteFormModal: React.FC<QuoteFormModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [service, setService] = useState(preselectedService || 'roof-replacement');
  const [sqFt, setSqFt] = useState(2400);
  const [material, setMaterial] = useState('metal');
  const [preferredDate, setPreferredDate] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Approximate instant cost calculator
  const materialMultipliers: Record<string, number> = {
    shingles: 4.5,
    metal: 9.8,
    tile: 12.5,
    membrane: 6.2,
  };

  const baseCost = Math.round(sqFt * (materialMultipliers[material] || 5.0));
  const minCost = Math.round(baseCost * 0.9);
  const maxCost = Math.round(baseCost * 1.15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-neutral-950 text-white p-6 md:p-8 relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F95700] mb-2">
            <Calculator className="w-4 h-4" />
            <span>Instant Roof Estimate & Free Inspection</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            Schedule Your Free On-Site Inspection
          </h3>
          <p className="text-neutral-400 text-sm mt-1 max-w-lg">
            No obligation. Receive a 24-point aerial drone assessment and a guaranteed itemized quote within 24 hours.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-neutral-900">
                Inspection Booked Successfully!
              </h4>
              <p className="text-neutral-600 max-w-md mx-auto text-sm">
                Thank you, <strong>{formData.name || 'valued customer'}</strong>. Our master roofing estimator will call you at{' '}
                <strong>{formData.phone || 'your number'}</strong> to confirm your inspection time slot.
              </p>
              
              <div className="bg-[#F8F5F0] p-4 rounded-2xl max-w-sm mx-auto text-left text-xs text-neutral-600 space-y-1.5 border border-neutral-200">
                <div className="flex justify-between pb-1.5 border-b border-neutral-200/80">
                  <span className="text-neutral-500 font-medium">Confirmation Ref:</span>
                  <span className="font-mono font-bold text-neutral-900">ROV-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Estimated Project Size:</span>
                  <span className="font-semibold text-neutral-800">{sqFt.toLocaleString()} sq.ft.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Material Selected:</span>
                  <span className="font-semibold text-neutral-800 capitalize">{material} Roofing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Estimated Price Range:</span>
                  <span className="font-bold text-[#F95700]">${minCost.toLocaleString()} - ${maxCost.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard?.writeText(
                      `ROVEN Roof Estimate: ${sqFt} sq.ft., ${material} roofing. Est: $${minCost} - $${maxCost}.`
                    );
                    alert('Estimate details copied to clipboard!');
                  }}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium rounded-full text-xs transition-colors cursor-pointer"
                >
                  Copy Summary
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#F95700] hover:bg-[#E04E00] text-white font-medium rounded-full text-xs sm:text-sm transition-colors shadow-md cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Property Type Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  1. Property Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPropertyType('residential')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                      propertyType === 'residential'
                        ? 'border-[#F95700] bg-orange-50/50 text-[#F95700] shadow-sm'
                        : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    Residential Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setPropertyType('commercial')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                      propertyType === 'commercial'
                        ? 'border-[#F95700] bg-orange-50/50 text-[#F95700] shadow-sm'
                        : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    Commercial Building
                  </button>
                </div>
              </div>

              {/* Service & Material Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    2. Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    3. Preferred Material
                  </label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                  >
                    <option value="metal">Standing Seam Architectural Metal</option>
                    <option value="shingles">Class 4 Impact Architectural Shingles</option>
                    <option value="tile">Ceramic or Slate Tile</option>
                    <option value="membrane">TPO / Commercial Flat Membrane</option>
                  </select>
                </div>
              </div>

              {/* Square Footage Slider & Cost Estimation Box */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-neutral-200 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-neutral-800">Estimated Roof Area:</span>
                  <span className="font-bold text-[#F95700] tabular-nums text-base">
                    {sqFt.toLocaleString()} sq. ft.
                  </span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="6000"
                  step="100"
                  value={sqFt}
                  onChange={(e) => setSqFt(Number(e.target.value))}
                  className="w-full accent-[#F95700] cursor-pointer"
                />
                <div className="flex justify-between items-center pt-2 border-t border-neutral-200/80 text-xs">
                  <span className="text-neutral-500">Estimated Price Range:</span>
                  <span className="text-sm font-bold text-neutral-900 tabular-nums">
                    ${minCost.toLocaleString()} — ${maxCost.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  4. Your Contact & Property Address
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Property Address or ZIP *"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F95700]" />
                    <span>Preferred Inspection Date (Optional):</span>
                  </div>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F95700]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-[#F95700] hover:bg-[#E04E00] text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Calculating Estimate...
                    </span>
                  ) : (
                    <>
                      <span>Lock In Free Inspection & Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 mt-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Free · No Obligation · Licensed & Insured Master Contractors</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
