import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx-content";
import { getPrevNextDocs } from "@/lib/contentlayer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TocEntry } from "@/hooks/use-toc";

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getDocFromParams({ params }: DocPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }
  return doc;
}

export async function generateMetadata({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  const { prev, next } = getPrevNextDocs(doc.slugAsParams);

  // Example: Deprecated version notice (logic would be more complex)
  const isDeprecatedVersion = doc.slug.includes("/v8"); // Simple check

  return (
    <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_220px]">
      <div className="mx-auto w-full min-w-0">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/docs">Docs</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {doc.group && (
              <>
                <BreadcrumbItem>
                  {/* Ideally, group would also be a link if it has an index page */}
                  <span className="text-muted-foreground">{doc.group}</span>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
            <BreadcrumbItem>
              <BreadcrumbPage>{doc.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {isDeprecatedVersion && (
          <Alert
            variant="default"
            className="mb-6 border-amber-500/50 text-amber-700 dark:text-amber-300 [&>svg]:text-amber-500 dark:[&>svg]:text-amber-400"
          >
            <Info className="h-4 w-4" />
            <AlertTitle>Deprecated Version</AlertTitle>
            <AlertDescription>
              You are viewing documentation for an older version of PalJS. For
              the latest features, please see the{" "}
              <Link href="/docs" className="font-semibold underline">
                current version
              </Link>
              .
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">{doc.description}</p>
          )}
        </div>

        <div className="prose prose-stone dark:prose-invert max-w-none mt-8">
          <MDXContent code={doc.body.code} />
        </div>

        <hr className="my-8 md:my-12" />

        <div className="flex justify-between">
          {prev ? (
            <Link
              href={prev.href}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex items-center"
              )}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              {prev.title}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={next.href}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex items-center"
              )}
            >
              {next.title}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
      {doc.toc && doc.headings && doc.headings.length > 0 && (
        <div className="hidden text-sm xl:block">
          <TableOfContents headings={doc.headings as TocEntry[]} />
        </div>
      )}
    </div>
  );
}
