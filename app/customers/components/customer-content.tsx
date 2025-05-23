'use client';

import type { Customer } from '../data/customers-data';
import { CustomerGrid } from './customer-grid';
import { CustomerList } from './customer-list';

interface CustomerContentProps {
    customers: Customer[];
    viewMode: 'grid' | 'list';
}

export function CustomerContent({ customers, viewMode }: CustomerContentProps) {
    return <>{viewMode === 'grid' ? <CustomerGrid customers={customers} /> : <CustomerList customers={customers} />}</>;
}
