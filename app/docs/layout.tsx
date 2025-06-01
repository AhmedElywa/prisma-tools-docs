import type React from "react";
import { DocsSidebar } from "@/components/docs-sidebar";
import { MobileSidebar } from "@/components/mobile-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-3.5rem-1px)] flex-1">
      <div className="fixed top-14 z-30 -ml-2 hidden h-full w-64 shrink-0 lg:sticky lg:block">
        <DocsSidebar />
      </div>
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
      <div className="flex-1 lg:pl-4">
        {" "}
        {/* Add some padding for separation from sidebar */}
        {children}
      </div>
    </div>
  );
}
