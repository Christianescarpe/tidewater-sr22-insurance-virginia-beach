import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: "SR22 Insurance Chesapeake VA",
  description: "Need SR-22 insurance in Chesapeake, VA? Tidewater SR22 Insurance Virginia Beach offers fast, affordable filings for high-risk drivers. Call (757) 960-7569.",
};

export default function LocationPage() {
  const page = getPageBySlug("/chesapeake-va/");
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp"
      secondaryImage="/images/protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp"
      badgeText="Chesapeake, VA SR-22 Coverage"
    />
  );
}
