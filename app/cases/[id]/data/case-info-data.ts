export interface LocationInfo {
    address: string;
    customerId: string;
    id: string;
    name: string;
}

export interface CustomerInfo {
    id: string;
    industry: string;
    name: string;
}

export const getLocationInfo = (locationId = 'wien'): LocationInfo => {
    // In a real app, you would fetch this data based on the locationId
    return {
        address: 'Stephansplatz 1, 1010 Wien',
        customerId: 'acme',
        id: locationId,
        name: 'Vienna Headquarters',
    };
};

export const getCustomerInfo = (customerId = 'acme'): CustomerInfo => {
    // In a real app, you would fetch this data based on the customerId
    return {
        id: customerId,
        industry: 'Einzelhandel',
        name: 'Acme Corp',
    };
};
