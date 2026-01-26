import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import Content from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Prisma Nexus Generator Template',
  description:
    'Code-first GraphQL with Prisma and Nexus. Generate type-safe schemas, auto-completion, and seamless database integration.',
  slug: '/docs/mdc-templates/prisma-nexus-generator',
  section: 'Templates',
  keywords: [
    'prisma nexus',
    'code first graphql',
    'type safety',
    'auto completion',
    'nexus schema',
    'database integration',
  ],
});

export default function Page() {
  return <Content />;
}
