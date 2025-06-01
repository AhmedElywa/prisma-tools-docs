"use client";

import React, { useState, useRef, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  "data-language"?: string;
  "data-theme"?: string;
  [key: string]: unknown;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);
  const [codeContent, setCodeContent] = useState("");

  // Extract text content from the code block
  useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      if (codeElement) {
        setCodeContent(codeElement.textContent || "");
      }
    }
  }, [children]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Add line numbers to the code content
  const addLineNumbers = (element: HTMLElement) => {
    const lines = element.querySelectorAll("[data-line]");
    if (lines.length > 1) {
      lines.forEach((line, index) => {
        // Check if line number already exists
        if (!line.querySelector(".line-number")) {
          const lineNumber = document.createElement("span");
          lineNumber.className = "line-number";
          lineNumber.textContent = String(index + 1);
          lineNumber.setAttribute("aria-hidden", "true");
          line.insertBefore(lineNumber, line.firstChild);
        }
      });
    }
  };

  useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      if (codeElement) {
        addLineNumbers(codeElement);
      }
    }
  }, [children]);

  const language = props["data-language"] || "";

  return (
    <div className="relative group">
      {/* Language label and copy button */}
      <div className="flex items-center justify-between px-4 py-2 border border-border bg-muted text-secondary-foreground text-xs font-medium rounded-t-lg">
        <span className="uppercase tracking-wider font-mono">
          {language || "code"}
        </span>
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
        className={cn(
          "relative overflow-x-auto rounded-t-none rounded-b-lg border-x border-b border-border text-sm code-block-scrollbar",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
