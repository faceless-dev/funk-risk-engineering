export interface Customer {
    cases: number;
    color: 'red' | 'green' | 'blue';
    customerNumber: string;
    email: string;
    group: string;
    id: string;
    locations: number;
    name: string;
    openMeasures: number;
    phone: string;
}

// Mock data for customers
export const getCustomersData = (): Customer[] => {
    return [
        {
            cases: 3,
            color: 'blue',
            customerNumber: 'K-2023-001',
            email: 'kontakt@acmegmbh.com',
            group: 'Einzelhandel',
            id: 'acme',
            locations: 5,
            name: 'Acme GmbH',
            openMeasures: 2,
            phone: '+43 1 234567890',
        },
        {
            cases: 3,
            color: 'blue',
            customerNumber: 'K-2023-002',
            email: 'info@techstart.com',
            group: 'Technologie',
            id: 'techstart',
            locations: 3,
            name: 'TechStart AG',
            openMeasures: 1,
            phone: '+43 662 9876543',
        },
        {
            cases: 2,
            color: 'green',
            customerNumber: 'K-2023-003',
            email: 'support@globaledienstleistungen.com',
            group: 'Dienstleistungen',
            id: 'globale',
            locations: 2,
            name: 'Globale Dienstleistungen GmbH',
            openMeasures: 0,
            phone: '+43 512 1122334',
        },
        {
            cases: 4,
            color: 'red',
            customerNumber: 'K-2023-004',
            email: 'office@innovative-systems.at',
            group: 'Software',
            id: 'innovative',
            locations: 1,
            name: 'Innovative Systems GmbH',
            openMeasures: 6,
            phone: '+43 316 7788990',
        },
        {
            cases: 2,
            color: 'blue',
            customerNumber: 'K-2023-005',
            email: 'info@ecotech-solutions.at',
            group: 'Umwelttechnologie',
            id: 'ecotech',
            locations: 2,
            name: 'EcoTech Solutions',
            openMeasures: 4,
            phone: '+43 732 5566778',
        },
        {
            cases: 1,
            color: 'blue',
            customerNumber: 'K-2023-006',
            email: 'kontakt@alpha-medical.at',
            group: 'Gesundheitswesen',
            id: 'alphamedical',
            locations: 4,
            name: 'Alpha Medical GmbH',
            openMeasures: 1,
            phone: '+43 662 3344556',
        },
    ];
};
