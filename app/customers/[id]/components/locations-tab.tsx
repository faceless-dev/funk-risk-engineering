'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

interface Location {
    address: string;
    caseCount: number;
    contact: {
        email: string;
        phone: string;
    };
    id: string;
    name: string;
}

interface LocationsTabProps {
    customerId: string;
    locations: Location[];
}

export function LocationsTab({ customerId, locations }: LocationsTabProps) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="space-y-6">
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className="flex flex-col md:flex-row md:items-center justify-between border-b pb-6 last:border-0 last:pb-0 gap-4"
                        >
                            <div className="flex gap-4">
                                <div className="bg-blue-50 rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">
                                        <Link className="hover:underline" href={`/customers/${customerId}/locations/${location.id}`}>
                                            {location.name}
                                        </Link>
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">{location.address}</p>

                                    <div className="mt-4 flex flex-col md:flex-row gap-6">
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm">{location.contact.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm">{location.contact.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div
                                    className={`text-sm font-medium px-3 py-1 rounded-full ${location.caseCount > 0 ? 'bg-blue-50 text-blue-700 cursor-pointer hover:bg-blue-100' : 'bg-gray-100 text-gray-700'}`}
                                    onClick={
                                        location.caseCount > 0
                                            ? () => (window.location.href = `/customers/${customerId}/locations/${location.id}`)
                                            : undefined
                                    }
                                >
                                    {location.caseCount} {location.caseCount === 1 ? 'Fall' : 'Fälle'}
                                </div>
                                <Button asChild variant="outline">
                                    <Link href={`/customers/${customerId}/locations/${location.id}`}>Details</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
