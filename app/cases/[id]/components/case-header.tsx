import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface CaseHeaderProps {
  id: string
  name: string
  status: string
  createdDate: string
}

export function CaseHeader({ id, name, status, createdDate }: CaseHeaderProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-start gap-3">
            <Button variant="ghost" size="icon" asChild className="h-8 w-8 -ml-1 mr-1 mt-1">
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold">{name}</h1>
                <Badge className="text-sm px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-100 font-medium">
                  {status}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">Fall #{id.split("-")[2]}</div>
            </div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-1"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Erstellt: {createdDate}
        </div>
      </div>
    </div>
  )
}

