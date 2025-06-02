"use client";

import {
  useTableOfContents,
  useExtractHeadings,
  type TocEntry,
} from "@/hooks/use-toc";
import { cn } from "@/lib/utils";
import { memo } from "react";
import Link from "next/link";

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
    <li
      className={cn("mt-0 cursor-pointer pt-1", {
        "pl-4": heading.level === 3,
      })}
    >
      <Link
        href={`#${heading.slug}`}
        className={cn(
          "hover:bg-accent hover:text-accent-foreground block cursor-pointer rounded-md px-2 py-1.5 text-sm transition-colors",
          isActive
            ? "bg-indigo-50 font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
            : "text-muted-foreground"
        )}
      >
        {heading.text}
      </Link>
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
