import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, ShieldCheck, ChevronRight, ExternalLink } from 'lucide-react';
import PhoneCTA from '@/components/PhoneCTA';
import { FadeIn } from '@/components/MotionWrapper';
import { COMPANY_INFO, getPageBySlug } from '@/data/site-data';

export const metadata = {
  title: 'Contact Tidewater SR22 Insurance Virginia Beach',
  description: 'Reach our Virginia Beach office for same-day SR-22 filings, quotes, or questions. Direct phone access: (757) 960-7569.',
};

export default function ContactUsPage() {
  const pageData = getPageBySlug('/contact-us/');

  return (
    <div className="flex flex-col  bg-sand-100">
      
      {/* 1. CONTACT HERO BANNER - INCEPTOS STYLE (Dark Forest Green) */}
      <section className="bg-forest-800 text-white pt-16 pb-28 md:pt-20 md:pb-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-sand-100 tracking-tight mb-4">
              Contact
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-sand-300 font-medium">
              <Link href="/" className="hover:text-terracotta-400 transition-colors">
                Home
              </Link>
              <span>—</span>
              <span className="text-terracotta-400">Contact</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. FLOATING CONTACT CARDS (Matching Inceptos floating card box) */}
      <section className="relative -mt-20 md:-mt-24 px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-forest-900 text-white rounded-2xl shadow-xl overflow-hidden border border-forest-700 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-forest-700">
              
              {/* Call Us Block */}
              <div className="p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-forest-800 flex items-center justify-center text-terracotta-400">
                    <Phone className="w-5 h-5 animate-phone-ring" />
                  </div>
                  <h3 className="text-lg font-bold text-sand-100">Call Us</h3>
                  <p className="text-xs text-sand-300">
                    Direct specialist line for free immediate quotes and inquiries.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-xl font-extrabold text-terracotta-400 hover:text-terracotta-300 transition-colors block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-xs text-sand-400">No wait times &bull; Direct access</span>
                </div>
              </div>

              {/* Office Location Block */}
              <div className="p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-forest-800 flex items-center justify-center text-terracotta-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-sand-100">Office</h3>
                  <p className="text-xs text-sand-300">
                    Local Virginia Beach location serving all Hampton Roads.
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-semibold text-sand-200 leading-snug">
                    {COMPANY_INFO.address}
                  </p>
                  <a
                    href={COMPANY_INFO.mapShortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-terracotta-400 hover:underline mt-1 inline-flex items-center gap-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Filing Speed & Commitment */}
              <div className="p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-forest-800 flex items-center justify-center text-terracotta-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-sand-100">Turnaround</h3>
                  <p className="text-xs text-sand-300">
                    Fast electronic submission directly to the Virginia DMV.
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-semibold text-sand-200">
                    Same-Day DMV Filing
                  </p>
                  <span className="text-xs text-sand-400">Electronic verification included</span>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. DIRECT CONTACT ASSISTANCE (NO CONTACT FORM - STRICTLY PER USER REQUIREMENT) */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn delay={0.2} className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-sand-300">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
              Direct Phone Assistance
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-forest-800 tracking-tight">
              Get In Touch With Our Specialists
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              We provide fast phone consultations so you can discuss your driving record directly without lengthy back-and-forth forms.
            </p>
          </div>

          {/* Sheet Content: Our Commitment to You */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg border-t border-sand-200 pt-8">
            <h3 className="text-xl font-bold text-forest-800">Our Commitment to You</h3>
            
            <p>
              We know that reaching out about a suspended license or an SR-22 requirement isn&apos;t something people look forward to doing. There&apos;s often a mix of frustration, confusion, and urgency involved, and we take that seriously. Every call is handled by someone who actually understands Virginia SR-22 filings &mdash; not a general call center reading from a script. You&apos;ll get a real answer about your situation, a real quote, and a real timeline for when you can expect to be back on the road legally.
            </p>

            <p>
              We also stay available after your policy is bound. If you have a question about a renewal, a change in address, or a new vehicle purchase down the line, you can call the same number and reach someone who already knows your file. That continuity matters, especially during a three-year filing period where circumstances can change.
            </p>

            <div className="bg-sand-100 rounded-xl p-6 border border-sand-300 my-6">
              <h4 className="text-lg font-bold text-forest-800 mb-2">Reach Out Today</h4>
              <p className="text-base text-gray-700 mb-6">
                Don&apos;t wait on a suspended license longer than you have to. Call <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-terracotta-600 font-bold underline">{COMPANY_INFO.phone}</a> now, and let&apos;s get your SR-22 filed correctly and affordably.
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Call Tidewater SR22 Insurance Virginia Beach today at <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-terracotta-600 font-semibold underline">{COMPANY_INFO.phone}</a> for a free, no-pressure SR-22 quote. We answer questions fast and file paperwork faster.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <PhoneCTA size="lg" variant="primary" />
                <span className="text-xs text-gray-500">
                  Mon - Fri: Fast quotes &bull; Immediate DMV processing
                </span>
              </div>
            </div>

            {/* Quick Links from sheet */}
            <div className="pt-6 border-t border-sand-200">
              <h4 className="text-sm font-bold text-forest-800 uppercase tracking-wider mb-3">
                Helpful Resources Mentioned in This Guide:
              </h4>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/what-is-sr22/"
                  className="px-4 py-2 rounded-lg bg-sand-200 hover:bg-forest-800 hover:text-white text-xs font-semibold text-forest-800 transition-colors inline-flex items-center gap-1"
                >
                  <span>Virginia SR-22 Explained</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/non-owners-sr22-insurance/"
                  className="px-4 py-2 rounded-lg bg-sand-200 hover:bg-forest-800 hover:text-white text-xs font-semibold text-forest-800 transition-colors inline-flex items-center gap-1"
                >
                  <span>Driver-Only SR-22 Policy</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/faq/"
                  className="px-4 py-2 rounded-lg bg-sand-200 hover:bg-forest-800 hover:text-white text-xs font-semibold text-forest-800 transition-colors inline-flex items-center gap-1"
                >
                  <span>Answers to Common Questions</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://www.dmv.virginia.gov/businesses/insurance/certifications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-sand-200 hover:bg-forest-800 hover:text-white text-xs font-semibold text-forest-800 transition-colors inline-flex items-center gap-1"
                >
                  <span>Virginia DMV Official SR-22 Requirements</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </FadeIn>
      </section>

    </div>
  );
}
