"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActionButton } from "@/components/ui/action-button"
import { FileText } from "lucide-react"
import { CaseHeader } from "./components/case-header"
import { CaseInfoCard } from "./components/case-info-card"
import { CaseDescriptionCard } from "./components/case-description-card"
import { MeasuresTab } from "./components/measures-tab"
import { HistoryTab } from "./components/history-tab"
import { FilesTab } from "./components/files-tab"
import { getCaseData, getCaseHistory, getCaseFiles } from "./data/case-data"

interface CaseDetailProps {
  id: string
}

export default function CaseDetail({ id }: CaseDetailProps) {
  const [activeTab, setActiveTab] = useState("measures")

  // Get case data from our data provider
  const caseData = getCaseData(id)
  const history = getCaseHistory()
  const { employeeUploads, customerUploads } = getCaseFiles()

  // Extract customer ID and location ID from the case data
  // In a real app, these would be properly stored in the case data
  const customerId = caseData.customer.toLowerCase().replace(/\s+/g, "-")
  const locationId = caseData.location.toLowerCase().split(" ")[0]

  return (
    <>
      {/* Register action buttons */}
      <ActionButton
        id="generate-report"
        label="Generate Report"
        icon={<FileText className="h-4 w-4 mr-2" />}
        href={`/reports/${caseData.id}`}
        variant="outline"
      />
      <ActionButton
        id="send-to-customer"
        label="Send to Customer"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-2"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        }
        onClick={() => alert("Sending to customer...")}
        variant="default"
        className="bg-green-600 hover:bg-green-700"
      />

      <div className="flex flex-col gap-6">
        {/* Case Header */}
        <CaseHeader id={caseData.id} name={caseData.name} status={caseData.status} createdDate={caseData.createdDate} />

        {/* Case Info Card */}
        <CaseInfoCard
          location={caseData.location}
          customer={caseData.customer}
          locationId={locationId}
          customerId={customerId}
        />

        {/* Case Description Card */}
        <CaseDescriptionCard description={caseData.description} />

        {/* Tabs for measures, history, and files */}
        <Tabs defaultValue="measures" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="measures">Measures</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>

          <TabsContent value="measures" className="mt-4">
            <MeasuresTab measures={caseData.measures} />
          </TabsContent>

          <TabsContent value="history" className="mt-4">
            <HistoryTab history={history} />
          </TabsContent>

          <TabsContent value="files" className="mt-4">
            <FilesTab employeeUploads={employeeUploads} customerUploads={customerUploads} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

