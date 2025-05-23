export interface CaseItem {
    assignedTo: string;
    createdDate: string;
    customer: string;
    id: string;
    lastUpdated: string;
    location: string;
    measures: number;
    openMeasures: number;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Open' | 'Pending' | 'Completed';
    title: string;
}

// Mock data for cases
export const getCasesData = () => {
    const cases: CaseItem[] = [
        {
            assignedTo: 'Mario Heinisch',
            createdDate: '2023-04-01',
            customer: 'Acme Corp',
            id: 'F-2023-001',
            lastUpdated: '2023-04-10',
            location: 'Vienna Headquarters',
            measures: 12,
            openMeasures: 5,
            priority: 'High',
            status: 'Open',
            title: 'Annual Risk Assessment',
        },
        {
            assignedTo: 'Mario Heinisch',
            createdDate: '2023-04-05',
            customer: 'TechSolutions',
            id: 'F-2023-002',
            lastUpdated: '2023-04-12',
            location: 'Graz Office',
            measures: 8,
            openMeasures: 6,
            priority: 'Medium',
            status: 'Pending',
            title: 'Safety Inspection',
        },
        {
            assignedTo: 'Sarah Müller',
            createdDate: '2023-03-15',
            customer: 'Global Industries',
            id: 'F-2023-003',
            lastUpdated: '2023-04-02',
            location: 'Linz Factory',
            measures: 15,
            openMeasures: 0,
            priority: 'Low',
            status: 'Completed',
            title: 'Compliance Review',
        },
        {
            assignedTo: 'Mario Heinisch',
            createdDate: '2023-04-10',
            customer: 'Innovative Systems',
            id: 'F-2023-004',
            lastUpdated: '2023-04-15',
            location: 'Salzburg',
            measures: 6,
            openMeasures: 6,
            priority: 'High',
            status: 'Open',
            title: 'Equipment Maintenance',
        },
        {
            assignedTo: 'Thomas Weber',
            createdDate: '2023-04-12',
            customer: 'EcoTech Solutions',
            id: 'F-2023-005',
            lastUpdated: '2023-04-16',
            location: 'Vienna Office',
            measures: 10,
            openMeasures: 8,
            priority: 'High',
            status: 'Open',
            title: 'Fire Safety Audit',
        },
        {
            assignedTo: 'Sarah Müller',
            createdDate: '2023-04-08',
            customer: 'Alpha Medical',
            id: 'F-2023-006',
            lastUpdated: '2023-04-14',
            location: 'Innsbruck Facility',
            measures: 9,
            openMeasures: 5,
            priority: 'Medium',
            status: 'Pending',
            title: 'Environmental Assessment',
        },
    ];

    return cases;
};
