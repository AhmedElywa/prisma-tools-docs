import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import Content from "./content.mdx";

export const metadata: Metadata = createMetadata({
  title: "Prisma Admin Pages Generator Template",
  description:
    "Generate complete admin pages for your Prisma models with React components. Material UI and Chakra UI support with form validation and CRUD operations.",
  slug: "/docs/mdc-templates/prisma-admin-pages-generator",
  section: "Templates",
  keywords: [
    "prisma admin pages",
    "admin generator",
    "react forms",
    "crud pages",
    "material ui admin",
    "chakra ui admin",
    "form validation",
  ],
});

export default function Page() {
  return <Content />;
}
