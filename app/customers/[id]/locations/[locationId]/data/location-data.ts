export interface LocationData {
    address: string;
    cases: Case[];
    contact: {
        email: string;
        manager: string;
        phone: string;
    };
    customer: {
        id: string;
        name: string;
    };
    details: {
        buildingYear: number;
        certifications: string[];
        employees: number;
        lastInspection: string;
        lastRiskAssessment: string;
        safetyOfficer: string;
        size: string;
        type: string;
    };
    id: string;
    name: string;
}

export interface Case {
    date: string;
    daysOverdue?: number;
    id: string;
    measures: number;
    openMeasures: number;
    overdue: boolean;
    priority: 'Hoch' | 'Mittel' | 'Niedrig';
    status: 'Offen' | 'In Bearbeitung' | 'Abgeschlossen';
    title: string;
}

export interface Measure {
    caseId: string;
    caseName: string;
    daysOverdue?: number;
    deadline: string;
    description: string;
    id: string;
    overdue: boolean;
    priority: 'Hoch' | 'Mittel' | 'Niedrig';
    status: 'Offen' | 'In Bearbeitung' | 'Abgeschlossen';
    title: string;
}

// Mock data for the location
export const getLocationData = (customerId: string, locationId: string): LocationData => {
    // In a real app, you would fetch this data based on the customerId and locationId
    return {
        address: 'Stephansplatz 1, 1010 Wien',
        cases: [
            {
                date: '2023-05-15',
                id: 'F-2023-001',
                measures: 5,
                openMeasures: 2,
                overdue: false,
                priority: 'Hoch',
                status: 'Offen',
                title: 'Jährliche Sicherheitsinspektion',
            },
            {
                date: '2023-06-10',
                id: 'F-2023-015',
                measures: 3,
                openMeasures: 1,
                overdue: false,
                priority: 'Mittel',
                status: 'In Bearbeitung',
                title: 'Brandschutzübung',
            },
            {
                date: '2023-04-05',
                daysOverdue: 7,
                id: 'F-2023-022',
                measures: 4,
                openMeasures: 4,
                overdue: true,
                priority: 'Hoch',
                status: 'Offen',
                title: 'Elektrische Anlagen Prüfung',
            },
        ],
        contact: {
            email: 'wien@acmegmbh.com',
            manager: 'Thomas Müller',
            phone: '+43 1 234567891',
        },
        customer: {
            id: customerId || 'acme',
            name: 'Acme GmbH',
        },
        details: {
            buildingYear: 2005,
            certifications: ['ISO 9001', 'ISO 14001', 'OHSAS 18001'],
            employees: 120,
            lastInspection: '2023-03-15',
            lastRiskAssessment: '2023-02-10',
            safetyOfficer: 'Maria Schmidt',
            size: '2500 m²',
            type: 'Hauptsitz',
        },
        id: locationId || 'wien',
        name: 'Wien Zentrum',
    };
};

// Get all measures across all cases for a location
export const getLocationMeasures = (customerId: string, locationId: string): Measure[] => {
    // In a real app, you would fetch this data based on the customerId and locationId

    // Mock measures data
    return [
        {
            caseId: 'F-2023-001',
            caseName: 'Jährliche Sicherheitsinspektion',
            deadline: '2023-06-15',
            description: 'Installation neuer Feuermelder im 3. Stock',
            id: 'M-2023-001',
            overdue: false,
            priority: 'Hoch',
            status: 'Offen',
            title: 'Feuermelder Installation',
        },
        {
            caseId: 'F-2023-001',
            caseName: 'Jährliche Sicherheitsinspektion',
            deadline: '2023-06-20',
            description: 'Erneuerung der Notausgangsbeschilderung',
            id: 'M-2023-002',
            overdue: false,
            priority: 'Mittel',
            status: 'In Bearbeitung',
            title: 'Notausgangsbeschilderung',
        },
        {
            caseId: 'F-2023-015',
            caseName: 'Brandschutzübung',
            deadline: '2023-06-05',
            description: 'Schulung aller Mitarbeiter zum Thema Brandschutz',
            id: 'M-2023-003',
            overdue: false,
            priority: 'Hoch',
            status: 'Abgeschlossen',
            title: 'Brandschutzschulung',
        },
        {
            caseId: 'F-2023-022',
            caseName: 'Elektrische Anlagen Prüfung',
            daysOverdue: 7,
            deadline: '2023-05-20',
            description: 'Überprüfung aller elektrischen Anlagen auf Sicherheit',
            id: 'M-2023-004',
            overdue: true,
            priority: 'Hoch',
            status: 'Offen',
            title: 'Elektrische Sicherheitsprüfung',
        },
        {
            caseId: 'F-2023-022',
            caseName: 'Elektrische Anlagen Prüfung',
            daysOverdue: 2,
            deadline: '2023-05-25',
            description: 'Aktualisierung der Dokumentation aller Elektroinstallationen',
            id: 'M-2023-005',
            overdue: true,
            priority: 'Mittel',
            status: 'Offen',
            title: 'Dokumentation der Elektroinstallationen',
        },
    ];
};
