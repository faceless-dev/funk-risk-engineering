"use client"

import { PieChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

interface PriorityData {
  label: string
  count: number
  percentage: number
  color: string
}

interface PriorityMetricsCardProps {
  priorityData: PriorityData[]
  totalMeasures: number
  openMeasures: number
  implementationRate: number
}

export function PriorityMetricsCard({
  priorityData,
  totalMeasures,
  openMeasures,
  implementationRate,
}: PriorityMetricsCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <CardTitle className="text-lg flex items-center gap-2">
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <PieChart className="h-5 w-5 text-blue-600" />
              </motion.div>
              <span>Maßnahmen nach Priorität</span>
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Umsetzungsstatus nach Prioritätsstufe
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {priorityData.map((item, index) => (
            <motion.div
              key={item.label}
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <div className="flex justify-between items-center">
                <div className="font-medium text-base flex items-center">
                  <div className={`h-3 w-3 rounded-full ${item.color} mr-2`}></div>
                  <Link href={`/cases?priority=${item.label.toLowerCase()}`} className="hover:underline">
                    {item.label}
                  </Link>
                </div>
                <div className="text-sm">
                  <span className="font-medium">{item.count} Maßnahmen</span>
                </div>
              </div>
              <div className="h-8 w-full bg-gray-100 rounded-md overflow-hidden flex">
                <motion.div
                  className={`h-full ${item.color} flex items-center justify-center text-white font-medium`}
                  style={{ width: `${item.percentage}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 1, delay: 0.3 + 0.2 * index }}
                >
                  {item.percentage}%
                </motion.div>
              </div>
              <div className="text-xs text-muted-foreground text-right">{item.percentage}% umgesetzt</div>
            </motion.div>
          ))}

          {/* Summary statistics */}
          <motion.div
            className="grid grid-cols-3 gap-2 text-center pt-2 border-t"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              className="rounded-lg border p-2"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-gray-800">{totalMeasures}</div>
              <div className="text-xs text-muted-foreground">Gesamt</div>
            </motion.div>
            <motion.div
              className="rounded-lg border p-2"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-amber-500">{openMeasures}</div>
              <div className="text-xs text-muted-foreground">Offen</div>
            </motion.div>
            <motion.div
              className="rounded-lg border p-2"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-emerald-500">{implementationRate}%</div>
              <div className="text-xs text-muted-foreground">Umgesetzt</div>
            </motion.div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}

