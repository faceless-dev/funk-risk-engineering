'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CaseReportsList } from './components/case-reports-list';
import { CustomerReportsList } from './components/customer-reports-list';
import { getReportsData } from './data/reports-data';

export default function Reports() {
    // Get reports data
    const { caseReports, chartData, customerReports } = getReportsData();

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Berichte</h1>
            </div>

            <Tabs className="w-full" defaultValue="cases">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="cases">Fallberichte</TabsTrigger>
                    <TabsTrigger value="customers">Kundenberichte</TabsTrigger>
                </TabsList>

                <TabsContent className="mt-4" value="cases">
                    <CaseReportsList reports={caseReports} />
                </TabsContent>

                <TabsContent className="mt-4" value="customers">
                    <CustomerReportsList reports={customerReports} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
