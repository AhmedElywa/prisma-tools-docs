import Welcome from "../../content/welcome.mdx";

export default function TestImportPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <Welcome />
      </div>
    </div>
  );
}
