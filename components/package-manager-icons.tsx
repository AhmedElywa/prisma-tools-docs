import React from "react";
import {
  Package,
  Layers,
  Box,
  Code,
  FileCode,
  Database,
  Terminal,
  Braces,
  FileText,
  Settings,
  Globe,
} from "lucide-react";

interface IconProps {
  className?: string;
  size?: number;
}

// Package Manager Icons
export function NpmIcon({ className = "", size = 16 }: IconProps) {
  return (
    <Package
      size={size}
      className={`${className} text-red-600 dark:text-red-400`}
      aria-label="npm"
    />
  );
}

export function YarnIcon({ className = "", size = 16 }: IconProps) {
  return (
    <Box
      size={size}
      className={`${className} text-blue-600 dark:text-blue-400`}
      aria-label="yarn"
    />
  );
}

export function PnpmIcon({ className = "", size = 16 }: IconProps) {
  return (
    <Layers
      size={size}
      className={`${className} text-orange-600 dark:text-orange-400`}
      aria-label="pnpm"
    />
  );
}

export function getPackageManagerIcon(packageManager: string) {
  switch (packageManager) {
    case "npm":
      return NpmIcon;
    case "yarn":
      return YarnIcon;
    case "pnpm":
      return PnpmIcon;
    default:
      return NpmIcon;
  }
}

// Language Icons
export function TypeScriptIcon({ className = "", size = 16 }: IconProps) {
  return (
    <FileCode
      size={size}
      className={`${className} text-blue-600 dark:text-blue-400`}
      aria-label="TypeScript"
    />
  );
}

export function JavaScriptIcon({ className = "", size = 16 }: IconProps) {
  return (
    <Code
      size={size}
      className={`${className} text-yellow-600 dark:text-yellow-400`}
      aria-label="JavaScript"
    />
  );
}

export function PrismaIcon({ className = "", size = 16 }: IconProps) {
  return (
    <Database
      size={size}
      className={`${className} text-purple-600 dark:text-purple-400`}
      aria-label="Prisma"
    />
  );
}

export function BashIcon({ className = "", size = 16 }: IconProps) {
  return (
    <Terminal
      size={size}
      className={`${className} text-green-600 dark:text-green-400`}
      aria-label="Bash"
    />
  );
}

export function JSONIcon({ className = "", size = 16 }: IconProps) {
  return (
    <Braces
      size={size}
      className={`${className} text-gray-600 dark:text-gray-400`}
      aria-label="JSON"
    />
  );
}

export function MarkdownIcon({ className = "", size = 16 }: IconProps) {
  return (
    <FileText
      size={size}
      className={`${className} text-gray-800 dark:text-gray-200`}
      aria-label="Markdown"
    />
  );
}

export function ConfigIcon({ className = "", size = 16 }: IconProps) {
  return (
    <Settings
      size={size}
      className={`${className} text-gray-600 dark:text-gray-400`}
      aria-label="Config"
    />
  );
}

export function HTMLIcon({ className = "", size = 16 }: IconProps) {
  return (
    <Globe
      size={size}
      className={`${className} text-orange-600 dark:text-orange-400`}
      aria-label="HTML"
    />
  );
}

export function getLanguageIcon(language: string) {
  const lang = language.toLowerCase();

  switch (lang) {
    case "typescript":
    case "ts":
      return TypeScriptIcon;
    case "javascript":
    case "js":
      return JavaScriptIcon;
    case "prisma":
      return PrismaIcon;
    case "bash":
    case "shell":
    case "sh":
    case "zsh":
      return BashIcon;
    case "json":
      return JSONIcon;
    case "markdown":
    case "md":
    case "mdx":
      return MarkdownIcon;
    case "html":
      return HTMLIcon;
    case "yaml":
    case "yml":
    case "toml":
    case "ini":
    case "conf":
    case "config":
      return ConfigIcon;
    default:
      return Code; // Default code icon for unknown languages
  }
}
