import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import CLIContent from './content.mdx';

export const metadata: Metadata = createMetadata({
  title: 'Command Line Interface Tools',
  description:
    'PalJS CLI - Create, generate, and manage your Prisma GraphQL projects with powerful command-line tools. Scaffold applications, generate CRUD operations, and streamline your development workflow.',
  slug: '/docs/packages-cli',
  section: 'Packages',
  keywords: [
    'paljs cli',
    'command line',
    'project scaffolding',
    'code generation',
    'prisma cli',
    'graphql cli',
    'create project',
    'typescript cli',
    'development tools',
  ],
});

export default function CLIPage() {
  return <CLIContent />;
}
