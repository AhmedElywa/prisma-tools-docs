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
    title: 'Production',
    items: [{ title: 'Plugins (PrismaSelect)', href: '/docs/packages-plugins' }],
  },
  {
    title: 'Learning & Prototyping',
    items: [
      { title: 'Generator', href: '/docs/packages-generator' },
      { title: 'Nexus', href: '/docs/packages-nexus' },
      { title: 'Admin', href: '/docs/packages-admin' },
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
