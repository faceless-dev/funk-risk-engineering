"use client"

import { useState } from "react"
import { Plus, FileText } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActionButton } from "@/components/ui/action-button"
import { LocationDetailHeader } from "./components/location-detail-header"
import { LocationStatistics } from "./components/location-statistics"
import { LocationCasesTab } from "./components/location-cases-tab"
import { LocationInfoTab } from "./components/location-info-tab"
import { LocationMeasuresTab } from "./components/location-measures-tab"
import { getLocationData } from "./data/location-data"

interface LocationDetailProps {
  customerId: string
  locationId: string
}

export default function LocationDetail({ customerId, locationId }: LocationDetailProps) {
  const [activeTab, setActiveTab] = useState("cases")

  // Get location data from our data provider
  const location = getLocationData(customerId, locationId)

  // Calculate statistics
  const totalMeasures = location.cases.reduce((sum, c) => sum + c.measures, 0)
  const openMeasures = location.cases.reduce((sum, c) => sum + c.openMeasures, 0)
  const implementationRate = totalMeasures > 0 ? Math.round(((totalMeasures - openMeasures) / totalMeasures) * 100) : 0
  const overdueCount = location.cases.reduce((sum, c) => sum + (c.overdue ? 1 : 0), 0)

  const statistics = {
    cases: location.cases.length,
    totalMeasures,
    openMeasures,
    implementationRate,
    overdueCount,
  }

  return (
    <>
      {/* Register action buttons */}
      <ActionButton
        id="create-case"
        label="Fall erstellen"
        icon={<Plus className="h-4 w-4 mr-2" />}
        onClick={() => alert(`Creating new case for ${location.name}...`)}
        variant="default"
      />
      <ActionButton
        id="generate-report"
        label="Standortbericht"
        icon={<FileText className="h-4 w-4 mr-2" />}
        onClick={() => alert(`Generating report for ${location.name}...`)}
        variant="outline"
      />

      <div className="flex flex-col gap-6">
        <LocationDetailHeader location={location} />

        <LocationStatistics statistics={statistics} />

        <Tabs defaultValue="cases" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cases">Fälle ({location.cases.length})</TabsTrigger>
            <TabsTrigger value="measures">Maßnahmen ({totalMeasures})</TabsTrigger>
            <TabsTrigger value="info">Standortinformationen</TabsTrigger>
          </TabsList>

          <TabsContent value="cases" className="mt-4">
            <LocationCasesTab cases={location.cases} customerId={customerId} locationId={locationId} />
          </TabsContent>

          <TabsContent value="measures" className="mt-4">
            <LocationMeasuresTab location={location} customerId={customerId} locationId={locationId} />
          </TabsContent>

          <TabsContent value="info" className="mt-4">
            <LocationInfoTab details={location.details} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

