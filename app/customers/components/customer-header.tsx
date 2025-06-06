'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Grid, List, Search } from 'lucide-react';

interface CustomerHeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    setViewMode: (mode: 'grid' | 'list') => void;
    viewMode: 'grid' | 'list';
}

export function CustomerHeader({ searchQuery, setSearchQuery, setViewMode, viewMode }: CustomerHeaderProps) {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Kunden</h1>
            <div className="flex items-center gap-3">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        className="w-[250px] pl-8"
                        placeholder="Suche nach Kunden..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center border rounded-md">
                    <Button
                        aria-label="Kartenansicht"
                        className="h-9 w-9 rounded-none rounded-l-md"
                        size="icon"
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        onClick={() => setViewMode('grid')}
                    >
                        <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                        aria-label="Listenansicht"
                        className="h-9 w-9 rounded-none rounded-r-md"
                        size="icon"
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        onClick={() => setViewMode('list')}
                    >
                        <List className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
