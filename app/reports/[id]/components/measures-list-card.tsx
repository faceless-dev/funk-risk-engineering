import { Card, CardContent } from "@/components/ui/card"
import type { Measure } from "../data/report-data"
import Link from "next/link"

interface MeasuresListCardProps {
  measures: Measure[]
}

export function MeasuresListCard({ measures }: MeasuresListCardProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">Measures List</h2>
      <Card className="mt-4">
        <CardContent className="p-0">
          <div className="grid grid-cols-4 gap-4 border-b p-4 font-medium">
            <div>Measure</div>
            <div>Priority</div>
            <div>Status</div>
            <div>Deadline</div>
          </div>
          {measures.map((measure) => (
            <div key={measure.id} className="grid grid-cols-4 gap-4 border-b p-4 last:border-0">
              <div>
                <Link href={`/cases/${measure.id}/measures/${measure.id}`} className="hover:underline text-blue-600">
                  {measure.title}
                </Link>
              </div>
              <div>{measure.priority}</div>
              <div>{measure.status}</div>
              <div>{measure.deadline}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

