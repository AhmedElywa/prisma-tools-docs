import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import ConfigurationContent from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Configuration Reference',
  description:
    'Complete reference for paljs.config.ts and defineConfig(). All options for GraphQL generation, admin UI, type generation, and per-model configuration.',
  slug: '/docs/configuration',
  section: 'Documentation',
  keywords: ['paljs', 'configuration', 'defineConfig', 'paljs.config.ts', 'generator', 'options'],
});

export default function ConfigurationPage() {
  return <ConfigurationContent />;
}
