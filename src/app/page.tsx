import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, Users, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import PhoneCTA from '@/components/PhoneCTA';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { SEO_PAGES, BLOG_POSTS, LOCATIONS, COMPANY_INFO } from '@/data/site-data';

export const metadata = {
  title: 'SR22 Insurance Virginia Beach VA | Tidewater SR22',
  description: 'Confused by SR-22 requirements in Virginia Beach? Learn what an SR-22 actually is, who needs one, and how to get filed fast. Call (757) 960-7569.',
};

export default function HomePage() {
  const homeData = SEO_PAGES[0]; // Home page from sheet
  const recentBlogs = BLOG_POSTS.slice(0, 3);

  return (
    <div className="flex flex-col ">
      
      {/* 1. HERO SECTION - INCEPTOS STYLE (Warm Tan / Beige Background) */}
      <section className="bg-sand-300 pt-16 pb-20 md:pt-24 md:pb-28 border-b border-sand-400/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-terracotta-600 mb-4 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-sand-400">
                Virginia Beach Financial Responsibility Specialist
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-forest-800 tracking-tight leading-[1.15] mb-6">
                SR-22 Insurance in Virginia Beach, Virginia
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                If you&apos;re dealing with a suspended driver&apos;s license in Virginia Beach or the surrounding Tidewater area, you&apos;ve likely heard you need an SR-22. But what does that actually mean, who needs one, and how do you get back on the road without overpaying? Here&apos;s everything you need to know about Virginia SR-22 insurance &mdash; and how we make the process painless.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-wrap items-center gap-4">
              <PhoneCTA size="lg" variant="primary" />
              <div className="text-xs text-gray-600 flex items-center gap-1.5 pl-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Local Office: 513 19th St ste 110, Virginia Beach</span>
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
            
            {/* Box 1 */}
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

            {/* Box 2 */}
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

            {/* Box 3 */}
            <StaggerItem className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-forest-700 flex items-center justify-center shrink-0 text-terracotta-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sand-100 mb-2">
                  Hampton Roads Coverage
                </h3>
                <p className="text-sand-300 text-sm leading-relaxed">
                  Serving Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, Portsmouth, Suffolk, Williamsburg, Poquoson, Smithfield, and Yorktown.
                </p>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* 3. ABOUT SECTION - INCEPTOS SPLIT CARD DESIGN */}
      <section className="py-20 md:py-28 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
              About Tidewater
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-forest-800 tracking-tight">
              Why Drivers Across Virginia Beach Choose Tidewater
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Content Card */}
            <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-sand-300 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Getting an SR-22 filed isn&apos;t complicated, but getting it done wrong can cost you weeks of driving time and unnecessary fees. At Tidewater SR22 Insurance Virginia Beach, we&apos;ve helped thousands of drivers across Coastal Virginia navigate the reinstatement process quickly and affordably.
                </p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  We work with top-rated carriers that specialize in high-risk coverage, which means we can find competitive rates even if you&apos;re facing a challenging driving record.
                </p>
              </div>

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
              {/* Photo 1 */}
              <div className="relative h-64 sm:h-auto rounded-2xl overflow-hidden shadow-sm group">
                <Image
                  src="/images/hero-agent.webp"
                  alt="Tidewater Insurance Agent reviewing coverage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-white text-sm font-semibold">Expert Coverage Review</span>
                </div>
              </div>

              {/* Photo 2 / Terracotta Accent Card */}
              <div className="relative h-64 sm:h-auto rounded-2xl overflow-hidden shadow-sm group">
                <Image
                  src="/images/agreement.webp"
                  alt="Car insurance agreement and keys"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-terracotta-500/85 hover:bg-terracotta-500/75 transition-colors flex flex-col justify-end p-6 text-white">
                  <div className="text-xs uppercase tracking-widest font-semibold text-sand-200 mb-1">Affordable Options</div>
                  <h4 className="text-lg font-bold">Clear Guidance Without Upselling</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO NEEDS AN SR-22 IN VIRGINIA & COVERAGE OPTIONS - 3 COLUMN GRID */}
      <section className="py-20 md:py-28 bg-white border-y border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
              Actually What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-forest-800 tracking-tight">
              Who Needs an SR-22 &amp; Available Coverage
            </h2>
            <p className="text-gray-600 mt-4 text-base md:text-lg">
              The Virginia Department of Motor Vehicles (DMV) typically requires an SR-22 certificate &mdash; officially called a Financial Responsibility Certification &mdash; following certain driving events or license suspensions.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <StaggerItem className="bg-sand-100 rounded-2xl overflow-hidden border border-sand-300 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/car-and-motorcycle-crash-on-a-city-street-2026-03-10-04-00-40-utc.webp"
                  alt="Accident and suspension SR-22 requirements"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-forest-800 mb-3">
                    Who Needs an SR-22 in Virginia
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                      <span>Operating a motor vehicle without valid insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                      <span>Unsatisfied judgments stemming from a crash</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                      <span>Failing to provide insurance verification upon request</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                      <span>Falsifying insurance certification during registration</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500">
                    See our <Link href="/what-is-sr22/" className="text-terracotta-600 underline font-medium">guide to SR-22 certificate requirements</Link>.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-sand-300">
                  <PhoneCTA size="md" variant="primary" className="w-full" />
                </div>
              </div>
            </StaggerItem>

            {/* Card 2 */}
            <StaggerItem className="bg-sand-100 rounded-2xl overflow-hidden border border-sand-300 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp"
                  alt="Coverage Options For Every Situation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-forest-800 mb-3">
                    Coverage Options for Every Situation
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Not everyone needing an SR-22 owns a car. If you don&apos;t currently own a vehicle but still need to satisfy Virginia&apos;s filing requirement, a non-owner policy is usually the more affordable path.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Our <Link href="/non-owners-sr22-insurance/" className="text-terracotta-600 underline font-medium">non-owner policy options</Link> page explains how this type of policy works, who qualifies, and how much lower the premiums typically run compared to a standard owner policy.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We also work with motorcycle riders, owner-operators, and drivers who need coverage on vehicles they don&apos;t personally own.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-sand-300">
                  <PhoneCTA size="md" variant="primary" className="w-full" />
                </div>
              </div>
            </StaggerItem>

            {/* Card 3 */}
            <StaggerItem className="bg-sand-100 rounded-2xl overflow-hidden border border-sand-300 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp"
                  alt="Virginia Beach license reinstatement"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-forest-800 mb-3">
                    Virginia Beach Reinstatement
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    If any of this sounds familiar, chances are the DMV has already notified you. For the full step-by-step process, visit our <Link href="/how-to-get-an-sr22-in-virginia-beach/" className="text-terracotta-600 underline font-medium">Virginia Beach license reinstatement and filing guide</Link>, which walks through exactly what to expect from start to finish.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Whatever your situation, we&apos;ve likely handled something similar before and will guide you straight to the finish line.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-sand-300">
                  <PhoneCTA size="md" variant="primary" className="w-full" />
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* 5. MID-PAGE BANNER - INCEPTOS DARK GREEN ACCENT WITH PHOTO PREVIEWS */}
      <section className="bg-forest-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-400">
                Compliance &amp; DMV Tracking
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-100 tracking-tight leading-tight">
                Fast, Accurate Filings
              </h2>
              <p className="text-sand-200 text-base md:text-lg leading-relaxed">
                Virginia law requires your SR-22 to be filed correctly and on time &mdash; missing the deadline can mean an extended suspension and additional reinstatement fees.
              </p>
              <p className="text-sand-300 text-sm md:text-base leading-relaxed">
                According to <a href="https://www.dmv.virginia.gov/businesses/insurance/certifications" target="_blank" rel="noopener noreferrer" className="text-terracotta-400 underline font-medium hover:text-terracotta-300">Virginia DMV&apos;s official SR-22 filing requirements</a>, drivers must maintain their filing for the entire required period, and DMV will suspend driving privileges again if the filing lapses. We track these deadlines for you and keep your policy active so you never have to think twice about it.
              </p>
              <div className="pt-2">
                <PhoneCTA size="lg" variant="primary" />
              </div>
            </div>

            {/* Right side dual photo boxes (matching Inceptos layout) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="relative h-60 rounded-xl overflow-hidden border border-forest-600 shadow-md">
                <Image
                  src="/images/car-insurance-concept-with-toy-car-and-umbrella-2026-01-08-08-12-26-utc.webp"
                  alt="Protection concept"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-60 rounded-xl overflow-hidden border border-forest-600 shadow-md">
                <Image
                  src="/images/protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp"
                  alt="Hands protecting toy car"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHAT MAKES TIDEWATER DIFFERENT - TWO COLUMN STORY SECTION */}
      <section className="py-20 md:py-28 bg-sand-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
                Our Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-forest-800 tracking-tight">
                What Makes Tidewater Different
              </h2>
              
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                A lot of agencies treat SR-22 filings as an afterthought &mdash; a box to check on the way to selling a standard policy. We do the opposite. SR-22 filings are the core of what we do, every single day, which means we&apos;ve seen nearly every version of the situation you&apos;re in. That experience matters when you&apos;re on a deadline: we know which carriers process filings the fastest, which ones offer the best rates for your specific violation type, and which paperwork mistakes tend to cause delays at the DMV.
              </p>

              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                We also believe in straight talk. If a non-owner policy will save you money and still meet your requirement, we&apos;ll tell you that instead of upselling you into a more expensive plan. If your rates are going to be higher because of a recent violation, we&apos;ll say so honestly and help you find the most competitive option available rather than the flashiest one. Our goal isn&apos;t a single sale &mdash; it&apos;s making sure you stay compliant, stay insured, and get back to normal as quickly as possible.
              </p>

              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                That approach has made us a go-to resource for drivers throughout Virginia Beach and the Hampton Roads metro who want a straightforward answer instead of a sales pitch.
              </p>

              <div className="p-4 rounded-xl bg-white border border-sand-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-sm text-gray-700">
                  <span className="font-bold text-forest-800 block">Visit our local office:</span>
                  513 19th St ste 110, Virginia Beach, VA 23451, United States
                </div>
                <PhoneCTA size="md" variant="primary" />
              </div>
            </div>

            {/* Right Photo Block */}
            <div className="lg:col-span-5">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg border border-sand-300">
                <Image
                  src="/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp"
                  alt="Signing auto insurance document"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SERVICE AREAS - HAMPTON ROADS REGION */}
      <section className="py-16 md:py-20 bg-white border-t border-sand-300">
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
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={loc.slug}
                className="p-4 rounded-xl bg-sand-100 hover:bg-forest-800 hover:text-white border border-sand-300 text-center transition-all duration-200 group shadow-sm hover:shadow"
              >
                <span className="block font-semibold text-sm group-hover:text-sand-100 text-forest-800">
                  {loc.pageName.replace(' (Location Page)', '').replace(', VA', '')}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-sand-300">Virginia</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm mb-4">
              Insurance jargon can be confusing, especially when you&apos;re already dealing with a suspended license. Check out our <Link href="/faq/" className="text-terracotta-600 underline font-medium">FAQ</Link> page for quick answers, or reach out directly through our <Link href="/contact-us/" className="text-terracotta-600 underline font-medium">Contact Us</Link> page.
            </p>
            <PhoneCTA size="md" variant="primary" />
          </div>
        </div>
      </section>

      {/* 8. NEWS & PRESS RELEASE / BLOG POSTS - 3 COLUMN CARDS */}
      <section className="py-20 md:py-28 bg-sand-100 border-t border-sand-300">
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
                  className="bg-white rounded-2xl overflow-hidden border border-sand-300 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={images[idx % images.length]}
                      alt={blog.title || blog.pageName}
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
                          {blog.title || blog.pageName}
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
