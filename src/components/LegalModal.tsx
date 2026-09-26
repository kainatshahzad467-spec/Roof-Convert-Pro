import React from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'cookies';

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: ShieldCheck,
      updated: 'September 2026',
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'We collect homeowner contact details (name, phone number, address, and email) provided voluntarily when booking free inspections or requesting roofing estimates. We also collect aerial diagnostic imagery captured during consented drone inspections.'
        },
        {
          heading: '2. How We Use Your Data',
          body: 'Your information is used strictly to prepare engineering roof assessments, schedule on-site visits, and coordinate warranty filings. We never sell, lease, or distribute your personal details to third-party telemarketers.'
        },
        {
          heading: '3. Data Security & Storage',
          body: 'All client project records, drone scan files, and invoices are encrypted using bank-grade 256-bit SSL encryption and stored securely in compliance with strict privacy standards.'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      updated: 'September 2026',
      sections: [
        {
          heading: '1. Estimates & Inspections',
          body: 'All preliminary estimates and initial 24-point drone inspections are provided 100% complimentary with zero contractual obligation to purchase services.'
        },
        {
          heading: '2. Workmanship & Manufacturer Warranties',
          body: 'ROVEN warrants all installation and replacement projects with our transferable 10-year workmanship guarantee in addition to the 50-year manufacturer material warranty.'
        },
        {
          heading: '3. Licensing & Insurance',
          body: 'All work is performed by fully licensed, bonded, and comprehensively insured master roofing technicians covered by general commercial liability and worker compensation policies.'
        }
      ]
    },
    cookies: {
      title: 'Cookie Policy',
      icon: Cookie,
      updated: 'September 2026',
      sections: [
        {
          heading: '1. Essential Cookies',
          body: 'We use necessary cookies solely to maintain your interactive session, store calculator preferences (e.g. square footage and material selections), and remember your cookie preferences.'
        },
        {
          heading: '2. Performance & Analytics',
          body: 'Anonymous telemetry helps us understand page loading speeds, user navigation flow, and device responsiveness to continuously improve customer experience.'
        },
        {
          heading: '3. Managing Preferences',
          body: 'You can disable cookies at any time via your browser settings without impairing your ability to browse our project portfolio or submit a quote request.'
        }
      ]
    }
  };

  const current = contentMap[type];
  const IconComponent = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-neutral-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            aria-label="Close legal modal"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F95700] mb-2">
            <IconComponent className="w-4 h-4" />
            <span>ROVEN Legal Documentation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {current.title}
          </h3>
          <p className="text-neutral-400 text-xs mt-1">
            Last Updated: {current.updated} · Official ROVEN Compliance Guidelines
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {current.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="text-sm sm:text-base font-bold text-neutral-900 font-display">
                {sec.heading}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-neutral-50 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full text-xs transition-colors cursor-pointer"
          >
            Understood &amp; Close
          </button>
        </div>

      </div>
    </div>
  );
};
