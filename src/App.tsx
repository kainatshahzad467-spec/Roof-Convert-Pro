import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStats } from './components/AboutStats';
import { ServicesCarousel } from './components/ServicesCarousel';
import { ProjectGallery } from './components/ProjectGallery';
import { BenefitsSection } from './components/BenefitsSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuoteFormModal } from './components/QuoteFormModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { VideoModal } from './components/VideoModal';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { CallbackModal } from './components/CallbackModal';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { ProjectItem, ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [legalDocType, setLegalDocType] = useState<LegalDocType | null>(null);

  // ScrollSpy to update active tab in floating pill navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'faqs'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 180;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuote = (serviceId?: string) => {
    setSelectedServiceForQuote(serviceId || '');
    setIsQuoteOpen(true);
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3ECE4] text-neutral-900 selection:bg-[#F95700] selection:text-white">
      {/* Floating Pill Top Navbar */}
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero onGetStarted={() => handleOpenQuote()} />

        {/* 2. Trust-Building Stats & About Us Section */}
        <AboutStats onLearnMore={() => handleNavClick('projects')} />

        {/* 3. Core Services Grid & Carousel */}
        <ServicesCarousel
          onSelectService={(serviceId) => handleOpenQuote(serviceId)}
          onViewServiceDetail={(service) => setSelectedServiceDetail(service)}
        />

        {/* 4. Editorial Project Gallery */}
        <ProjectGallery
          onSelectProject={(project) => setSelectedProject(project)}
          onExploreMore={() => handleOpenQuote()}
        />

        {/* 5. High-Contrast Benefits Section with Lead Generation Form */}
        <BenefitsSection onTalkToUs={() => handleOpenQuote()} />

        {/* 6. Local Trust & Testimonials + Video Walkthrough */}
        <Testimonials onOpenVideo={() => setIsVideoModalOpen(true)} />

        {/* 7. Homeowner FAQs Accordion */}
        <FaqSection onAskQuestion={() => setIsCallbackOpen(true)} />
      </main>

      {/* 8. Modern High-Impact Brand Footer */}
      <Footer
        onNavClick={handleNavClick}
        onOpenQuote={() => handleOpenQuote()}
        onOpenLegal={(type) => setLegalDocType(type)}
      />

      {/* Floating 24/7 Quick Dispatch & Quote Widget */}
      <FloatingContactWidget
        onOpenQuote={() => handleOpenQuote()}
        onOpenCallback={() => setIsCallbackOpen(true)}
      />

      {/* Interactive Modals */}
      <QuoteFormModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedService={selectedServiceForQuote}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={() => {
          setSelectedProject(null);
          handleOpenQuote();
        }}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onBookService={(serviceId) => {
          setSelectedServiceDetail(null);
          handleOpenQuote(serviceId);
        }}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onRequestInspection={() => {
          setIsVideoModalOpen(false);
          handleOpenQuote();
        }}
      />

      <CallbackModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
      />

      <LegalModal
        type={legalDocType}
        onClose={() => setLegalDocType(null)}
      />
    </div>
  );
}
