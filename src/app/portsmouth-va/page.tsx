import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: "SR22 Insurance Portsmouth VA",
  description: "Need SR-22 insurance in Portsmouth, VA? Tidewater SR22 Insurance Virginia Beach offers fast, affordable filings for high-risk drivers. Call (757) 960-7569.",
};

export default function LocationPage() {
  const page = getPageBySlug("/portsmouth-va/");
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/insurance-adjuster-inspecting-damage-on-wrecked-ca-2026-03-27-02-57-59-utc.webp"
      secondaryImage="/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp"
      badgeText="Portsmouth, VA SR-22 Coverage"
    />
  );
}
