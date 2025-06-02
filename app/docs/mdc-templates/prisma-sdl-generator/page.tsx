import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import Content from "./content.mdx";

export const metadata: Metadata = createMetadata({
  title: "Prisma SDL Generator Template",
  description: "Schema Definition Language (SDL) generation for GraphQL with Prisma. Schema-first approach with automatic resolver scaffolding.",
  slug: "/docs/mdc-templates/prisma-sdl-generator",
  section: "Templates",
  keywords: [
    "graphql sdl",
    "schema first",
    "schema definition",
    "resolver scaffolding",
    "graphql schema",
    "sdl generator"
],
});

export default function Page() {
  return <Content />;
}