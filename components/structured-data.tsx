import Script from "next/script";

interface StructuredDataProps {
  type?: "Article" | "SoftwareApplication" | "TechArticle" | "WebSite";
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  section?: string;
}

export function StructuredData({
  type = "TechArticle",
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = "PalJS Team",
  section = "Documentation",
}: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    url,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://paljs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PalJS",
      url: "https://paljs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://paljs.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(section && { articleSection: section }),
    about: [
      {
        "@type": "Thing",
        name: "Prisma",
      },
      {
        "@type": "Thing",
        name: "GraphQL",
      },
      {
        "@type": "Thing",
        name: "TypeScript",
      },
      {
        "@type": "Thing",
        name: "Node.js",
      },
    ],
    keywords:
      "PalJS, Prisma, GraphQL, TypeScript, Node.js, API Development, Code Generation",
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

// Organization structured data for the website
export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PalJS",
    url: "https://paljs.com",
    logo: "https://paljs.com/logo.png",
    description: "The modern toolkit for Prisma, supercharged with AI.",
    foundingDate: "2020",
    sameAs: [
      "https://github.com/paljs/prisma-tools",
      "https://www.npmjs.com/org/paljs",
      "https://discord.gg/X7yWXrM",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "technical support",
      url: "https://github.com/paljs/prisma-tools/issues",
    },
  };

  return (
    <Script
      id="organization-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  );
}

// Software Application structured data
export function SoftwareApplicationStructuredData() {
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PalJS",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    description:
      "AI-first Prisma toolkit for building GraphQL APIs with TypeScript",
    url: "https://paljs.com",
    downloadUrl: "https://www.npmjs.com/org/paljs",
    author: {
      "@type": "Organization",
      name: "PalJS Team",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    programmingLanguage: "TypeScript",
    runtimePlatform: "Node.js",
    requirements: "Node.js 16+, Prisma",
    softwareVersion: "Latest",
    releaseNotes: "https://github.com/paljs/prisma-tools/releases",
  };

  return (
    <Script
      id="software-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(softwareData),
      }}
    />
  );
}
