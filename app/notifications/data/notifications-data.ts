export interface Notification {
    caseId?: string;
    customerId?: string;
    id: number;
    message: string;
    read: boolean;
    time: string;
    title: string;
    type: 'case_response' | 'measure_overdue' | 'case_created' | 'reminder';
}

export function getNotificationsData(): Notification[] {
    return [
        {
            caseId: 'F-2023-002',
            id: 1,
            message: 'Kunde hat auf Fall F-2023-002 geantwortet',
            read: false,
            time: 'Vor 2 Stunden',
            title: 'Kundenantwort erhalten',
            type: 'case_response',
        },
        {
            caseId: 'F-2023-001',
            id: 2,
            message: "Maßnahme 'Notausgangsbeschilderung' ist überfällig",
            read: false,
            time: 'Vor 1 Tag',
            title: 'Maßnahme überfällig',
            type: 'measure_overdue',
        },
        {
            caseId: 'F-2023-004',
            id: 3,
            message: 'Neuer Fall F-2023-004 wurde erstellt',
            read: true,
            time: 'Vor 3 Tagen',
            title: 'Neuer Fall erstellt',
            type: 'case_created',
        },
        {
            id: 4,
            message: 'Erinnerung: 5 Maßnahmen werden diese Woche fällig',
            read: true,
            time: 'Vor 5 Tagen',
            title: 'Erinnerung',
            type: 'reminder',
        },
        {
            caseId: 'F-2023-003',
            id: 5,
            message: 'Kunde hat auf Fall F-2023-003 geantwortet',
            read: true,
            time: 'Vor 1 Woche',
            title: 'Kundenantwort erhalten',
            type: 'case_response',
        },
        {
            customerId: 'acme',
            id: 6,
            message: 'Acme Corp hat Kontaktdaten aktualisiert',
            read: true,
            time: 'Vor 1 Woche',
            title: 'Kundenprofil aktualisiert',
            type: 'case_response',
        },
    ];
}
