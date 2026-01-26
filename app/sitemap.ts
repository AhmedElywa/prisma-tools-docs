import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://paljs.com';

// Define all the documentation pages with their priorities and change frequencies
const documentationPages = [
  // Main pages
  { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { url: '/docs', priority: 0.9, changeFrequency: 'weekly' as const },

  // Documentation sections
  {
    url: '/docs/introduction',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },

  // Package documentation
  {
    url: '/docs/packages-admin',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/packages-cli',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/packages-generator',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/packages-nexus',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/packages-plugins',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/packages-schema',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },

  // MDC Templates
  {
    url: '/docs/mdc-templates',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/mdc-templates/prisma-admin-pages-generator',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/mdc-templates/prisma-admin-settings-generator',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/mdc-templates/prisma-graphql-generator',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/mdc-templates/prisma-graphql-modules-generator',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/mdc-templates/prisma-nexus-generator',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/mdc-templates/prisma-resolver-types-generator',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/docs/mdc-templates/prisma-sdl-generator',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return documentationPages.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
