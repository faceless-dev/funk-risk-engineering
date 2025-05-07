import { Card, CardContent } from "@/components/ui/card"
import type { Measure } from "../data/report-data"

interface StatusDistributionChartProps {
  measures: Measure[]
}

export function StatusDistributionChart({ measures }: StatusDistributionChartProps) {
  const openMeasures = measures.filter((m) => m.status === "Open").length
  const inProgressMeasures = measures.filter((m) => m.status === "In Progress").length
  const completedMeasures = measures.filter((m) => m.status === "Completed").length

  const openPercentage = (openMeasures / measures.length) * 100
  const inProgressPercentage = (inProgressMeasures / measures.length) * 100
  const completedPercentage = (completedMeasures / measures.length) * 100

  return (
    <div>
      <h2 className="text-2xl font-bold">Status Distribution</h2>
      <Card className="mt-4">
        <CardContent className="p-6">
          <div className="flex h-64 items-center justify-center">
            <div className="relative h-40 w-40 rounded-full">
              {/* This is a simplified pie chart representation */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  clipPath: `polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)`,
                  background: `conic-gradient(
                    #3b82f6 0% ${openPercentage}%, 
                    #8b5cf6 ${openPercentage}% ${openPercentage + inProgressPercentage}%, 
                    #22c55e ${openPercentage + inProgressPercentage}% 100%
                  )`,
                }}
              ></div>
            </div>
            <div className="ml-8 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <div className="text-sm">Open ({openMeasures})</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                <div className="text-sm">In Progress ({inProgressMeasures})</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="text-sm">Completed ({completedMeasures})</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

