import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import Content from "./content.mdx";

export const metadata: Metadata = createMetadata({
  title: "Prisma Resolver Types Generator Template",
  description: "Generate TypeScript types for GraphQL resolvers with Prisma integration. Type-safe resolver signatures and database operations.",
  slug: "/docs/mdc-templates/prisma-resolver-types-generator",
  section: "Templates",
  keywords: [
    "resolver types",
    "typescript types",
    "type safety",
    "graphql types",
    "prisma types",
    "resolver signatures"
],
});

export default function Page() {
  return <Content />;
}