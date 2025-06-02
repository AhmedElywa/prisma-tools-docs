import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import Content from "./content.mdx";

export const metadata: Metadata = createMetadata({
  title: "GraphQL Enhancement Plugins",
  description: "Essential GraphQL plugins for Prisma integration. Field selection optimization, query filtering, and performance enhancements for your GraphQL API.",
  slug: "/docs/packages-plugins",
  section: "Packages",
  keywords: [
    "graphql plugins",
    "field selection",
    "query optimization",
    "prisma plugins",
    "graphql middleware",
    "performance optimization"
],
});

export default function Page() {
  return <Content />;
}