import { redirect } from "next/navigation"
import { allDocs } from "contentlayer/generated"

// Redirect /docs to the first available document or a specific introduction page
export default function DocsRootPage() {
  const firstDoc = allDocs.sort(
    (a, b) =>
      (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY) || a.title.localeCompare(b.title),
  )[0]
  if (firstDoc) {
    redirect(firstDoc.slug)
  }
  // Fallback if no docs exist, though ideally you'd have an intro page
  redirect("/")
}
