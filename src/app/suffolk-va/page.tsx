import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: "SR22 Insurance Suffolk VA",
  description: "Need SR-22 insurance in Suffolk, VA? Tidewater SR22 Insurance Virginia Beach offers fast, affordable filings for high-risk drivers. Call (757) 960-7569.",
};

export default function LocationPage() {
  const page = getPageBySlug("/suffolk-va/");
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/woman-inspecting-damage-car-after-auto-accident-2026-03-27-03-00-53-utc.webp"
      secondaryImage="/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp"
      badgeText="Suffolk, VA SR-22 Coverage"
    />
  );
}
