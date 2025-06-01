# MDX Setup Documentation

This project now supports MDX (Markdown + JSX) using the official Next.js MDX plugin as recommended in the [Next.js documentation](https://nextjs.org/docs/pages/guides/mdx).

## Features

- ✅ **Official Next.js MDX Support**: Using `@next/mdx` plugin
- ✅ **Syntax Highlighting**: Powered by `rehype-pretty-code` with Shiki
- ✅ **GitHub Flavored Markdown**: Support for tables, strikethrough, task lists, etc.
- ✅ **Custom React Components**: Use React components directly in MDX
- ✅ **TypeScript Support**: Full TypeScript integration
- ✅ **Import MDX Files**: Import MDX files as React components
- ✅ **Metadata Support**: Add metadata to MDX pages
- ✅ **Custom Layouts**: Shared layouts for MDX pages

## Installation

The following dependencies are installed:

```bash
pnpm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx remark-gfm rehype-pretty-code
```

## Configuration

### Next.js Configuration (`next.config.mjs`)

```javascript
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // ... other config
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

export default withMDX(nextConfig);
```

### MDX Components (`mdx-components.tsx`)

Located in the root directory, this file defines custom components for MDX:

```typescript
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="...">{children}</h1>,
    // ... other components
    Callout: ({ title, children, type }) => <Alert>...</Alert>,
    ...components,
  };
}
```

## Usage

### 1. MDX as Pages

Create `.mdx` files directly in the `app` directory:

```mdx
// app/my-page/page.mdx
export const metadata = {
title: 'My Page',
description: 'A page written in MDX'
}

# My Page

This is **bold** text and this is _italic_ text.

<Callout title="Note" type="warning">
  You can use React components directly in MDX!
</Callout>
```

### 2. Import MDX Files

Import MDX files as React components:

```typescript
// app/my-page/page.tsx
import MyContent from "../../content/my-content.mdx";

export default function Page() {
  return (
    <div className="prose">
      <MyContent />
    </div>
  );
}
```

### 3. Custom Components

Use custom React components in MDX:

```mdx
# My Article

<Callout title="Important" type="danger">
  This is a custom callout component!
</Callout>

<ReactDemo />
```

## Available Custom Components

### Callout

```mdx
<Callout title="Title" type="default|warning|danger">
  Content goes here
</Callout>
```

### ReactDemo

```mdx
<ReactDemo />
```

## Code Highlighting

Code blocks are automatically highlighted using Shiki with the "one-dark-pro" theme:

````mdx
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## Styling

MDX content is styled using:

- Tailwind Typography (`@tailwindcss/typography`)
- Custom component styles
- Dark mode support

## Migration from Contentlayer

This setup runs alongside the existing Contentlayer setup:

- Existing docs continue to use Contentlayer
- New pages can use the native MDX setup
- Both systems can coexist

## Examples

- **Direct MDX Page**: `/test-mdx` - Shows MDX as a page component
- **Imported MDX**: `/test-import` - Shows importing MDX into a React component

## File Structure

```
prisma-tools-docs/
├── app/
│   ├── test-mdx/
│   │   └── page.mdx          # Direct MDX page
│   └── test-import/
│       └── page.tsx          # Page that imports MDX
├── content/
│   └── welcome.mdx           # Importable MDX file
├── components/
│   └── mdx-layout.tsx        # Shared layout for MDX
├── mdx-components.tsx        # MDX component definitions
└── next.config.mjs           # Next.js + MDX configuration
```

## Benefits of This Setup

1. **Official Support**: Uses Next.js official MDX plugin
2. **Better Performance**: Optimized compilation and bundling
3. **Type Safety**: Full TypeScript support
4. **Flexibility**: Can use MDX as pages or import as components
5. **Modern Tooling**: Latest MDX features and plugins
6. **Easy Migration**: Can gradually migrate from other systems

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Ensure all dependencies are installed
2. Check that `mdx-components.tsx` is in the root directory
3. Verify import paths are correct

### Styling Issues

If components aren't styled correctly:

1. Check Tailwind configuration includes MDX files
2. Ensure prose classes are applied to MDX content
3. Verify custom component styles are defined

## Next Steps

1. **Migrate Existing Content**: Gradually move content from Contentlayer to native MDX
2. **Add More Components**: Create additional custom components for MDX
3. **Optimize Performance**: Add caching and optimization for large MDX files
4. **Add Plugins**: Explore additional remark/rehype plugins for enhanced functionality
