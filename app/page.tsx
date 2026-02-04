import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Cog,
  Database,
  Github,
  GraduationCap,
  Layers,
  Package,
  Shield,
  Users,
  Zap,
} from 'lucide-react';
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
            Code generators for <strong>learning and prototyping</strong>, plus the <strong>production-ready</strong>{' '}
            PrismaSelect plugin for optimized GraphQL queries with Prisma.
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
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="border-b border-amber-200 bg-amber-50 py-6 dark:border-amber-900/50 dark:bg-amber-950/30">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600 dark:text-amber-500" />
            <div>
              <h3 className="font-semibold text-amber-900 dark:text-amber-200">Important: Choose the Right Tool</h3>
              <p className="mt-1 text-amber-800 dark:text-amber-300">
                The code generators (GraphQL, Nexus, Admin) are designed for{' '}
                <strong>learning, prototyping, and example projects</strong>. For{' '}
                <strong>production applications</strong>, use only the <strong>PrismaSelect plugin</strong> — it
                provides secure, optimized field selection without exposing your full Prisma client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Two Paths, One Toolkit</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              PalJS serves different needs — learn and prototype quickly, or optimize production queries.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Learning & Prototyping */}
            <Card className="rounded-2xl border-2 border-indigo-200 shadow-lg dark:border-indigo-900">
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900">
                    <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                    Learning & Prototyping
                  </span>
                </div>
                <CardTitle className="text-2xl">Code Generators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Go from Prisma schema to working GraphQL API instantly. Perfect for:
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    Learning Prisma + GraphQL patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    Building proof-of-concept projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    Creating example/demo applications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    Rapid admin interface scaffolding
                  </li>
                </ul>
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  Not recommended for production — exposes full Prisma operations
                </p>
              </CardContent>
            </Card>

            {/* Production */}
            <Card className="rounded-2xl border-2 border-emerald-200 shadow-lg dark:border-emerald-900">
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-100 p-3 dark:bg-emerald-900">
                    <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                    Production Ready
                  </span>
                </div>
                <CardTitle className="text-2xl">PrismaSelect Plugin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Automatic field selection optimization for your GraphQL resolvers:
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Only fetches requested fields — no over-fetching
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Prevents N+1 query issues automatically
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Secure — you control exposed operations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Works with any GraphQL framework
                  </li>
                </ul>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">Battle-tested for production workloads</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Packages</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Modular packages that work together or independently.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                icon: Zap,
                title: 'Plugins',
                description: 'PrismaSelect for automatic field selection optimization in GraphQL resolvers',
                href: '/docs/packages-plugins',
                badge: 'Production Ready',
                badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
              },
              {
                icon: Cog,
                title: 'Generator',
                description: 'Native Prisma 7 generator for GraphQL schemas, types, and admin UI',
                href: '/docs/packages-generator',
                badge: 'Learning & Prototyping',
                badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
              },
              {
                icon: Package,
                title: 'Nexus',
                description: 'Nexus plugin for Prisma integration with automatic field selection',
                href: '/docs/packages-nexus',
                badge: 'Learning & Prototyping',
                badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
              },
              {
                icon: Users,
                title: 'Admin',
                description: 'React 19 admin UI components with Tailwind CSS 4 for internal tools',
                href: '/docs/packages-admin',
                badge: 'Internal Tools',
                badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
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
                    <span className={cn('rounded-full px-2 py-1 text-xs font-medium', pkg.badgeColor)}>
                      {pkg.badge}
                    </span>
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
            <h2 className="mb-4 text-3xl font-bold">Quick Start: PrismaSelect</h2>
            <p className="text-muted-foreground mb-8">
              Add optimized field selection to your GraphQL resolvers in minutes.
            </p>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900">
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">1</span>
                </div>
                <h3 className="text-lg font-semibold">Install</h3>
                <code className="bg-background/80 block rounded px-3 py-2 text-sm">bun add @paljs/plugins</code>
              </div>
              <div className="space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900">
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">2</span>
                </div>
                <h3 className="text-lg font-semibold">Import</h3>
                <code className="bg-background/80 block rounded px-3 py-2 text-sm">
                  import &#123;PrismaSelect&#125;
                </code>
              </div>
              <div className="space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900">
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">3</span>
                </div>
                <h3 className="text-lg font-semibold">Use in Resolvers</h3>
                <code className="bg-background/80 block rounded px-3 py-2 text-sm">new PrismaSelect(info)</code>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/docs/packages-plugins"
                className={cn(buttonVariants({ size: 'lg' }), 'bg-emerald-600 px-8 py-6 text-lg hover:bg-emerald-700')}
              >
                PrismaSelect Docs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/docs/packages-generator"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'px-8 py-6 text-lg')}
              >
                Generator Docs (Learning)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
