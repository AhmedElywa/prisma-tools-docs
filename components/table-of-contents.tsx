"use client";

import {
  useTableOfContents,
  useExtractHeadings,
  type TocEntry,
} from "@/hooks/use-toc";
import { cn } from "@/lib/utils";
import { memo } from "react";

interface TableOfContentsProps {
  headings?: TocEntry[];
}

// Memoize individual TOC item component
const TocItem = memo(function TocItem({
  heading,
  isActive,
}: {
  heading: TocEntry;
  isActive: boolean;
}) {
  return (
    <li className={cn("mt-0 pt-1", { "pl-4": heading.level === 3 })}>
      <a
        href={`#${heading.slug}`}
        className={cn(
          "inline-block text-sm no-underline transition-colors hover:text-foreground",
          isActive
            ? "font-medium text-indigo-600 dark:text-indigo-400"
            : "text-muted-foreground"
        )}
      >
        {heading.text}
      </a>
    </li>
  );
});

export const TableOfContents = memo(function TableOfContents({
  headings: providedHeadings,
}: TableOfContentsProps) {
  const extractedHeadings = useExtractHeadings();
  const headings = providedHeadings || extractedHeadings;
  const activeId = useTableOfContents(headings);

  // Filter to only show h2 and h3 headings
  const filteredHeadings =
    headings?.filter((h) => h.level === 2 || h.level === 3) || [];

  if (!filteredHeadings || filteredHeadings.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-20 -mt-10 hidden h-[calc(100vh-5rem)] overflow-y-auto py-8 lg:block">
      <div className="space-y-2">
        <p className="font-medium">On This Page</p>
        <ul className="m-0 list-none">
          {filteredHeadings.map((heading) => (
            <TocItem
              key={heading.slug}
              heading={heading}
              isActive={heading.slug === activeId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
});
