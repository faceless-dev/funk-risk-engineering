"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { LoadingAnimation } from "@/components/ui/loading-animation"
import { motion } from "framer-motion"

interface LoadingSkeletonProps {
  title?: string
  showHeader?: boolean
  cardClassName?: string
}

export function LoadingSkeleton({ title = "Loading...", showHeader = true, cardClassName = "" }: LoadingSkeletonProps) {
  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {showHeader && (
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-10 w-32" />
        </div>
      )}

      <Card className={cardClassName}>
        <CardHeader className="gap-2 pb-6">
          <CardTitle className="flex items-center gap-2">
            <LoadingAnimation size="sm" color="muted" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div
            initial={{ width: "60%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
          >
            <Skeleton className="h-4 w-full" />
          </motion.div>
          <motion.div
            initial={{ width: "40%" }}
            animate={{ width: "90%" }}
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            <Skeleton className="h-4 w-[90%]" />
          </motion.div>
          <motion.div
            initial={{ width: "30%" }}
            animate={{ width: "80%" }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <Skeleton className="h-4 w-[80%]" />
          </motion.div>
          <motion.div
            initial={{ width: "20%" }}
            animate={{ width: "70%" }}
            transition={{
              duration: 2.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Skeleton className="h-4 w-[70%]" />
          </motion.div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </motion.div>
  )
}

