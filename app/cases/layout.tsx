import { AppLayout } from '@/components/layout/app-layout';
import type React from 'react';

export default function CasesLayout({ children }: { children: React.ReactNode }) {
    return <AppLayout>{children}</AppLayout>;
}
