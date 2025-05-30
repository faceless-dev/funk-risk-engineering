'use client';

import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <Sonner
            className="toaster group"
            toastOptions={{
                classNames: {
                    actionButton: 'group-[.toaster]:bg-primary group-[.toaster]:text-primary-foreground',
                    cancelButton: 'group-[.toaster]:bg-muted group-[.toaster]:text-muted-foreground',
                    description: 'group-[.toast]:text-muted-foreground',
                    toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
                },
            }}
            {...props}
        />
    );
};
