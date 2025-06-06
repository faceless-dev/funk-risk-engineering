'use client';

import { Stagger, StaggerItem } from '@/components/animations/motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Filter, Search } from 'lucide-react';
import Link from 'next/link';

interface CaseItem {
    customer: string;
    customerId: string;
    date: string;
    daysOverdue: number;
    id: string;
    location: string;
    locationId: string;
    measures: number;
    overdue: boolean;
    priority: string;
    reason: string;
}

interface ActionRequiredCardProps {
    cases: CaseItem[];
}

export function ActionRequiredCard({ cases }: ActionRequiredCardProps) {
    return (
        <Card>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                        <CardTitle className="text-lg">Handlungen notwendig</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">Berichte, die sofortige Aufmerksamkeit erfordern</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                        <Input className="w-[200px]" placeholder="Suchen..." />
                        <Button size="sm" variant="outline">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Stagger className="space-y-4">
                    {cases.map((caseItem) => (
                        <StaggerItem key={caseItem.id}>
                            <motion.div
                                className={`flex items-center justify-between rounded-lg border p-4 ${
                                    caseItem.overdue
                                        ? 'border-rose-200 bg-rose-50/50'
                                        : caseItem.priority === 'Hoch'
                                          ? 'border-amber-200 bg-amber-50/50'
                                          : ''
                                }`}
                                transition={{ duration: 0.2 }}
                                whileHover={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', scale: 1.01 }}
                            >
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className={`rounded-full p-2 ${
                                            caseItem.overdue
                                                ? 'bg-rose-100 text-rose-600'
                                                : caseItem.priority === 'Hoch'
                                                  ? 'bg-amber-100 text-amber-600'
                                                  : 'bg-blue-100 text-blue-600'
                                        }`}
                                        transition={{ duration: 0.2 }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {caseItem.overdue ? (
                                            <AlertCircle className="h-5 w-5" />
                                        ) : caseItem.priority === 'Hoch' ? (
                                            <Clock className="h-5 w-5" />
                                        ) : (
                                            <Search className="h-5 w-5" />
                                        )}
                                    </motion.div>
                                    <div className="grid gap-1">
                                        <div className="font-medium">
                                            <Link className="hover:underline text-blue-600" href={`/cases/${caseItem.id}`}>
                                                {caseItem.id} - {caseItem.customer}
                                            </Link>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            <Link
                                                className="hover:underline"
                                                href={`/customers/${caseItem.customerId}/locations/${caseItem.locationId}`}
                                            >
                                                {caseItem.location}
                                            </Link>{' '}
                                            • {caseItem.date} •{' '}
                                            <span className={caseItem.overdue ? 'text-rose-600 font-medium' : ''}>{caseItem.reason}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-sm">{caseItem.measures} Maßnahmen</div>
                                    <Badge
                                        className={`${
                                            caseItem.priority === 'Hoch'
                                                ? 'bg-rose-100 text-rose-800 hover:bg-rose-100'
                                                : caseItem.priority === 'Mittel'
                                                  ? 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                                                  : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100'
                                        }`}
                                    >
                                        {caseItem.priority}
                                    </Badge>
                                    {caseItem.overdue && (
                                        <Badge className="text-rose-600 border-rose-200" variant="outline">
                                            {caseItem.daysOverdue} {caseItem.daysOverdue === 1 ? 'Tag' : 'Tage'} überfällig
                                        </Badge>
                                    )}
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button asChild size="sm" variant="outline">
                                            <Link href={`/cases/${caseItem.id}`}>Details</Link>
                                        </Button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </CardContent>
        </Card>
    );
}
