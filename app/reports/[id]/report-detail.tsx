'use client';

import { ActionButton } from '@/components/ui/action-button';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CaseDetailsCard } from './components/case-details-card';
import { MeasuresListCard } from './components/measures-list-card';
import { MeasuresSummaryCard } from './components/measures-summary-card';
import { PriorityDistributionChart } from './components/priority-distribution-chart';
import { ReportFooter } from './components/report-footer';
import { ReportHeader } from './components/report-header';
import { StatusDistributionChart } from './components/status-distribution-chart';
import { getReportData } from './data/report-data';

interface ReportDetailProps {
    id: string;
}

export default function ReportDetail({ id }: ReportDetailProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [reportData, setReportData] = useState<any>(null);
    const generatedDate = new Date().toLocaleDateString();

    // In a real app, you would fetch the report data based on the ID
    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setReportData(getReportData(id));
            setIsLoading(false);
        }, 500);
    }, [id]);

    // Register action buttons when data is loaded
    if (!isLoading && reportData) {
        return (
            <>
                <ActionButton
                    icon={<ArrowLeft className="h-4 w-4 mr-2" />}
                    id="back-to-reports"
                    label="Zurück zu Berichten"
                    variant="ghost"
                    onClick={() => router.back()}
                />
                <ActionButton
                    icon={<Printer className="h-4 w-4 mr-2" />}
                    id="print"
                    label="Drucken"
                    variant="outline"
                    onClick={() => window.print()}
                />
                <ActionButton
                    icon={<Download className="h-4 w-4 mr-2" />}
                    id="export-pdf"
                    label="PDF exportieren"
                    variant="default"
                    onClick={() => alert('Exporting PDF...')}
                />

                <div className="flex min-h-screen flex-col">
                    {/* Report content - this is what will be printed */}
                    <div className="mx-auto max-w-4xl p-6 print:p-0 print:max-w-none">
                        <div className="space-y-8">
                            {/* Report header */}
                            <ReportHeader generatedDate={generatedDate} />

                            {/* Case details */}
                            <CaseDetailsCard caseData={reportData} />

                            {/* Measures summary */}
                            <MeasuresSummaryCard measures={reportData.measures} />

                            {/* Measures list */}
                            <MeasuresListCard measures={reportData.measures} />

                            {/* Priority distribution chart */}
                            <PriorityDistributionChart measures={reportData.measures} />

                            {/* Status distribution chart */}
                            <StatusDistributionChart measures={reportData.measures} />

                            {/* Footer */}
                            <ReportFooter generatedDate={generatedDate} />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <div className="mb-4 text-3xl font-bold">Bericht wird generiert...</div>
                    <div className="text-muted-foreground">Bitte warten Sie, während wir Ihren Bericht generieren</div>
                </div>
            </div>
        );
    }

    return null;
}
