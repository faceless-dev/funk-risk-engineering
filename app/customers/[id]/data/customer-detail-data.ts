export interface CustomerDetailData {
    cases: CaseItem[];
    customerNumber: string;
    email: string;
    id: string;
    locations: LocationItem[];
    name: string;
    phone: string;
    website: string;
}

export interface LocationItem {
    address: string;
    caseCount: number;
    contact: {
        email: string;
        phone: string;
    };
    id: string;
    name: string;
}

export interface CaseItem {
    date: string;
    id: string;
    location: string;
    measures: number;
    openMeasures: number;
    status: string;
    title: string;
}

// Get customer detail data by ID
export const getCustomerDetailData = (id: string): CustomerDetailData => {
    // In a real app, you would fetch this data based on the ID
    return {
        cases: [
            {
                date: '15/05/2023',
                id: 'F-2023-001',
                location: 'Wien Zentrum',
                measures: 5,
                openMeasures: 2,
                status: 'Offen',
                title: 'Jährliche Sicherheitsinspektion',
            },
            {
                date: '20/05/2023',
                id: 'F-2023-008',
                location: 'Salzburg Hauptsitz',
                measures: 3,
                openMeasures: 3,
                status: 'In Bearbeitung',
                title: 'Geräte-Wartung',
            },
            {
                date: '05/06/2023',
                id: 'F-2023-012',
                location: 'Innsbruck Geschäft',
                measures: 8,
                openMeasures: 8,
                status: 'Offen',
                title: 'Compliance-Überprüfung',
            },
        ],
        customerNumber: 'K-2023-001',
        email: 'kontakt@acmegmbh.com',
        id: id,
        locations: [
            {
                address: 'Stephansplatz 1, 1010 Wien',
                caseCount: 1,
                contact: {
                    email: 'wien@acmegmbh.com',
                    phone: '+43 1 234567891',
                },
                id: 'wien',
                name: 'Wien Zentrum',
            },
            {
                address: 'Getreidegasse 9, 5020 Salzburg',
                caseCount: 1,
                contact: {
                    email: 'salzburg@acmegmbh.com',
                    phone: '+43 662 987654',
                },
                id: 'salzburg',
                name: 'Salzburg Hauptsitz',
            },
            {
                address: 'Maria-Theresien-Straße 18, 6020 Innsbruck',
                caseCount: 1,
                contact: {
                    email: 'innsbruck@acmegmbh.com',
                    phone: '+43 512 456789',
                },
                id: 'innsbruck',
                name: 'Innsbruck Geschäft',
            },
            {
                address: 'Völkermarkter Straße 1, 9020 Klagenfurt',
                caseCount: 0,
                contact: {
                    email: 'klagenfurt@acmegmbh.com',
                    phone: '+43 463 123456',
                },
                id: 'klagenfurt',
                name: 'Klagenfurt Einkaufszentrum',
            },
            {
                address: 'Hauptstraße 10, 7000 Eisenstadt',
                caseCount: 0,
                contact: {
                    email: 'eisenstadt@acmegmbh.com',
                    phone: '+43 2682 654321',
                },
                id: 'eisenstadt',
                name: 'Eisenstadt Platz',
            },
        ],
        name: 'Acme GmbH',
        phone: '+43 1 234567890',
        website: 'www.acmegmbh.com',
    };
};

// Calculate statistics from customer data
export const calculateCustomerStatistics = (customer: CustomerDetailData) => {
    const totalMeasures = customer.cases.reduce((sum, c) => sum + c.measures, 0);
    const openMeasures = customer.cases.reduce((sum, c) => sum + c.openMeasures, 0);
    const implementationRate = totalMeasures > 0 ? Math.round(((totalMeasures - openMeasures) / totalMeasures) * 100) : 0;

    return {
        cases: customer.cases.length,
        implementationRate,
        locations: customer.locations.length,
        totalMeasures,
    };
};
