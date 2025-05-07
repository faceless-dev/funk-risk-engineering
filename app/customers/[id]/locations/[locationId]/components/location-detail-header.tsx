import { ArrowLeft, MapPin, Mail, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { LocationData } from "../data/location-data"

interface LocationDetailHeaderProps {
  location: LocationData
}

export function LocationDetailHeader({ location }: LocationDetailHeaderProps) {
  // Calculate status based on cases
  const hasOverdueMeasures = location.cases.some((c) => c.overdue)
  const allCasesCompleted = location.cases.every((c) => c.status === "Abgeschlossen")

  let statusBadge
  if (hasOverdueMeasures) {
    statusBadge = <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Überfällige Maßnahmen</Badge>
  } else if (allCasesCompleted) {
    statusBadge = <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Alle Fälle abgeschlossen</Badge>
  } else {
    statusBadge = <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Aktiv</Badge>
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Button variant="ghost" size="icon" asChild className="h-8 w-8 -ml-1 mr-1 mt-1">
            <Link href={`/customers/${location.customer.id}`}>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Zurück zum Kunden</span>
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <h1 className="text-2xl font-bold">{location.name}</h1>
              {statusBadge}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              <Link href={`/customers/${location.customer.id}`} className="hover:underline">
                {location.customer.name}
              </Link>{" "}
              • {location.address}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span>{location.contact.manager}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{location.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{location.contact.email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

