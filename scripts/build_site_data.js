const fs = require('fs');

const seo = JSON.parse(fs.readFileSync('SEO_Content.json', 'utf8'));
const blog = JSON.parse(fs.readFileSync('Blog_Content.json', 'utf8'));

const seoRows = seo.slice(1).filter(r => r && r[1]);
const blogRows = blog.slice(1).filter(r => r && r[1]);

const seoPages = seoRows.map(r => ({
  pageName: r[0] || '',
  title: r[0] || '',
  slug: (r[1] || '').trim(),
  seoTitle: r[2] || '',
  metaDescription: r[3] || '',
  contentHtml: r[4] || '',
  internalLink1: r[5] || '',
  internalLink2: r[6] || '',
  internalLink3: r[7] || '',
  externalLink: r[8] || ''
}));

const blogPosts = blogRows.map(r => ({
  pageName: r[0] || '',
  title: r[0] || '',
  slug: (r[1] || '').trim(),
  seoTitle: r[2] || '',
  metaDescription: r[3] || '',
  contentHtml: r[4] || '',
  internalLink1: r[5] || '',
  internalLink2: r[6] || '',
  internalLink3: r[7] || '',
  externalLink: r[8] || '',
  targetKeyword: r[9] || ''
}));

const siteDataTs = `export interface PageData {
  pageName: string;
  title: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  contentHtml: string;
  internalLink1?: string;
  internalLink2?: string;
  internalLink3?: string;
  externalLink?: string;
  targetKeyword?: string;
}

export const COMPANY_INFO = {
  name: "Tidewater SR22 Insurance Virginia Beach",
  phone: "(757) 960-7569",
  phoneRaw: "+17579607569",
  address: "513 19th St ste 110, Virginia Beach, VA 23451, United States",
  mapShortUrl: "https://maps.app.goo.gl/YeKuZGpH8nnu67dy9",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.592074212075!2d-75.9835740241595!3d36.84644227223403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae903d9c48b77%3A0xa3b316551aa5fd27!2sTidewater%20SR22%20Insurance%20Virginia%20Beach!5e1!3m2!1sen!2sph!4v1790605596451!5m2!1sen!2sph",
};

export const SEO_PAGES: PageData[] = ${JSON.stringify(seoPages, null, 2)};

export const BLOG_POSTS: PageData[] = ${JSON.stringify(blogPosts, null, 2)};

export const LOCATIONS: PageData[] = SEO_PAGES.filter(p => p.slug.endsWith("-va/") && p.slug !== "/how-to-get-an-sr22-in-virginia-beach/");

export function getPageBySlug(slug: string): PageData | undefined {
  const clean = slug.trim();
  const withSlash = clean.endsWith("/") ? clean : clean + "/";
  const withoutSlash = clean.endsWith("/") ? clean.slice(0, -1) : clean;
  return SEO_PAGES.find(p => p.slug === withSlash || p.slug === withoutSlash || p.slug === clean) ||
         BLOG_POSTS.find(p => p.slug === withSlash || p.slug === withoutSlash || p.slug === clean);
}
`;

fs.writeFileSync('src/data/site-data.ts', siteDataTs, 'utf8');
console.log('Successfully updated src/data/site-data.ts with title and pageName on all rows.');
