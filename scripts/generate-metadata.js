const fs = require('node:fs');
const path = require('node:path');

// Page metadata configurations
const pageConfigs = {
  'docs/packages-admin': {
    title: 'Admin Dashboard Components',
    description:
      'Build beautiful admin interfaces for your Prisma models with PalJS admin components. Material UI, Chakra UI, and Tailwind CSS support for rapid development.',
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
  },
  'docs/packages-generator': {
    title: 'Code Generation Tools',
    description:
      'Powerful code generation tools for Prisma GraphQL APIs. Generate CRUD operations, resolvers, and GraphQL schemas automatically from your Prisma schema.',
    keywords: [
      'code generation',
      'prisma generator',
      'graphql generator',
      'crud generation',
      'resolver generator',
      'schema generator',
      'typescript generation',
    ],
  },
  'docs/packages-nexus': {
    title: 'Nexus GraphQL Integration',
    description:
      'Seamless integration between Prisma and Nexus GraphQL. Auto-generate type-safe GraphQL schemas and resolvers with field selection optimization.',
    keywords: [
      'nexus plugin',
      'prisma nexus',
      'graphql nexus',
      'type safety',
      'field selection',
      'query optimization',
      'graphql schema',
    ],
  },
  'docs/packages-plugins': {
    title: 'GraphQL Enhancement Plugins',
    description:
      'Essential GraphQL plugins for Prisma integration. Field selection optimization, query filtering, and performance enhancements for your GraphQL API.',
    keywords: [
      'graphql plugins',
      'field selection',
      'query optimization',
      'prisma plugins',
      'graphql middleware',
      'performance optimization',
    ],
  },
  'docs/packages-schema': {
    title: 'Schema Management Utilities',
    description:
      'Schema manipulation and conversion utilities for Prisma. Convert between different schema formats and enhance your Prisma schema programmatically.',
    keywords: ['prisma schema', 'schema conversion', 'schema utilities', 'dmmf', 'schema manipulation', 'prisma tools'],
  },

  // MDC Templates
  'docs/mdc-templates': {
    title: 'MDC Templates - Documentation as Code',
    description:
      'Interactive documentation templates for PalJS generators. Learn through live examples and copy-paste ready code snippets.',
    keywords: [
      'mdc templates',
      'documentation as code',
      'interactive docs',
      'code examples',
      'generator templates',
      'paljs examples',
    ],
  },
  'docs/mdc-templates/prisma-admin-pages-generator': {
    title: 'Prisma Admin Pages Generator Template',
    description:
      'Generate complete admin pages for your Prisma models with React components. Material UI and Chakra UI support with form validation and CRUD operations.',
    keywords: [
      'prisma admin pages',
      'admin generator',
      'react forms',
      'crud pages',
      'material ui admin',
      'chakra ui admin',
      'form validation',
    ],
  },
  'docs/mdc-templates/prisma-admin-settings-generator': {
    title: 'Prisma Admin Settings Generator Template',
    description:
      'Create customizable admin settings and configuration pages for your Prisma applications. User preferences, theme settings, and application configuration.',
    keywords: [
      'admin settings',
      'configuration pages',
      'user preferences',
      'theme settings',
      'admin config',
      'settings generator',
    ],
  },
  'docs/mdc-templates/prisma-graphql-generator': {
    title: 'Prisma GraphQL Generator Template',
    description:
      'Generate complete GraphQL APIs from your Prisma schema. CRUD operations, custom resolvers, and type-safe GraphQL implementation.',
    keywords: [
      'prisma graphql',
      'graphql generator',
      'api generator',
      'crud operations',
      'graphql resolvers',
      'type safety',
      'graphql api',
    ],
  },
  'docs/mdc-templates/prisma-graphql-modules-generator': {
    title: 'Prisma GraphQL Modules Generator Template',
    description:
      'Modular GraphQL architecture with Prisma integration. Generate scalable GraphQL modules with dependency injection and clean separation of concerns.',
    keywords: [
      'graphql modules',
      'modular graphql',
      'dependency injection',
      'scalable api',
      'prisma modules',
      'clean architecture',
    ],
  },
  'docs/mdc-templates/prisma-nexus-generator': {
    title: 'Prisma Nexus Generator Template',
    description:
      'Code-first GraphQL with Prisma and Nexus. Generate type-safe schemas, auto-completion, and seamless database integration.',
    keywords: [
      'prisma nexus',
      'code first graphql',
      'type safety',
      'auto completion',
      'nexus schema',
      'database integration',
    ],
  },
  'docs/mdc-templates/prisma-resolver-types-generator': {
    title: 'Prisma Resolver Types Generator Template',
    description:
      'Generate TypeScript types for GraphQL resolvers with Prisma integration. Type-safe resolver signatures and database operations.',
    keywords: [
      'resolver types',
      'typescript types',
      'type safety',
      'graphql types',
      'prisma types',
      'resolver signatures',
    ],
  },
  'docs/mdc-templates/prisma-sdl-generator': {
    title: 'Prisma SDL Generator Template',
    description:
      'Schema Definition Language (SDL) generation for GraphQL with Prisma. Schema-first approach with automatic resolver scaffolding.',
    keywords: [
      'graphql sdl',
      'schema first',
      'schema definition',
      'resolver scaffolding',
      'graphql schema',
      'sdl generator',
    ],
  },
};

function generatePageFile(dirPath, config, slug) {
  // Determine section based on the slug
  const section = slug.includes('mdc-templates') ? 'Templates' : 'Packages';

  const content = `import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import Content from "./content.mdx";

export const metadata: Metadata = createMetadata({
  title: "${config.title}",
  description: "${config.description}",
  slug: "/${slug}",
  section: "${section}",
  keywords: ${JSON.stringify(config.keywords, null, 4)},
});

export default function Page() {
  return <Content />;
}`;

  const pageFilePath = path.join(dirPath, 'page.tsx');
  fs.writeFileSync(pageFilePath, content);
  console.log(`✅ Generated ${pageFilePath}`);
}

function processDirectory() {
  const _appDocsPath = path.join(__dirname, '../app/docs');

  Object.entries(pageConfigs).forEach(([slug, config]) => {
    const dirPath = path.join(__dirname, '../app', slug);

    if (fs.existsSync(dirPath)) {
      const mdxPath = path.join(dirPath, 'page.mdx');
      const contentPath = path.join(dirPath, 'content.mdx');

      // Rename page.mdx to content.mdx if it exists
      if (fs.existsSync(mdxPath)) {
        fs.renameSync(mdxPath, contentPath);
        console.log(`📝 Renamed ${slug}/page.mdx to content.mdx`);
      }

      // Generate page.tsx
      generatePageFile(dirPath, config, slug);
    } else {
      console.log(`⚠️  Directory not found: ${dirPath}`);
    }
  });
}

console.log('🚀 Generating metadata files for MDX pages...\n');
processDirectory();
console.log('\n✨ Metadata generation complete!');
