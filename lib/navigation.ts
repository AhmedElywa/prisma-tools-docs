// Shared navigation configuration for the documentation
export const docsNavigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'Upgrade Guide (v8 → v9)', href: '/docs/upgrade-guide' },
      { title: 'Configuration', href: '/docs/configuration' },
      { title: 'Prisma 7 Compatibility', href: '/docs/prisma-7' },
    ],
  },
  {
    title: 'Packages',
    items: [
      { title: 'Generator', href: '/docs/packages-generator' },
      { title: 'Admin', href: '/docs/packages-admin' },
      { title: 'Nexus', href: '/docs/packages-nexus' },
      { title: 'Plugins', href: '/docs/packages-plugins' },
    ],
  },
  {
    title: 'Legacy',
    items: [
      { title: 'CLI (Deprecated)', href: '/docs/packages-cli' },
      { title: 'Schema (Legacy)', href: '/docs/packages-schema' },
    ],
  },
  {
    title: 'MDC Templates',
    items: [
      { title: 'Overview', href: '/docs/mdc-templates' },
      {
        title: 'GraphQL Generator',
        href: '/docs/mdc-templates/prisma-graphql-generator',
      },
      {
        title: 'Admin Pages Generator',
        href: '/docs/mdc-templates/prisma-admin-pages-generator',
      },
      {
        title: 'Nexus Generator',
        href: '/docs/mdc-templates/prisma-nexus-generator',
      },
      {
        title: 'Resolver Types Generator',
        href: '/docs/mdc-templates/prisma-resolver-types-generator',
      },
      {
        title: 'Admin Settings Generator',
        href: '/docs/mdc-templates/prisma-admin-settings-generator',
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
