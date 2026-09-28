import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/data/site-data';

export default function TopBar() {
  return (
    <div className="bg-forest-900 border-b border-forest-700/50 text-white/90 text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <div className="flex items-center gap-1.5 text-sand-300">
            <MapPin className="w-3.5 h-3.5 text-terracotta-400 shrink-0" />
            <span>{COMPANY_INFO.address}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sand-300">
            <Clock className="w-3.5 h-3.5 text-terracotta-400 shrink-0" />
            <span>Fast Same-Day SR-22 Filings</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-terracotta-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-terracotta-400 shrink-0 animate-phone-ring" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
