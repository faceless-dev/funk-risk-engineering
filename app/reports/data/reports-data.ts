export interface CaseReport {
  id: string
  title: string
  date: string
  type: string
}

export interface CustomerReport {
  id: string
  title: string
  date: string
  type: string
}

export interface ChartData {
  priority: {
    high: number
    medium: number
    low: number
  }
  status: {
    open: number
    inProgress: number
    completed: number
  }
}

export const getReportsData = () => {
  const caseReports: CaseReport[] = [
    {
      id: "R-2023-001",
      title: "F-2023-001 - Acme Corp Risikobewertung",
      date: "2023-04-15",
      type: "Fall",
    },
    {
      id: "R-2023-002",
      title: "F-2023-002 - TechSolutions Risikobewertung",
      date: "2023-04-10",
      type: "Fall",
    },
    {
      id: "R-2023-003",
      title: "F-2023-003 - Global Industries Risikobewertung",
      date: "2023-03-20",
      type: "Fall",
    },
  ]

  const customerReports: CustomerReport[] = [
    {
      id: "R-2023-004",
      title: "Acme Corp - Jahresbericht",
      date: "2023-04-01",
      type: "Kunden",
    },
    {
      id: "R-2023-005",
      title: "TechSolutions - Q1 Zusammenfassung",
      date: "2023-03-31",
      type: "Kunden",
    },
    {
      id: "R-2023-006",
      title: "Global Industries - Standortanalyse",
      date: "2023-03-15",
      type: "Kunden",
    },
  ]

  const chartData: ChartData = {
    priority: {
      high: 12,
      medium: 8,
      low: 4,
    },
    status: {
      open: 60,
      inProgress: 20,
      completed: 20,
    },
  }

  return {
    caseReports,
    customerReports,
    chartData,
  }
}

