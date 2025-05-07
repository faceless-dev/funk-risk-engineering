"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { ActionButton } from "@/components/ui/action-button"
import { CustomerHeader } from "./components/customer-header"
import { CustomerContent } from "./components/customer-content"
import { getCustomersData } from "./data/customers-data"

export default function Customers() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  // Get customers data
  const allCustomers = getCustomersData()

  // Filter customers based on search query
  const customers = searchQuery
    ? allCustomers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          customer.customerNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
          customer.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
          customer.email.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : allCustomers

  return (
    <>
      <ActionButton
        id="new-customer"
        label="New Customer"
        icon={<Plus className="h-4 w-4 mr-2" />}
        onClick={() => alert("Creating new customer...")}
        variant="default"
      />

      <div className="flex flex-col gap-6">
        <CustomerHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        <CustomerContent customers={customers} viewMode={viewMode} />
      </div>
    </>
  )
}

