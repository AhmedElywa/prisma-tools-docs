import { type Doc, allDocs } from "contentlayer/generated"

export type DocNavItem = {
  title: string
  href: string
  order?: number
  items?: DocNavItem[]
  disabled?: boolean
}

export type DocNavGroup = {
  title: string
  order?: number
  items: DocNavItem[]
}

export function getDocsNav(): DocNavGroup[] {
  const groups: Record<string, DocNavGroup> = {}

  allDocs
    .sort(
      (a, b) =>
        (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY) || a.title.localeCompare(b.title),
    )
    .forEach((doc) => {
      if (!groups[doc.group]) {
        groups[doc.group] = {
          title: doc.group,
          items: [],
          // You might want to add an 'order' field to groups in frontmatter too
        }
      }
      groups[doc.group].items.push({
        title: doc.title,
        href: doc.slug,
        order: doc.order,
      })
    })

  return Object.values(groups).sort(
    (a, b) =>
      (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY) || a.title.localeCompare(b.title),
  )
}

export function getDocFromSlug(slug: string): Doc | undefined {
  return allDocs.find((doc) => doc.slugAsParams === slug)
}

export function getPrevNextDocs(slug: string): { prev?: DocNavItem; next?: DocNavItem } {
  const sortedDocs = allDocs.sort((a, b) => {
    if (a.group !== b.group) {
      return (
        (getDocsNav().find((g) => g.title === a.group)?.order ?? Number.POSITIVE_INFINITY) -
          (getDocsNav().find((g) => g.title === b.group)?.order ?? Number.POSITIVE_INFINITY) ||
        a.group.localeCompare(b.group)
      )
    }
    return (
      (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY) || a.title.localeCompare(b.title)
    )
  })

  const currentIndex = sortedDocs.findIndex((doc) => doc.slugAsParams === slug)
  if (currentIndex === -1) return {}

  const prev =
    currentIndex > 0
      ? { title: sortedDocs[currentIndex - 1].title, href: sortedDocs[currentIndex - 1].slug }
      : undefined
  const next =
    currentIndex < sortedDocs.length - 1
      ? { title: sortedDocs[currentIndex + 1].title, href: sortedDocs[currentIndex + 1].slug }
      : undefined

  return { prev, next }
}
