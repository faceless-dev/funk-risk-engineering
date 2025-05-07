export interface ReportData {
  id: string
  name: string
  customer: string
  location: string
  status: string
  createdDate: string
  lastUpdated: string
  description: string
  measures: Measure[]
}

export interface Measure {
  id: number
  title: string
  priority: "High" | "Medium" | "Low"
  status: "Open" | "In Progress" | "Completed"
  deadline: string
  description: string
}

// Mock data for the report
export const getReportData = (id: string): ReportData => {
  return {
    id: id || "R-2023-001",
    name: "Annual Risk Assessment",
    customer: "Acme Corp",
    location: "Vienna Headquarters",
    status: "Open",
    createdDate: "2023-04-01",
    lastUpdated: "2023-04-10",
    description:
      "Annual risk assessment for Acme Corp's Vienna headquarters. This assessment covers fire safety, electrical systems, and emergency procedures.",
    measures: [
      {
        id: 1,
        title: "Fire Safety System Update",
        priority: "High",
        status: "Open",
        deadline: "2023-04-15",
        description: "Update fire alarm system to meet new regulations.",
      },
      {
        id: 2,
        title: "Emergency Exit Signage",
        priority: "Medium",
        status: "In Progress",
        deadline: "2023-04-20",
        description: "Install new emergency exit signs with LED lighting.",
      },
      {
        id: 3,
        title: "Electrical System Inspection",
        priority: "High",
        status: "Open",
        deadline: "2023-04-25",
        description: "Complete inspection of all electrical panels and wiring.",
      },
      {
        id: 4,
        title: "Staff Safety Training",
        priority: "Medium",
        status: "Completed",
        deadline: "2023-03-30",
        description: "Conduct safety training for all staff members.",
      },
      {
        id: 5,
        title: "Ventilation System Maintenance",
        priority: "Low",
        status: "Open",
        deadline: "2023-05-10",
        description: "Schedule maintenance for all HVAC systems.",
      },
    ],
  }
}

