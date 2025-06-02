import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import Content from "./content.mdx";

export const metadata: Metadata = createMetadata({
  title: "Schema Management Utilities",
  description:
    "Schema manipulation and conversion utilities for Prisma. Convert between different schema formats and enhance your Prisma schema programmatically.",
  slug: "/docs/packages-schema",
  section: "Packages",
  keywords: [
    "prisma schema",
    "schema conversion",
    "schema utilities",
    "dmmf",
    "schema manipulation",
    "prisma tools",
  ],
});

export default function Page() {
  return <Content />;
}
