import LocationDetail from "./location-detail";

export default function CustomerLocationPage({
  params,
}: {
  params: {
    id: string;
    locationId: string;
  };
}) {
  return (
    <LocationDetail customerId={params.id} locationId={params.locationId} />
  );
}
