import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: "SR22 Insurance Poquoson VA",
  description: "Need SR-22 insurance in Poquoson, VA? Tidewater SR22 Insurance Virginia Beach offers fast, affordable filings for high-risk drivers. Call (757) 960-7569.",
};

export default function LocationPage() {
  const page = getPageBySlug("/poquoson-va/");
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/insurance-concept-of-person-protecting-blue-car-wi-2026-08-04-06-18-31-utc.webp"
      secondaryImage="/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp"
      badgeText="Poquoson, VA SR-22 Coverage"
    />
  );
}
