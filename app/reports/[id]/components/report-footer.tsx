interface ReportFooterProps {
    generatedDate: string;
}

export function ReportFooter({ generatedDate }: ReportFooterProps) {
    return (
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
            <p>FUNK Risk Engineering Tool • Bericht erstellt am {generatedDate}</p>
        </div>
    );
}
