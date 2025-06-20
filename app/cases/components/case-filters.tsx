'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface CaseFiltersProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export function CaseFilters({ searchQuery, setSearchQuery }: CaseFiltersProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
                <h2 className="text-lg font-semibold">Alle Berichte</h2>
                <p className="text-sm text-muted-foreground">Übersicht aller Berichte</p>
            </div>
            <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    className="pl-8 w-full md:w-[300px]"
                    placeholder="Suchen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    );
}
