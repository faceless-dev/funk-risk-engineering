import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Loading() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-48" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="space-y-1">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-64" />
                </div>
                <Skeleton className="h-10 w-[300px]" />
            </div>

            <Tabs className="w-full" defaultValue="all">
                <TabsList className="grid w-full grid-cols-4 mb-4">
                    <TabsTrigger disabled value="all">
                        All
                    </TabsTrigger>
                    <TabsTrigger disabled value="open">
                        Open
                    </TabsTrigger>
                    <TabsTrigger disabled value="pending">
                        In Progress
                    </TabsTrigger>
                    <TabsTrigger disabled value="completed">
                        Completed
                    </TabsTrigger>
                </TabsList>

                <Card>
                    <CardHeader className="p-4 bg-muted/50">
                        <div className="grid grid-cols-12 gap-2 font-medium text-sm">
                            <Skeleton className="h-4 w-full col-span-3" />
                            <Skeleton className="h-4 w-full col-span-2" />
                            <Skeleton className="h-4 w-full col-span-2" />
                            <Skeleton className="h-4 w-full col-span-1" />
                            <Skeleton className="h-4 w-full col-span-1" />
                            <Skeleton className="h-4 w-full col-span-1" />
                            <Skeleton className="h-4 w-full col-span-2" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="grid grid-cols-12 gap-2 p-4 border-t items-center">
                                <Skeleton className="h-5 w-full col-span-3" />
                                <Skeleton className="h-4 w-full col-span-2" />
                                <Skeleton className="h-4 w-full col-span-2" />
                                <Skeleton className="h-4 w-full col-span-1" />
                                <Skeleton className="h-6 w-16 rounded-full col-span-1" />
                                <Skeleton className="h-6 w-16 rounded-full col-span-1" />
                                <Skeleton className="h-4 w-full col-span-2" />
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </Tabs>
        </div>
    );
}
