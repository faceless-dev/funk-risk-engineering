"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

// Fade in animation
export const FadeIn = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay, ease: "easeInOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide up animation
export const SlideUp = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  distance = 20,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: distance }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide in from left animation
export const SlideInLeft = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  distance = 20,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -distance }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide in from right animation
export const SlideInRight = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  distance = 20,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: distance }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: distance }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Scale animation
export const Scale = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation
export const Stagger = ({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Stagger item - to be used inside Stagger
export const StaggerItem = ({
  children,
  className,
  duration = 0.5,
  ...props
}: {
  children: ReactNode
  className?: string
  duration?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Hover animation for cards and buttons
export const HoverCard = ({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <motion.div
      className={cn(className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Pulse animation for notifications or highlights
export const Pulse = ({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <motion.div
      className={cn(className)}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 2,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

