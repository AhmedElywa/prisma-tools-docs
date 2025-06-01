import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight, Bot, Cog, Zap, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-indigo-600/10 via-background to-background dark:from-indigo-900/20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">AI-first</span>
            <span className="block text-indigo-600 dark:text-indigo-500">
              Prisma Toolkit
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Supercharge your Prisma workflow with intelligent tools, code
            generators, and a seamless admin UI. Built for modern developers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/docs"
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
          <h2 className="text-3xl font-bold text-center mb-12">Why PalJS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "AI MDX Templates",
                description:
                  "Generate documentation and components with AI-powered MDX templates.",
              },
              {
                icon: Cog,
                title: "Admin UI",
                description:
                  "A beautiful, configurable Admin UI for your Prisma models out-of-the-box.",
              },
              {
                icon: Zap,
                title: "GraphQL Generators",
                description:
                  "Automatically generate GraphQL schemas, resolvers, and CRUD operations.",
              },
              {
                icon: Zap,
                title: "Zero-Config",
                description:
                  "Get started quickly with sensible defaults and minimal configuration.",
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
    </div>
  );
}
