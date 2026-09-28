import React from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronRight } from 'lucide-react';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { FadeIn } from '@/components/MotionWrapper';
import PhoneCTA from '@/components/PhoneCTA';
import { getPageBySlug } from '@/data/site-data';

export const metadata = {
  title: 'SR-22 Insurance FAQ | Tidewater SR22 Insurance Virginia Beach',
  description: 'Answers to the most common SR-22 insurance questions: cost, timeline, non-owner policies, and more. Call Tidewater SR22 Virginia Beach at (757) 960-7569.',
};

export default function FaqPage() {
  const faqData = getPageBySlug('/faq/');
  const rawHtml = faqData?.contentHtml || '';

  // Extract FAQ questions and answers from HTML
  const faqItems: FaqItem[] = [];
  const parts = rawHtml.split(/(?=<h2[^>]*>)/i);

  // The first part has the H1 and intro
  const introPart = parts[0] || '';
  
  for (let i = 1; i < parts.length; i++) {
    const chunk = parts[i];
    const qMatch = chunk.match(/<h2[^>]*>(.*?)<\/h2>/i);
    if (qMatch) {
      const question = qMatch[1].replace(/&mdash;/g, '—').replace(/&amp;/g, '&');
      const answerHtml = chunk.replace(/<h2[^>]*>.*?<\/h2>/i, '').trim();
      faqItems.push({ question, answerHtml });
    }
  }

  return (
    <div className="flex flex-col  bg-sand-100">
      
      {/* 1. HERO HEADER - INCEPTOS STYLE */}
      <section className="bg-sand-300 pt-16 pb-20 md:pt-20 md:pb-24 border-b border-sand-400/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-terracotta-600 font-bold mb-3">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>FAQ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-forest-800 tracking-tight leading-tight mb-4">
              Frequently Asked Questions About SR-22 Insurance
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Here are the questions Virginia Beach and Virginia drivers ask us most often about SR-22 insurance. If you don&apos;t see your question below, our <Link href="/contact-us/" className="text-terracotta-600 underline font-medium">Contact Us</Link> page connects you directly with a specialist.
            </p>
            <PhoneCTA size="md" variant="primary" />
          </FadeIn>
        </div>
      </section>

      {/* 2. FAQ ACCORDION SECTION */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn delay={0.1}>
          <FaqAccordion items={faqItems} />
        </FadeIn>
      </section>

    </div>
  );
}
