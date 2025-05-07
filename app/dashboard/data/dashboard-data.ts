export interface DashboardStats {
  actionRequired: number
  overdueResponses: number
  highPriorityMeasures: number
  implementationRate: number
  totalCases: number
  totalCustomers: number
  totalMeasures: number
  openMeasures: number
}

// Update the CaseItem interface to include customerId and locationId
export interface CaseItem {
  id: string
  customer: string
  customerId: string
  location: string
  locationId: string
  date: string
  measures: number
  priority: string
  overdue: boolean
  reason: string
  daysOverdue: number
}

export interface PriorityData {
  label: string
  count: number
  percentage: number
  color: string
}

export interface CustomerData {
  id: string
  customer: string
  total: number
  open: number
  implemented: number
  overdue: number
}

// This would come from an API in a real implementation
export const getDashboardData = () => {
  const stats: DashboardStats = {
    actionRequired: 8,
    overdueResponses: 3,
    highPriorityMeasures: 12,
    implementationRate: 67,
    totalCases: 24,
    totalCustomers: 14,
    totalMeasures: 86,
    openMeasures: 28,
  }

  // Update the mock data to include customerId and locationId
  const actionRequiredCases: CaseItem[] = [
    {
      id: "F-2023-001",
      customer: "Acme Corp",
      customerId: "acme",
      location: "Wien",
      locationId: "wien",
      date: "2023-04-01",
      measures: 5,
      priority: "Hoch",
      overdue: true,
      reason: "Antwortfrist überschritten",
      daysOverdue: 3,
    },
    {
      id: "F-2023-002",
      customer: "TechSolutions",
      customerId: "techstart",
      location: "Graz",
      locationId: "graz",
      date: "2023-04-05",
      measures: 3,
      priority: "Hoch",
      overdue: true,
      reason: "Antwortfrist überschritten",
      daysOverdue: 2,
    },
    {
      id: "F-2023-004",
      customer: "Innovative Systems",
      customerId: "innovative",
      location: "Salzburg",
      locationId: "salzburg",
      date: "2023-04-10",
      measures: 2,
      priority: "Hoch",
      overdue: false,
      reason: "Hohe Priorität ohne Antwort",
      daysOverdue: 0,
    },
    {
      id: "F-2023-007",
      customer: "Global Industries",
      customerId: "globale",
      location: "Linz",
      locationId: "linz",
      date: "2023-04-12",
      measures: 4,
      priority: "Mittel",
      overdue: false,
      reason: "Keine Antwort seit 5 Tagen",
      daysOverdue: 0,
    },
  ]

  const priorityData: PriorityData[] = [
    {
      label: "Hoch",
      count: 12,
      percentage: 40,
      color: "bg-rose-400",
    },
    {
      label: "Mittel",
      count: 24,
      percentage: 70,
      color: "bg-amber-400",
    },
    {
      label: "Niedrig",
      count: 30,
      percentage: 90,
      color: "bg-emerald-400",
    },
  ]

  const customerData: CustomerData[] = [
    { id: "acme", customer: "Acme Corp", total: 18, open: 9, implemented: 9, overdue: 3 },
    { id: "techstart", customer: "TechSolutions", total: 14, open: 7, implemented: 7, overdue: 2 },
    { id: "globale", customer: "Global Industries", total: 22, open: 6, implemented: 16, overdue: 0 },
  ]

  return {
    stats,
    actionRequiredCases,
    priorityData,
    customerData,
  }
}

