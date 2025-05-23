import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';
import Link from 'next/link';

interface CustomerReport {
    date: string;
    id: string;
    title: string;
    type: string;
}

interface CustomerReportsListProps {
    reports: CustomerReport[];
}

export function CustomerReportsList({ reports }: CustomerReportsListProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Kundenberichte</CardTitle>
                <CardDescription>Berichte zu Kunden und deren Risikobewertungen</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {reports.map((report) => (
                        <div key={report.id} className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-blue-600" />
                                <div>
                                    <div className="font-medium">
                                        <Link className="hover:text-blue-600 hover:underline" href={`/reports/${report.id}`}>
                                            {report.title}
                                        </Link>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Erstellt am {report.date} • {report.type}bericht
                                    </div>
                                </div>
                            </div>
                            <Button asChild className="gap-1" size="sm" variant="outline">
                                <Link href={`/reports/${report.id}`}>
                                    <Download className="h-4 w-4" />
                                    PDF
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
