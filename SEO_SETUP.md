# SEO Setup for PalJS Documentation

This document outlines the comprehensive SEO setup implemented for the PalJS documentation site.

## 🎯 Features Implemented

### 1. **Page-Level Metadata**

- ✅ Unique titles and descriptions for each page
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card metadata
- ✅ Canonical URLs
- ✅ Keywords optimization
- ✅ Author and publisher information

### 2. **XML Sitemaps**

- ✅ Automatic sitemap generation at `/sitemap.xml`
- ✅ Priority and change frequency settings
- ✅ Last modified dates
- ✅ All documentation pages included

### 3. **Robots.txt**

- ✅ Search engine crawler instructions at `/robots.txt`
- ✅ Sitemap location specified
- ✅ Blocked paths for security
- ✅ AI bot restrictions (GPTBot, Google-Extended)

### 4. **Structured Data (JSON-LD)**

- ✅ Organization schema
- ✅ Software Application schema
- ✅ Article/TechArticle schemas for documentation
- ✅ Rich snippets optimization

## 📁 File Structure

```
prisma-tools-docs/
├── app/
│   ├── layout.tsx                 # Root layout with default metadata
│   ├── sitemap.ts                 # XML sitemap generation
│   ├── robots.ts                  # Robots.txt generation
│   └── docs/
│       ├── introduction/
│       │   ├── page.tsx          # Metadata + MDX import
│       │   └── content.mdx       # Actual content
│       └── packages-*/
│           ├── page.tsx          # Metadata + MDX import
│           └── content.mdx       # Actual content
├── lib/
│   └── metadata.ts               # Metadata utility functions
├── components/
│   └── structured-data.tsx       # JSON-LD structured data
└── scripts/
    └── generate-metadata.js      # Auto-generate metadata files
```

## 🚀 Usage

### Adding Metadata to New Pages

1. **Create the page structure:**

   ```bash
   mkdir app/docs/new-page
   ```

2. **Add your MDX content:**

   ```bash
   # Create content.mdx with your documentation
   touch app/docs/new-page/content.mdx
   ```

3. **Create page.tsx with metadata:**

   ```typescript
   import type { Metadata } from "next";
   import { generateMetadata as createMetadata } from "@/lib/metadata";
   import Content from "./content.mdx";

   export const metadata: Metadata = createMetadata({
     title: "Your Page Title",
     description: "Your page description for SEO",
     slug: "/docs/new-page",
     section: "Documentation", // or "Packages"
     keywords: ["keyword1", "keyword2", "keyword3"],
   });

   export default function NewPage() {
     return <Content />;
   }
   ```

4. **Update sitemap.ts:**
   ```typescript
   // Add your new page to the documentationPages array
   { url: '/docs/new-page', priority: 0.8, changeFrequency: 'monthly' as const },
   ```

### Bulk Generation Script

For existing MDX pages, use the generation script:

```bash
npm run generate:metadata
```

This script will:

- Rename `page.mdx` to `content.mdx`
- Generate `page.tsx` with proper metadata
- Configure SEO settings for all package pages

## 🔧 Configuration

### Environment Variables

Set your site URL in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://paljs.com
```

For development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Metadata Configuration

Edit `lib/metadata.ts` to customize:

- Site name and description
- Default keywords
- Social media handles
- Open Graph images

### Structured Data

Customize structured data in `components/structured-data.tsx`:

- Organization information
- Software application details
- Contact information
- Social media links

## 📊 SEO Benefits

### Search Engine Optimization

- **Title Tags**: Unique, descriptive titles for each page
- **Meta Descriptions**: Compelling descriptions under 160 characters
- **Keywords**: Targeted keywords for each page
- **Canonical URLs**: Prevent duplicate content issues

### Social Media Optimization

- **Open Graph**: Rich previews on Facebook, LinkedIn
- **Twitter Cards**: Enhanced Twitter sharing
- **Images**: Custom social media images

### Technical SEO

- **XML Sitemaps**: Help search engines discover content
- **Robots.txt**: Control crawler access
- **Structured Data**: Rich snippets in search results
- **Performance**: Optimized loading and rendering

## 🛠 Maintenance

### Regular Tasks

1. **Update sitemap** when adding new pages
2. **Review metadata** for accuracy and relevance
3. **Monitor keywords** and update as needed
4. **Check structured data** with Google's Rich Results Test

### Scripts Available

```bash
# Generate metadata for new MDX pages
npm run generate:metadata

# Build and check SEO setup
npm run seo:check

# Development server
npm run dev

# Production build
npm run build
```

## 📈 Google Search Console Setup

1. **Verify ownership** of your domain
2. **Submit sitemap**: `https://paljs.com/sitemap.xml`
3. **Monitor indexing** status
4. **Check for errors** in coverage report
5. **Review performance** metrics

### Sitemap URLs to Submit:

- Main sitemap: `https://paljs.com/sitemap.xml`

## 📋 Pages Included in SEO Setup

### Package Documentation (6 pages)

- `/docs/packages-admin` - Admin Dashboard Components
- `/docs/packages-cli` - Command Line Interface Tools
- `/docs/packages-generator` - Code Generation Tools
- `/docs/packages-nexus` - Nexus GraphQL Integration
- `/docs/packages-plugins` - GraphQL Enhancement Plugins
- `/docs/packages-schema` - Schema Management Utilities

### MDC Templates (8 pages)

- `/docs/mdc-templates` - Documentation as Code Overview
- `/docs/mdc-templates/prisma-admin-pages-generator` - Admin Pages Generator
- `/docs/mdc-templates/prisma-admin-settings-generator` - Admin Settings Generator
- `/docs/mdc-templates/prisma-graphql-generator` - GraphQL Generator
- `/docs/mdc-templates/prisma-graphql-modules-generator` - GraphQL Modules Generator
- `/docs/mdc-templates/prisma-nexus-generator` - Nexus Generator
- `/docs/mdc-templates/prisma-resolver-types-generator` - Resolver Types Generator
- `/docs/mdc-templates/prisma-sdl-generator` - SDL Generator

### Main Documentation (3 pages)

- `/docs/introduction` - Getting Started with PalJS
- `/docs` - Documentation Home
- `/` - Site Homepage

**Total: 17 documentation pages** with full SEO optimization

## 🔍 Testing

### Local Testing

```bash
# Start development server
npm run dev

# Test sitemap
curl http://localhost:3000/sitemap.xml

# Test robots.txt
curl http://localhost:3000/robots.txt
```

### SEO Tools

- **Google Search Console**: Monitor search performance
- **Google Rich Results Test**: Test structured data
- **PageSpeed Insights**: Check performance
- **Lighthouse**: Comprehensive SEO audit

## 📝 Best Practices

### Content

- Write unique, descriptive titles (50-60 characters)
- Create compelling meta descriptions (150-160 characters)
- Use relevant keywords naturally
- Structure content with proper headings (H1, H2, H3)

### Technical

- Ensure fast loading times
- Use semantic HTML
- Implement proper internal linking
- Optimize images with alt text

### Monitoring

- Regular SEO audits
- Monitor search rankings
- Track organic traffic
- Update content regularly

## 🚨 Troubleshooting

### Common Issues

1. **Sitemap not updating**: Clear Next.js cache and rebuild
2. **Metadata not showing**: Check for TypeScript errors
3. **Structured data errors**: Validate with Google's tool
4. **Robots.txt issues**: Verify file accessibility

### Debug Commands

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild with verbose output
npm run build -- --debug

# Check for TypeScript errors
npx tsc --noEmit
```

---

**Need help?** Check the [Next.js SEO documentation](https://nextjs.org/learn/seo/introduction-to-seo) or open an issue in the repository.
