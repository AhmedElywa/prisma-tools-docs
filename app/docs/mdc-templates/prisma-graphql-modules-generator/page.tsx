import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import Content from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Prisma GraphQL Modules Generator Template',
  description:
    'Modular GraphQL architecture with Prisma integration. Generate scalable GraphQL modules with dependency injection and clean separation of concerns.',
  slug: '/docs/mdc-templates/prisma-graphql-modules-generator',
  section: 'Templates',
  keywords: [
    'graphql modules',
    'modular graphql',
    'dependency injection',
    'scalable api',
    'prisma modules',
    'clean architecture',
  ],
});

export default function Page() {
  return <Content />;
}
