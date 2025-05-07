import { Download, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CaseReport {
  id: string
  title: string
  date: string
  type: string
}

interface CaseReportsListProps {
  reports: CaseReport[]
}

export function CaseReportsList({ reports }: CaseReportsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fallberichte</CardTitle>
        <CardDescription>Berichte zu einzelnen Risikobewertungsfällen</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">
                    <Link href={`/reports/${report.id}`} className="hover:text-blue-600 hover:underline">
                      {report.title}
                    </Link>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Erstellt am {report.date} • {report.type}bericht
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-1" asChild>
                <Link href={`/reports/${report.id}`}>
                  <Download className="h-4 w-4" />
                  PDF
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

