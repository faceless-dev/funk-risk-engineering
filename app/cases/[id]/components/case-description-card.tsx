import { Button } from '@/components/ui/button';

interface CaseDescriptionCardProps {
    description: string;
}

export function CaseDescriptionCard({ description }: CaseDescriptionCardProps) {
    return (
        <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-4 border-b flex items-center justify-between">
                <h2 className="text-lg font-medium">Zusammenfassung</h2>
                <Button className="gap-1" size="sm" variant="ghost">
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
                    Edit
                </Button>
            </div>
            <div className="p-6">
                <p>{description}</p>
            </div>
        </div>
    );
}
