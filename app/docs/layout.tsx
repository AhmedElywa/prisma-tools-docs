import type React from "react";
import { DocsSidebar } from "@/components/docs-sidebar";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { TableOfContents } from "@/components/table-of-contents";
import { DocsPageWrapper } from "@/components/docs-page-wrapper";
import { memo } from "react";

interface DocsLayoutProps {
  children: React.ReactNode;
}

// Memoize the layout component to prevent unnecessary re-renders
const DocsLayout = memo(function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container mx-auto min-h-[calc(100vh-3.5rem-1px)] max-w-none flex-1">
      {/* Mobile sidebar - shows at top on mobile */}
      <div className="lg:hidden">
        <MobileSidebar />
      </div>

      {/* Desktop layout - horizontal flex */}
      <div className="flex">
        {/* Desktop sidebar - static component that shouldn't re-render */}
        <div className="fixed top-14 z-30 -ml-2 hidden h-full w-64 shrink-0 lg:sticky lg:block">
          <DocsSidebar />
        </div>

        {/* Main content area - wrapped with animation */}
        <div className="min-w-0 flex-1 px-4 lg:pr-8 lg:pl-4">
          <div className="max-w-4xl">
            <DocsPageWrapper>{children}</DocsPageWrapper>
          </div>
        </div>

        {/* Table of contents - static component that shouldn't re-render */}
        <div className="hidden lg:block lg:w-64 lg:shrink-0">
          <TableOfContents />
        </div>
      </div>
    </div>
  );
});

// Set display name for better debugging
DocsLayout.displayName = "DocsLayout";

export default DocsLayout;
