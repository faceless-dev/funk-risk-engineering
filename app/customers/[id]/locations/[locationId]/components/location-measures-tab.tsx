'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import type { LocationData } from '../data/location-data';
import { getLocationMeasures } from '../data/location-data';

interface LocationMeasuresTabProps {
    customerId: string;
    location: LocationData;
    locationId: string;
}

export function LocationMeasuresTab({ customerId, location, locationId }: LocationMeasuresTabProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const measures = getLocationMeasures(customerId, locationId);

    // Filter measures based on search query
    const filteredMeasures = searchQuery
        ? measures.filter(
              (measure) =>
                  measure.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  measure.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  measure.caseName.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : measures;

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Maßnahmen</CardTitle>
                    <CardDescription>Alle Maßnahmen für diesen Standort</CardDescription>
                </div>
                <div className="relative w-[250px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-8" placeholder="Maßnahmen suchen..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <div className="space-y-4">
                    {filteredMeasures.map((measure) => (
                        <div key={measure.id} className={`rounded-lg border p-4 ${measure.overdue ? 'bg-red-50/50 border-red-200' : ''}`}>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-medium">
                                            <Link className="hover:underline" href={`/cases/${measure.caseId}/measures/${measure.id}`}>
                                                {measure.title}
                                            </Link>
                                        </h3>
                                        <Badge
                                            className={
                                                measure.priority === 'Hoch'
                                                    ? 'bg-red-100 text-red-800 hover:bg-red-100'
                                                    : measure.priority === 'Mittel'
                                                      ? 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                                                      : 'bg-green-100 text-green-800 hover:bg-green-100'
                                            }
                                        >
                                            {measure.priority}
                                        </Badge>
                                        <Badge
                                            className={
                                                measure.status === 'Offen'
                                                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                                                    : measure.status === 'In Bearbeitung'
                                                      ? 'bg-purple-100 text-purple-800 hover:bg-purple-100'
                                                      : 'bg-green-100 text-green-800 hover:bg-green-100'
                                            }
                                        >
                                            {measure.status}
                                        </Badge>
                                        {measure.overdue && (
                                            <Badge className="text-red-600 border-red-200" variant="outline">
                                                {measure.daysOverdue} {measure.daysOverdue === 1 ? 'Tag' : 'Tage'} überfällig
                                            </Badge>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Fall:{' '}
                                        <Link className="hover:underline text-blue-600" href={`/cases/${measure.caseId}`}>
                                            {measure.caseName}
                                        </Link>{' '}
                                        • Frist: {measure.deadline}
                                    </p>
                                    <p className="text-sm mt-2">{measure.description}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Button asChild size="sm" variant="outline">
                                        <Link href={`/cases/${measure.caseId}/measures/${measure.id}`}>Details</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredMeasures.length === 0 && (
                        <div className="text-center py-6 text-muted-foreground">
                            {searchQuery ? 'Keine Maßnahmen gefunden' : 'Keine Maßnahmen für diesen Standort'}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
