import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Loading() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-10 w-40" />
            </div>

            <Tabs className="w-full" defaultValue="cases">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger disabled value="cases">
                        Case Reports
                    </TabsTrigger>
                    <TabsTrigger disabled value="customers">
                        Customer Reports
                    </TabsTrigger>
                </TabsList>

                <div className="mt-4 space-y-4">
                    <Skeleton className="h-[300px] w-full rounded-lg" />
                    <div className="grid gap-4 md:grid-cols-2">
                        <Skeleton className="h-[250px] w-full rounded-lg" />
                        <Skeleton className="h-[250px] w-full rounded-lg" />
                    </div>
                </div>
            </Tabs>
        </div>
    );
}
