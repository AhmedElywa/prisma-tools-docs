"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { getDocsNav } from "@/lib/contentlayer"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"

export function DocsSidebar() {
  const pathname = usePathname()
  const navGroups = getDocsNav()

  if (!navGroups.length) {
    return null
  }

  return (
    <aside className="sticky top-14 -ml-2 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border/40 py-6 pr-2 lg:block lg:py-8">
      <nav className="w-full">
        {navGroups.map((group) => (
          <Collapsible
            key={group.title}
            defaultOpen={group.items.some((item) => pathname?.startsWith(item.href))}
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
                          : "text-muted-foreground",
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
  )
}
