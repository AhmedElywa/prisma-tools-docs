'use client';

import { GithubIcon } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CommandMenuToggle } from '@/components/command-dialog';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="ml-6 flex items-center">
          <Logo />
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/docs"
            className={cn(
              'hover:text-foreground/80 transition-colors',
              pathname?.startsWith('/docs') ? 'text-foreground' : 'text-foreground/60',
            )}
          >
            Docs
          </Link>
          {/* Add other main nav links here if any */}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:block">
            <CommandMenuToggle />
          </div>
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <Link href="https://github.com/AhmedElywa/prisma-tools" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
