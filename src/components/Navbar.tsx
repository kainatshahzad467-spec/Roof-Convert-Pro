import React, { useState } from 'react';
import { Home, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: true },
    { id: 'services', label: 'Solutions' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'faqs', label: "FAQ's" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 pt-6 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        {/* Brand Logo - Crisp Single Text Element */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="text-2xl sm:text-3xl font-display font-extrabold tracking-wider text-white transition-opacity hover:opacity-90 select-none"
        >
          ROVEN
        </a>

        {/* Center Floating Pill Navigation (Desktop) */}
        <div className="hidden md:flex items-center bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-full shadow-lg border border-white/60">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#F95700] text-white shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-950'
                }`}
              >
                {item.icon && <Home className="w-3.5 h-3.5" />}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenQuote}
            className="group bg-white hover:bg-neutral-50 text-neutral-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center gap-2.5 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Let&apos;s Talk to Us</span>
            <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenQuote}
            className="bg-white text-neutral-900 font-semibold px-3 py-1.5 rounded-full text-xs flex items-center gap-1 shadow-sm"
          >
            Quote
            <ArrowUpRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60 animate-fadeIn space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-2.5 rounded-xl text-left text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#F95700] text-white font-semibold'
                    : 'text-neutral-800 hover:bg-neutral-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon && <Home className="w-4 h-4" />}
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </button>
            );
          })}
          <div className="pt-2 border-t border-neutral-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Get Free Quote & Inspection</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
