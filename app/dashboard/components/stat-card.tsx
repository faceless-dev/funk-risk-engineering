"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

interface StatCardProps {
  title: string
  value: string | number
  description: string
  icon: ReactNode
  borderColor: string
  iconColor: string
  linkTo?: string
}

export function StatCard({
  title,
  value,
  description,
  icon,
  borderColor,
  iconColor,
  linkTo,
}: StatCardProps & { linkTo?: string }) {
  const CardWrapper = linkTo ? Link : "div"

  return (
    <CardWrapper href={linkTo || "#"} className={`border-l-4 ${borderColor} ${linkTo ? "block transition-all" : ""}`}>
      <motion.div
        whileHover={linkTo ? { scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" } : {}}
        whileTap={linkTo ? { scale: 0.98 } : {}}
        transition={{ duration: 0.2 }}
      >
        <Card className="border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <motion.span
                className={iconColor}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
              >
                {icon}
              </motion.span>
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              className="text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {value}
            </motion.div>
            <p className="text-xs text-gray-500">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </CardWrapper>
  )
}

