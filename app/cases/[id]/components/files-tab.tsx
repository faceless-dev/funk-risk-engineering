import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface FileItem {
  name: string
  size: string
  date: string
  user: string
  measure: string | null
}

interface FilesTabProps {
  employeeUploads: FileItem[]
  customerUploads: FileItem[]
}

export function FilesTab({ employeeUploads, customerUploads }: FilesTabProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Files</CardTitle>
          <CardDescription>All files attached to this case</CardDescription>
        </div>
        <Button className="gap-2">
          <Upload className="h-4 w-4" />
          Upload File
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="all">All Files</TabsTrigger>
            <TabsTrigger value="employee">My Uploads</TabsTrigger>
            <TabsTrigger value="customer">Customer Uploads</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-0">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="font-medium">Employee Uploads</h3>
            </div>
            {employeeUploads.map((file, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border p-3 bg-muted/10">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-muted-foreground"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <div>
                    <div className="font-medium">{file.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {file.size} • Uploaded on {file.date} by <span className="text-primary font-medium">You</span>
                      {file.measure && (
                        <span className="ml-1">
                          • <span className="text-primary">Measure: {file.measure}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Download
                  </Button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between border-b pb-2 pt-4">
              <h3 className="font-medium">Customer Uploads</h3>
            </div>
            {customerUploads.map((file, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border p-3 bg-blue-50">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-muted-foreground"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <div>
                    <div className="font-medium">{file.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {file.size} • Uploaded on {file.date} by{" "}
                      <span className="text-blue-600 font-medium">Customer</span>
                      {file.measure && (
                        <span className="ml-1">
                          • <span className="text-primary">Measure: {file.measure}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="employee" className="space-y-4 mt-0">
            {/* Employee uploads content */}
            {/* Similar to the "all" tab but only showing employee uploads */}
          </TabsContent>

          <TabsContent value="customer" className="space-y-4 mt-0">
            {/* Customer uploads content */}
            {/* Similar to the "all" tab but only showing customer uploads */}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

