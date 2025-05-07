"use client"

import { useState } from "react"
import { PlusSquare } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActionButton } from "@/components/ui/action-button"
import { CaseFilters } from "./components/case-filters"
import { CaseTable } from "./components/case-table"
import { getCasesData } from "./data/cases-data"

export default function Cases() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Get cases data
  const allCases = getCasesData()

  // Filter cases based on search query
  const filteredCases = searchQuery
    ? allCases.filter(
        (caseItem) =>
          caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          caseItem.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          caseItem.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          caseItem.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : allCases

  return (
    <>
      <ActionButton
        id="new-case"
        label="New Case"
        icon={<PlusSquare className="h-4 w-4 mr-2" />}
        onClick={() => alert("Creating new case...")}
        variant="default"
      />

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Fälle</h1>
        </div>

        <CaseFilters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="all">Alle</TabsTrigger>
            <TabsTrigger value="open">Offen</TabsTrigger>
            <TabsTrigger value="pending">In Bearbeitung</TabsTrigger>
            <TabsTrigger value="completed">Abgeschlossen</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <CaseTable cases={filteredCases} activeTab="all" />
          </TabsContent>

          <TabsContent value="open" className="space-y-4">
            <CaseTable cases={filteredCases} activeTab="open" />
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <CaseTable cases={filteredCases} activeTab="pending" />
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <CaseTable cases={filteredCases} activeTab="completed" />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

