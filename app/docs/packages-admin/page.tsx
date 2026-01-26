import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import Content from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Admin Dashboard Components',
  description:
    'Build beautiful admin interfaces for your Prisma models with PalJS admin components. Material UI, Chakra UI, and Tailwind CSS support for rapid development.',
  slug: '/docs/packages-admin',
  section: 'Packages',
  keywords: [
    'admin dashboard',
    'react admin',
    'prisma admin',
    'material ui',
    'chakra ui',
    'tailwind admin',
    'admin components',
    'data management',
  ],
});

export default function Page() {
  return <Content />;
}
