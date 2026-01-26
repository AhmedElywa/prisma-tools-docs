'use client';
import { useEffect, useState } from 'react';

export interface TocEntry {
  level: number;
  text: string;
  slug: string;
}

export function useTableOfContents(headings?: TocEntry[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }, // Adjust rootMargin to trigger earlier/later
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.slug);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  return activeId;
}

// Hook to automatically extract headings from the current page
export function useExtractHeadings() {
  const [headings, setHeadings] = useState<TocEntry[]>([]);

  useEffect(() => {
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const extractedHeadings: TocEntry[] = [];

      headingElements.forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1), 10);
        const text = heading.textContent || '';
        let slug = heading.id;

        // If no id exists, create one from the text
        if (!slug && text) {
          slug = text
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
          heading.id = slug;
        }

        if (slug && text) {
          extractedHeadings.push({
            level,
            text: text.trim(),
            slug,
          });
        }
      });

      setHeadings(extractedHeadings);
    };

    // Extract headings after a short delay to ensure content is rendered
    const timeoutId = setTimeout(extractHeadings, 100);

    // Re-extract if the pathname changes (for client-side navigation)
    const observer = new MutationObserver(extractHeadings);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return headings;
}
