interface MDXContentProps {
  code: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MDXContent(_: MDXContentProps) {
  // Fallback for contentlayer compatibility issues
  return (
    <div className="prose prose-stone dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: "Content loading..." }} />
      <p>
        MDX content would be rendered here when contentlayer compatibility is
        resolved.
      </p>
    </div>
  );
}
