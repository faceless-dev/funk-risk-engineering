"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Printer } from "lucide-react"
import { ActionButton } from "@/components/ui/action-button"
import { ReportHeader } from "./components/report-header"
import { CaseDetailsCard } from "./components/case-details-card"
import { MeasuresSummaryCard } from "./components/measures-summary-card"
import { MeasuresListCard } from "./components/measures-list-card"
import { PriorityDistributionChart } from "./components/priority-distribution-chart"
import { StatusDistributionChart } from "./components/status-distribution-chart"
import { ReportFooter } from "./components/report-footer"
import { getReportData } from "./data/report-data"

interface ReportDetailProps {
  id: string
}

export default function ReportDetail({ id }: ReportDetailProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [reportData, setReportData] = useState<any>(null)
  const generatedDate = new Date().toLocaleDateString()

  // In a real app, you would fetch the report data based on the ID
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReportData(getReportData(id))
      setIsLoading(false)
    }, 500)
  }, [id])

  // Register action buttons when data is loaded
  if (!isLoading && reportData) {
    return (
      <>
        <ActionButton
          id="back-to-reports"
          label="Back to Reports"
          icon={<ArrowLeft className="h-4 w-4 mr-2" />}
          onClick={() => router.back()}
          variant="ghost"
        />
        <ActionButton
          id="print"
          label="Print"
          icon={<Printer className="h-4 w-4 mr-2" />}
          onClick={() => window.print()}
          variant="outline"
        />
        <ActionButton
          id="export-pdf"
          label="Export PDF"
          icon={<Download className="h-4 w-4 mr-2" />}
          onClick={() => alert("Exporting PDF...")}
          variant="default"
        />

        <div className="flex min-h-screen flex-col">
          {/* Report content - this is what will be printed */}
          <div className="mx-auto max-w-4xl p-6 print:p-0 print:max-w-none">
            <div className="space-y-8">
              {/* Report header */}
              <ReportHeader generatedDate={generatedDate} />

              {/* Case details */}
              <CaseDetailsCard caseData={reportData} />

              {/* Measures summary */}
              <MeasuresSummaryCard measures={reportData.measures} />

              {/* Measures list */}
              <MeasuresListCard measures={reportData.measures} />

              {/* Priority distribution chart */}
              <PriorityDistributionChart measures={reportData.measures} />

              {/* Status distribution chart */}
              <StatusDistributionChart measures={reportData.measures} />

              {/* Footer */}
              <ReportFooter generatedDate={generatedDate} />
            </div>
          </div>
        </div>
      </>
    )
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-3xl font-bold">Loading report...</div>
          <div className="text-muted-foreground">Please wait while we generate your report</div>
        </div>
      </div>
    )
  }

  return null
}

