import { ActionButtonsProvider } from '@/components/context/action-buttons-context';
import { Inter } from 'next/font/google';
import type React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    description: 'Risk assessment and management platform for FUNK',
    generator: 'v0.dev',
    title: 'FUNK Risk Engineering Tool',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ActionButtonsProvider>{children}</ActionButtonsProvider>
            </body>
        </html>
    );
}
