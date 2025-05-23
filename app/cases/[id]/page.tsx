import CaseDetail from './case-detail';

export default function CasePage({ params }: { params: { id: string } }) {
    return <CaseDetail id={params.id} />;
}
