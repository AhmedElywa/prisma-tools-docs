import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { FramerMotionWrapper } from "@/components/framer-motion-wrapper"
import { CommandDialogProvider } from "@/components/command-dialog" // Assuming you'll make CommandDialog a context provider

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "PalJS - AI-first Prisma Toolkit",
  description: "The modern toolkit for Prisma, supercharged with AI.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CommandDialogProvider>
            {" "}
            {/* Wrap with CommandDialogProvider */}
            <SiteHeader />
            <FramerMotionWrapper>
              <main className="flex-grow">{children}</main>
            </FramerMotionWrapper>
            <SiteFooter />
          </CommandDialogProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
