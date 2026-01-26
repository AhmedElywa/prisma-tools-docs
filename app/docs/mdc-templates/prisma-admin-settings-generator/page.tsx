import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import Content from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Prisma Admin Settings Generator Template',
  description:
    'Create customizable admin settings and configuration pages for your Prisma applications. User preferences, theme settings, and application configuration.',
  slug: '/docs/mdc-templates/prisma-admin-settings-generator',
  section: 'Templates',
  keywords: [
    'admin settings',
    'configuration pages',
    'user preferences',
    'theme settings',
    'admin config',
    'settings generator',
  ],
});

export default function Page() {
  return <Content />;
}
