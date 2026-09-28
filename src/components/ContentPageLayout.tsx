import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Clock, MapPin, ArrowRight, CheckCircle2, Award, Phone } from 'lucide-react';
import PhoneCTA from './PhoneCTA';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionWrapper';
import { COMPANY_INFO, LOCATIONS, PageData } from '@/data/site-data';

interface ContentPageLayoutProps {
  page: PageData;
  heroImage?: string;
  secondaryImage?: string;
  badgeText?: string;
}

export default function ContentPageLayout({
  page,
  heroImage = '/images/insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp',
  secondaryImage = '/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp',
  badgeText = 'Tidewater SR22 Virginia Beach',
}: ContentPageLayoutProps) {
  // Extract H1 and clean intro
  const h1Match = page.contentHtml.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const h1Text = h1Match ? h1Match[1].replace(/&mdash;/g, '—').replace(/&amp;/g, '&') : page.seoTitle;
  
  // Remove H1 from the body content so it's not duplicated
  const bodyContentHtml = page.contentHtml.replace(/<h1[^>]*>.*?<\/h1>/i, '').trim();

  const isLocationPage = page.slug.endsWith('-va/');

  return (
    <div className="flex flex-col  bg-sand-100">
      
      {/* 1. HERO HEADER - INCEPTOS STYLE (Warm Sand / Beige) */}
      <section className="bg-sand-300 pt-16 pb-20 md:pt-20 md:pb-24 border-b border-sand-400/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-terracotta-600 font-bold mb-3">
                  <Link href="/" className="hover:underline">Home</Link>
                  <span>/</span>
                  {isLocationPage && (
                    <>
                      <span>Locations</span>
                      <span>/</span>
                    </>
                  )}
                  <span className="truncate max-w-[240px]">{page.pageName.replace(' (Location Page)', '')}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-800 tracking-tight leading-tight mb-5">
                  {h1Text}
                </h1>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  {page.metaDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <PhoneCTA size="lg" variant="primary" />
                  <div className="text-xs text-gray-600 flex items-center gap-1.5 pl-1">
                    <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>Office: 513 19th St ste 110, Virginia Beach</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <div className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-sand-400 group">
                  <Image
                    src={heroImage}
                    alt={page.seoTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs uppercase tracking-wider font-semibold text-terracotta-300">
                      {badgeText}
                    </span>
                    <span className="text-white font-bold text-lg">
                      Virginia DMV Financial Responsibility Specialist
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE BAR (Dark Forest Green 3-Feature Bar) */}
      <section className="bg-forest-800 text-white py-10 border-b border-forest-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <StaggerItem className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-forest-700 flex items-center justify-center shrink-0 text-terracotta-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sand-100">Same-Day DMV Filing</div>
                <div className="text-sand-300 text-xs">Direct electronic submission across Virginia</div>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-forest-700 flex items-center justify-center shrink-0 text-terracotta-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sand-100">Continuous Compliance</div>
                <div className="text-sand-300 text-xs">We monitor deadlines so your license doesn&apos;t lapse</div>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-forest-700 flex items-center justify-center shrink-0 text-terracotta-400">
                <Phone className="w-5 h-5 text-terracotta-400 animate-phone-ring" />
              </div>
              <div>
                <div className="font-bold text-sand-100">Direct Phone Quotes</div>
                <div className="text-sand-300 text-xs">Call (757) 960-7569 for zero-pressure rates</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. MAIN BODY CONTENT */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Content Left Column */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-sand-300">
                <div
                  className="prose-custom max-w-none"
                  dangerouslySetInnerHTML={{ __html: bodyContentHtml }}
                />

                {/* Callout box at end of content */}
                <div className="mt-12 p-6 rounded-xl bg-sand-200 border border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-700">
                    <span className="font-bold text-forest-800 block text-base">Questions About Your Requirement?</span>
                    <span>Speak directly with our Virginia Beach specialists today.</span>
                  </div>
                  <PhoneCTA size="md" variant="primary" />
                </div>
              </div>
            </div>

            {/* Sidebar Right Column */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Phone CTA Card */}
              <div className="bg-forest-900 text-white p-7 rounded-2xl border border-forest-700 shadow-md">
                <span className="text-xs uppercase tracking-wider text-terracotta-400 font-bold block mb-2">
                  Immediate Assistance
                </span>
                <h3 className="text-xl font-bold text-sand-100 mb-3">
                  Get Your Free SR-22 Quote
                </h3>
                <p className="text-sand-300 text-sm leading-relaxed mb-6">
                  Talk to a local specialist who understands Virginia DMV filing guidelines. We answer fast and file paperwork faster.
                </p>
                <PhoneCTA size="lg" variant="primary" className="w-full" />
                <div className="mt-4 pt-4 border-t border-forest-700 text-xs text-sand-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-terracotta-400 shrink-0" />
                  <span>513 19th St ste 110, Virginia Beach</span>
                </div>
              </div>

              {/* Side Photo Card */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-sand-300 shadow-sm">
                <Image
                  src={secondaryImage}
                  alt="Virginia insurance paperwork and guidance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-white text-sm font-semibold">Tidewater SR22 Insurance Virginia Beach</span>
                </div>
              </div>

              {/* Service Areas Link Box */}
              <div className="bg-white p-6 rounded-2xl border border-sand-300 shadow-sm">
                <h4 className="text-sm font-bold text-forest-800 uppercase tracking-wider mb-4 border-b border-sand-200 pb-2">
                  Hampton Roads Coverage
                </h4>
                <div className="space-y-1.5 text-sm">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={loc.slug}
                      className="block px-3 py-1.5 rounded-md text-gray-700 hover:bg-sand-200 hover:text-forest-800 transition-colors"
                    >
                      {loc.pageName.replace(' (Location Page)', '')}
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

    </div>
  );
}
