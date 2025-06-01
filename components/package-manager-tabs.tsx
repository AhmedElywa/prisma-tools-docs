"use client"

import { useState, useRef } from "react"
import { Copy, Check, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePackageManager } from "@/hooks/use-package-manager"
import { getPackageManagerIcon } from "./package-manager-icons"

interface PackageManagerTabsProps {
  commands: {
    npm: string
    yarn: string
    pnpm: string
  }
  className?: string
  maxHeight?: string
}

export function PackageManagerTabs({ commands, className, maxHeight = "auto" }: PackageManagerTabsProps) {
  const { packageManager, setPackageManager, isLoaded } = usePackageManager()
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  // Prevent hydration mismatch by not rendering until loaded
  if (!isLoaded) {
    return (
      <div className={className}>
        <div className="animate-pulse">
          <div className="h-9 bg-slate-800 rounded-lg mb-2"></div>
          <div className="h-16 bg-slate-900 rounded-md"></div>
        </div>
      </div>
    )
  }

  const currentCommand = commands[packageManager]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className={cn("relative group", className)}>
      {/* Header with macOS-style window controls */}
      <div className="flex items-center justify-between px-4 py-2 border border-slate-700 bg-slate-800 text-slate-200 text-xs font-medium rounded-t-lg">
        <div className="flex items-center gap-4">
          {/* macOS-style window controls */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
          </div>

          {/* Terminal icon and label */}
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-slate-300" />
            <span className="uppercase tracking-wider font-mono text-slate-300">Terminal</span>
          </div>

          {/* Package manager tabs */}
          <div className="flex items-center gap-1">
            {(["npm", "yarn", "pnpm"] as const).map((pm) => {
              const Icon = getPackageManagerIcon(pm)
              const isActive = packageManager === pm

              return (
                <button
                  key={pm}
                  onClick={() => setPackageManager(pm)}
                  className={cn(
                    "package-manager-tab flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200",
                    isActive
                      ? "bg-slate-700 text-white shadow-sm border border-slate-600"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50",
                  )}
                  title={`Switch to ${pm}`}
                >
                  <Icon size={12} className="package-manager-icon" />
                  <span className="capitalize">{pm}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors duration-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 focus:ring-offset-slate-800"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-400" />
              <span className="text-xs text-green-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code block */}
      <div className="overflow-hidden rounded-b-lg border border-slate-700 bg-slate-900" style={{ maxHeight }}>
        <pre ref={preRef} className="overflow-auto code-block-scrollbar p-4 text-sm font-mono">
          <code className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">{packageManager}</span>
            <span className="text-slate-200">{currentCommand.replace(packageManager, "").trim()}</span>
          </code>
        </pre>
      </div>
    </div>
  )
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
  )
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
  )
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
  )
}
