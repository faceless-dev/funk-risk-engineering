import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import type { Measure } from '../data/report-data';

interface MeasuresListCardProps {
    measures: Measure[];
}

export function MeasuresListCard({ measures }: MeasuresListCardProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold">Alle Maßnahmen</h2>
            <Card className="mt-4">
                <CardContent className="p-0">
                    <div className="grid grid-cols-4 gap-4 border-b p-4 font-medium">
                        <div>Maßnahme</div>
                        <div>Priorität</div>
                        <div>Status</div>
                        <div>Fälligkeit</div>
                    </div>

                    {measures.map((measure) => (
                        <div key={measure.id} className="grid grid-cols-4 gap-4 border-b p-4 last:border-0">
                            <div>
                                <Link className="hover:underline text-blue-600" href={`/cases/${measure.id}/measures/${measure.id}`}>
                                    {measure.title}
                                </Link>
                            </div>
                            <div>{measure.priority}</div>
                            <div>{measure.status}</div>
                            <div>{measure.deadline}</div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
