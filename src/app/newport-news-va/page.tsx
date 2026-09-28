import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: "SR22 Insurance Newport News VA",
  description: "Need SR-22 insurance in Newport News, VA? Tidewater SR22 Insurance Virginia Beach offers fast, affordable filings for high-risk drivers. Call (757) 960-7569.",
};

export default function LocationPage() {
  const page = getPageBySlug("/newport-news-va/");
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp"
      secondaryImage="/images/car-insurance-concept-toy-car-covered-by-umbrella-2026-03-26-23-19-45-utc.webp"
      badgeText="Newport News, VA SR-22 Coverage"
    />
  );
}
