import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, Users, ArrowRight, CheckCircle2, MapPin, ChevronRight, Phone } from 'lucide-react';
import PhoneCTA from './PhoneCTA';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionWrapper';
import { PageData, BLOG_POSTS, LOCATIONS, COMPANY_INFO } from '@/data/site-data';

interface HomepageTemplateLayoutProps {
  page: PageData;
  heroImage?: string;
  secondaryImage?: string;
  badgeText?: string;
}

export default function HomepageTemplateLayout({
  page,
  heroImage = '/images/hero-agent.webp',
  secondaryImage = '/images/signing.webp',
  badgeText,
}: HomepageTemplateLayoutProps) {
  // Split content by <h2>
  const sections = page.contentHtml.split(/(?=<h2[^>]*>)/i);
  
  // Section 0: H1 and Hero Intro
  const heroSection = sections[0] || '';
  const h1Match = heroSection.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const h1Text = h1Match ? h1Match[1].replace(/&mdash;/g, '—').replace(/&amp;/g, '&') : page.seoTitle;
  const heroBodyHtml = heroSection.replace(/<h1[^>]*>.*?<\/h1>/i, '').trim();

  // Helper to extract H2 title and clean body
  const parseSection = (secHtml: string | undefined) => {
    if (!secHtml) return { title: '', bodyHtml: '' };
    const h2Match = secHtml.match(/<h2[^>]*>(.*?)<\/h2>/i);
    const title = h2Match ? h2Match[1].replace(/&mdash;/g, '—').replace(/&amp;/g, '&') : '';
    const bodyHtml = secHtml.replace(/<h2[^>]*>.*?<\/h2>/i, '').trim();
    return { title, bodyHtml };
  };

  // Section 1: About / Spotlight
  const sec1 = parseSection(sections[1]);

  // Sections 2, 3, 4: 3-column cards
  const sec2 = parseSection(sections[2]);
  const sec3 = parseSection(sections[3]);
  const sec4 = parseSection(sections[4]);

  // Section 5: Dark Mid-Banner
  const sec5 = parseSection(sections[5]);

  // Section 6: Story / Details
  const sec6 = parseSection(sections[6]);

  // Remaining sections (7 and beyond)
  const remainingSections = sections.slice(7);

  // Default badge text
  const isLocation = page.slug.endsWith('-va/');
  const defaultBadge = badgeText || (isLocation
    ? `${page.pageName.replace(' (Location Page)', '')} SR-22 Specialist`
    : 'Virginia Beach Financial Responsibility Specialist');

  const cardImages = [
    '/images/car-and-motorcycle-crash-on-a-city-street-2026-03-10-04-00-40-utc.webp',
    '/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp',
    '/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp',
  ];

  const recentBlogs = BLOG_POSTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION - INCEPTOS STYLE (Warm Tan / Beige Background) */}
      <section className="bg-sand-300 pt-16 pb-20 md:pt-24 md:pb-28 border-b border-sand-400/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta-600 mb-4 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sand-400 w-fit">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                {isLocation && (
                  <>
                    <span>Locations</span>
                    <span>/</span>
                  </>
                )}
                <span>{defaultBadge}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-forest-800 tracking-tight leading-[1.15] mb-6">
                {h1Text}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div
                className="prose-custom prose-lg text-gray-700 leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: heroBodyHtml }}
              />
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-wrap items-center gap-4">
              <PhoneCTA size="lg" variant="primary" />
              <div className="text-xs text-gray-600 flex items-center gap-1.5 pl-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Local Office: {COMPANY_INFO.address}</span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="hidden lg:block absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-sand-400/40 pointer-events-none blur-2xl" />
      </section>

      {/* 2. VALUE BAR - 3 DARK FOREST GREEN HIGHLIGHT BOXES */}
      <section className="bg-forest-800 text-white py-12 md:py-16 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            <StaggerItem className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-forest-700 flex items-center justify-center shrink-0 text-terracotta-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sand-100 mb-2">
                  Specialized High-Risk Expertise
                </h3>
                <p className="text-sand-300 text-sm leading-relaxed">
                  We work with top-rated carriers that specialize in high-risk coverage, finding competitive rates even with a challenging driving record.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-forest-700 flex items-center justify-center shrink-0 text-terracotta-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sand-100 mb-2">
                  Fast, Accurate Filings
                </h3>
                <p className="text-sand-300 text-sm leading-relaxed">
                  Virginia law requires your SR-22 to be filed correctly and on time. We track deadlines for you so your policy stays active.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-forest-700 flex items-center justify-center shrink-0 text-terracotta-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sand-100 mb-2">
                  {isLocation ? `${page.pageName.replace(' (Location Page)', '')} & Regional Service` : 'Hampton Roads Coverage'}
                </h3>
                <p className="text-sand-300 text-sm leading-relaxed">
                  Serving Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, Portsmouth, Suffolk, Williamsburg, Poquoson, Smithfield, and Yorktown.
                </p>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* 3. ABOUT SECTION - INCEPTOS SPLIT CARD DESIGN (Using Section 1 from Sheet) */}
      {sec1.title && (
        <section className="py-20 md:py-28 bg-sand-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
                About This Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-forest-800 tracking-tight">
                {sec1.title}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Content Card */}
              <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-sand-300 flex flex-col justify-between">
                <div
                  className="prose-custom text-gray-700 leading-relaxed text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: sec1.bodyHtml }}
                />

                <div className="pt-8 mt-6 border-t border-sand-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Immediate Assistance</div>
                    <div className="text-sm text-forest-800 font-bold">Same-Day Electronic DMV Filing</div>
                  </div>
                  <PhoneCTA size="md" variant="primary" />
                </div>
              </div>

              {/* Right Split Color / Photo Blocks (Matching Inceptos Hero/About Card) */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-64 sm:h-auto rounded-2xl overflow-hidden shadow-sm group">
                  <Image
                    src={heroImage}
                    alt={page.seoTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent flex items-end p-5">
                    <span className="text-white text-sm font-semibold">Expert Coverage Review</span>
                  </div>
                </div>

                <div className="relative h-64 sm:h-auto rounded-2xl overflow-hidden shadow-sm group">
                  <Image
                    src="/images/agreement.webp"
                    alt="Car insurance agreement and paperwork"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-terracotta-500/85 hover:bg-terracotta-500/75 transition-colors flex flex-col justify-end p-6 text-white">
                    <div className="text-xs uppercase tracking-widest font-semibold text-sand-200 mb-1">Clear Guidance</div>
                    <h4 className="text-lg font-bold">Virginia DMV Certified Support</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. 3-COLUMN CARDS GRID - "ACTUALLY WHAT WE DO" (Using Sections 2, 3, 4 from Sheet) */}
      {(sec2.title || sec3.title || sec4.title) && (
        <section className="py-20 md:py-28 bg-white border-y border-sand-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
                Actually What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-forest-800 tracking-tight">
                Coverage Details &amp; Filing Process
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              {sec2.title && (
                <StaggerItem className="bg-sand-100 rounded-2xl overflow-hidden border border-sand-300 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={cardImages[0]}
                      alt={sec2.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-forest-800 mb-3">
                        {sec2.title}
                      </h3>
                      <div
                        className="prose-custom text-sm text-gray-700 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: sec2.bodyHtml }}
                      />
                    </div>
                    <div className="pt-6 mt-6 border-t border-sand-300">
                      <PhoneCTA size="md" variant="primary" className="w-full" />
                    </div>
                  </div>
                </StaggerItem>
              )}

              {/* Card 2 */}
              {sec3.title && (
                <StaggerItem className="bg-sand-100 rounded-2xl overflow-hidden border border-sand-300 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={cardImages[1]}
                      alt={sec3.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-forest-800 mb-3">
                        {sec3.title}
                      </h3>
                      <div
                        className="prose-custom text-sm text-gray-700 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: sec3.bodyHtml }}
                      />
                    </div>
                    <div className="pt-6 mt-6 border-t border-sand-300">
                      <PhoneCTA size="md" variant="primary" className="w-full" />
                    </div>
                  </div>
                </StaggerItem>
              )}

              {/* Card 3 */}
              {sec4.title && (
                <StaggerItem className="bg-sand-100 rounded-2xl overflow-hidden border border-sand-300 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={cardImages[2]}
                      alt={sec4.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-forest-800 mb-3">
                        {sec4.title}
                      </h3>
                      <div
                        className="prose-custom text-sm text-gray-700 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: sec4.bodyHtml }}
                      />
                    </div>
                    <div className="pt-6 mt-6 border-t border-sand-300">
                      <PhoneCTA size="md" variant="primary" className="w-full" />
                    </div>
                  </div>
                </StaggerItem>
              )}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* 5. MID-PAGE BANNER - INCEPTOS DARK GREEN BANNER (Using Section 5 from Sheet) */}
      {sec5.title && (
        <section className="bg-forest-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta-400">
                  Compliance &amp; DMV Tracking
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-100 tracking-tight leading-tight">
                  {sec5.title}
                </h2>
                <div
                  className="prose-custom text-sand-200 text-base md:text-lg leading-relaxed [&>a]:text-terracotta-300 [&>p]:text-sand-200"
                  dangerouslySetInnerHTML={{ __html: sec5.bodyHtml }}
                />
                <div className="pt-2">
                  <PhoneCTA size="lg" variant="primary" />
                </div>
              </div>

              {/* Right side dual photo boxes */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="relative h-60 rounded-xl overflow-hidden border border-forest-600 shadow-md">
                  <Image
                    src="/images/coverage-umbrella.webp"
                    alt="Coverage and protection concept"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-60 rounded-xl overflow-hidden border border-forest-600 shadow-md">
                  <Image
                    src="/images/protection-hands.webp"
                    alt="Protecting car insurance concept"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 6. TWO-COLUMN STORY SECTION (Using Section 6 from Sheet) */}
      {sec6.title && (
        <section className="py-20 md:py-28 bg-sand-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                  Local Specialists
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-forest-800 tracking-tight">
                  {sec6.title}
                </h2>
                <div
                  className="prose-custom text-gray-700 leading-relaxed text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: sec6.bodyHtml }}
                />
                <div className="p-4 rounded-xl bg-white border border-sand-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-sm text-gray-700">
                    <span className="font-bold text-forest-800 block">Visit our local office:</span>
                    {COMPANY_INFO.address}
                  </div>
                  <PhoneCTA size="md" variant="primary" />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg border border-sand-300">
                  <Image
                    src={secondaryImage}
                    alt={sec6.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 7. REMAINING SECTIONS FROM SHEET (If Any) */}
      {remainingSections.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-t border-sand-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-sand-100 rounded-2xl p-8 sm:p-12 border border-sand-300 shadow-sm">
              {remainingSections.map((secChunk, idx) => {
                const parsed = parseSection(secChunk);
                return (
                  <div key={idx} className={idx > 0 ? 'mt-10 pt-10 border-t border-sand-300' : ''}>
                    {parsed.title && (
                      <h2 className="text-2xl md:text-3xl font-extrabold text-forest-800 tracking-tight mb-4">
                        {parsed.title}
                      </h2>
                    )}
                    <div
                      className="prose-custom text-gray-700 leading-relaxed text-base md:text-lg"
                      dangerouslySetInnerHTML={{ __html: parsed.bodyHtml }}
                    />
                  </div>
                );
              })}

              <div className="mt-10 pt-8 border-t border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-forest-800">Ready to Get Back on the Road?</div>
                  <div className="text-xs text-gray-600">Get a free, no-pressure quote and same-day electronic filing.</div>
                </div>
                <PhoneCTA size="md" variant="primary" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. HAMPTON ROADS SERVICE AREAS NAVIGATION GRID */}
      <section className="py-16 md:py-20 bg-sand-100 border-t border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-forest-800 tracking-tight">
              Serving Virginia Beach and the Greater Hampton Roads Area
            </h2>
            <p className="text-gray-600 mt-3 text-base">
              Tidewater SR22 Insurance Virginia Beach proudly serves drivers throughout the region. No matter which side of the water you&apos;re on, our team can typically get quotes turned around the same day.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {LOCATIONS.map((loc) => {
              const isCurrent = loc.slug === page.slug;
              return (
                <Link
                  key={loc.slug}
                  href={loc.slug}
                  className={`p-4 rounded-xl border text-center transition-all duration-200 group shadow-sm hover:shadow ${
                    isCurrent
                      ? 'bg-forest-800 text-white border-forest-800 ring-2 ring-terracotta-400'
                      : 'bg-white hover:bg-forest-800 hover:text-white border-sand-300'
                  }`}
                >
                  <span className={`block font-semibold text-sm ${isCurrent ? 'text-sand-100' : 'text-forest-800 group-hover:text-sand-100'}`}>
                    {loc.pageName.replace(' (Location Page)', '').replace(', VA', '')}
                  </span>
                  <span className={`text-xs ${isCurrent ? 'text-terracotta-300' : 'text-gray-500 group-hover:text-sand-300'}`}>
                    {isCurrent ? 'Current City' : 'Virginia'}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm mb-4">
              Insurance jargon can be confusing, especially when you&apos;re already dealing with a suspended license. Check out our <Link href="/faq/" className="text-terracotta-600 underline font-medium">FAQ</Link> page for quick answers, or reach out directly through our <Link href="/contact-us/" className="text-terracotta-600 underline font-medium">Contact Us</Link> page.
            </p>
            <PhoneCTA size="md" variant="primary" />
          </div>
        </div>
      </section>

      {/* 9. NEWS & HELPFUL GUIDES / BLOG POSTS - 3 COLUMN CARDS */}
      <section className="py-20 md:py-28 bg-white border-t border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
                Blog
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-forest-800 tracking-tight">
                News &amp; Helpful Guides
              </h2>
            </div>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 hover:text-terracotta-600 transition-colors"
            >
              <span>View All 10 Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogs.map((blog, idx) => {
              const images = [
                "/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp",
                "/images/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp",
                "/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp"
              ];
              return (
                <article
                  key={blog.slug}
                  className="bg-sand-100 rounded-2xl overflow-hidden border border-sand-300 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={images[idx % images.length]}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-terracotta-600 uppercase tracking-wider block mb-2">
                        {blog.targetKeyword || 'Virginia SR-22 Guide'}
                      </span>
                      <h3 className="text-lg font-bold text-forest-800 mb-3 line-clamp-2 hover:text-terracotta-600 transition-colors">
                        <Link href={blog.slug}>
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                        {blog.metaDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-sand-200 flex items-center justify-between">
                      <Link
                        href={blog.slug}
                        className="text-xs font-semibold text-forest-800 hover:text-terracotta-600 transition-colors flex items-center gap-1"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <PhoneCTA size="sm" variant="outline" showIcon={false} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
