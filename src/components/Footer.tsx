import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onNavClick: (id: string) => void;
  onOpenQuote: () => void;
  onOpenLegal?: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenQuote, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 sm:mt-24 bg-[#0A0A0A] text-white rounded-t-[36px] sm:rounded-t-[54px] pt-16 sm:pt-24 pb-8 px-4 sm:px-8 lg:px-14 overflow-hidden relative select-none">
      
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Top Centered Brand & Pitch (Matching Screenshot 10) */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold tracking-widest uppercase">
            ROVEN
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
            Discover timeless protection crafted with premium quality, modern design, and everyday durability for every home.
          </p>

          {/* Social Icons (Orange Instagram + 3 Dark Squares, Matching Screenshot 10) */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-[#F95700] hover:bg-[#E04E00] text-white flex items-center justify-center transition-transform hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white flex items-center justify-center transition-transform hover:scale-105"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white flex items-center justify-center transition-transform hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white flex items-center justify-center transition-transform hover:scale-105"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Secondary Navigation Row (Matching Screenshot 10) */}
        <div className="py-5 border-y border-neutral-800/80">
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-medium text-neutral-300">
            <button
              onClick={() => onNavClick('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavClick('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => onNavClick('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Our Services
            </button>
            <button
              onClick={() => onNavClick('projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavClick('faqs')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQs
            </button>
            <button
              onClick={onOpenQuote}
              className="hover:text-[#F95700] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </nav>
        </div>

        {/* Legal Links Bar (Matching Screenshot 10) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-400 uppercase">
          <button
            onClick={() => onOpenLegal ? onOpenLegal('privacy') : onOpenQuote()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            PRIVACY POLICY
          </button>
          <span className="text-neutral-700">|</span>
          <button
            onClick={() => onOpenLegal ? onOpenLegal('terms') : onOpenQuote()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            TERMS &amp; CONDITIONS
          </button>
          <span className="text-neutral-700">|</span>
          <button
            onClick={() => onOpenLegal ? onOpenLegal('cookies') : onOpenQuote()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            COOKIE POLICY
          </button>
        </div>

        {/* Massive Typographic Wordmark "ROVEN" (Exact Layout from Screenshot 10) */}
        <div className="pt-6 sm:pt-10 overflow-hidden text-center">
          <h1 className="text-[22vw] font-display font-extrabold text-white tracking-tighter leading-none select-none pointer-events-none">
            ROVEN
          </h1>
        </div>

        {/* Back to top floating chip */}
        <div className="flex items-center justify-between text-xs text-neutral-600 pt-4 border-t border-neutral-900">
          <span>&copy; {new Date().getFullYear()} ROVEN Architectural Roofing Systems. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
