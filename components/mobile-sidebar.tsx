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
import { getDocsNav } from "@/lib/contentlayer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import * as React from "react";

export function MobileSidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const navGroups = getDocsNav();

  React.useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!navGroups.length) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation menu"
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
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            {navGroups.map((group) => (
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
                          onClick={() => setIsOpen(false)}
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
        </div>
      </SheetContent>
    </Sheet>
  );
}
