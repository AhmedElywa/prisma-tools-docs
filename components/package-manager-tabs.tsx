"use client";
import { useState, useRef } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePackageManager } from "@/hooks/use-package-manager";
import { getPackageManagerIcon } from "./package-manager-icons";

interface PackageManagerTabsProps {
  commands: {
    npm: string;
    yarn: string;
    pnpm: string;
  };
  className?: string;
}

export function PackageManagerTabs({
  commands,
  className,
}: PackageManagerTabsProps) {
  const { packageManager, setPackageManager, isLoaded } = usePackageManager();
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  // Prevent hydration mismatch by not rendering until loaded
  if (!isLoaded) {
    return (
      <div className={className}>
        <div className="animate-pulse">
          <div className="h-9 bg-muted rounded-lg mb-2"></div>
          <div className="h-16 bg-muted/50 rounded-md"></div>
        </div>
      </div>
    );
  }

  const currentCommand = commands[packageManager];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Integrated header with tabs, language, and copy button */}
      <div className="flex items-center justify-between px-4 py-2 border border-border bg-muted text-secondary-foreground text-xs font-medium rounded-t-lg">
        <div className="flex items-center gap-4">
          {/* Language label with icon */}
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-current" />
            <span className="uppercase tracking-wider font-mono">Terminal</span>
          </div>

          {/* Package manager tabs */}
          <div className="flex items-center gap-1">
            {(["npm", "yarn", "pnpm"] as const).map((pm) => {
              const Icon = getPackageManagerIcon(pm);
              const isActive = packageManager === pm;

              return (
                <button
                  key={pm}
                  onClick={() => setPackageManager(pm)}
                  className={cn(
                    "package-manager-tab flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-colors duration-200",
                    isActive
                      ? "active bg-background text-foreground shadow-sm border border-border"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  )}
                  title={`Switch to ${pm}`}
                >
                  <Icon size={12} className="package-manager-icon" />
                  <span className="capitalize">{pm}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 p-2 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground transition-colors duration-200 border border-border"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
              <span className="text-xs text-green-600 dark:text-green-400">
                Copied!
              </span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code block */}
      <pre
        ref={preRef}
        className="relative overflow-x-auto rounded-t-none rounded-b-lg border-x border-b border-border text-sm code-block-scrollbar bg-muted/50 p-4"
      >
        <code className="text-foreground flex items-center gap-2">
          <span className="text-blue-400">{packageManager}</span>{" "}
          <span className="text-foreground">
            {currentCommand.replace(packageManager, "").trim()}
          </span>
        </code>
      </pre>
    </div>
  );
}

// Predefined components for common installation patterns
export function CLIInstallationTabs({ className }: { className?: string }) {
  return (
    <PackageManagerTabs
      commands={{
        npm: "npm install -g @paljs/cli",
        yarn: "yarn global add @paljs/cli",
        pnpm: "pnpm add -g @paljs/cli",
      }}
      className={className}
    />
  );
}

export function ProjectInstallationTabs({ className }: { className?: string }) {
  return (
    <PackageManagerTabs
      commands={{
        npm: "npm install @paljs/cli @paljs/generator",
        yarn: "yarn add @paljs/cli @paljs/generator",
        pnpm: "pnpm add @paljs/cli @paljs/generator",
      }}
      className={className}
    />
  );
}

// Generic component for development server commands
export function DevServerTabs({ className }: { className?: string }) {
  return (
    <PackageManagerTabs
      commands={{
        npm: "npm run dev",
        yarn: "yarn dev",
        pnpm: "pnpm dev",
      }}
      className={className}
    />
  );
}
