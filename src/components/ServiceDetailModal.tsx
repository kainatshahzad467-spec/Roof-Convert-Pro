import React from 'react';
import { X, CheckCircle2, Shield, Clock, DollarSign, ArrowRight, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close service modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Header */}
        <div className="relative h-64 sm:h-72 w-full bg-neutral-900 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#F95700] font-bold">
              Service Overview
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F8F5F0] border border-neutral-200 text-xs sm:text-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-500">
                <DollarSign className="w-3.5 h-3.5 text-[#F95700]" />
                <span>Estimated Cost</span>
              </div>
              <p className="font-bold text-neutral-900 text-base">{service.startingPrice}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-500">
                <Clock className="w-3.5 h-3.5 text-[#F95700]" />
                <span>Avg. Completion</span>
              </div>
              <p className="font-bold text-neutral-900 text-base">{service.turnaroundTime}</p>
            </div>
            <div className="col-span-2 sm:col-span-1 space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-500">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Protection</span>
              </div>
              <p className="font-bold text-neutral-900 text-base">50-Year Warranty</p>
            </div>
          </div>

          {/* Included Scope of Work */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#F95700]" />
              <span>What Is Included in this Service</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500 text-center sm:text-left">
              100% Free Drone &amp; Physical Roof Inspection included.
            </div>
            <button
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F95700] hover:bg-[#E04E00] text-white font-semibold rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Book This Service Free Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
