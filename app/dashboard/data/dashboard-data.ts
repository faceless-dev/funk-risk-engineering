export interface DashboardStats {
    actionRequired: number;
    highPriorityMeasures: number;
    implementationRate: number;
    openMeasures: number;
    overdueResponses: number;
    totalCases: number;
    totalCustomers: number;
    totalMeasures: number;
}

// Update the CaseItem interface to include customerId and locationId
export interface CaseItem {
    customer: string;
    customerId: string;
    date: string;
    daysOverdue: number;
    id: string;
    location: string;
    locationId: string;
    measures: number;
    overdue: boolean;
    priority: string;
    reason: string;
}

export interface PriorityData {
    color: string;
    count: number;
    label: string;
    percentage: number;
}

export interface CustomerData {
    customer: string;
    id: string;
    implemented: number;
    open: number;
    overdue: number;
    total: number;
}

// This would come from an API in a real implementation
export const getDashboardData = () => {
    const stats: DashboardStats = {
        actionRequired: 8,
        highPriorityMeasures: 12,
        implementationRate: 67,
        openMeasures: 28,
        overdueResponses: 3,
        totalCases: 24,
        totalCustomers: 14,
        totalMeasures: 86,
    };

    // Update the mock data to include customerId and locationId
    const actionRequiredCases: CaseItem[] = [
        {
            customer: 'Acme Corp',
            customerId: 'acme',
            date: '2023-04-01',
            daysOverdue: 3,
            id: 'F-2023-001',
            location: 'Wien',
            locationId: 'wien',
            measures: 5,
            overdue: true,
            priority: 'Hoch',
            reason: 'Antwortfrist überschritten',
        },
        {
            customer: 'TechSolutions',
            customerId: 'techstart',
            date: '2023-04-05',
            daysOverdue: 2,
            id: 'F-2023-002',
            location: 'Graz',
            locationId: 'graz',
            measures: 3,
            overdue: true,
            priority: 'Hoch',
            reason: 'Antwortfrist überschritten',
        },
        {
            customer: 'Innovative Systems',
            customerId: 'innovative',
            date: '2023-04-10',
            daysOverdue: 0,
            id: 'F-2023-004',
            location: 'Salzburg',
            locationId: 'salzburg',
            measures: 2,
            overdue: false,
            priority: 'Hoch',
            reason: 'Hohe Priorität ohne Antwort',
        },
        {
            customer: 'Global Industries',
            customerId: 'globale',
            date: '2023-04-12',
            daysOverdue: 0,
            id: 'F-2023-007',
            location: 'Linz',
            locationId: 'linz',
            measures: 4,
            overdue: false,
            priority: 'Mittel',
            reason: 'Keine Antwort seit 5 Tagen',
        },
    ];

    const priorityData: PriorityData[] = [
        {
            color: 'bg-rose-400',
            count: 12,
            label: 'Hoch',
            percentage: 40,
        },
        {
            color: 'bg-amber-400',
            count: 24,
            label: 'Mittel',
            percentage: 70,
        },
        {
            color: 'bg-emerald-400',
            count: 30,
            label: 'Niedrig',
            percentage: 90,
        },
    ];

    const customerData: CustomerData[] = [
        { customer: 'Acme Corp', id: 'acme', implemented: 9, open: 9, overdue: 3, total: 18 },
        { customer: 'TechSolutions', id: 'techstart', implemented: 7, open: 7, overdue: 2, total: 14 },
        { customer: 'Global Industries', id: 'globale', implemented: 16, open: 6, overdue: 0, total: 22 },
    ];

    return {
        actionRequiredCases,
        customerData,
        priorityData,
        stats,
    };
};
