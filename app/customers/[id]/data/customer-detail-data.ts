export interface CustomerDetailData {
  id: string
  customerNumber: string
  name: string
  email: string
  phone: string
  website: string
  locations: LocationItem[]
  cases: CaseItem[]
}

export interface LocationItem {
  id: string
  name: string
  address: string
  contact: {
    email: string
    phone: string
  }
  caseCount: number
}

export interface CaseItem {
  id: string
  title: string
  location: string
  date: string
  status: string
  measures: number
  openMeasures: number
}

// Get customer detail data by ID
export const getCustomerDetailData = (id: string): CustomerDetailData => {
  // In a real app, you would fetch this data based on the ID
  return {
    id: id,
    customerNumber: "K-2023-001",
    name: "Acme GmbH",
    email: "kontakt@acmegmbh.com",
    phone: "+43 1 234567890",
    website: "www.acmegmbh.com",
    locations: [
      {
        id: "wien",
        name: "Wien Zentrum",
        address: "Stephansplatz 1, 1010 Wien",
        contact: {
          email: "wien@acmegmbh.com",
          phone: "+43 1 234567891",
        },
        caseCount: 1,
      },
      {
        id: "salzburg",
        name: "Salzburg Hauptsitz",
        address: "Getreidegasse 9, 5020 Salzburg",
        contact: {
          email: "salzburg@acmegmbh.com",
          phone: "+43 662 987654",
        },
        caseCount: 1,
      },
      {
        id: "innsbruck",
        name: "Innsbruck Geschäft",
        address: "Maria-Theresien-Straße 18, 6020 Innsbruck",
        contact: {
          email: "innsbruck@acmegmbh.com",
          phone: "+43 512 456789",
        },
        caseCount: 1,
      },
      {
        id: "klagenfurt",
        name: "Klagenfurt Einkaufszentrum",
        address: "Völkermarkter Straße 1, 9020 Klagenfurt",
        contact: {
          email: "klagenfurt@acmegmbh.com",
          phone: "+43 463 123456",
        },
        caseCount: 0,
      },
      {
        id: "eisenstadt",
        name: "Eisenstadt Platz",
        address: "Hauptstraße 10, 7000 Eisenstadt",
        contact: {
          email: "eisenstadt@acmegmbh.com",
          phone: "+43 2682 654321",
        },
        caseCount: 0,
      },
    ],
    cases: [
      {
        id: "F-2023-001",
        title: "Jährliche Sicherheitsinspektion",
        location: "Wien Zentrum",
        date: "15/05/2023",
        status: "Offen",
        measures: 5,
        openMeasures: 2,
      },
      {
        id: "F-2023-008",
        title: "Geräte-Wartung",
        location: "Salzburg Hauptsitz",
        date: "20/05/2023",
        status: "In Bearbeitung",
        measures: 3,
        openMeasures: 3,
      },
      {
        id: "F-2023-012",
        title: "Compliance-Überprüfung",
        location: "Innsbruck Geschäft",
        date: "05/06/2023",
        status: "Offen",
        measures: 8,
        openMeasures: 8,
      },
    ],
  }
}

// Calculate statistics from customer data
export const calculateCustomerStatistics = (customer: CustomerDetailData) => {
  const totalMeasures = customer.cases.reduce((sum, c) => sum + c.measures, 0)
  const openMeasures = customer.cases.reduce((sum, c) => sum + c.openMeasures, 0)
  const implementationRate = totalMeasures > 0 ? Math.round(((totalMeasures - openMeasures) / totalMeasures) * 100) : 0

  return {
    locations: customer.locations.length,
    cases: customer.cases.length,
    totalMeasures,
    implementationRate,
  }
}

