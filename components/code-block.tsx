"use client";

import React, { useState, useRef, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLanguageIcon } from "./package-manager-icons";

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
  const [lineCount, setLineCount] = useState(0);

  // Extract text content from the code block and count lines
  useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      if (codeElement) {
        setCodeContent(codeElement.textContent || "");
        const lines = codeElement.querySelectorAll("[data-line]");
        setLineCount(lines.length);
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

  // Remove existing line numbers from code content
  const removeLineNumbers = (element: HTMLElement) => {
    const lines = element.querySelectorAll("[data-line]");
    lines.forEach((line) => {
      const lineNumber = line.querySelector(".line-number");
      if (lineNumber) {
        lineNumber.remove();
      }
    });
  };

  useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      if (codeElement) {
        removeLineNumbers(codeElement);

        // Apply consistent line height and height to code lines
        const lines = codeElement.querySelectorAll("[data-line]");
        lines.forEach((line) => {
          const lineElement = line as HTMLElement;
          lineElement.style.lineHeight = "1.5rem";
          lineElement.style.height = "1.5rem";
          lineElement.style.display = "flex";
          lineElement.style.alignItems = "center";
        });
      }
    }
  }, [children]);

  const language = props["data-language"] || "code";
  const LanguageIcon = getLanguageIcon(language);

  return (
    <div className="relative group">
      {/* Language label and copy button */}
      <div className="flex items-center justify-between px-4 py-2 border border-border bg-muted text-secondary-foreground text-xs font-medium rounded-t-lg">
        <div className="flex items-center gap-2">
          <LanguageIcon size={14} className="package-manager-icon" />
          <span className="uppercase tracking-wider font-mono">{language}</span>
        </div>
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

      {/* Code block with fixed line numbers */}
      <div className="relative flex rounded-t-none rounded-b-lg border-x border-b border-border bg-background overflow-hidden">
        {/* Fixed line numbers */}
        {lineCount > 1 && (
          <div className="flex flex-col bg-muted/50 border-r border-border text-muted-foreground text-xs font-mono select-none shrink-0 py-2">
            {Array.from({ length: lineCount }, (_, index) => (
              <div
                key={index + 1}
                className="px-3 py-0 flex items-center justify-end text-right text-xs font-mono"
                style={{ lineHeight: "1.5rem", height: "1.5rem" }}
                aria-hidden="true"
              >
                {index + 1}
              </div>
            ))}
          </div>
        )}

        {/* Scrollable code content */}
        <div className="flex-1 overflow-x-auto code-block-scrollbar">
          <pre
            ref={preRef}
            className={cn(
              "text-sm m-0",
              lineCount > 1 ? "py-0" : "py-3",
              className
            )}
            style={{ lineHeight: "1.5rem" }}
            {...props}
          >
            {children}
          </pre>
        </div>
      </div>
    </div>
  );
}
