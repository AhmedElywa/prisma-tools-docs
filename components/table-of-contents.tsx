"use client"

import { useTableOfContents, type TocEntry } from "@/hooks/use-toc"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  headings?: TocEntry[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const activeId = useTableOfContents(headings)

  if (!headings || headings.length === 0) {
    return null
  }

  return (
    <div className="sticky top-20 -mt-10 hidden h-[calc(100vh-5rem)] overflow-y-auto py-8 xl:block">
      <div className="space-y-2">
        <p className="font-medium">On This Page</p>
        <ul className="m-0 list-none">
          {headings
            .filter((h) => h.level === 2 || h.level === 3)
            .map((heading) => (
              <li key={heading.slug} className={cn("mt-0 pt-1", { "pl-4": heading.level === 3 })}>
                <a
                  href={`#${heading.slug}`}
                  className={cn(
                    "inline-block text-sm no-underline transition-colors hover:text-foreground",
                    heading.slug === activeId
                      ? "font-medium text-indigo-600 dark:text-indigo-400"
                      : "text-muted-foreground",
                  )}
                >
                  {heading.text}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
