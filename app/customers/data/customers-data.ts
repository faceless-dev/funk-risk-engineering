export interface Customer {
  id: string
  customerNumber: string
  name: string
  group: string
  email: string
  phone: string
  locations: number
  cases: number
  openMeasures: number
  color: "red" | "green" | "blue"
}

// Mock data for customers
export const getCustomersData = (): Customer[] => {
  return [
    {
      id: "acme",
      customerNumber: "K-2023-001",
      name: "Acme GmbH",
      group: "Einzelhandel",
      email: "kontakt@acmegmbh.com",
      phone: "+43 1 234567890",
      locations: 5,
      cases: 3,
      openMeasures: 2,
      color: "blue",
    },
    {
      id: "techstart",
      customerNumber: "K-2023-002",
      name: "TechStart AG",
      group: "Technologie",
      email: "info@techstart.com",
      phone: "+43 662 9876543",
      locations: 3,
      cases: 3,
      openMeasures: 1,
      color: "blue",
    },
    {
      id: "globale",
      customerNumber: "K-2023-003",
      name: "Globale Dienstleistungen GmbH",
      group: "Dienstleistungen",
      email: "support@globaledienstleistungen.com",
      phone: "+43 512 1122334",
      locations: 2,
      cases: 2,
      openMeasures: 0,
      color: "green",
    },
    {
      id: "innovative",
      customerNumber: "K-2023-004",
      name: "Innovative Systems GmbH",
      group: "Software",
      email: "office@innovative-systems.at",
      phone: "+43 316 7788990",
      locations: 1,
      cases: 4,
      openMeasures: 6,
      color: "red",
    },
    {
      id: "ecotech",
      customerNumber: "K-2023-005",
      name: "EcoTech Solutions",
      group: "Umwelttechnologie",
      email: "info@ecotech-solutions.at",
      phone: "+43 732 5566778",
      locations: 2,
      cases: 2,
      openMeasures: 4,
      color: "blue",
    },
    {
      id: "alphamedical",
      customerNumber: "K-2023-006",
      name: "Alpha Medical GmbH",
      group: "Gesundheitswesen",
      email: "kontakt@alpha-medical.at",
      phone: "+43 662 3344556",
      locations: 4,
      cases: 1,
      openMeasures: 1,
      color: "blue",
    },
  ]
}

