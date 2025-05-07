"use client"

import { CustomerList } from "./customer-list"
import { CustomerGrid } from "./customer-grid"
import type { Customer } from "../data/customers-data"

interface CustomerContentProps {
  customers: Customer[]
  viewMode: "grid" | "list"
}

export function CustomerContent({ customers, viewMode }: CustomerContentProps) {
  return <>{viewMode === "grid" ? <CustomerGrid customers={customers} /> : <CustomerList customers={customers} />}</>
}

