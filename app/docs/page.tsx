import Link from "next/link";

export default function DocsPage() {
  const docs = [
    {
      title: "Introduction",
      description: "Get started with PalJS",
      href: "/docs/introduction",
    },
    {
      title: "CLI Package",
      description: "Command-line interface for PalJS",
      href: "/docs/packages-cli",
    },
    {
      title: "Admin Package",
      description: "Admin UI components and utilities",
      href: "/docs/packages-admin",
    },
    {
      title: "Generator Package",
      description: "Code generation utilities",
      href: "/docs/packages-generator",
    },
    {
      title: "Nexus Package",
      description: "Integration with Nexus GraphQL framework",
      href: "/docs/packages-nexus",
    },
    {
      title: "Plugins Package",
      description: "Plugins for extending functionality",
      href: "/docs/packages-plugins",
    },
    {
      title: "Schema Package",
      description: "Schema definition and management",
      href: "/docs/packages-schema",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Documentation</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Welcome to the PalJS documentation. Choose a topic to get started.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {docs.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="block rounded-lg border p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="mb-2 text-xl font-semibold">{doc.title}</h2>
              <p className="text-muted-foreground">{doc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
