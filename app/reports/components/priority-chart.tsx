import { BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PriorityChartProps {
  data: {
    high: number
    medium: number
    low: number
  }
}

export function PriorityChart({ data }: PriorityChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          Maßnahmen nach Priorität
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-around gap-4">
          <div className="flex w-1/3 flex-col items-center">
            <div className="w-full rounded-t-lg bg-red-500" style={{ height: "60%" }}></div>
            <div className="mt-2 text-sm">Hoch ({data.high})</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <div className="w-full rounded-t-lg bg-yellow-500" style={{ height: "40%" }}></div>
            <div className="mt-2 text-sm">Mittel ({data.medium})</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <div className="w-full rounded-t-lg bg-green-500" style={{ height: "20%" }}></div>
            <div className="mt-2 text-sm">Niedrig ({data.low})</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

