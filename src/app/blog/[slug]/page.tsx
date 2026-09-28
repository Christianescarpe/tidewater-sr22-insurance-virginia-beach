import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Tag, MapPin, Share2, ChevronRight } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';
import PhoneCTA from '@/components/PhoneCTA';
import { BLOG_POSTS, COMPANY_INFO } from '@/data/site-data';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => {
    // Post slug in data is like "/blog/virginia-sr22-insurance-cost/"
    const cleanSlug = post.slug.replace(/^\/blog\//, '').replace(/\/$/, '');
    return {
      slug: cleanSlug,
    };
  });
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find(
    (p) => p.slug.replace(/^\/blog\//, '').replace(/\/$/, '') === params.slug
  );

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.seoTitle} | Tidewater SR22 Insurance`,
    description: post.metaDescription,
  };
}

const blogImages: Record<string, string> = {
  'virginia-sr22-insurance-cost': '/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp',
  'how-to-reinstate-suspended-license-virginia': '/images/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp',
  'non-owner-vs-owner-sr22-virginia': '/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp',
  'virginia-dui-fr44-sr22-insurance': '/images/car-and-motorcycle-crash-on-a-city-street-2026-03-10-04-00-40-utc.webp',
  'what-happens-when-sr22-lapses-virginia': '/images/insurance-adjuster-inspecting-damage-after-car-cra-2026-01-05-05-08-40-utc.webp',
  'virginia-restricted-license-guide': '/images/car-insurance-concept-toy-car-covered-by-umbrella-2026-03-26-23-19-45-utc.webp',
  'motorcycle-sr22-insurance-virginia': '/images/woman-inspecting-damage-car-after-auto-accident-2026-03-27-03-00-53-utc.webp',
  'moving-to-virginia-with-out-of-state-sr22': '/images/protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp',
  'how-to-cancel-sr22-virginia': '/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp',
  'sr22-insurance-uninsured-accident-virginia': '/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp',
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find(
    (p) => p.slug.replace(/^\/blog\//, '').replace(/\/$/, '') === params.slug
  );

  if (!post) {
    notFound();
  }

  // Remove H1 from HTML to avoid duplication
  const contentBody = post.contentHtml.replace(/<h1[^>]*>.*?<\/h1>/i, '').trim();
  const heroImage = blogImages[params.slug] || '/images/hero-agent.webp';

  // Other related posts
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug.replace(/^\/blog\//, '').replace(/\/$/, '') !== params.slug
  ).slice(0, 3);

  return (
    <article className="flex flex-col  bg-sand-100">
      
      {/* 1. ARTICLE HERO HEADER */}
      <section className="bg-sand-300 pt-16 pb-20 md:pt-20 md:pb-24 border-b border-sand-400/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-terracotta-600 font-bold mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/blog/" className="hover:underline">Blog</Link>
              <span>/</span>
              <span className="truncate max-w-[200px]">{(post.title || post.pageName)}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-sand-400 text-xs font-semibold text-terracotta-600 mb-4">
              <Tag className="w-3.5 h-3.5" />
              <span>{post.targetKeyword || 'Virginia SR-22'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-800 tracking-tight leading-tight mb-6">
              {(post.title || post.pageName)}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              {post.metaDescription}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-sand-400/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-800 text-white flex items-center justify-center font-bold text-sm">
                  TW
                </div>
                <div className="text-xs">
                  <div className="font-bold text-forest-800">Tidewater SR22 Insurance</div>
                  <div className="text-gray-500">Virginia Beach Licensed Specialists</div>
                </div>
              </div>

              <PhoneCTA size="md" variant="primary" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. FEATURED IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full">
        <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-sand-300">
          <Image
            src={heroImage}
            alt={(post.title || post.pageName) || post.pageName}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 3. ARTICLE CONTENT */}
      <section className="py-16 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl p-8 sm:p-14 shadow-sm border border-sand-300">
          <div
            className="prose-custom max-w-none"
            dangerouslySetInnerHTML={{ __html: contentBody }}
          />

          {/* End of article callout */}
          <div className="mt-12 p-8 rounded-2xl bg-forest-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <h3 className="text-xl font-bold text-sand-100 mb-1">
                Need Help with Your Virginia SR-22?
              </h3>
              <p className="text-sand-300 text-sm">
                Get a free quote and same-day electronic filing by calling our Virginia Beach office.
              </p>
            </div>
            <PhoneCTA size="lg" variant="primary" />
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-800 hover:text-terracotta-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>
          <PhoneCTA size="sm" variant="outline" showIcon={false} />
        </div>
      </section>

      {/* 4. RELATED ARTICLES */}
      <section className="py-16 bg-white border-t border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-forest-800 mb-8">
            Related Virginia SR-22 Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rel) => (
              <div
                key={rel.slug}
                className="p-6 rounded-2xl bg-sand-100 border border-sand-300 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-xs uppercase font-bold text-terracotta-600 block mb-2">
                    {rel.targetKeyword || 'Guide'}
                  </span>
                  <h3 className="text-lg font-bold text-forest-800 mb-2 leading-snug">
                    <Link href={rel.slug} className="hover:text-terracotta-600 transition-colors">
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {rel.metaDescription}
                  </p>
                </div>
                <Link
                  href={rel.slug}
                  className="text-xs font-bold text-forest-800 hover:text-terracotta-600 flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
}
