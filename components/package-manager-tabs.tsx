"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { usePackageManager, PackageManager } from "@/hooks/use-package-manager";

interface PackageManagerTabsProps {
  commands: {
    npm: string;
    yarn: string;
    pnpm: string;
  };
  className?: string;
}

export function PackageManagerTabs({
  commands,
  className,
}: PackageManagerTabsProps) {
  const { packageManager, setPackageManager, isLoaded } = usePackageManager();

  // Prevent hydration mismatch by not rendering until loaded
  if (!isLoaded) {
    return (
      <div className={className}>
        <div className="animate-pulse">
          <div className="h-9 bg-muted rounded-lg mb-2"></div>
          <div className="h-16 bg-muted/50 rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <Tabs
      value={packageManager}
      onValueChange={(value) => setPackageManager(value as PackageManager)}
      className={className}
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="npm">npm</TabsTrigger>
        <TabsTrigger value="yarn">yarn</TabsTrigger>
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
      </TabsList>

      <TabsContent value="npm">
        <div className="rounded-md bg-muted/50 p-4">
          <pre className="text-sm overflow-x-auto">
            <code className="text-foreground">{commands.npm}</code>
          </pre>
        </div>
      </TabsContent>

      <TabsContent value="yarn">
        <div className="rounded-md bg-muted/50 p-4">
          <pre className="text-sm overflow-x-auto">
            <code className="text-foreground">{commands.yarn}</code>
          </pre>
        </div>
      </TabsContent>

      <TabsContent value="pnpm">
        <div className="rounded-md bg-muted/50 p-4">
          <pre className="text-sm overflow-x-auto">
            <code className="text-foreground">{commands.pnpm}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  );
}

// Predefined components for common installation patterns
export function CLIInstallationTabs({ className }: { className?: string }) {
  return (
    <PackageManagerTabs
      commands={{
        npm: "npm install -g @paljs/cli",
        yarn: "yarn global add @paljs/cli",
        pnpm: "pnpm add -g @paljs/cli",
      }}
      className={className}
    />
  );
}

export function ProjectInstallationTabs({ className }: { className?: string }) {
  return (
    <PackageManagerTabs
      commands={{
        npm: "npm install @paljs/cli @paljs/generator",
        yarn: "yarn add @paljs/cli @paljs/generator",
        pnpm: "pnpm add @paljs/cli @paljs/generator",
      }}
      className={className}
    />
  );
}

// Generic component for development server commands
export function DevServerTabs({ className }: { className?: string }) {
  return (
    <PackageManagerTabs
      commands={{
        npm: "npm run dev",
        yarn: "yarn dev",
        pnpm: "pnpm dev",
      }}
      className={className}
    />
  );
}
