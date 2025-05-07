export interface LocationData {
  id: string
  name: string
  address: string
  customer: {
    id: string
    name: string
  }
  contact: {
    email: string
    phone: string
    manager: string
  }
  details: {
    type: string
    size: string
    employees: number
    buildingYear: number
    lastInspection: string
    safetyOfficer: string
    lastRiskAssessment: string
    certifications: string[]
  }
  cases: Case[]
}

export interface Case {
  id: string
  title: string
  date: string
  status: "Offen" | "In Bearbeitung" | "Abgeschlossen"
  measures: number
  openMeasures: number
  priority: "Hoch" | "Mittel" | "Niedrig"
  overdue: boolean
  daysOverdue?: number
}

export interface Measure {
  id: string
  title: string
  caseId: string
  caseName: string
  priority: "Hoch" | "Mittel" | "Niedrig"
  status: "Offen" | "In Bearbeitung" | "Abgeschlossen"
  deadline: string
  description: string
  overdue: boolean
  daysOverdue?: number
}

// Mock data for the location
export const getLocationData = (customerId: string, locationId: string): LocationData => {
  // In a real app, you would fetch this data based on the customerId and locationId
  return {
    id: locationId || "wien",
    name: "Wien Zentrum",
    address: "Stephansplatz 1, 1010 Wien",
    customer: {
      id: customerId || "acme",
      name: "Acme GmbH",
    },
    contact: {
      email: "wien@acmegmbh.com",
      phone: "+43 1 234567891",
      manager: "Thomas Müller",
    },
    details: {
      type: "Hauptsitz",
      size: "2500 m²",
      employees: 120,
      buildingYear: 2005,
      lastInspection: "2023-03-15",
      safetyOfficer: "Maria Schmidt",
      lastRiskAssessment: "2023-02-10",
      certifications: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    },
    cases: [
      {
        id: "F-2023-001",
        title: "Jährliche Sicherheitsinspektion",
        date: "2023-05-15",
        status: "Offen",
        measures: 5,
        openMeasures: 2,
        priority: "Hoch",
        overdue: false,
      },
      {
        id: "F-2023-015",
        title: "Brandschutzübung",
        date: "2023-06-10",
        status: "In Bearbeitung",
        measures: 3,
        openMeasures: 1,
        priority: "Mittel",
        overdue: false,
      },
      {
        id: "F-2023-022",
        title: "Elektrische Anlagen Prüfung",
        date: "2023-04-05",
        status: "Offen",
        measures: 4,
        openMeasures: 4,
        priority: "Hoch",
        overdue: true,
        daysOverdue: 7,
      },
    ],
  }
}

// Get all measures across all cases for a location
export const getLocationMeasures = (customerId: string, locationId: string): Measure[] => {
  // In a real app, you would fetch this data based on the customerId and locationId

  // Mock measures data
  return [
    {
      id: "M-2023-001",
      title: "Feuermelder Installation",
      caseId: "F-2023-001",
      caseName: "Jährliche Sicherheitsinspektion",
      priority: "Hoch",
      status: "Offen",
      deadline: "2023-06-15",
      description: "Installation neuer Feuermelder im 3. Stock",
      overdue: false,
    },
    {
      id: "M-2023-002",
      title: "Notausgangsbeschilderung",
      caseId: "F-2023-001",
      caseName: "Jährliche Sicherheitsinspektion",
      priority: "Mittel",
      status: "In Bearbeitung",
      deadline: "2023-06-20",
      description: "Erneuerung der Notausgangsbeschilderung",
      overdue: false,
    },
    {
      id: "M-2023-003",
      title: "Brandschutzschulung",
      caseId: "F-2023-015",
      caseName: "Brandschutzübung",
      priority: "Hoch",
      status: "Abgeschlossen",
      deadline: "2023-06-05",
      description: "Schulung aller Mitarbeiter zum Thema Brandschutz",
      overdue: false,
    },
    {
      id: "M-2023-004",
      title: "Elektrische Sicherheitsprüfung",
      caseId: "F-2023-022",
      caseName: "Elektrische Anlagen Prüfung",
      priority: "Hoch",
      status: "Offen",
      deadline: "2023-05-20",
      description: "Überprüfung aller elektrischen Anlagen auf Sicherheit",
      overdue: true,
      daysOverdue: 7,
    },
    {
      id: "M-2023-005",
      title: "Dokumentation der Elektroinstallationen",
      caseId: "F-2023-022",
      caseName: "Elektrische Anlagen Prüfung",
      priority: "Mittel",
      status: "Offen",
      deadline: "2023-05-25",
      description: "Aktualisierung der Dokumentation aller Elektroinstallationen",
      overdue: true,
      daysOverdue: 2,
    },
  ]
}

