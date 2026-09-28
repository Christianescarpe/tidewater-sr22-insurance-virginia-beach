import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Shield, ArrowUpRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, LOCATIONS } from '@/data/site-data';
import PhoneCTA from './PhoneCTA';

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white border-t border-forest-800">
      {/* Pre-footer Callout Banner */}
      <div className="bg-forest-800/80 border-b border-forest-700/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-sand-100">
              Need Fast SR-22 Proof in Virginia Beach or Hampton Roads?
            </h3>
            <p className="text-sand-300 text-sm md:text-base mt-1">
              Speak with a local licensed specialist for a free, no-pressure quote and fast DMV electronic filing.
            </p>
          </div>
          <div className="shrink-0">
            <PhoneCTA size="lg" variant="primary" />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-terracotta-500 flex items-center justify-center text-white">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-sand-100 tracking-tight">
                Tidewater SR22 Insurance
              </span>
            </div>
            
            <p className="text-sand-300 text-sm leading-relaxed">
              Tidewater SR22 Insurance Virginia Beach proudly serves drivers throughout Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, Portsmouth, Suffolk, Williamsburg, Poquoson, Smithfield, and Yorktown with fast, accurate DMV filings.
            </p>

            <div className="space-y-3 pt-2 text-sm text-sand-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-terracotta-400 transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <PhoneCTA size="sm" variant="outline" className="text-sand-100 border-sand-400 hover:bg-forest-700" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sand-100 font-semibold text-base uppercase tracking-wider border-b border-forest-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-300">
              <li>
                <Link href="/" className="hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/what-is-sr22/" className="hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  What is SR-22?
                </Link>
              </li>
              <li>
                <Link href="/how-to-get-an-sr22-in-virginia-beach/" className="hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  How to Get SR-22
                </Link>
              </li>
              <li>
                <Link href="/non-owners-sr22-insurance/" className="hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  Non-Owner SR-22
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  SR-22 FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  Articles & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-terracotta-400 transition-colors flex items-center gap-1.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sand-100 font-semibold text-base uppercase tracking-wider border-b border-forest-700 pb-2">
              Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm text-sand-300">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={loc.slug}
                  className="hover:text-terracotta-400 transition-colors flex items-center gap-1"
                >
                  <ArrowUpRight className="w-3 h-3 text-terracotta-400" />
                  <span>{loc.pageName.replace(' (Location Page)', '').replace(', VA', '')}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Visible Interactive Google Map Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center justify-between border-b border-forest-700 pb-2">
              <h4 className="text-sand-100 font-semibold text-base uppercase tracking-wider">
                Our Location
              </h4>
              <a
                href={COMPANY_INFO.mapShortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-terracotta-400 hover:text-terracotta-300 inline-flex items-center gap-1"
              >
                <span>View Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Visible Google Map */}
            <div className="w-full h-52 rounded-lg overflow-hidden border border-forest-700 shadow-inner bg-forest-800">
              <iframe
                title="Tidewater SR22 Insurance Virginia Beach Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.592074212075!2d-75.9835740241595!3d36.84644227223403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae903d9c48b77%3A0xa3b316551aa5fd27!2sTidewater%20SR22%20Insurance%20Virginia%20Beach!5e1!3m2!1sen!2sph!4v1790605596451!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>
            <p className="text-xs text-sand-400 flex items-center justify-between">
              <span>513 19th St ste 110, Virginia Beach</span>
              <a
                href={COMPANY_INFO.mapShortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-sand-200"
              >
                Get Directions
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-forest-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-400 gap-4">
          <p>© 2026 Tidewater SR22 Insurance Virginia Beach. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/faq/" className="hover:text-sand-200 transition-colors">
              FAQ
            </Link>
            <Link href="/what-is-sr22/" className="hover:text-sand-200 transition-colors">
              Filing Requirements
            </Link>
            <Link href="/contact-us/" className="hover:text-sand-200 transition-colors">
              Contact
            </Link>
            <a
              href="https://www.dmv.virginia.gov/businesses/insurance/certifications"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sand-200 transition-colors inline-flex items-center gap-1"
            >
              <span>VA DMV Official</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
