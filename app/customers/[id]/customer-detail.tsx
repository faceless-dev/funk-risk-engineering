'use client';

import { ActionButton } from '@/components/ui/action-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';
import { CasesTab } from './components/cases-tab';
import { CustomerDetailHeader } from './components/customer-detail-header';
import { CustomerStatistics } from './components/customer-statistics';
import { LocationsTab } from './components/locations-tab';
import { calculateCustomerStatistics, getCustomerDetailData } from './data/customer-detail-data';

interface CustomerDetailProps {
    id: string;
}

export default function CustomerDetail({ id }: CustomerDetailProps) {
    // Get customer data from our data provider
    const customer = getCustomerDetailData(id);

    // Calculate statistics
    const statistics = calculateCustomerStatistics(customer);

    return (
        <>
            <ActionButton
                icon={<Plus className="h-4 w-4 mr-2" />}
                id="create-case"
                label="Bericht erstellen"
                variant="default"
                onClick={() => alert('Creating new case...')}
            />

            <div className="flex flex-col gap-6">
                <CustomerDetailHeader customer={customer} />

                <CustomerStatistics statistics={statistics} />

                <Tabs className="w-full" defaultValue="locations">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="locations">Standorte ({customer.locations.length})</TabsTrigger>
                        <TabsTrigger value="cases">Berichte ({customer.cases.length})</TabsTrigger>
                    </TabsList>

                    <TabsContent className="mt-4" value="locations">
                        <LocationsTab customerId={id} locations={customer.locations} />
                    </TabsContent>

                    <TabsContent className="mt-4" value="cases">
                        <CasesTab cases={customer.cases} id={id} />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}
