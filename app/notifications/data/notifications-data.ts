export interface Notification {
  id: number
  title: string
  message: string
  time: string
  read: boolean
  caseId?: string
  customerId?: string
  type: "case_response" | "measure_overdue" | "case_created" | "reminder"
}

export function getNotificationsData(): Notification[] {
  return [
    {
      id: 1,
      title: "Kundenantwort erhalten",
      message: "Kunde hat auf Fall F-2023-002 geantwortet",
      time: "Vor 2 Stunden",
      read: false,
      caseId: "F-2023-002",
      type: "case_response",
    },
    {
      id: 2,
      title: "Maßnahme überfällig",
      message: "Maßnahme 'Notausgangsbeschilderung' ist überfällig",
      time: "Vor 1 Tag",
      read: false,
      caseId: "F-2023-001",
      type: "measure_overdue",
    },
    {
      id: 3,
      title: "Neuer Fall erstellt",
      message: "Neuer Fall F-2023-004 wurde erstellt",
      time: "Vor 3 Tagen",
      read: true,
      caseId: "F-2023-004",
      type: "case_created",
    },
    {
      id: 4,
      title: "Erinnerung",
      message: "Erinnerung: 5 Maßnahmen werden diese Woche fällig",
      time: "Vor 5 Tagen",
      read: true,
      type: "reminder",
    },
    {
      id: 5,
      title: "Kundenantwort erhalten",
      message: "Kunde hat auf Fall F-2023-003 geantwortet",
      time: "Vor 1 Woche",
      read: true,
      caseId: "F-2023-003",
      type: "case_response",
    },
    {
      id: 6,
      title: "Kundenprofil aktualisiert",
      message: "Acme Corp hat Kontaktdaten aktualisiert",
      time: "Vor 1 Woche",
      read: true,
      customerId: "acme",
      type: "case_response",
    },
  ]
}

