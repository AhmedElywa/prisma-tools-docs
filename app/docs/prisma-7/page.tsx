import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import Prisma7Content from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Prisma 7 Compatibility',
  description:
    'How PalJS v9 works with Prisma 7. Covers DMMF changes, driver adapters, new provider syntax, and setup instructions.',
  slug: '/docs/prisma-7',
  section: 'Documentation',
  keywords: ['paljs', 'prisma 7', 'compatibility', 'dmmf', 'driver adapter', 'migration'],
});

export default function Prisma7Page() {
  return <Prisma7Content />;
}
