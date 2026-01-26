import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import IntroductionContent from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Getting Started with PalJS',
  description:
    'Welcome to PalJS - your comprehensive toolkit for building modern GraphQL APIs with Prisma. Get started with rapid development, enterprise-ready features, and AI-powered code generation.',
  slug: '/docs/introduction',
  section: 'Documentation',
  keywords: [
    'paljs',
    'prisma',
    'graphql',
    'api',
    'toolkit',
    'code generation',
    'typescript',
    'react',
    'nodejs',
    'introduction',
    'getting started',
  ],
});

export default function IntroductionPage() {
  return <IntroductionContent />;
}
