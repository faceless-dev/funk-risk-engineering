export interface CaseReport {
    date: string;
    id: string;
    title: string;
    type: string;
}

export interface CustomerReport {
    date: string;
    id: string;
    title: string;
    type: string;
}

export interface ChartData {
    priority: {
        high: number;
        low: number;
        medium: number;
    };
    status: {
        completed: number;
        inProgress: number;
        open: number;
    };
}

export const getReportsData = () => {
    const caseReports: CaseReport[] = [
        {
            date: '2023-04-15',
            id: 'R-2023-001',
            title: 'F-2023-001 - Acme Corp Risikobewertung',
            type: 'Fall',
        },
        {
            date: '2023-04-10',
            id: 'R-2023-002',
            title: 'F-2023-002 - TechSolutions Risikobewertung',
            type: 'Fall',
        },
        {
            date: '2023-03-20',
            id: 'R-2023-003',
            title: 'F-2023-003 - Global Industries Risikobewertung',
            type: 'Fall',
        },
    ];

    const customerReports: CustomerReport[] = [
        {
            date: '2023-04-01',
            id: 'R-2023-004',
            title: 'Acme Corp - Jahresbericht',
            type: 'Kunden',
        },
        {
            date: '2023-03-31',
            id: 'R-2023-005',
            title: 'TechSolutions - Q1 Zusammenfassung',
            type: 'Kunden',
        },
        {
            date: '2023-03-15',
            id: 'R-2023-006',
            title: 'Global Industries - Standortanalyse',
            type: 'Kunden',
        },
    ];

    const chartData: ChartData = {
        priority: {
            high: 12,
            low: 4,
            medium: 8,
        },
        status: {
            completed: 20,
            inProgress: 20,
            open: 60,
        },
    };

    return {
        caseReports,
        chartData,
        customerReports,
    };
};
