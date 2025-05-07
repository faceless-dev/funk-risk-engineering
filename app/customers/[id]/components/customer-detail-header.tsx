import { ArrowLeft, Building, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CustomerDetailHeaderProps {
  customer: {
    name: string
    customerNumber: string
    email: string
    phone: string
    website: string
  }
}

export function CustomerDetailHeader({ customer }: CustomerDetailHeaderProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Button variant="ghost" size="icon" asChild className="h-8 w-8 -ml-1 mr-1 mt-1">
            <Link href="/customers">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Zurück</span>
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-muted-foreground" />
              <h1 className="text-2xl font-bold">{customer.name}</h1>
            </div>
            <p className="text-sm text-muted-foreground mt-1">#{customer.customerNumber}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{customer.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{customer.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{customer.website}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

