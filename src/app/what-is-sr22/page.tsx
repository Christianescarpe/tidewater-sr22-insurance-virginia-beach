import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'What Is SR-22 Insurance? | Tidewater SR22 Virginia Beach',
  description: 'Confused about SR-22 requirements? Learn what an SR-22 is, who needs one in Virginia, and how long you must carry it. Free help: (757) 960-7569.',
};

export default function WhatIsSr22Page() {
  const page = getPageBySlug('/what-is-sr22/');
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage="/images/car-insurance-concept-toy-car-covered-by-umbrella-2026-03-26-23-19-45-utc.webp"
      secondaryImage="/images/protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp"
      badgeText="What Is SR-22? Guide"
    />
  );
}
