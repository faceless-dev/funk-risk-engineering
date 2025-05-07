"use client"

import { Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomerDetailHeader } from "./components/customer-detail-header"
import { CustomerStatistics } from "./components/customer-statistics"
import { LocationsTab } from "./components/locations-tab"
import { CasesTab } from "./components/cases-tab"
import { ActionButton } from "@/components/ui/action-button"
import { getCustomerDetailData, calculateCustomerStatistics } from "./data/customer-detail-data"

interface CustomerDetailProps {
  id: string
}

export default function CustomerDetail({ id }: CustomerDetailProps) {
  // Get customer data from our data provider
  const customer = getCustomerDetailData(id)

  // Calculate statistics
  const statistics = calculateCustomerStatistics(customer)

  return (
    <>
      <ActionButton
        id="create-case"
        label="Fall erstellen"
        icon={<Plus className="h-4 w-4 mr-2" />}
        onClick={() => alert("Creating new case...")}
        variant="default"
      />

      <div className="flex flex-col gap-6">
        <CustomerDetailHeader customer={customer} />

        <CustomerStatistics statistics={statistics} />

        <Tabs defaultValue="locations" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="locations">Standorte ({customer.locations.length})</TabsTrigger>
            <TabsTrigger value="cases">Fälle ({customer.cases.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="locations" className="mt-4">
            <LocationsTab locations={customer.locations} customerId={id} />
          </TabsContent>

          <TabsContent value="cases" className="mt-4">
            <CasesTab cases={customer.cases} id={id} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

