export interface CaseData {
    assignedTo: string;
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
    attachments: Attachment[];
    deadline: string;
    description: string;
    id: number;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Open' | 'In Progress' | 'Completed';
    title: string;
}

export interface Attachment {
    date: string;
    name: string;
    size: string;
}

export interface HistoryItem {
    action: string;
    date: string;
    user: string;
}

// Mock data for the case
export const getCaseData = (id: string): CaseData => {
    return {
        assignedTo: 'Mario Heinisch',
        createdDate: '2023-04-01',
        customer: 'Acme Corp',
        description:
            "Annual risk assessment for Acme Corp's Vienna headquarters. This assessment covers fire safety, electrical systems, and emergency procedures.",
        id: id || 'F-2023-001',
        lastUpdated: '2023-04-10',
        location: 'Vienna Headquarters',
        measures: [
            {
                attachments: [],
                deadline: '2023-04-15',
                description: 'Update fire alarm system to meet new regulations.',
                id: 1,
                priority: 'High',
                status: 'Open',
                title: 'Fire Safety System Update',
            },
            {
                attachments: [
                    { date: '2023-04-08', name: 'exit-sign-specs.pdf', size: '1.2 MB' },
                    { date: '2023-04-10', name: 'installation-progress.jpg', size: '0.8 MB' },
                ],
                deadline: '2023-04-20',
                description: 'Install new emergency exit signs with LED lighting.',
                id: 2,
                priority: 'Medium',
                status: 'In Progress',
                title: 'Emergency Exit Signage',
            },
            {
                attachments: [],
                deadline: '2023-04-25',
                description: 'Complete inspection of all electrical panels and wiring.',
                id: 3,
                priority: 'High',
                status: 'Open',
                title: 'Electrical System Inspection',
            },
            {
                attachments: [
                    { date: '2023-04-05', name: 'training-records.pdf', size: '1.2 MB' },
                    { date: '2023-04-05', name: 'attendance.xlsx', size: '0.5 MB' },
                ],
                deadline: '2023-03-30',
                description: 'Conduct safety training for all staff members.',
                id: 4,
                priority: 'Medium',
                status: 'Completed',
                title: 'Staff Safety Training',
            },
            {
                attachments: [{ date: '2023-04-02', name: 'maintenance-schedule.pdf', size: '0.7 MB' }],
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

export const getCaseHistory = (): HistoryItem[] => {
    return [
        {
            action: "Updated measure 'Emergency Exit Signage' status to 'In Progress'",
            date: '2023-04-10',
            user: 'Mario Heinisch',
        },
        {
            action: "Responded to measure 'Staff Safety Training' and marked as 'Completed'",
            date: '2023-04-05',
            user: 'Customer',
        },
        { action: 'Sent reminder email to customer', date: '2023-04-03', user: 'System' },
        { action: 'Created case and added 5 measures', date: '2023-04-01', user: 'Mario Heinisch' },
    ];
};

export const getCaseFiles = () => {
    return {
        customerUploads: [
            {
                date: '2023-04-10',
                measure: 'Emergency Exit Signage',
                name: 'installation-progress.jpg',
                size: '0.8 MB',
                user: 'Customer',
            },
            {
                date: '2023-04-05',
                measure: 'Staff Safety Training',
                name: 'training-records.pdf',
                size: '1.2 MB',
                user: 'Customer',
            },
            {
                date: '2023-04-05',
                measure: 'Staff Safety Training',
                name: 'attendance.xlsx',
                size: '0.5 MB',
                user: 'Customer',
            },
        ],
        employeeUploads: [
            {
                date: '2023-04-01',
                measure: null,
                name: 'Risk Assessment Report.pdf',
                size: '2.4 MB',
                user: 'Mario Heinisch',
            },
            {
                date: '2023-04-01',
                measure: null,
                name: 'Site Photos.zip',
                size: '15.7 MB',
                user: 'Mario Heinisch',
            },
            {
                date: '2023-04-08',
                measure: 'Emergency Exit Signage',
                name: 'exit-sign-specs.pdf',
                size: '1.2 MB',
                user: 'Mario Heinisch',
            },
            {
                date: '2023-04-02',
                measure: 'Ventilation System Maintenance',
                name: 'maintenance-schedule.pdf',
                size: '0.7 MB',
                user: 'Mario Heinisch',
            },
        ],
    };
};
