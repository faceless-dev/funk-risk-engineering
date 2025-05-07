import { PieChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatusChartProps {
  data: {
    open: number
    inProgress: number
    completed: number
  }
}

export function StatusChart({ data }: StatusChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PieChart className="h-5 w-5 text-blue-600" />
          Maßnahmen nach Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center">
          <div className="relative h-40 w-40 rounded-full">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
                backgroundColor: "#3b82f6",
              }}
            ></div>
            <div
              className="absolute inset-0 rounded-full"
              style={{
                clipPath: "polygon(50% 50%, 100% 100%, 0 100%, 0 50%)",
                backgroundColor: "#8b5cf6",
              }}
            ></div>
            <div
              className="absolute inset-0 rounded-full"
              style={{
                clipPath: "polygon(50% 50%, 0 50%, 0 0, 100% 0)",
                backgroundColor: "#22c55e",
              }}
            ></div>
          </div>
          <div className="ml-8 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <div className="text-sm">Offen (60%)</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <div className="text-sm">In Bearbeitung (20%)</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="text-sm">Abgeschlossen (20%)</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

