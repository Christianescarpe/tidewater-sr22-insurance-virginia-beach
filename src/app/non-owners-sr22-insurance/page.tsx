import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Non-Owner SR22 Insurance Virginia Beach VA | Tidewater SR22',
  description: 'Need an SR-22 in Virginia Beach but don\'t own a car? Non-owner SR-22 insurance satisfies DMV requirements at a lower cost. Call (757) 960-7569.',
};

export default function NonOwnersSr22Page() {
  const page = getPageBySlug('/non-owners-sr22-insurance/');
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp"
      secondaryImage="/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp"
      badgeText="Non-Owner SR-22 Policy"
    />
  );
}
