'use client';

import { ActionButton } from '@/components/ui/action-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Plus } from 'lucide-react';
import { useState } from 'react';
import { LocationCasesTab } from './components/location-cases-tab';
import { LocationDetailHeader } from './components/location-detail-header';
import { LocationInfoTab } from './components/location-info-tab';
import { LocationMeasuresTab } from './components/location-measures-tab';
import { LocationStatistics } from './components/location-statistics';
import { getLocationData } from './data/location-data';

interface LocationDetailProps {
    customerId: string;
    locationId: string;
}

export default function LocationDetail({ customerId, locationId }: LocationDetailProps) {
    const [activeTab, setActiveTab] = useState('cases');

    // Get location data from our data provider
    const location = getLocationData(customerId, locationId);

    // Calculate statistics
    const totalMeasures = location.cases.reduce((sum, c) => sum + c.measures, 0);
    const openMeasures = location.cases.reduce((sum, c) => sum + c.openMeasures, 0);
    const implementationRate = totalMeasures > 0 ? Math.round(((totalMeasures - openMeasures) / totalMeasures) * 100) : 0;
    const overdueCount = location.cases.reduce((sum, c) => sum + (c.overdue ? 1 : 0), 0);

    const statistics = {
        cases: location.cases.length,
        implementationRate,
        openMeasures,
        overdueCount,
        totalMeasures,
    };

    return (
        <>
            {/* Register action buttons */}
            <ActionButton
                icon={<Plus className="h-4 w-4 mr-2" />}
                id="create-case"
                label="Fall erstellen"
                variant="default"
                onClick={() => alert(`Creating new case for ${location.name}...`)}
            />
            <ActionButton
                icon={<FileText className="h-4 w-4 mr-2" />}
                id="generate-report"
                label="Standortbericht"
                variant="outline"
                onClick={() => alert(`Generating report for ${location.name}...`)}
            />

            <div className="flex flex-col gap-6">
                <LocationDetailHeader location={location} />

                <LocationStatistics statistics={statistics} />

                <Tabs className="w-full" defaultValue="cases" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="cases">Fälle ({location.cases.length})</TabsTrigger>
                        <TabsTrigger value="measures">Maßnahmen ({totalMeasures})</TabsTrigger>
                        <TabsTrigger value="info">Standortinformationen</TabsTrigger>
                    </TabsList>

                    <TabsContent className="mt-4" value="cases">
                        <LocationCasesTab cases={location.cases} customerId={customerId} locationId={locationId} />
                    </TabsContent>

                    <TabsContent className="mt-4" value="measures">
                        <LocationMeasuresTab customerId={customerId} location={location} locationId={locationId} />
                    </TabsContent>

                    <TabsContent className="mt-4" value="info">
                        <LocationInfoTab details={location.details} />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}
