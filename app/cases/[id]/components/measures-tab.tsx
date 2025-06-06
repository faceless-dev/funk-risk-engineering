import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileText, Plus } from 'lucide-react';
import Link from 'next/link';
import type { Measure } from '../data/case-data';

interface MeasuresTabProps {
    measures: Measure[];
}

export function MeasuresTab({ measures }: MeasuresTabProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Maßnahmen</CardTitle>
                    <CardDescription>Liste aller Maßnahmen für diesen Bericht</CardDescription>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Maßnahme hinzufügen
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {measures.map((measure) => (
                        <div key={measure.id} className="rounded-lg border p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-medium">
                                            <Link className="hover:underline" href={`/cases/${measure.id}/measures/${measure.id}`}>
                                                {measure.title}
                                            </Link>
                                        </h3>
                                        <Badge
                                            className={
                                                measure.priority === 'High'
                                                    ? 'bg-red-100 text-red-800 hover:bg-red-100'
                                                    : measure.priority === 'Medium'
                                                      ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                                                      : 'bg-green-100 text-green-800 hover:bg-green-100'
                                            }
                                        >
                                            {measure.priority}
                                        </Badge>
                                        <Badge
                                            className={
                                                measure.status === 'Open'
                                                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                                                    : measure.status === 'In Progress'
                                                      ? 'bg-purple-100 text-purple-800 hover:bg-purple-100'
                                                      : 'bg-green-100 text-green-800 hover:bg-green-100'
                                            }
                                        >
                                            {measure.status}
                                        </Badge>
                                        {measure.attachments.length > 0 && (
                                            <Badge className="gap-1" variant="outline">
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                                </svg>
                                                {measure.attachments.length} {measure.attachments.length === 1 ? 'attachment' : 'attachments'}
                                            </Badge>
                                        )}
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground">Deadline: {measure.deadline}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button className="gap-1" size="sm" variant="outline">
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 20h9" />
                                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                        </svg>
                                        Bearbeiten
                                    </Button>
                                </div>
                            </div>
                            <Separator className="my-2" />
                            <p className="text-sm">{measure.description}</p>

                            {measure.attachments.length > 0 && (
                                <>
                                    <Separator className="my-2" />
                                    <div className="mt-2">
                                        <h4 className="text-sm font-medium">Anhänge:</h4>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {measure.attachments.map((file, index) => (
                                                <Badge key={index} className="gap-1" variant="outline">
                                                    <FileText className="h-3 w-3" />
                                                    {file.name}
                                                    <span className="text-xs text-muted-foreground ml-1">({file.size})</span>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {measure.status !== 'Open' && (
                                <>
                                    <Separator className="my-2" />
                                    <div className="mt-2">
                                        <h4 className="text-sm font-medium">Antwort des Kunden:</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {measure.status === 'Completed'
                                                ? 'We have completed the required safety training for all staff members. Attendance records and training materials are attached.'
                                                : 'We are currently in the process of installing the new emergency exit signs. Expected completion by April 18th.'}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
