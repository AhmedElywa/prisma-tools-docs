"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { getLanguageIcon } from "./package-manager-icons"

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
  "data-language"?: string
  "data-theme"?: string
  filename?: string
  showLineNumbers?: boolean
  maxHeight?: string
  [key: string]: unknown
}

export function CodeBlock({
  children,
  className,
  filename,
  showLineNumbers = true,
  maxHeight = "400px",
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)
  const [codeContent, setCodeContent] = useState("")

  // Extract text content from the code block
  useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code")
      if (codeElement) {
        setCodeContent(codeElement.textContent || "")
      }
    }
  }, [children])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  // Add line numbers to the code content
  const addLineNumbers = (element: HTMLElement) => {
    const lines = element.querySelectorAll("[data-line]")
    if (lines.length > 1) {
      lines.forEach((line, index) => {
        // Check if line number already exists
        if (!line.querySelector(".line-number")) {
          const lineNumber = document.createElement("span")
          lineNumber.className = "line-number"
          lineNumber.textContent = String(index + 1)
          lineNumber.setAttribute("aria-hidden", "true")
          line.insertBefore(lineNumber, line.firstChild)
        }
      })
    }
  }

  useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code")
      if (codeElement) {
        addLineNumbers(codeElement)
      }
    }
  }, [children])

  const language = props["data-language"] || "code"
  const LanguageIcon = getLanguageIcon(language)

  return (
    <div className="relative group">
      {/* Header with macOS-style window controls */}
      <div className="flex items-center justify-between px-4 py-2 border border-border bg-slate-800 text-slate-200 text-xs font-medium rounded-t-lg">
        <div className="flex items-center gap-2">
          {/* macOS-style window controls */}
          <div className="flex gap-1.5 mr-3">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
          </div>

          {/* Filename or language */}
          {filename ? (
            <span className="font-mono text-slate-300">{filename}</span>
          ) : (
            <div className="flex items-center gap-2">
              <LanguageIcon size={14} className="text-slate-300" />
              <span className="uppercase tracking-wider font-mono text-slate-300">{language}</span>
            </div>
          )}
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

      {/* Code block container with fixed line numbers */}
      <div className="relative overflow-hidden rounded-b-lg border border-slate-700 bg-slate-900" style={{ maxHeight }}>
        <div className="flex overflow-auto code-block-scrollbar">
          {/* Fixed line numbers column */}
          {showLineNumbers && (
            <div className="flex-shrink-0 bg-slate-800 border-r border-slate-700 sticky left-0 z-10 select-none">
              <div className="py-4 px-2 text-right font-mono text-xs text-slate-500 tabular-nums">
                {codeContent.split("\n").map((_, i) => (
                  <div key={i} className="leading-relaxed">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scrollable code content */}
          <pre
            ref={preRef}
            className={cn("relative overflow-auto min-w-0 flex-1 p-4 text-sm font-mono text-slate-200", className)}
            {...props}
          >
            {children}
          </pre>
        </div>
      </div>
    </div>
  )
}
