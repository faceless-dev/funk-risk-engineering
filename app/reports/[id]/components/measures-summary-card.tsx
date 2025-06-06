import { Card, CardContent } from '@/components/ui/card';
import type { Measure } from '../data/report-data';

interface MeasuresSummaryCardProps {
    measures: Measure[];
}

export function MeasuresSummaryCard({ measures }: MeasuresSummaryCardProps) {
    const completedMeasures = measures.filter((m) => m.status === 'Completed').length;
    const completionRate = Math.round((completedMeasures / measures.length) * 100);

    return (
        <div>
            <h2 className="text-2xl font-bold">Maßnahmenübersicht</h2>
            <div className="mt-4 grid grid-cols-3 gap-4">
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold">{measures.length}</div>
                        <div className="text-sm text-muted-foreground">Gesamt</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold">{completedMeasures}</div>
                        <div className="text-sm text-muted-foreground">Abgeschlossen</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold">{completionRate}%</div>
                        <div className="text-sm text-muted-foreground">Umsetzungsrate</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
