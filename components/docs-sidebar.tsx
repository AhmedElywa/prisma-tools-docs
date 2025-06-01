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
import { memo, useMemo } from "react";
import {
  docsNavigation,
  type NavigationGroup,
  type NavigationItem,
} from "@/lib/navigation";

// Memoize individual navigation item component with pathname hook inside
const NavItem = memo(function NavItem({ item }: { item: NavigationItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
          isActive
            ? "font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
            : "text-muted-foreground"
        )}
      >
        {item.title}
      </Link>
    </li>
  );
});

// Memoize navigation group component - this won't re-render unless the group changes
const NavGroup = memo(function NavGroup({ group }: { group: NavigationGroup }) {
  return (
    <Collapsible defaultOpen={true} className="mb-4">
      <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-semibold hover:bg-accent hover:text-accent-foreground">
        {group.title}
        <ChevronRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
      </CollapsibleTrigger>
      <CollapsibleContent className="py-1 pl-2">
        <ul className="space-y-1">
          {group.items.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
});

// Static navigation component that never re-renders
const StaticNavigation = memo(function StaticNavigation() {
  const navigationGroups = useMemo(() => docsNavigation, []);

  return (
    <nav className="w-full p-4">
      {navigationGroups.map((group) => (
        <NavGroup key={group.title} group={group} />
      ))}
    </nav>
  );
});

export const DocsSidebar = memo(function DocsSidebar() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border/40 py-6 pr-2 lg:block lg:py-8">
      <StaticNavigation />
    </aside>
  );
});
