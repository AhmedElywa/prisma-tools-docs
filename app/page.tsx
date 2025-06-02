import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  Cog,
  Zap,
  Github,
  Package,
  Layers,
  Wrench,
  Database,
  Users,
  FileText,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-indigo-600/10 via-background to-background dark:from-indigo-900/20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Comprehensive</span>
            <span className="block text-indigo-600 dark:text-indigo-500">
              Prisma Toolkit
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Complete toolkit for building modern GraphQL APIs with Prisma.
            Generate code, create admin interfaces, optimize queries, and
            scaffold full-stack applications - all with type safety and best
            practices built-in.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/docs/introduction"
              className={cn(
                buttonVariants({ size: "lg" }),
                "text-lg px-8 py-6"
              )}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/AhmedElywa/prisma-tools"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-lg px-8 py-6 group"
              )}
            >
              <Github className="mr-2 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />{" "}
              GitHub{" "}
              <span className="ml-2 text-indigo-600 dark:text-indigo-500">
                ★ 5k
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose PalJS?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From rapid prototyping to production-ready applications, PalJS
              provides everything you need for modern GraphQL development with
              Prisma.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Rapid Development",
                description:
                  "Go from Prisma schema to production API in minutes with automated code generation.",
              },
              {
                icon: Sparkles,
                title: "AI-Powered Templates",
                description:
                  "Generate code using AI with comprehensive MDC templates that preserve best practices.",
              },
              {
                icon: Database,
                title: "Admin Interfaces",
                description:
                  "Beautiful, configurable Admin UI components for managing your Prisma models.",
              },
              {
                icon: Layers,
                title: "Framework Agnostic",
                description:
                  "Works with Apollo Server, Express, Next.js, Nexus, GraphQL Modules, and more.",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg w-fit mb-4">
                    <feature.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
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
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modular packages that work together or independently to accelerate
              your development workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "CLI",
                description:
                  "Command-line interface for project scaffolding and code generation",
                href: "/docs/packages-cli",
                badge: "Essential",
              },
              {
                icon: Cog,
                title: "Generator",
                description:
                  "Automated code generation for GraphQL schemas, resolvers, and CRUD operations",
                href: "/docs/packages-generator",
                badge: "Core",
              },
              {
                icon: Users,
                title: "Admin",
                description:
                  "React admin UI components with support for Material UI, Tailwind, and Chakra",
                href: "/docs/packages-admin",
                badge: "UI",
              },
              {
                icon: Package,
                title: "Nexus",
                description:
                  "Nexus plugin for seamless Prisma integration with type-safe GraphQL",
                href: "/docs/packages-nexus",
                badge: "Framework",
              },
              {
                icon: Zap,
                title: "Plugins",
                description:
                  "GraphQL plugins for field selection optimization and query enhancement",
                href: "/docs/packages-plugins",
                badge: "Performance",
              },
              {
                icon: FileText,
                title: "Schema",
                description:
                  "Schema manipulation and conversion utilities for various GraphQL frameworks",
                href: "/docs/packages-schema",
                badge: "Utility",
              },
            ].map((pkg) => (
              <Card
                key={pkg.title}
                className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg w-fit mb-4">
                      <pkg.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    @paljs/{pkg.title.toLowerCase()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {pkg.description}
                  </CardDescription>
                  <Link
                    href={pkg.href}
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MDC Templates Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bot className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl font-bold">AI-Powered MDC Templates</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AI-readable templates that preserve PalJS generator patterns.
              Generate the same high-quality, consistent code using AI models
              instead of traditional code generators - no package dependencies
              required!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "GraphQL Operations",
                description:
                  "Generate fragments, queries, and mutations for client-side operations",
                useCase: "Frontend applications",
              },
              {
                title: "Admin Pages",
                description:
                  "React admin interface pages with Next.js App Router support",
                useCase: "Admin dashboards",
              },
              {
                title: "Nexus Schema",
                description:
                  "Type-safe GraphQL schema with Nexus framework integration",
                useCase: "Backend APIs",
              },
              {
                title: "SDL Generator",
                description:
                  "Schema Definition Language and resolver implementations",
                useCase: "SDL-first GraphQL",
              },
              {
                title: "Resolver Types",
                description:
                  "TypeScript type definitions for GraphQL resolvers",
                useCase: "Type safety",
              },
              {
                title: "GraphQL Modules",
                description: "Modular GraphQL schema with dependency injection",
                useCase: "Large-scale APIs",
              },
            ].map((template) => (
              <Card
                key={template.title}
                className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-indigo-500"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">
                    {template.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    Use case: {template.useCase}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/docs/mdc-templates"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-lg px-8 py-4"
              )}
            >
              Explore All Templates <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Build Something Amazing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                    1
                  </span>
                </div>
                <h3 className="text-lg font-semibold">Create Project</h3>
                <code className="text-sm bg-background/80 px-3 py-2 rounded block">
                  npx @paljs/cli create
                </code>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                    2
                  </span>
                </div>
                <h3 className="text-lg font-semibold">Generate Code</h3>
                <code className="text-sm bg-background/80 px-3 py-2 rounded block">
                  npx pal generate
                </code>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                    3
                  </span>
                </div>
                <h3 className="text-lg font-semibold">Start Building</h3>
                <code className="text-sm bg-background/80 px-3 py-2 rounded block">
                  npm run dev
                </code>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/docs/introduction"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "text-lg px-8 py-6"
                )}
              >
                Start Building <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/paljs/prisma-tools/tree/main/packages/create/examples"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-lg px-8 py-6"
                )}
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
