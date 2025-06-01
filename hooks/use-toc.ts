"use client"
import { useState, useEffect } from "react"

export interface TocEntry {
  level: number
  text: string
  slug: string
}

export function useTableOfContents(headings?: TocEntry[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (!headings || headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }, // Adjust rootMargin to trigger earlier/later
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.slug)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  return activeId
}
