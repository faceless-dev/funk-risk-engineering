import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface CaseHeaderProps {
    createdDate: string;
    id: string;
    name: string;
    status: string;
}

export function CaseHeader({ createdDate, id, name, status }: CaseHeaderProps) {
    return (
        <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <div className="flex items-start gap-3">
                        <Button asChild className="h-8 w-8 -ml-1 mr-1 mt-1" size="icon" variant="ghost">
                            <Link href="/dashboard">
                                <ArrowLeft className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Link>
                        </Button>
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <h1 className="text-2xl font-bold">{name}</h1>
                                <Badge className="text-sm px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-100 font-medium">{status}</Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">Fall #{id.split('-')[2]}</div>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-muted-foreground flex items-center">
                    <svg
                        className="h-4 w-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Erstellt: {createdDate}
                </div>
            </div>
        </div>
    );
}
