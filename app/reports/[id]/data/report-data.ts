export interface ReportData {
    createdDate: string;
    customer: string;
    description: string;
    id: string;
    lastUpdated: string;
    location: string;
    measures: Measure[];
    name: string;
    status: string;
}

export interface Measure {
    deadline: string;
    description: string;
    id: number;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Open' | 'In Progress' | 'Completed';
    title: string;
}

// Mock data for the report
export const getReportData = (id: string): ReportData => {
    return {
        createdDate: '2023-04-01',
        customer: 'Acme Corp',
        description:
            "Annual risk assessment for Acme Corp's Vienna headquarters. This assessment covers fire safety, electrical systems, and emergency procedures.",
        id: id || 'R-2023-001',
        lastUpdated: '2023-04-10',
        location: 'Vienna Headquarters',
        measures: [
            {
                deadline: '2023-04-15',
                description: 'Update fire alarm system to meet new regulations.',
                id: 1,
                priority: 'High',
                status: 'Open',
                title: 'Fire Safety System Update',
            },
            {
                deadline: '2023-04-20',
                description: 'Install new emergency exit signs with LED lighting.',
                id: 2,
                priority: 'Medium',
                status: 'In Progress',
                title: 'Emergency Exit Signage',
            },
            {
                deadline: '2023-04-25',
                description: 'Complete inspection of all electrical panels and wiring.',
                id: 3,
                priority: 'High',
                status: 'Open',
                title: 'Electrical System Inspection',
            },
            {
                deadline: '2023-03-30',
                description: 'Conduct safety training for all staff members.',
                id: 4,
                priority: 'Medium',
                status: 'Completed',
                title: 'Staff Safety Training',
            },
            {
                deadline: '2023-05-10',
                description: 'Schedule maintenance for all HVAC systems.',
                id: 5,
                priority: 'Low',
                status: 'Open',
                title: 'Ventilation System Maintenance',
            },
        ],
        name: 'Annual Risk Assessment',
        status: 'Open',
    };
};
