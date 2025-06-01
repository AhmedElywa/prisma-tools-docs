import type React from "react";
import { DocsSidebar } from "@/components/docs-sidebar";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { TableOfContents } from "@/components/table-of-contents";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-3.5rem-1px)] flex-1 max-w-none">
      <div className="fixed top-14 z-30 -ml-2 hidden h-full w-64 shrink-0 lg:sticky lg:block">
        <DocsSidebar />
      </div>
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
      <div className="flex-1 min-w-0 lg:pl-4 lg:pr-8">
        <div className="max-w-4xl">{children}</div>
      </div>
      <div className="hidden lg:block lg:w-64 lg:shrink-0">
        <TableOfContents />
      </div>
    </div>
  );
}
