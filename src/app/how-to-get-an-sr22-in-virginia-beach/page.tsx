import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'How to Get SR-22 Insurance in Virginia Beach, VA | Tidewater SR22',
  description: 'Step-by-step guide to getting an SR-22 in Virginia Beach: documents needed, DMV processing, costs, and common mistakes to avoid. Call (757) 960-7569.',
};

export default function HowToGetSr22Page() {
  const page = getPageBySlug('/how-to-get-an-sr22-in-virginia-beach/');
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp"
      secondaryImage="/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp"
      badgeText="How to Get SR-22 Guide"
    />
  );
}
