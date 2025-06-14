import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import type { ReportData } from '../data/report-data';

interface CaseDetailsCardProps {
    caseData: ReportData;
}

export function CaseDetailsCard({ caseData }: CaseDetailsCardProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold">Berichtdetails: {caseData.id}</h2>
            <Card className="mt-4">
                <CardContent className="grid gap-4 p-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-sm font-medium">Name</div>
                            <div className="text-lg">{caseData.name}</div>
                        </div>
                        <div>
                            <div className="text-sm font-medium">Status</div>
                            <div className="text-lg">{caseData.status}</div>
                        </div>
                        <div>
                            <div className="text-sm font-medium">Kunde</div>
                            <div className="text-lg">
                                <Link
                                    className="hover:underline text-blue-600"
                                    href={`/customers/${caseData.customer.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                    {caseData.customer}
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm font-medium">Standort</div>
                            <div className="text-lg">
                                <Link
                                    className="hover:underline text-blue-600"
                                    href={`/customers/${caseData.customer.toLowerCase().replace(/\s+/g, '-')}/locations`}
                                >
                                    {caseData.location}
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm font-medium">Erstellt am</div>
                            <div className="text-lg">{caseData.createdDate}</div>
                        </div>
                        <div>
                            <div className="text-sm font-medium">Zuletzt aktualisiert</div>
                            <div className="text-lg">{caseData.lastUpdated}</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-medium">Beschreibung</div>
                        <div className="text-lg">{caseData.description}</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
