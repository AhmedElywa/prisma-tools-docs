import { ArrowRight, Cog, Database, FileText, Github, Layers, Package, Users, Wrench, Zap } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="via-background to-background relative bg-gradient-to-br from-indigo-600/10 py-20 md:py-32 dark:from-indigo-900/20">
        <div className="bg-background absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Comprehensive</span>
            <span className="block text-indigo-600 dark:text-indigo-500">Prisma Toolkit</span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl">
            Complete toolkit for building modern GraphQL APIs with Prisma. Generate code, create admin interfaces,
            optimize queries, and scaffold full-stack applications - all with type safety and best practices built-in.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/docs/introduction" className={cn(buttonVariants({ size: 'lg' }), 'px-8 py-6 text-lg')}>
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/AhmedElywa/prisma-tools"
              target="_blank"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'group px-8 py-6 text-lg')}
            >
              <Github className="text-muted-foreground group-hover:text-foreground mr-2 h-5 w-5 transition-colors" />{' '}
              GitHub <span className="ml-2 text-indigo-600 dark:text-indigo-500">★ 5k</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose PalJS?</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              From rapid prototyping to production-ready applications, PalJS provides everything you need for modern
              GraphQL development with Prisma.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: 'Rapid Development',
                description: 'Go from Prisma schema to production API in minutes with automated code generation.',
              },
              {
                icon: Database,
                title: 'Admin Interfaces',
                description: 'Beautiful, configurable Admin UI components for managing your Prisma models.',
              },
              {
                icon: Layers,
                title: 'Framework Agnostic',
                description: 'Works with Apollo Server, Express, Next.js, Nexus, GraphQL Modules, and more.',
              },
              {
                icon: Package,
                title: 'Query Optimization',
                description: 'PrismaSelect plugin for efficient field selection and N+1 query prevention.',
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-4 w-fit rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900">
                    <feature.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Core Packages</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Modular packages that work together or independently to accelerate your development workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Wrench,
                title: 'CLI',
                description: 'Command-line interface for project scaffolding and code generation',
                href: '/docs/packages-cli',
                badge: 'Essential',
              },
              {
                icon: Cog,
                title: 'Generator',
                description: 'Automated code generation for GraphQL schemas, resolvers, and CRUD operations',
                href: '/docs/packages-generator',
                badge: 'Core',
              },
              {
                icon: Users,
                title: 'Admin',
                description: 'React admin UI components with support for Material UI, Tailwind, and Chakra',
                href: '/docs/packages-admin',
                badge: 'UI',
              },
              {
                icon: Package,
                title: 'Nexus',
                description: 'Nexus plugin for seamless Prisma integration with type-safe GraphQL',
                href: '/docs/packages-nexus',
                badge: 'Framework',
              },
              {
                icon: Zap,
                title: 'Plugins',
                description: 'GraphQL plugins for field selection optimization and query enhancement',
                href: '/docs/packages-plugins',
                badge: 'Performance',
              },
              {
                icon: FileText,
                title: 'Schema',
                description: 'Schema manipulation and conversion utilities for various GraphQL frameworks',
                href: '/docs/packages-schema',
                badge: 'Utility',
              },
            ].map((pkg) => (
              <Card
                key={pkg.title}
                className="group rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="mb-4 w-fit rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900">
                      <pkg.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">{pkg.badge}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    @paljs/{pkg.title.toLowerCase()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{pkg.description}</CardDescription>
                  <Link
                    href={pkg.href}
                    className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold">Ready to Build Something Amazing?</h2>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900">
                  <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">1</span>
                </div>
                <h3 className="text-lg font-semibold">Create Project</h3>
                <code className="bg-background/80 block rounded px-3 py-2 text-sm">npx @paljs/cli create</code>
              </div>
              <div className="space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900">
                  <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">2</span>
                </div>
                <h3 className="text-lg font-semibold">Generate Code</h3>
                <code className="bg-background/80 block rounded px-3 py-2 text-sm">npx pal generate</code>
              </div>
              <div className="space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900">
                  <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">3</span>
                </div>
                <h3 className="text-lg font-semibold">Start Building</h3>
                <code className="bg-background/80 block rounded px-3 py-2 text-sm">npm run dev</code>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/docs/introduction" className={cn(buttonVariants({ size: 'lg' }), 'px-8 py-6 text-lg')}>
                Start Building <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/AhmedElywa/prisma-tools/tree/main/packages/create/examples"
                target="_blank"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'px-8 py-6 text-lg')}
              >
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
