"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, ChevronDown, Menu, X, Phone, FileText, HelpCircle, UserCheck } from 'lucide-react';
import { LOCATIONS, COMPANY_INFO } from '@/data/site-data';
import PhoneCTA from './PhoneCTA';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const services = [
    {
      name: 'What is SR-22?',
      href: '/what-is-sr22/',
      desc: 'Requirements, state rules, and continuous filing guide'
    },
    {
      name: 'How to Get an SR-22',
      href: '/how-to-get-an-sr22-in-virginia-beach/',
      desc: 'Step-by-step license reinstatement roadmap in Virginia Beach'
    },
    {
      name: 'Non-Owner SR-22 Insurance',
      href: '/non-owners-sr22-insurance/',
      desc: 'Affordable driver-only coverage without vehicle ownership'
    },
  ];

  const isServicesActive = services.some(s => pathname === s.href || pathname === s.href.slice(0, -1));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sand-300 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-forest-800 flex items-center justify-center text-white shadow-sm group-hover:bg-forest-700 transition-colors">
              <ShieldCheck className="w-6 h-6 text-terracotta-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-forest-800 leading-tight tracking-tight group-hover:text-forest-700 transition-colors">
                Tidewater SR22
              </span>
              <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
                Virginia Beach, VA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/'
                  ? 'text-forest-800 font-semibold bg-sand-200'
                  : 'text-gray-700 hover:text-forest-800 hover:bg-sand-100'
              }`}
            >
              Home
            </Link>

            {/* SR-22 Insurance Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                  isServicesActive
                    ? 'text-forest-800 font-semibold bg-sand-200'
                    : 'text-gray-700 hover:text-forest-800 hover:bg-sand-100'
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>SR-22 Insurance</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-sand-300 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-sand-200">
                    Virginia SR-22 Services
                  </div>
                  <div className="py-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="px-4 py-2.5 hover:bg-sand-100 block transition-colors group"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="text-sm font-semibold text-forest-800 group-hover:text-terracotta-600 transition-colors">
                          {service.name}
                        </div>
                        <div className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                          {service.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                type="button"
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                  pathname.endsWith('-va/') || pathname.endsWith('-va')
                    ? 'text-forest-800 font-semibold bg-sand-200'
                    : 'text-gray-700 hover:text-forest-800 hover:bg-sand-100'
                }`}
                onClick={() => setLocationsOpen(!locationsOpen)}
              >
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>

              {locationsOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-sand-300 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-sand-200">
                    Hampton Roads Coverage
                  </div>
                  <div className="grid grid-cols-1 py-1 max-h-80 overflow-y-auto">
                    {LOCATIONS.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={loc.slug}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-sand-100 hover:text-forest-800 flex items-center justify-between transition-colors"
                        onClick={() => setLocationsOpen(false)}
                      >
                        <span>{loc.pageName.replace(' (Location Page)', '')}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname.startsWith('/blog')
                  ? 'text-forest-800 font-semibold bg-sand-200'
                  : 'text-gray-700 hover:text-forest-800 hover:bg-sand-100'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/faq/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/faq/' || pathname === '/faq'
                  ? 'text-forest-800 font-semibold bg-sand-200'
                  : 'text-gray-700 hover:text-forest-800 hover:bg-sand-100'
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact-us/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/contact-us/' || pathname === '/contact-us'
                  ? 'text-forest-800 font-semibold bg-sand-200'
                  : 'text-gray-700 hover:text-forest-800 hover:bg-sand-100'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Phone CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <PhoneCTA size="md" variant="primary" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 rounded-md bg-terracotta-500 text-white lg:hidden"
              title="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-forest-800 hover:bg-sand-200 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-sand-300 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              className={`px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === '/' ? 'bg-sand-200 text-forest-800 font-semibold' : 'text-gray-700 hover:bg-sand-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div className="pt-2 pb-1 border-t border-sand-200">
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                SR-22 Insurance Services
              </div>
              <div className="flex flex-col space-y-1 px-2 pt-1">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="px-2 py-1.5 text-sm text-gray-700 hover:text-forest-800 hover:bg-sand-100 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Locations */}
            <div className="pt-2 pb-1 border-t border-sand-200">
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Locations in Hampton Roads
              </div>
              <div className="grid grid-cols-2 gap-1 px-2 pt-1">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={loc.slug}
                    className="px-2 py-1.5 text-sm text-gray-700 hover:text-forest-800 hover:bg-sand-100 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {loc.pageName.replace(' (Location Page)', '')}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog/"
              className={`px-3 py-2.5 rounded-md text-base font-medium ${
                pathname.startsWith('/blog') ? 'bg-sand-200 text-forest-800 font-semibold' : 'text-gray-700 hover:bg-sand-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/faq/"
              className={`px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === '/faq/' ? 'bg-sand-200 text-forest-800 font-semibold' : 'text-gray-700 hover:bg-sand-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            <Link
              href="/contact-us/"
              className={`px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === '/contact-us/' ? 'bg-sand-200 text-forest-800 font-semibold' : 'text-gray-700 hover:bg-sand-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <div className="pt-4 mt-2 border-t border-sand-200 flex flex-col gap-2">
              <PhoneCTA size="lg" variant="primary" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
