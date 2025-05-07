export interface CaseItem {
  id: string
  title: string
  customer: string
  location: string
  status: "Open" | "Pending" | "Completed"
  createdDate: string
  lastUpdated: string
  measures: number
  openMeasures: number
  priority: "High" | "Medium" | "Low"
  assignedTo: string
}

// Mock data for cases
export const getCasesData = () => {
  const cases: CaseItem[] = [
    {
      id: "F-2023-001",
      title: "Annual Risk Assessment",
      customer: "Acme Corp",
      location: "Vienna Headquarters",
      status: "Open",
      createdDate: "2023-04-01",
      lastUpdated: "2023-04-10",
      measures: 12,
      openMeasures: 5,
      priority: "High",
      assignedTo: "Mario Heinisch",
    },
    {
      id: "F-2023-002",
      title: "Safety Inspection",
      customer: "TechSolutions",
      location: "Graz Office",
      status: "Pending",
      createdDate: "2023-04-05",
      lastUpdated: "2023-04-12",
      measures: 8,
      openMeasures: 6,
      priority: "Medium",
      assignedTo: "Mario Heinisch",
    },
    {
      id: "F-2023-003",
      title: "Compliance Review",
      customer: "Global Industries",
      location: "Linz Factory",
      status: "Completed",
      createdDate: "2023-03-15",
      lastUpdated: "2023-04-02",
      measures: 15,
      openMeasures: 0,
      priority: "Low",
      assignedTo: "Sarah Müller",
    },
    {
      id: "F-2023-004",
      title: "Equipment Maintenance",
      customer: "Innovative Systems",
      location: "Salzburg",
      status: "Open",
      createdDate: "2023-04-10",
      lastUpdated: "2023-04-15",
      measures: 6,
      openMeasures: 6,
      priority: "High",
      assignedTo: "Mario Heinisch",
    },
    {
      id: "F-2023-005",
      title: "Fire Safety Audit",
      customer: "EcoTech Solutions",
      location: "Vienna Office",
      status: "Open",
      createdDate: "2023-04-12",
      lastUpdated: "2023-04-16",
      measures: 10,
      openMeasures: 8,
      priority: "High",
      assignedTo: "Thomas Weber",
    },
    {
      id: "F-2023-006",
      title: "Environmental Assessment",
      customer: "Alpha Medical",
      location: "Innsbruck Facility",
      status: "Pending",
      createdDate: "2023-04-08",
      lastUpdated: "2023-04-14",
      measures: 9,
      openMeasures: 5,
      priority: "Medium",
      assignedTo: "Sarah Müller",
    },
  ]

  return cases
}

