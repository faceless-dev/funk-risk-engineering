import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-48" />
                <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-[250px]" />
                    <Skeleton className="h-10 w-32" />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton key={i} className="h-[280px] w-full rounded-lg" />
                ))}
            </div>
        </div>
    );
}
