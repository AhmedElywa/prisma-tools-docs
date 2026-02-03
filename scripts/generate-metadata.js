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
};

function generatePageFile(dirPath, config, slug) {
  const section = 'Packages';

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
