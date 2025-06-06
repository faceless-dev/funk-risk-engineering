import { Card, CardContent } from '@/components/ui/card';

interface CustomerStatisticsProps {
    statistics: {
        cases: number;
        implementationRate: number;
        locations: number;
        totalMeasures: number;
    };
}

export function CustomerStatistics({ statistics }: CustomerStatisticsProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
                <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">{statistics.locations}</div>
                    <div className="text-sm text-muted-foreground">Standorte</div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">{statistics.cases}</div>
                    <div className="text-sm text-muted-foreground">Berichte</div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">{statistics.totalMeasures}</div>
                    <div className="text-sm text-muted-foreground">Maßnahmen</div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">{statistics.implementationRate}%</div>
                    <div className="text-sm text-muted-foreground">Umsetzungsrate</div>
                </CardContent>
            </Card>
        </div>
    );
}
