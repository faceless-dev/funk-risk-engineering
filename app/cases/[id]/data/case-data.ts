export interface CaseData {
  id: string
  name: string
  customer: string
  location: string
  status: string
  createdDate: string
  lastUpdated: string
  assignedTo: string
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
  attachments: Attachment[]
}

export interface Attachment {
  name: string
  size: string
  date: string
}

export interface HistoryItem {
  date: string
  user: string
  action: string
}

// Mock data for the case
export const getCaseData = (id: string): CaseData => {
  return {
    id: id || "F-2023-001",
    name: "Annual Risk Assessment",
    customer: "Acme Corp",
    location: "Vienna Headquarters",
    status: "Open",
    createdDate: "2023-04-01",
    lastUpdated: "2023-04-10",
    assignedTo: "Mario Heinisch",
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
        attachments: [],
      },
      {
        id: 2,
        title: "Emergency Exit Signage",
        priority: "Medium",
        status: "In Progress",
        deadline: "2023-04-20",
        description: "Install new emergency exit signs with LED lighting.",
        attachments: [
          { name: "exit-sign-specs.pdf", size: "1.2 MB", date: "2023-04-08" },
          { name: "installation-progress.jpg", size: "0.8 MB", date: "2023-04-10" },
        ],
      },
      {
        id: 3,
        title: "Electrical System Inspection",
        priority: "High",
        status: "Open",
        deadline: "2023-04-25",
        description: "Complete inspection of all electrical panels and wiring.",
        attachments: [],
      },
      {
        id: 4,
        title: "Staff Safety Training",
        priority: "Medium",
        status: "Completed",
        deadline: "2023-03-30",
        description: "Conduct safety training for all staff members.",
        attachments: [
          { name: "training-records.pdf", size: "1.2 MB", date: "2023-04-05" },
          { name: "attendance.xlsx", size: "0.5 MB", date: "2023-04-05" },
        ],
      },
      {
        id: 5,
        title: "Ventilation System Maintenance",
        priority: "Low",
        status: "Open",
        deadline: "2023-05-10",
        description: "Schedule maintenance for all HVAC systems.",
        attachments: [{ name: "maintenance-schedule.pdf", size: "0.7 MB", date: "2023-04-02" }],
      },
    ],
  }
}

export const getCaseHistory = (): HistoryItem[] => {
  return [
    {
      date: "2023-04-10",
      user: "Mario Heinisch",
      action: "Updated measure 'Emergency Exit Signage' status to 'In Progress'",
    },
    {
      date: "2023-04-05",
      user: "Customer",
      action: "Responded to measure 'Staff Safety Training' and marked as 'Completed'",
    },
    { date: "2023-04-03", user: "System", action: "Sent reminder email to customer" },
    { date: "2023-04-01", user: "Mario Heinisch", action: "Created case and added 5 measures" },
  ]
}

export const getCaseFiles = () => {
  return {
    employeeUploads: [
      {
        name: "Risk Assessment Report.pdf",
        size: "2.4 MB",
        date: "2023-04-01",
        user: "Mario Heinisch",
        measure: null,
      },
      {
        name: "Site Photos.zip",
        size: "15.7 MB",
        date: "2023-04-01",
        user: "Mario Heinisch",
        measure: null,
      },
      {
        name: "exit-sign-specs.pdf",
        size: "1.2 MB",
        date: "2023-04-08",
        user: "Mario Heinisch",
        measure: "Emergency Exit Signage",
      },
      {
        name: "maintenance-schedule.pdf",
        size: "0.7 MB",
        date: "2023-04-02",
        user: "Mario Heinisch",
        measure: "Ventilation System Maintenance",
      },
    ],
    customerUploads: [
      {
        name: "installation-progress.jpg",
        size: "0.8 MB",
        date: "2023-04-10",
        user: "Customer",
        measure: "Emergency Exit Signage",
      },
      {
        name: "training-records.pdf",
        size: "1.2 MB",
        date: "2023-04-05",
        user: "Customer",
        measure: "Staff Safety Training",
      },
      {
        name: "attendance.xlsx",
        size: "0.5 MB",
        date: "2023-04-05",
        user: "Customer",
        measure: "Staff Safety Training",
      },
    ],
  }
}

