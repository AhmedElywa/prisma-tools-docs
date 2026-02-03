'use client';

import { FileText, Github, Home, Package, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

const mainDocs = [{ title: 'Introduction', slug: '/docs/introduction' }];

const packageDocs = [
  { title: 'CLI Package', slug: '/docs/packages-cli' },
  { title: 'Admin Package', slug: '/docs/packages-admin' },
  { title: 'Generator Package', slug: '/docs/packages-generator' },
  { title: 'Nexus Package', slug: '/docs/packages-nexus' },
  { title: 'Plugins Package', slug: '/docs/packages-plugins' },
  { title: 'Schema Package', slug: '/docs/packages-schema' },
];

// Context for Command Dialog
interface CommandDialogContextType {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const CommandDialogContext = React.createContext<CommandDialogContextType | undefined>(undefined);

export function CommandDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
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
    throw new Error('useCommandDialog must be used within a CommandDialogProvider');
  }
  return context;
}

function CommandPalette({ isOpen, setOpen }: { isOpen: boolean; setOpen: (open: boolean) => void }) {
  const router = useRouter();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen],
  );

  return (
    <CommandDialog open={isOpen} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push('/'))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/docs'))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Documentation</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => window.open('https://github.com/AhmedElywa/prisma-tools', '_blank'))}
          >
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Getting Started">
          {mainDocs.map((doc) => (
            <CommandItem key={doc.slug} onSelect={() => runCommand(() => router.push(doc.slug))}>
              <FileText className="mr-2 h-4 w-4" />
              <span>{doc.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Package Documentation">
          {packageDocs.map((doc) => (
            <CommandItem key={doc.slug} onSelect={() => runCommand(() => router.push(doc.slug))}>
              <Package className="mr-2 h-4 w-4" />
              <span>{doc.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export function CommandMenuToggle() {
  const { setOpen } = useCommandDialog();
  return (
    <Button
      variant="outline"
      className="text-muted-foreground h-9 w-9 p-0 md:h-10 md:w-60 md:justify-start md:px-4 md:py-2 md:text-sm"
      onClick={() => setOpen(true)}
      aria-label="Open command palette"
    >
      <Search className="h-4 w-4 md:mr-2" />
      <span className="hidden md:inline-flex">Search documentation...</span>
      <kbd className="bg-muted pointer-events-none absolute right-2 hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none group-hover:opacity-100 md:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
