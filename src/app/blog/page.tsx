import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import PhoneCTA from '@/components/PhoneCTA';
import { BLOG_POSTS } from '@/data/site-data';

export const metadata = {
  title: 'Virginia SR-22 Guides & Articles | Tidewater SR22 Insurance',
  description: 'Expert guides, costs, reinstatement instructions, and FAQs on Virginia SR-22 insurance. Call (757) 960-7569 for personal assistance.',
};

const blogImages = [
  "/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp",
  "/images/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp",
  "/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp",
  "/images/car-and-motorcycle-crash-on-a-city-street-2026-03-10-04-00-40-utc.webp",
  "/images/insurance-adjuster-inspecting-damage-after-car-cra-2026-01-05-05-08-40-utc.webp",
  "/images/car-insurance-concept-toy-car-covered-by-umbrella-2026-03-26-23-19-45-utc.webp",
  "/images/woman-inspecting-damage-car-after-auto-accident-2026-03-27-03-00-53-utc.webp",
  "/images/protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp",
  "/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp",
  "/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp"
];

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col  bg-sand-100">
      
      {/* 1. HERO HEADER - INCEPTOS STYLE */}
      <section className="bg-sand-300 pt-16 pb-20 md:pt-20 md:pb-24 border-b border-sand-400/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-terracotta-600 font-bold mb-3">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Blog &amp; Knowledge Base</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-forest-800 tracking-tight leading-tight mb-4">
              Virginia SR-22 Guides &amp; Insights
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Straightforward answers about Virginia DMV filing requirements, costs, license reinstatement, non-owner policies, and high-risk coverage.
            </p>
            <PhoneCTA size="md" variant="primary" />
          </FadeIn>
        </div>
      </section>

      {/* 2. BLOG POSTS GRID */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => {
            const img = blogImages[idx % blogImages.length];
            return (
              <StaggerItem key={post.slug} className="flex">
                <article className="bg-white rounded-2xl overflow-hidden border border-sand-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between w-full group">
                  <div>
                    <div className="relative h-52 w-full overflow-hidden bg-sand-200">
                      <Image
                        src={img}
                        alt={(post.title || post.pageName) || post.pageName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-terracotta-600 uppercase tracking-wider mb-2">
                        <Tag className="w-3.5 h-3.5" />
                        <span>{post.targetKeyword || 'Virginia SR-22'}</span>
                      </div>
                      <h2 className="text-xl font-bold text-forest-800 mb-3 leading-snug group-hover:text-terracotta-600 transition-colors">
                        <Link href={post.slug}>
                          {(post.title || post.pageName)}
                        </Link>
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {post.metaDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-sand-200 mt-4 flex items-center justify-between">
                    <Link
                      href={post.slug}
                      className="text-xs font-bold text-forest-800 group-hover:text-terracotta-600 transition-colors flex items-center gap-1.5"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <PhoneCTA size="sm" variant="outline" showIcon={false} />
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

    </div>
  );
}
