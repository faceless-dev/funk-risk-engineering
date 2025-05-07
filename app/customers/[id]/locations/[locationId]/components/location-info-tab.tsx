import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Calendar, Users, Ruler, Clock, Shield, Award, User } from "lucide-react"

interface LocationInfoTabProps {
  details: {
    type: string
    size: string
    employees: number
    buildingYear: number
    lastInspection: string
    safetyOfficer: string
    lastRiskAssessment: string
    certifications: string[]
  }
}

export function LocationInfoTab({ details }: LocationInfoTabProps) {
  return (
    <div className="grid gap-6 grid-cols-1">
      <Card>
        <CardHeader>
          <CardTitle>Standortdetails</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 rounded-full p-2 mt-1">
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Standorttyp</div>
                <div className="font-medium">{details.type}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 rounded-full p-2 mt-1">
                <Ruler className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Größe</div>
                <div className="font-medium">{details.size}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 rounded-full p-2 mt-1">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Mitarbeiter</div>
                <div className="font-medium">{details.employees}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 rounded-full p-2 mt-1">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Baujahr</div>
                <div className="font-medium">{details.buildingYear}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 rounded-full p-2 mt-1">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Sicherheitsbeauftragter</div>
                <div className="font-medium">{details.safetyOfficer}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 rounded-full p-2 mt-1">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Letzte Risikobewertung</div>
                <div className="font-medium">{details.lastRiskAssessment}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 rounded-full p-2 mt-1">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Letzte Inspektion</div>
                <div className="font-medium">{details.lastInspection}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Zertifizierungen</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-3">
            {details.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-md">
                <Award className="h-4 w-4" />
                <span>{cert}</span>
              </div>
            ))}
            {details.certifications.length === 0 && (
              <div className="text-muted-foreground">Keine Zertifizierungen vorhanden</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

