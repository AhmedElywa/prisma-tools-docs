import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import Content from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Prisma GraphQL Generator Template',
  description:
    'Generate complete GraphQL APIs from your Prisma schema. CRUD operations, custom resolvers, and type-safe GraphQL implementation.',
  slug: '/docs/mdc-templates/prisma-graphql-generator',
  section: 'Templates',
  keywords: [
    'prisma graphql',
    'graphql generator',
    'api generator',
    'crud operations',
    'graphql resolvers',
    'type safety',
    'graphql api',
  ],
});

export default function Page() {
  return <Content />;
}
