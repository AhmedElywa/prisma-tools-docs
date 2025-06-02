import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { CommandDialogProvider } from "@/components/command-dialog";
import { defaultMetadata } from "@/lib/metadata";
import {
  OrganizationStructuredData,
  SoftwareApplicationStructuredData,
} from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} flex min-h-screen flex-col font-sans antialiased`}
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
          <OrganizationStructuredData />
          <SoftwareApplicationStructuredData />
        </ThemeProvider>
      </body>
    </html>
  );
}
