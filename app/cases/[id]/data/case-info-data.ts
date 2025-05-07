export interface LocationInfo {
  id: string
  name: string
  address: string
  customerId: string
}

export interface CustomerInfo {
  id: string
  name: string
  industry: string
}

export const getLocationInfo = (locationId = "wien"): LocationInfo => {
  // In a real app, you would fetch this data based on the locationId
  return {
    id: locationId,
    name: "Vienna Headquarters",
    address: "Stephansplatz 1, 1010 Wien",
    customerId: "acme",
  }
}

export const getCustomerInfo = (customerId = "acme"): CustomerInfo => {
  // In a real app, you would fetch this data based on the customerId
  return {
    id: customerId,
    name: "Acme Corp",
    industry: "Einzelhandel",
  }
}

