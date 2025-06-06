'use client';

import { ActionButton } from '@/components/ui/action-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusSquare } from 'lucide-react';
import { useState } from 'react';
import { CaseFilters } from './components/case-filters';
import { CaseTable } from './components/case-table';
import { getCasesData } from './data/cases-data';

export default function Cases() {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Get cases data
    const allCases = getCasesData();

    // Filter cases based on search query
    const filteredCases = searchQuery
        ? allCases.filter(
              (caseItem) =>
                  caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  caseItem.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  caseItem.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  caseItem.location.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : allCases;

    return (
        <>
            <ActionButton
                icon={<PlusSquare className="h-4 w-4 mr-2" />}
                id="new-case"
                label="Neuer Bericht"
                variant="default"
                onClick={() => alert('Creating new case...')}
            />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Berichte</h1>
                </div>

                <CaseFilters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                <Tabs className="w-full" defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-4 mb-4">
                        <TabsTrigger value="all">Alle</TabsTrigger>
                        <TabsTrigger value="open">Offen</TabsTrigger>
                        <TabsTrigger value="pending">In Bearbeitung</TabsTrigger>
                        <TabsTrigger value="completed">Abgeschlossen</TabsTrigger>
                    </TabsList>

                    <TabsContent className="space-y-4" value="all">
                        <CaseTable activeTab="all" cases={filteredCases} />
                    </TabsContent>

                    <TabsContent className="space-y-4" value="open">
                        <CaseTable activeTab="open" cases={filteredCases} />
                    </TabsContent>

                    <TabsContent className="space-y-4" value="pending">
                        <CaseTable activeTab="pending" cases={filteredCases} />
                    </TabsContent>

                    <TabsContent className="space-y-4" value="completed">
                        <CaseTable activeTab="completed" cases={filteredCases} />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}
