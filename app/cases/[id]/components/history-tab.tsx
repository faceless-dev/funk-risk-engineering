import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { HistoryItem } from "../data/case-data"

interface HistoryTabProps {
  history: HistoryItem[]
}

export function HistoryTab({ history }: HistoryTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Case History</CardTitle>
        <CardDescription>Timeline of all actions and changes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {history.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative flex h-full w-6 items-center justify-center">
                <div className="absolute h-full w-px bg-muted" />
                <div className="relative z-10 h-2 w-2 rounded-full bg-primary" />
              </div>
              <div className="flex-1 rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{item.user}</div>
                  <div className="text-sm text-muted-foreground">{item.date}</div>
                </div>
                <p className="mt-1 text-sm">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

