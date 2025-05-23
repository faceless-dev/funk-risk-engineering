import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import type { Case } from '../data/location-data';

interface LocationCasesTabProps {
    cases: Case[];
    customerId: string;
    locationId: string;
}

export function LocationCasesTab({ cases, customerId, locationId }: LocationCasesTabProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Fälle</CardTitle>
                <CardDescription>Alle Risikobewertungsfälle für diesen Standort</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <div className="space-y-6">
                    {cases.map((caseItem) => (
                        <div
                            key={caseItem.id}
                            className={`flex flex-col md:flex-row md:items-center justify-between border-b pb-6 last:border-0 last:pb-0 gap-4 ${
                                caseItem.overdue ? 'bg-red-50/50 rounded-lg p-4 -mx-4' : ''
                            }`}
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-medium text-lg">
                                        <Link className="hover:underline" href={`/cases/${caseItem.id}`}>
                                            {caseItem.title}
                                        </Link>
                                    </h3>
                                    <Badge
                                        className={
                                            caseItem.priority === 'Hoch'
                                                ? 'bg-red-100 text-red-800 hover:bg-red-100'
                                                : caseItem.priority === 'Mittel'
                                                  ? 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                                                  : 'bg-green-100 text-green-800 hover:bg-green-100'
                                        }
                                    >
                                        {caseItem.priority}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Erstellt am: {caseItem.date} • Fall #{caseItem.id.split('-')[2]}
                                </p>
                                {caseItem.overdue && (
                                    <p className="text-sm text-red-600 font-medium mt-1">
                                        {caseItem.daysOverdue} {caseItem.daysOverdue === 1 ? 'Tag' : 'Tage'} überfällig
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center gap-4">
                                <Badge
                                    className={
                                        caseItem.status === 'Offen'
                                            ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                                            : caseItem.status === 'In Bearbeitung'
                                              ? 'bg-purple-100 text-purple-800 hover:bg-purple-100'
                                              : 'bg-green-100 text-green-800 hover:bg-green-100'
                                    }
                                >
                                    {caseItem.status}
                                </Badge>
                                <div className="flex items-center gap-2">
                                    <div className="text-sm">
                                        {caseItem.openMeasures}/{caseItem.measures} Maßnahmen
                                    </div>
                                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full"
                                            style={{
                                                width: `${((caseItem.measures - caseItem.openMeasures) / caseItem.measures) * 100}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                                <Button asChild size="sm" variant="outline">
                                    <Link href={`/cases/${caseItem.id}`}>Details</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                    {cases.length === 0 && <div className="text-center py-6 text-muted-foreground">Keine Fälle für diesen Standort gefunden</div>}
                </div>
            </CardContent>
        </Card>
    );
}
