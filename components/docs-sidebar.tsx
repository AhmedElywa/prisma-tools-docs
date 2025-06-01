"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";

const docsNav = [
  {
    title: "Getting Started",
    items: [{ title: "Introduction", href: "/docs/introduction" }],
  },
  {
    title: "Packages",
    items: [
      { title: "CLI", href: "/docs/packages-cli" },
      { title: "Admin", href: "/docs/packages-admin" },
      { title: "Generator", href: "/docs/packages-generator" },
      { title: "Nexus", href: "/docs/packages-nexus" },
      { title: "Plugins", href: "/docs/packages-plugins" },
      { title: "Schema", href: "/docs/packages-schema" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border/40 py-6 pr-2 lg:block lg:py-8">
      <nav className="w-full p-4">
        {docsNav.map((group) => (
          <Collapsible
            key={group.title}
            defaultOpen={group.items.some((item) =>
              pathname?.startsWith(item.href)
            )}
            className="mb-4"
          >
            <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-semibold hover:bg-accent hover:text-accent-foreground">
              {group.title}
              <ChevronRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="py-1 pl-2">
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                        pathname === item.href
                          ? "font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </nav>
    </aside>
  );
}
