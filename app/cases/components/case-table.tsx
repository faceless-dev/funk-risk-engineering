'use client';

import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { CaseItem } from '../data/cases-data';

interface CaseTableProps {
    activeTab: string;
    cases: CaseItem[];
}

export function CaseTable({ activeTab, cases }: CaseTableProps) {
    // Filter cases based on active tab
    const filteredCases =
        activeTab === 'all'
            ? cases
            : cases.filter((caseItem) => {
                  if (activeTab === 'open') return caseItem.status === 'Open';
                  if (activeTab === 'pending') return caseItem.status === 'Pending';
                  if (activeTab === 'completed') return caseItem.status === 'Completed';
                  return true;
              });

    if (filteredCases.length === 0) {
        return (
            <div className="rounded-md border p-8 text-center">
                <p className="text-muted-foreground">Keine Fälle gefunden</p>
            </div>
        );
    }

    return (
        <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-2 p-4 font-medium text-sm bg-muted/50">
                <div className="col-span-3">Fall</div>
                <div className="col-span-2">Kunde</div>
                <div className="col-span-2">Standort</div>
                <div className="col-span-1">Datum</div>
                <div className="col-span-1">Priorität</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2">Maßnahmen</div>
            </div>
            {filteredCases.map((caseItem) => (
                <div
                    key={caseItem.id}
                    className="grid grid-cols-12 gap-2 p-4 border-t items-center text-sm hover:bg-muted/50 cursor-pointer"
                    onClick={() => (window.location.href = `/cases/${caseItem.id}`)}
                >
                    <div className="col-span-3">
                        <Link className="font-medium text-blue-600 hover:underline" href={`/cases/${caseItem.id}`}>
                            {caseItem.id}: {caseItem.title}
                        </Link>
                    </div>
                    <div className="col-span-2 truncate">
                        <Link className="hover:underline text-blue-600" href={`/customers/${caseItem.customer.toLowerCase().replace(/\s+/g, '-')}`}>
                            {caseItem.customer}
                        </Link>
                    </div>
                    <div className="col-span-2 truncate">
                        <Link className="hover:underline" href={`/customers/${caseItem.customer.toLowerCase().replace(/\s+/g, '-')}/locations`}>
                            {caseItem.location}
                        </Link>
                    </div>
                    <div className="col-span-1">{caseItem.createdDate}</div>
                    <div className="col-span-1">
                        <Badge
                            className={
                                caseItem.priority === 'High'
                                    ? 'bg-red-100 text-red-800 hover:bg-red-100'
                                    : caseItem.priority === 'Medium'
                                      ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                                      : 'bg-green-100 text-green-800 hover:bg-green-100'
                            }
                        >
                            {caseItem.priority}
                        </Badge>
                    </div>
                    <div className="col-span-1">
                        <Badge
                            className={
                                caseItem.status === 'Open'
                                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                                    : caseItem.status === 'Pending'
                                      ? 'bg-purple-100 text-purple-800 hover:bg-purple-100'
                                      : 'bg-green-100 text-green-800 hover:bg-green-100'
                            }
                        >
                            {caseItem.status}
                        </Badge>
                    </div>
                    <div className="col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="text-sm">
                                {caseItem.openMeasures}/{caseItem.measures}
                            </div>
                            <div className="w-full max-w-24 bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{
                                        width: `${((caseItem.measures - caseItem.openMeasures) / caseItem.measures) * 100}%`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
