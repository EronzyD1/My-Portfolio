import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eromosele.dev"

export const metadata: Metadata = {
  title: {
    default: "Eromosele Daniel Otaigbe - Full-Stack Developer | AI/Data-Focused",
    template: "%s | Eromosele Daniel Otaigbe"
  },
  description: "Full-Stack Developer specializing in scalable web apps and AI-powered experiences. Focused on data quality, evaluation, and product impact. Nigeria-based, remote-ready.",
  keywords: ["Full-Stack Developer", "AI Data Specialist", "React", "Next.js", "TypeScript", "Data Annotation", "Model Evaluation", "Nigeria", "Remote"],
  authors: [{ name: "Eromosele Daniel Otaigbe" }],
  creator: "Eromosele Daniel Otaigbe",
  publisher: "Eromosele Daniel Otaigbe",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Eromosele Daniel Otaigbe - Full-Stack Developer | AI/Data-Focused",
    description: "Full-Stack Developer specializing in scalable web apps and AI-powered experiences. Focused on data quality, evaluation, and product impact.",
    siteName: "Eromosele Daniel Otaigbe Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eromosele Daniel Otaigbe - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eromosele Daniel Otaigbe - Full-Stack Developer | AI/Data-Focused",
    description: "Full-Stack Developer specializing in scalable web apps and AI-powered experiences. Focused on data quality, evaluation, and product impact.",
    images: ["/og-image.jpg"],
    creator: "@eromosele_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
