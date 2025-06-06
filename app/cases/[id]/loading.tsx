import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';

export default function CaseLoading() {
    return (
        <div className="flex flex-col gap-6">
            {/* Case Header with Actions */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="flex items-start gap-3">
                            <Skeleton className="h-8 w-8 rounded-md" />
                            <div>
                                <Skeleton className="h-8 w-64 mb-2" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                        </div>
                    </div>
                    <Skeleton className="h-5 w-36" />
                </div>
            </div>

            {/* Location and Customer Section */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                        Lade Berichtdetails...
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 grid grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-4 w-48" />
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Case Description Section */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-9 w-16" />
                </CardHeader>
                <CardContent className="p-6">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[95%]" />
                        <Skeleton className="h-4 w-[90%]" />
                    </div>
                </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs className="w-full" defaultValue="measures">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger disabled value="measures">
                        Maßnahmen
                    </TabsTrigger>
                    <TabsTrigger disabled value="history">
                        Verlauf
                    </TabsTrigger>
                    <TabsTrigger disabled value="files">
                        Dateien
                    </TabsTrigger>
                </TabsList>
                <div className="mt-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <div className="space-y-1.5">
                                <Skeleton className="h-6 w-32" />
                                <Skeleton className="h-4 w-48" />
                            </div>
                            <Skeleton className="h-10 w-32" />
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="rounded-lg border p-4">
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <Skeleton className="h-5 w-48" />
                                                    <Skeleton className="h-5 w-16 rounded-full" />
                                                    <Skeleton className="h-5 w-16 rounded-full" />
                                                </div>
                                                <Skeleton className="h-4 w-32" />
                                            </div>
                                            <Skeleton className="h-9 w-16" />
                                        </div>
                                        <div className="my-2 h-px bg-border" />
                                        <Skeleton className="h-4 w-full" />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Tabs>
        </div>
    );
}
