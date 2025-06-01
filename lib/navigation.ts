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
] as const;

export type NavigationItem = {
  readonly title: string;
  readonly href: string;
};

export type NavigationGroup = {
  readonly title: string;
  readonly items: readonly NavigationItem[];
};
