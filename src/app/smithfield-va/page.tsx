import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: "SR22 Insurance Smithfield VA",
  description: "Need SR-22 insurance in Smithfield, VA? Tidewater SR22 Insurance Virginia Beach offers fast, affordable filings for high-risk drivers. Call (757) 960-7569.",
};

export default function LocationPage() {
  const page = getPageBySlug("/smithfield-va/");
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/car-insurance-coverage-with-protection-concept-2026-01-08-08-12-25-utc.webp"
      secondaryImage="/images/insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp"
      badgeText="Smithfield, VA SR-22 Coverage"
    />
  );
}
