import type { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  slug: string;
  section?: string;
  keywords?: string[];
  lastModified?: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://paljs.com";
const SITE_NAME = "PalJS";
const SITE_DESCRIPTION = "The modern toolkit for Prisma, supercharged with AI.";

export function generateMetadata(page: PageMetadata): Metadata {
  const fullTitle = page.section
    ? `${page.title} | ${page.section} | ${SITE_NAME}`
    : `${page.title} | ${SITE_NAME}`;

  const url = `${SITE_URL}${page.slug}`;

  return {
    title: fullTitle,
    description: page.description,
    keywords: page.keywords?.join(", "),
    authors: [{ name: "PalJS Team" }],
    creator: "PalJS Team",
    publisher: "PalJS",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url,
      siteName: SITE_NAME,
      type: "article",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${page.title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [`${SITE_URL}/og-image.png`],
      creator: "@paljs",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const defaultMetadata: Metadata = {
  title: `${SITE_NAME} - AI-first Prisma Toolkit`,
  description: SITE_DESCRIPTION,
  keywords:
    "prisma, graphql, typescript, nodejs, react, admin, code generation, api",
  authors: [{ name: "PalJS Team" }],
  creator: "PalJS Team",
  publisher: "PalJS",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} - AI-first Prisma Toolkit`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - AI-first Prisma Toolkit`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - AI-first Prisma Toolkit`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@paljs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
