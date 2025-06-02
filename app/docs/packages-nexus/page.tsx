import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import Content from "./content.mdx";

export const metadata: Metadata = createMetadata({
  title: "Nexus GraphQL Integration",
  description:
    "Seamless integration between Prisma and Nexus GraphQL. Auto-generate type-safe GraphQL schemas and resolvers with field selection optimization.",
  slug: "/docs/packages-nexus",
  section: "Packages",
  keywords: [
    "nexus plugin",
    "prisma nexus",
    "graphql nexus",
    "type safety",
    "field selection",
    "query optimization",
    "graphql schema",
  ],
});

export default function Page() {
  return <Content />;
}
