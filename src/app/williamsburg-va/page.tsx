import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: "SR22 Insurance Williamsburg VA",
  description: "Need SR-22 insurance in Williamsburg, VA? Tidewater SR22 Insurance Virginia Beach offers fast, affordable filings for high-risk drivers. Call (757) 960-7569.",
};

export default function LocationPage() {
  const page = getPageBySlug("/williamsburg-va/");
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/car-insurance-protection-covered-by-an-umbrella-2026-01-08-08-12-25-utc.webp"
      secondaryImage="/images/protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp"
      badgeText="Williamsburg, VA SR-22 Coverage"
    />
  );
}
