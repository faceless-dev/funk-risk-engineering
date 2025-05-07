import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ActionButtonsProvider } from "@/components/context/action-buttons-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FUNK Risk Engineering Tool",
  description: "Risk assessment and management platform for FUNK",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ActionButtonsProvider>{children}</ActionButtonsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'