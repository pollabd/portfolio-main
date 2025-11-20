import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Pollab Das - Software Engineer | Full-Stack Developer',
  description: 'Pollab Das is a Software Engineer based in Dhaka, Bangladesh, specializing in scalable web applications, backend architecture, and modern JavaScript frameworks. 4+ years of experience with Next.js, React, Node.js, and AWS.',
  keywords: ['Pollab Das', 'Software Engineer', 'Full Stack Developer', 'Next.js', 'React', 'Node.js', 'TypeScript', 'AWS', 'Dhaka', 'Bangladesh'],
  authors: [{ name: 'Pollab Das' }],
  creator: 'Pollab Das',
  publisher: 'Pollab Das',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pollab.dev',
    title: 'Pollab Das - Software Engineer',
    description: 'Full-Stack Software Engineer specializing in scalable web applications and backend architecture.',
    siteName: 'Pollab Das Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pollab Das - Software Engineer',
    description: 'Full-Stack Software Engineer specializing in scalable web applications.',
    creator: '@pollabd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
