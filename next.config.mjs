import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Redirects from old PalJS URLs to new documentation structure
  async redirects() {
    return [
      // Plugins redirects
      {
        source: "/plugins/select",
        destination: "/docs/packages-plugins",
        permanent: true,
      },
      {
        source: "/plugins/delete",
        destination: "/docs/packages-plugins",
        permanent: true,
      },
      {
        source: "/plugins/sdl-inputs",
        destination: "/docs/packages-plugins",
        permanent: true,
      },
      // Generator redirects
      {
        source: "/generator/nexus",
        destination: "/docs/packages-nexus",
        permanent: true,
      },
      {
        source: "/generator/sdl",
        destination: "/docs/packages-generator",
        permanent: true,
      },
      {
        source: "/generator/graphql-modules",
        destination: "/docs/packages-generator",
        permanent: true,
      },
      {
        source: "/generator",
        destination: "/docs/packages-generator",
        permanent: true,
      },
      // CLI redirects
      {
        source: "/cli/schema",
        destination: "/docs/packages-cli",
        permanent: true,
      },
      {
        source: "/cli/create",
        destination: "/docs/packages-cli",
        permanent: true,
      },
      {
        source: "/cli/cnt",
        destination: "/docs/packages-cli",
        permanent: true,
      },
      {
        source: "/cli/generator",
        destination: "/docs/packages-cli",
        permanent: true,
      },
      // Admin redirects
      {
        source: "/prisma-admin",
        destination: "/docs/packages-admin",
        permanent: true,
      },
      // UI redirects (redirect to introduction or getting started)
      {
        source: "/ui/getting-started",
        destination: "/docs/introduction",
        permanent: true,
      },
    ];
  },
};

const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word--highlighted"];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
