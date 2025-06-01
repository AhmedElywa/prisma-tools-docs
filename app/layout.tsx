import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { CommandDialogProvider } from "@/components/command-dialog";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PalJS - AI-first Prisma Toolkit",
  description: "The modern toolkit for Prisma, supercharged with AI.",
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommandDialogProvider>
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
          </CommandDialogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
