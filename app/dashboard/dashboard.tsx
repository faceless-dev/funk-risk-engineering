"use client"

import { AlertCircle, BarChart3, CheckCircle2, Clock } from "lucide-react"
import { StatCard } from "@/app/dashboard/components/stat-card"
import { ActionRequiredCard } from "@/app/dashboard/components/action-required-card"
import { PriorityMetricsCard } from "@/app/dashboard/components/priority-metrics-card"
import { CustomerStatusCard } from "@/app/dashboard/components/customer-status-card"
import { getDashboardData } from "@/app/dashboard/data/dashboard-data"
import { FadeIn, SlideUp, Stagger, StaggerItem } from "@/components/animations/motion"

export default function Dashboard() {
  // Get all dashboard data from our data provider
  const { stats, actionRequiredCases, priorityData, customerData } = getDashboardData()

  return (
    <FadeIn className="flex flex-col gap-5 pt-6">
      {/* Key Metrics Cards */}
      <Stagger className="grid gap-4 md:grid-cols-4" staggerDelay={0.1}>
        <StaggerItem>
          <StatCard
            title="Handlungen notwendig"
            value={stats.actionRequired}
            description="Fälle erfordern Ihre Aufmerksamkeit"
            icon={<AlertCircle className="h-4 w-4" />}
            borderColor="border-l-rose-400"
            iconColor="text-rose-500"
            linkTo="/cases?status=open"
          />
        </StaggerItem>
        <StaggerItem>
          <StatCard
            title="Überfällige Antworten"
            value={stats.overdueResponses}
            description="Kunden haben Frist versäumt"
            icon={<Clock className="h-4 w-4" />}
            borderColor="border-l-amber-400"
            iconColor="text-amber-500"
            linkTo="/cases?overdue=true"
          />
        </StaggerItem>
        <StaggerItem>
          <StatCard
            title="Hohe Priorität"
            value={stats.highPriorityMeasures}
            description="Maßnahmen mit hoher Priorität"
            icon={<BarChart3 className="h-4 w-4" />}
            borderColor="border-l-blue-400"
            iconColor="text-blue-500"
            linkTo="/cases?priority=high"
          />
        </StaggerItem>
        <StaggerItem>
          <StatCard
            title="Umsetzungsrate"
            value={`${stats.implementationRate}%`}
            description="Maßnahmen wurden umgesetzt"
            icon={<CheckCircle2 className="h-4 w-4" />}
            borderColor="border-l-emerald-400"
            iconColor="text-emerald-500"
            linkTo="/reports"
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
            priorityData={priorityData}
            totalMeasures={stats.totalMeasures}
            openMeasures={stats.openMeasures}
            implementationRate={stats.implementationRate}
          />
        </SlideUp>

        {/* Customer Implementation Performance */}
        <SlideUp delay={0.4}>
          <CustomerStatusCard customers={customerData} totalCustomers={stats.totalCustomers} />
        </SlideUp>
      </div>
    </FadeIn>
  )
}

