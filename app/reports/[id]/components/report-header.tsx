interface ReportHeaderProps {
    generatedDate: string;
}

export function ReportHeader({ generatedDate }: ReportHeaderProps) {
    return (
        <div className="text-center">
            <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
            <h1 className="mt-4 text-3xl font-bold">FUNK Risk Engineering Report</h1>
            <p className="text-muted-foreground">Generated on {generatedDate}</p>
        </div>
    );
}
