// Shared navigation configuration for the documentation
export const docsNavigation = [
  {
    title: "Getting Started",
    items: [{ title: "Introduction", href: "/docs/introduction" }],
  },
  {
    title: "Packages",
    items: [
      { title: "CLI", href: "/docs/packages-cli" },
      { title: "Admin", href: "/docs/packages-admin" },
      { title: "Generator", href: "/docs/packages-generator" },
      { title: "Nexus", href: "/docs/packages-nexus" },
      { title: "Plugins", href: "/docs/packages-plugins" },
      { title: "Schema", href: "/docs/packages-schema" },
    ],
  },
  {
    title: "MDC Templates",
    items: [
      { title: "Overview", href: "/docs/mdc-templates" },
      {
        title: "GraphQL Generator",
        href: "/docs/mdc-templates/prisma-graphql-generator",
      },
      {
        title: "Admin Pages Generator",
        href: "/docs/mdc-templates/prisma-admin-pages-generator",
      },
      {
        title: "Nexus Generator",
        href: "/docs/mdc-templates/prisma-nexus-generator",
      },
      {
        title: "SDL Generator",
        href: "/docs/mdc-templates/prisma-sdl-generator",
      },
      {
        title: "Resolver Types Generator",
        href: "/docs/mdc-templates/prisma-resolver-types-generator",
      },
      {
        title: "GraphQL Modules Generator",
        href: "/docs/mdc-templates/prisma-graphql-modules-generator",
      },
      {
        title: "Admin Settings Generator",
        href: "/docs/mdc-templates/prisma-admin-settings-generator",
      },
    ],
  },
] as const;

export type NavigationItem = {
  readonly title: string;
  readonly href: string;
};

export type NavigationGroup = {
  readonly title: string;
  readonly items: readonly NavigationItem[];
};
