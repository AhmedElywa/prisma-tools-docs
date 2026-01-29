import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import UpgradeGuideContent from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Upgrade Guide: v8 to v9',
  description:
    'Migrate from PalJS v8 to v9. Covers breaking changes, step-by-step migration, configuration mapping, and troubleshooting.',
  slug: '/docs/upgrade-guide',
  section: 'Documentation',
  keywords: ['paljs', 'upgrade', 'migration', 'v9', 'breaking changes', 'prisma', 'graphql'],
});

export default function UpgradeGuidePage() {
  return <UpgradeGuideContent />;
}
