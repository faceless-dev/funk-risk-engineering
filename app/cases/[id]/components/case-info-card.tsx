import Link from "next/link"
import { getLocationInfo, getCustomerInfo } from "../data/case-info-data"

interface CaseInfoCardProps {
  location: string
  customer: string
  locationId?: string
  customerId?: string
}

export function CaseInfoCard({ location, customer, locationId = "wien", customerId = "acme" }: CaseInfoCardProps) {
  const locationInfo = getLocationInfo(locationId)
  const customerInfo = getCustomerInfo(customerId)

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium">Fallinformationen</h2>
      </div>
      <div className="p-6 grid grid-cols-2 gap-8">
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 rounded-full p-2 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-blue-600"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Standort</div>
            <div className="font-medium">
              <Link href={`/customers/${customerId}/locations/${locationId}`} className="hover:underline">
                {location}
              </Link>
            </div>
            <div className="text-sm text-muted-foreground mt-1">{locationInfo.address}</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 rounded-full p-2 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-blue-600"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Kunde</div>
            <div className="font-medium">
              <Link href={`/customers/${customerId}`} className="hover:underline">
                {customer}
              </Link>
            </div>
            <div className="text-sm text-muted-foreground mt-1">{customerInfo.industry}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

