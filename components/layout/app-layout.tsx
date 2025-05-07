"use client"

import type React from "react"

import { LayoutDashboard, Briefcase, Users, Menu, BellIcon, BarChart3, LogOut } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useActionButtons } from "@/components/context/action-buttons-context"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

// Sidebar component - only animated on initial load, not during navigation
function Sidebar() {
  const pathname = usePathname()
  // Track if this is the initial render
  const [isInitialRender, setIsInitialRender] = useState(true)

  useEffect(() => {
    // After first render, set isInitialRender to false
    setIsInitialRender(false)
  }, [])

  const navItems = [
    { href: "/dashboard", icon: <LayoutDashboard className="h-4 w-4" />, label: "Dashboard" },
    { href: "/cases", icon: <Briefcase className="h-4 w-4" />, label: "Cases" },
    { href: "/customers", icon: <Users className="h-4 w-4" />, label: "Customers" },
    { href: "/reports", icon: <BarChart3 className="h-4 w-4" />, label: "Reports" },
    { href: "/notifications", icon: <BellIcon className="h-4 w-4" />, label: "Notifications" },
  ]

  return (
    <aside className="hidden w-64 border-r bg-muted/40 lg:block fixed top-16 left-0 bottom-0 overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Top section - User profile */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold hover:scale-105 transition-transform duration-200">
              MH
            </div>
            <div>
              <div className="font-medium">Mario Heinisch</div>
              <div className="text-xs text-muted-foreground">Administrator</div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-border mx-4 my-2"></div>

        {/* Navigation items - Middle section with flex-1 to take available space */}
        <div className="flex-1 px-4 py-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Button
                  variant={pathname.startsWith(item.href) ? "default" : "ghost"}
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section with separator - Settings and Logout */}
        <div className="mt-auto">
          {/* Separator */}
          <div className="h-px bg-border mx-4 my-2"></div>

          <div className="p-4 space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/settings">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.79a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.79a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.79a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1v.79a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.79a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                <span>Settings</span>
              </Link>
            </Button>

            <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground" asChild>
              <Link href="/">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}

// TopBar component - only animated on initial load, not during navigation
function TopBar() {
  const { actionButtons } = useActionButtons()
  // Track if this is the initial render
  const [isInitialRender, setIsInitialRender] = useState(true)

  useEffect(() => {
    // After first render, set isInitialRender to false
    setIsInitialRender(false)
  }, [])

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center border-b bg-background w-full">
      {/* Logo section - Fixed width matching sidebar */}
      <div className="flex items-center h-full w-64 px-6 border-r bg-muted/10">
        <div className="flex items-center gap-2 font-semibold">
          <Menu className="h-5 w-5 md:hidden cursor-pointer" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span>FUNK Risk Engineering</span>
        </div>
      </div>

      {/* Content section - Flexible width */}
      <div className="flex-1 flex items-center justify-end px-6">
        <AnimatePresence mode="wait">
          {actionButtons && actionButtons.length > 0 ? (
            <div className="flex items-center gap-2">
              {actionButtons.map((button) => (
                <div key={button.id}>
                  {button.href ? (
                    <Button variant={button.variant || "outline"} className={button.className} asChild>
                      <Link href={button.href}>
                        {button.icon}
                        <span>{button.label}</span>
                      </Link>
                    </Button>
                  ) : (
                    <Button variant={button.variant || "outline"} className={button.className} onClick={button.onClick}>
                      {button.icon}
                      <span>{button.label}</span>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <span className="hidden">No action buttons</span>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        {/* Only animate the main content area */}
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            className="flex-1 overflow-auto px-6 pb-6 ml-64"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  )
}

