import Link from "next/link";
import { Logo } from "./logo";

const footerNavs = [
  {
    label: "Product",
    items: [
      { href: "/docs", name: "Documentation" },
      { href: "/docs/cli", name: "CLI" },
      { href: "/docs/graphql", name: "GraphQL" },
      { href: "/docs/admin-ui", name: "Admin UI" },
    ],
  },
  {
    label: "Community",
    items: [
      {
        href: "https://github.com/AhmedElywa/prisma-tools/discussions",
        name: "Discussions",
      },
      {
        href: "https://github.com/AhmedElywa/prisma-tools/issues",
        name: "Issue Tracker",
      },
      // { href: "#", name: "Discord" }, // Example
    ],
  },
  {
    label: "Company",
    items: [
      // { href: "#", name: "About Us" },
      // { href: "#", name: "Blog" },
      { href: "https://github.com/AhmedElywa/prisma-tools", name: "GitHub" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-border/40 bg-background border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link
              href="/"
              aria-label="Go home"
              className="inline-flex items-center"
            >
              <Logo />
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-muted-foreground text-sm">
                PalJS is an AI-first toolkit for Prisma, designed to accelerate
                your development workflow.
              </p>
            </div>
          </div>
          {footerNavs.map((nav) => (
            <div key={nav.label} className="space-y-2 text-sm">
              <p className="text-foreground text-base font-bold tracking-wide">
                {nav.label}
              </p>
              {nav.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground block transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse justify-between border-t pt-5 pb-10 lg:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} PalJS. All rights reserved.
          </p>
          <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-5 lg:mb-0">
            <li>
              <Link
                href="#" // Replace with your terms link
                className="text-muted-foreground text-sm transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#" // Replace with your privacy link
                className="text-muted-foreground text-sm transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
