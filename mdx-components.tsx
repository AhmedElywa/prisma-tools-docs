import { cn } from "./lib/utils";
import type React from "react";
import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Terminal } from "lucide-react";
import {
  CLIInstallationTabs,
  ProjectInstallationTabs,
  DevServerTabs,
  PackageManagerTabs,
} from "./components/package-manager-tabs";
import { CodeBlock } from "./components/code-block";

// Helper function to generate slugs from text
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children, ...props }) => {
      const text = typeof children === "string" ? children : "";
      const id = props.id || generateSlug(text);
      return (
        <h1
          {...props}
          id={id}
          className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }) => {
      const text = typeof children === "string" ? children : "";
      const id = props.id || generateSlug(text);
      return (
        <h2
          {...props}
          id={id}
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }) => {
      const text = typeof children === "string" ? children : "";
      const id = props.id || generateSlug(text);
      return (
        <h3
          {...props}
          id={id}
          className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children, ...props }) => {
      const text = typeof children === "string" ? children : "";
      const id = props.id || generateSlug(text);
      return (
        <h4
          {...props}
          id={id}
          className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
        >
          {children}
        </h4>
      );
    },
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),
    a: ({ href, children }) => {
      if (href && href.startsWith("/")) {
        return (
          <Link
            href={href}
            className="font-medium text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
          >
            {children}
          </Link>
        );
      }
      if (href && href.startsWith("#")) {
        return (
          <a
            href={href}
            className="font-medium text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
          >
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
        >
          {children}
        </a>
      );
    },
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
    ),
    li: ({ children }) => <li>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-indigo-600 pl-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={props.alt || ""}
        className="my-6 rounded-lg border"
      />
    ),
    hr: () => <hr className="my-4 md:my-8" />,
    table: ({ children }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">{children}</table>
      </div>
    ),
    tr: ({ children }) => (
      <tr className="m-0 border-t p-0 even:bg-muted">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </td>
    ),
    pre: ({ children, ...props }) => {
      // The `rehype-pretty-code` plugin will pass `data-language` and `data-theme` props
      return (
        <div className="my-6">
          <CodeBlock {...props}>{children}</CodeBlock>
        </div>
      );
    },
    code: ({ children, className, ...props }) => {
      // Check if this is inline code (not inside a pre tag)
      const isInline = !className?.includes("language-");

      if (isInline) {
        return (
          <code className="relative dark:bg-background bg-card px-1 py-2 font-mono text-sm font-semibold">
            {children}
          </code>
        );
      }

      // For code blocks, return as-is (will be handled by pre wrapper)
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    // Custom components
    Callout: ({
      title,
      children,
      type = "default",
    }: {
      title?: string;
      children: React.ReactNode;
      type?: "default" | "warning" | "danger";
    }) => (
      <Alert
        className={cn(
          "my-6",
          type === "warning" &&
            "border-amber-500/50 text-amber-700 dark:text-amber-300 [&>svg]:text-amber-500 dark:[&>svg]:text-amber-400",
          type === "danger" &&
            "border-red-500/50 text-red-700 dark:text-red-300 [&>svg]:text-red-500 dark:[&>svg]:text-red-400"
        )}
      >
        <Terminal className="h-4 w-4" /> {/* Or choose icon based on type */}
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    ),
    // Example of an embedded React demo component (you'd create this separately)
    ReactDemo: () => (
      <div className="my-6 p-4 border rounded-lg bg-background">
        Embedded React Demo Placeholder
      </div>
    ),
    // Package Manager Tabs Components
    CLIInstallationTabs,
    ProjectInstallationTabs,
    DevServerTabs,
    PackageManagerTabs,
    ...components,
  };
}
