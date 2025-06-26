import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Shove Electricals - Professional Electrical Services & Appliance Repair",
    template: "%s | Shove Electricals",
  },
  description:
    "Professional electrical appliance repair, installation, and maintenance services. Emergency repairs, wiring, energy efficiency consulting, and certified spare parts.",
  keywords: [
    "electrical repair",
    "appliance repair",
    "electrical installation",
    "emergency electrical services",
    "electrical maintenance",
  ],
  authors: [{ name: "Shove Electricals" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shoveelectricals.com",
    siteName: "Shove Electricals",
    title: "Shove Electricals - Professional Electrical Services",
    description: "Professional electrical appliance repair, installation, and maintenance services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shove Electricals - Professional Electrical Services",
    description: "Professional electrical appliance repair, installation, and maintenance services.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
