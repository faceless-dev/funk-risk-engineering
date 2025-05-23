import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface Case {
    date: string;
    id: string;
    location: string;
    measures: number;
    openMeasures: number;
    status: string;
    title: string;
}

interface CasesTabProps {
    cases: Case[];
    id: string;
}

export function CasesTab({ cases, id }: CasesTabProps) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="space-y-6">
                    {cases.map((caseItem) => (
                        <div
                            key={caseItem.id}
                            className="flex flex-col md:flex-row md:items-center justify-between border-b pb-6 last:border-0 last:pb-0 gap-4"
                        >
                            <div>
                                <h3 className="font-medium text-lg">
                                    <Link className="hover:underline" href={`/cases/${caseItem.id}`}>
                                        {caseItem.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    <Link className="hover:underline" href={`/customers/${id}/locations`}>
                                        {caseItem.location}
                                    </Link>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-sm font-medium px-3 py-1 rounded-full">{caseItem.status}</div>
                                <Button variant="outline">Details</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
