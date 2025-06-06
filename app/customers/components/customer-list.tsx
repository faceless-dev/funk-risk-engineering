'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import type { Customer } from '../data/customers-data';

interface CustomerListProps {
    customers: Customer[];
}

export function CustomerList({ customers }: CustomerListProps) {
    if (customers.length === 0) {
        return (
            <div className="rounded-md border p-8 text-center">
                <p className="text-muted-foreground">Keine Kunden gefunden</p>
            </div>
        );
    }

    return (
        <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-2 p-4 font-medium text-sm bg-muted/50">
                <div className="col-span-3">Kunde</div>
                <div className="col-span-3">Kontakt</div>
                <div className="col-span-1 text-center">Standorte</div>
                <div className="col-span-1 text-center">Berichte</div>
                <div className="col-span-1 text-center">Offen</div>
                <div className="col-span-3 text-right">Aktionen</div>
            </div>
            {customers.map((customer) => (
                <div key={customer.id} className="grid grid-cols-12 gap-2 p-4 border-t items-center text-sm hover:bg-muted/50">
                    <div className="col-span-3">
                        <div className="flex items-center gap-2">
                            <div
                                className={`rounded-full p-1.5 bg-${customer.color === 'green' ? 'green' : customer.color === 'red' ? 'red' : 'blue'}-50 text-${customer.color === 'green' ? 'green' : customer.color === 'red' ? 'red' : 'blue'}-600 flex-shrink-0`}
                            >
                                <Building className="h-4 w-4" />
                            </div>
                            <div>
                                <Link className="font-medium hover:text-blue-600 hover:underline" href={`/customers/${customer.id}`}>
                                    {customer.name}
                                </Link>
                                <div className="text-xs text-muted-foreground">
                                    #{customer.customerNumber} • {customer.group}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                                <span className="text-xs truncate">{customer.email}</span>
                            </div>
                            {customer.phone && (
                                <div className="flex items-center gap-1">
                                    <Phone className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                                    <span className="text-xs truncate">{customer.phone}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-1 text-center">
                        <div className="flex items-center justify-center gap-1">
                            <MapPin className="h-3 w-3 text-blue-600" />
                            <span>{customer.locations}</span>
                        </div>
                    </div>
                    <div className="col-span-1 text-center">
                        <div className="flex items-center justify-center gap-1">
                            <svg
                                className="h-3 w-3 text-blue-600"
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
                            <span>{customer.cases}</span>
                        </div>
                    </div>
                    <div className="col-span-1 text-center">
                        <Badge
                            className={
                                customer.openMeasures === 0
                                    ? 'bg-green-100 text-green-800 hover:bg-green-100'
                                    : customer.openMeasures > 5
                                      ? 'bg-red-100 text-red-800 hover:bg-red-100'
                                      : 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                            }
                        >
                            {customer.openMeasures}
                        </Badge>
                    </div>
                    <div className="col-span-3 text-right">
                        <Button asChild size="sm" variant="outline">
                            <Link href={`/customers/${customer.id}`}>Details</Link>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
