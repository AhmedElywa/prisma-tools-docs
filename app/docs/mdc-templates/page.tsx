import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import Content from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'MDC Templates - Documentation as Code',
  description:
    'Interactive documentation templates for PalJS generators. Learn through live examples and copy-paste ready code snippets.',
  slug: '/docs/mdc-templates',
  section: 'Templates',
  keywords: [
    'mdc templates',
    'documentation as code',
    'interactive docs',
    'code examples',
    'generator templates',
    'paljs examples',
  ],
});

export default function Page() {
  return <Content />;
}
