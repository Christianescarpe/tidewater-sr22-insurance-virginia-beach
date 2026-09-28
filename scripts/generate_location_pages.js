const fs = require('fs');
const path = require('path');

const seo = JSON.parse(fs.readFileSync('SEO_Content.json', 'utf8'));
const seoRows = seo.slice(1).filter(r => r && r[1]);
const locations = seoRows.filter(r => (r[1] || '').trim().endsWith('-va/') && (r[1] || '').trim() !== '/how-to-get-an-sr22-in-virginia-beach/');

const locationImages = [
  { hero: '/images/car-and-motorcycle-crash-on-a-city-street-2026-03-10-04-00-40-utc.webp', secondary: '/images/insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp' },
  { hero: '/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp', secondary: '/images/protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp' },
  { hero: '/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp', secondary: '/images/car-insurance-concept-toy-car-covered-by-umbrella-2026-03-26-23-19-45-utc.webp' },
  { hero: '/images/insurance-adjuster-inspecting-damage-after-car-cra-2026-01-05-05-08-40-utc.webp', secondary: '/images/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp' },
  { hero: '/images/insurance-adjuster-inspecting-damage-on-wrecked-ca-2026-03-27-02-57-59-utc.webp', secondary: '/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp' },
  { hero: '/images/woman-inspecting-damage-car-after-auto-accident-2026-03-27-03-00-53-utc.webp', secondary: '/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp' },
  { hero: '/images/car-insurance-protection-covered-by-an-umbrella-2026-01-08-08-12-25-utc.webp', secondary: '/images/protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp' },
  { hero: '/images/insurance-concept-of-person-protecting-blue-car-wi-2026-08-04-06-18-31-utc.webp', secondary: '/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp' },
  { hero: '/images/car-insurance-coverage-with-protection-concept-2026-01-08-08-12-25-utc.webp', secondary: '/images/insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp' },
  { hero: '/images/family-protection-and-insurance-concept-with-woode-2026-03-17-14-38-34-utc.webp', secondary: '/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp' },
];

locations.forEach((r, idx) => {
  const pageName = r[0];
  const slug = (r[1] || '').trim();
  const seoTitle = r[2];
  const metaDescription = r[3];

  const folderName = slug.replace(/^\/|\/$/g, '');
  const dirPath = path.join('src', 'app', folderName);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const imgs = locationImages[idx % locationImages.length];

  const content = `import React from 'react';
import HomepageTemplateLayout from '@/components/HomepageTemplateLayout';
import { getPageBySlug } from '@/data/site-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: ${JSON.stringify(seoTitle)},
  description: ${JSON.stringify(metaDescription)},
};

export default function LocationPage() {
  const page = getPageBySlug(${JSON.stringify(slug)});
  if (!page) notFound();

  return (
    <HomepageTemplateLayout
      page={page}
      heroImage=${JSON.stringify(imgs.hero)}
      secondaryImage=${JSON.stringify(imgs.secondary)}
      badgeText=${JSON.stringify(pageName.replace(' (Location Page)', ' SR-22 Coverage'))}
    />
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content, 'utf8');
  console.log('Updated location page to homepage design:', dirPath);
});
