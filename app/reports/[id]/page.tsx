import ReportDetail from "./report-detail"

export default function ReportPreviewPage({ params }: { params: { id: string } }) {
  return <ReportDetail id={params.id} />
}

