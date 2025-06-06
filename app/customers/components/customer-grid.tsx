'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Building, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import type { Customer } from '../data/customers-data';

interface CustomerGridProps {
    customers: Customer[];
}

export function CustomerGrid({ customers }: CustomerGridProps) {
    if (customers.length === 0) {
        return (
            <div className="rounded-md border p-8 text-center">
                <p className="text-muted-foreground">Keine Kunden gefunden</p>
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {customers.map((customer) => (
                <Link
                    key={customer.id}
                    className="block transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                    href={`/customers/${customer.id}`}
                >
                    <Card className="h-full overflow-hidden border-muted hover:border-muted-foreground/20">
                        <CardContent className="p-0">
                            <div className="flex items-center justify-between border-b p-5">
                                <div className="min-w-0 flex-1">
                                    <div className="text-sm text-muted-foreground">#{customer.customerNumber}</div>
                                    <h2 className="text-lg font-semibold truncate">{customer.name}</h2>
                                    <p className="text-sm text-muted-foreground">Gruppe: {customer.group}</p>
                                </div>
                                <div
                                    className={`rounded-full p-1.5 bg-${customer.color === 'green' ? 'green' : customer.color === 'red' ? 'red' : 'blue'}-50 text-${customer.color === 'green' ? 'green' : customer.color === 'red' ? 'red' : 'blue'}-600 flex-shrink-0 ml-2`}
                                >
                                    <Building className="h-4 w-4" />
                                </div>
                            </div>

                            <div className="space-y-3 p-5">
                                <div className="flex items-center gap-2 text-sm">
                                    <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                    <span className="truncate">{customer.email}</span>
                                </div>
                                {customer.phone && (
                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                        <span className="truncate">{customer.phone}</span>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-3 border-t">
                                <div className="flex flex-col items-center justify-center border-r py-3 text-center">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4 text-blue-600" />
                                        <span className="text-base font-bold">{customer.locations}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground mt-0.5">Standorte</span>
                                </div>
                                <div className="flex flex-col items-center justify-center border-r py-3 text-center">
                                    <div className="flex items-center gap-1">
                                        <svg
                                            className="h-4 w-4 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                            <polyline points="14 2 14 8 20 8" />
                                        </svg>
                                        <span className="text-base font-bold">{customer.cases}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground mt-0.5">Berichte</span>
                                </div>
                                <div className="flex flex-col items-center justify-center py-3 text-center">
                                    <div className="flex items-center gap-1">
                                        <svg
                                            className={`h-4 w-4 ${
                                                customer.openMeasures === 0
                                                    ? 'text-green-600'
                                                    : customer.openMeasures > 5
                                                      ? 'text-red-600'
                                                      : 'text-blue-600'
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 8v4" />
                                            <path d="M12 16h.01" />
                                        </svg>
                                        <span className="text-base font-bold">{customer.openMeasures}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground mt-0.5">Offen</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
