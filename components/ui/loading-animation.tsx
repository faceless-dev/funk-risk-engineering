"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingAnimationProps {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "accent" | "muted"
}

export function LoadingAnimation({ className, size = "md", color = "primary" }: LoadingAnimationProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    muted: "text-muted-foreground",
  }

  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  const circleVariants = {
    animate: {
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div className={cn("relative", sizeClasses[size], className)} variants={containerVariants} animate="animate">
      <motion.div
        className={cn("absolute inset-0 rounded-full border-2 border-current opacity-20", colorClasses[color])}
      />
      <motion.div
        className={cn("absolute inset-0 rounded-full border-t-2 border-current", colorClasses[color])}
        variants={circleVariants}
        animate="animate"
      />
    </motion.div>
  )
}

