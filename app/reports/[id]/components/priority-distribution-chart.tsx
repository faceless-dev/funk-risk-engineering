import { Card, CardContent } from '@/components/ui/card';
import type { Measure } from '../data/report-data';

interface PriorityDistributionChartProps {
    measures: Measure[];
}

export function PriorityDistributionChart({ measures }: PriorityDistributionChartProps) {
    const highPriority = measures.filter((m) => m.priority === 'High').length;
    const mediumPriority = measures.filter((m) => m.priority === 'Medium').length;
    const lowPriority = measures.filter((m) => m.priority === 'Low').length;

    return (
        <div>
            <h2 className="text-2xl font-bold">Priority Distribution</h2>
            <Card className="mt-4">
                <CardContent className="p-6">
                    <div className="flex h-64 items-end justify-around gap-4">
                        <div className="flex w-1/3 flex-col items-center">
                            <div
                                className="w-full rounded-t-lg bg-red-500"
                                style={{
                                    height: `${(highPriority / measures.length) * 100 * 2}px`,
                                }}
                            />
                            <div className="mt-2 text-sm">High ({highPriority})</div>
                        </div>
                        <div className="flex w-1/3 flex-col items-center">
                            <div
                                className="w-full rounded-t-lg bg-yellow-500"
                                style={{
                                    height: `${(mediumPriority / measures.length) * 100 * 2}px`,
                                }}
                            />
                            <div className="mt-2 text-sm">Medium ({mediumPriority})</div>
                        </div>
                        <div className="flex w-1/3 flex-col items-center">
                            <div
                                className="w-full rounded-t-lg bg-green-500"
                                style={{
                                    height: `${(lowPriority / measures.length) * 100 * 2}px`,
                                }}
                            />
                            <div className="mt-2 text-sm">Low ({lowPriority})</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
