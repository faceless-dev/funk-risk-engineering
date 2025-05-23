import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CustomerLoading() {
    return (
        <div className="flex flex-col gap-6">
            {/* Customer Header */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <Skeleton className="h-8 w-8 rounded-md" />
                        <div>
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-5 rounded-full" />
                                <Skeleton className="h-8 w-48" />
                            </div>
                            <Skeleton className="h-4 w-32 mt-1" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:items-end">
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4 rounded-full" />
                            <Skeleton className="h-4 w-32" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4 rounded-full" />
                            <Skeleton className="h-4 w-40" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4 rounded-full" />
                            <Skeleton className="h-4 w-36" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-4 text-center">
                        <Skeleton className="h-8 w-8 mx-auto mb-1" />
                        <Skeleton className="h-4 w-16 mx-auto" />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <Skeleton className="h-8 w-8 mx-auto mb-1" />
                        <Skeleton className="h-4 w-16 mx-auto" />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <Skeleton className="h-8 w-8 mx-auto mb-1" />
                        <Skeleton className="h-4 w-16 mx-auto" />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <Skeleton className="h-8 w-8 mx-auto mb-1" />
                        <Skeleton className="h-4 w-16 mx-auto" />
                    </CardContent>
                </Card>
            </div>

            {/* Tabs */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <Tabs>
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger disabled value="locations">
                                Locations
                            </TabsTrigger>
                            <TabsTrigger disabled value="cases">
                                Cases
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Skeleton className="h-10 w-32" />
                </div>

                <Card>
                    <CardContent className="p-6">
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="flex flex-col md:flex-row md:items-center justify-between border-b pb-6 last:border-0 last:pb-0 gap-4"
                                >
                                    <div className="flex gap-4">
                                        <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-5 w-48" />
                                            <Skeleton className="h-4 w-64" />
                                            <div className="mt-2 flex flex-col md:flex-row gap-6">
                                                <Skeleton className="h-4 w-40" />
                                                <Skeleton className="h-4 w-32" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Skeleton className="h-6 w-24 rounded-full" />
                                        <Skeleton className="h-9 w-24" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
