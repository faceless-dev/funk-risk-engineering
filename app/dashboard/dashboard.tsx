'use client';

import { ActionRequiredCard } from '@/app/dashboard/components/action-required-card';
import { CustomerStatusCard } from '@/app/dashboard/components/customer-status-card';
import { PriorityMetricsCard } from '@/app/dashboard/components/priority-metrics-card';
import { StatCard } from '@/app/dashboard/components/stat-card';
import { getDashboardData } from '@/app/dashboard/data/dashboard-data';
import { FadeIn, SlideUp, Stagger, StaggerItem } from '@/components/animations/motion';
import { AlertCircle, BarChart3, CheckCircle2, Clock } from 'lucide-react';

export default function Dashboard() {
    // Get all dashboard data from our data provider
    const { actionRequiredCases, customerData, priorityData, stats } = getDashboardData();

    return (
        <FadeIn className="flex flex-col gap-5 pt-6">
            {/* Key Metrics Cards */}
            <Stagger className="grid gap-4 md:grid-cols-4" staggerDelay={0.1}>
                <StaggerItem>
                    <StatCard
                        borderColor="border-l-rose-400"
                        description="Fälle erfordern Ihre Aufmerksamkeit"
                        icon={<AlertCircle className="h-4 w-4" />}
                        iconColor="text-rose-500"
                        linkTo="/cases?status=open"
                        title="Handlungen notwendig"
                        value={stats.actionRequired}
                    />
                </StaggerItem>
                <StaggerItem>
                    <StatCard
                        borderColor="border-l-amber-400"
                        description="Kunden haben Frist versäumt"
                        icon={<Clock className="h-4 w-4" />}
                        iconColor="text-amber-500"
                        linkTo="/cases?overdue=true"
                        title="Überfällige Antworten"
                        value={stats.overdueResponses}
                    />
                </StaggerItem>
                <StaggerItem>
                    <StatCard
                        borderColor="border-l-blue-400"
                        description="Maßnahmen mit hoher Priorität"
                        icon={<BarChart3 className="h-4 w-4" />}
                        iconColor="text-blue-500"
                        linkTo="/cases?priority=high"
                        title="Hohe Priorität"
                        value={stats.highPriorityMeasures}
                    />
                </StaggerItem>
                <StaggerItem>
                    <StatCard
                        borderColor="border-l-emerald-400"
                        description="Maßnahmen wurden umgesetzt"
                        icon={<CheckCircle2 className="h-4 w-4" />}
                        iconColor="text-emerald-500"
                        linkTo="/reports"
                        title="Umsetzungsrate"
                        value={`${stats.implementationRate}%`}
                    />
                </StaggerItem>
            </Stagger>

            {/* Cases requiring action */}
            <SlideUp delay={0.2}>
                <ActionRequiredCard cases={actionRequiredCases} />
            </SlideUp>

            {/* Second row with two cards side by side */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Measure Implementation Status by Priority */}
                <SlideUp delay={0.3}>
                    <PriorityMetricsCard
                        implementationRate={stats.implementationRate}
                        openMeasures={stats.openMeasures}
                        priorityData={priorityData}
                        totalMeasures={stats.totalMeasures}
                    />
                </SlideUp>

                {/* Customer Implementation Performance */}
                <SlideUp delay={0.4}>
                    <CustomerStatusCard customers={customerData} totalCustomers={stats.totalCustomers} />
                </SlideUp>
            </div>
        </FadeIn>
    );
}
