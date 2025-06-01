"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import * as React from "react";
import { memo, useCallback, useMemo } from "react";
import {
  docsNavigation,
  type NavigationGroup,
  type NavigationItem,
} from "@/lib/navigation";

// Context for sheet control
const SheetContext = React.createContext<{
  closeSheet: () => void;
}>({
  closeSheet: () => {},
});

// Memoize individual navigation item component with its own pathname hook
const MobileNavItem = memo(function MobileNavItem({
  item,
}: {
  item: NavigationItem;
}) {
  const pathname = usePathname();
  const { closeSheet } = React.useContext(SheetContext);
  const isActive = pathname === item.href;

  const handleClick = useCallback(() => {
    closeSheet();
  }, [closeSheet]);

  return (
    <li>
      <Link
        href={item.href}
        onClick={handleClick}
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
const MobileNavGroup = memo(function MobileNavGroup({
  group,
}: {
  group: NavigationGroup;
}) {
  const pathname = usePathname();
  const defaultOpen = useMemo(
    () => group.items.some((item) => pathname?.startsWith(item.href)),
    [group.items, pathname]
  );

  return (
    <Collapsible defaultOpen={defaultOpen} className="mb-4">
      <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-semibold hover:bg-accent hover:text-accent-foreground">
        {group.title}
        <ChevronRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
      </CollapsibleTrigger>
      <CollapsibleContent className="py-1 pl-2">
        <ul className="space-y-1">
          {group.items.map((item) => (
            <MobileNavItem key={item.href} item={item} />
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
});

// Static navigation component that minimizes re-renders
const StaticMobileNavigation = memo(function StaticMobileNavigation() {
  const navigationGroups = useMemo(() => docsNavigation, []);

  return (
    <nav className="flex-1 overflow-y-auto p-4">
      {navigationGroups.map((group) => (
        <MobileNavGroup key={group.title} group={group} />
      ))}
    </nav>
  );
});

export const MobileSidebar = memo(function MobileSidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const closeSheet = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openSheet = useCallback(() => {
    setIsOpen(true);
  }, []);

  const contextValue = useMemo(
    () => ({
      closeSheet,
    }),
    [closeSheet]
  );

  React.useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!docsNavigation.length) {
    return null;
  }

  return (
    <SheetContext.Provider value={contextValue}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open navigation menu"
            onClick={openSheet}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-xs p-0">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-4 py-3.5">
              <Link href="/" className="flex items-center">
                <Logo />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeSheet}
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <StaticMobileNavigation />
          </div>
        </SheetContent>
      </Sheet>
    </SheetContext.Provider>
  );
});
