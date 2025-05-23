import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, CheckCircle2, Clock, FileText } from 'lucide-react';

interface LocationStatisticsProps {
    statistics: {
        cases: number;
        implementationRate: number;
        openMeasures: number;
        overdueCount: number;
        totalMeasures: number;
    };
}

export function LocationStatistics({ statistics }: LocationStatisticsProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card className="border-l-4 border-l-blue-400">
                <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Fälle</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-800">{statistics.cases}</div>
                    <p className="text-xs text-gray-500">Gesamt</p>
                </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-400">
                <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">Maßnahmen</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-800">{statistics.totalMeasures}</div>
                    <p className="text-xs text-gray-500">Gesamt</p>
                </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-400">
                <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Offen</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-800">{statistics.openMeasures}</div>
                    <p className="text-xs text-gray-500">Offene Maßnahmen</p>
                </CardContent>
            </Card>

            <Card className={`border-l-4 ${statistics.overdueCount > 0 ? 'border-l-rose-400' : 'border-l-gray-400'}`}>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className={`h-4 w-4 ${statistics.overdueCount > 0 ? 'text-rose-500' : 'text-gray-500'}`} />
                        <span className="text-sm font-medium">Überfällig</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-800">{statistics.overdueCount}</div>
                    <p className="text-xs text-gray-500">Überfällige Maßnahmen</p>
                </CardContent>
            </Card>

            <Card className="border-l-4 border-l-emerald-400">
                <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm font-medium">Umsetzung</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-800">{statistics.implementationRate}%</div>
                    <p className="text-xs text-gray-500">Umsetzungsrate</p>
                </CardContent>
            </Card>
        </div>
    );
}
