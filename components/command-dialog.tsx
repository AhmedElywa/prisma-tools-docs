"use client";

import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Search, FileText, Home, Github } from "lucide-react";
import { useRouter } from "next/navigation";
const docs = [
  { title: "Introduction", slug: "/docs/introduction" },
  { title: "CLI Package", slug: "/docs/packages-cli" },
  { title: "Admin Package", slug: "/docs/packages-admin" },
  { title: "Generator Package", slug: "/docs/packages-generator" },
];

// Context for Command Dialog
interface CommandDialogContextType {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const CommandDialogContext = React.createContext<
  CommandDialogContextType | undefined
>(undefined);

export function CommandDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialogContext.Provider value={{ isOpen, setOpen }}>
      {children}
      <CommandPalette isOpen={isOpen} setOpen={setOpen} />
    </CommandDialogContext.Provider>
  );
}

export function useCommandDialog() {
  const context = React.useContext(CommandDialogContext);
  if (context === undefined) {
    throw new Error(
      "useCommandDialog must be used within a CommandDialogProvider"
    );
  }
  return context;
}

function CommandPalette({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <CommandDialog open={isOpen} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/docs"))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Documentation</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                window.open(
                  "https://github.com/AhmedElywa/prisma-tools",
                  "_blank"
                )
              )
            }
          >
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Docs Sections">
          {docs.slice(0, 5).map(
            (
              doc // Show a few docs
            ) => (
              <CommandItem
                key={doc.slug}
                onSelect={() => runCommand(() => router.push(doc.slug))}
              >
                <FileText className="mr-2 h-4 w-4" />
                <span>{doc.title}</span>
              </CommandItem>
            )
          )}
        </CommandGroup>
        {/* Add more groups like "Settings", "Themes" etc. */}
      </CommandList>
    </CommandDialog>
  );
}

export function CommandMenuToggle() {
  const { setOpen } = useCommandDialog();
  return (
    <Button
      variant="outline"
      className="h-9 w-9 p-0 md:h-10 md:w-60 md:px-4 md:py-2 md:justify-start md:text-sm text-muted-foreground"
      onClick={() => setOpen(true)}
      aria-label="Open command palette"
    >
      <Search className="h-4 w-4 md:mr-2" />
      <span className="hidden md:inline-flex">Search documentation...</span>
      <kbd className="pointer-events-none absolute right-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 md:flex group-hover:opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
