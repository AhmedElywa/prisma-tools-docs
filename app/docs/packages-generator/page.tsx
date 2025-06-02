import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import Content from "./content.mdx";

export const metadata: Metadata = createMetadata({
  title: "Code Generation Tools",
  description:
    "Powerful code generation tools for Prisma GraphQL APIs. Generate CRUD operations, resolvers, and GraphQL schemas automatically from your Prisma schema.",
  slug: "/docs/packages-generator",
  section: "Packages",
  keywords: [
    "code generation",
    "prisma generator",
    "graphql generator",
    "crud generation",
    "resolver generator",
    "schema generator",
    "typescript generation",
  ],
});

export default function Page() {
  return <Content />;
}
