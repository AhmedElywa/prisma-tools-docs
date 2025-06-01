"use client"

import React from "react"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { CommandMenuToggle } from "@/components/command-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Github } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const versions = [
  { name: "v9 (Latest)", href: "/docs" },
  { name: "v8", href: "/docs/v8" }, // Example, adjust as needed
]

export function SiteHeader() {
  const pathname = usePathname()
  const [currentVersion, setCurrentVersion] = React.useState(versions[0])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/docs"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/docs") ? "text-foreground" : "text-foreground/60",
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm">
                {currentVersion.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {versions.map((version) => (
                <DropdownMenuItem
                  key={version.name}
                  onSelect={() => {
                    setCurrentVersion(version)
                    // Potentially navigate or reload based on version selection
                    // router.push(version.href);
                  }}
                >
                  {version.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <Link href="https://github.com/paljs/pal" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
