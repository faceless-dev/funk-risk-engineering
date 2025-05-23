'use client';

import { ActionButton } from '@/components/ui/action-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText } from 'lucide-react';
import { useState } from 'react';
import { CaseDescriptionCard } from './components/case-description-card';
import { CaseHeader } from './components/case-header';
import { CaseInfoCard } from './components/case-info-card';
import { FilesTab } from './components/files-tab';
import { HistoryTab } from './components/history-tab';
import { MeasuresTab } from './components/measures-tab';
import { getCaseData, getCaseFiles, getCaseHistory } from './data/case-data';

interface CaseDetailProps {
    id: string;
}

export default function CaseDetail({ id }: CaseDetailProps) {
    const [activeTab, setActiveTab] = useState('measures');

    // Get case data from our data provider
    const caseData = getCaseData(id);
    const history = getCaseHistory();
    const { customerUploads, employeeUploads } = getCaseFiles();

    // Extract customer ID and location ID from the case data
    // In a real app, these would be properly stored in the case data
    const customerId = caseData.customer.toLowerCase().replace(/\s+/g, '-');
    const locationId = caseData.location.toLowerCase().split(' ')[0];

    return (
        <>
            {/* Register action buttons */}
            <ActionButton
                href={`/reports/${caseData.id}`}
                icon={<FileText className="h-4 w-4 mr-2" />}
                id="generate-report"
                label="Generate Report"
                variant="outline"
            />
            <ActionButton
                className="bg-green-600 hover:bg-green-700"
                icon={
                    <svg
                        className="h-4 w-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                    </svg>
                }
                id="send-to-customer"
                label="Send to Customer"
                variant="default"
                onClick={() => alert('Sending to customer...')}
            />

            <div className="flex flex-col gap-6">
                {/* Case Header */}
                <CaseHeader createdDate={caseData.createdDate} id={caseData.id} name={caseData.name} status={caseData.status} />

                {/* Case Info Card */}
                <CaseInfoCard customer={caseData.customer} customerId={customerId} location={caseData.location} locationId={locationId} />

                {/* Case Description Card */}
                <CaseDescriptionCard description={caseData.description} />

                {/* Tabs for measures, history, and files */}
                <Tabs className="w-full" defaultValue="measures" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="measures">Measures</TabsTrigger>
                        <TabsTrigger value="history">History</TabsTrigger>
                        <TabsTrigger value="files">Files</TabsTrigger>
                    </TabsList>

                    <TabsContent className="mt-4" value="measures">
                        <MeasuresTab measures={caseData.measures} />
                    </TabsContent>

                    <TabsContent className="mt-4" value="history">
                        <HistoryTab history={history} />
                    </TabsContent>

                    <TabsContent className="mt-4" value="files">
                        <FilesTab customerUploads={customerUploads} employeeUploads={employeeUploads} />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}
