'use client';

import { usePathname } from 'next/navigation';
import type React from 'react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

export type ActionButton = {
    className?: string;
    href?: string;
    icon?: React.ReactNode;
    id: string;
    label: string;
    onClick?: () => void;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
};

type ActionButtonsContextType = {
    actionButtons: ActionButton[];
    registerActionButton: (button: ActionButton) => void;
    unregisterActionButton: (id: string) => void;
};

const ActionButtonsContext = createContext<ActionButtonsContextType | undefined>(undefined);

export function ActionButtonsProvider({ children }: { children: React.ReactNode }) {
    const [actionButtons, setActionButtons] = useState<ActionButton[]>([]);
    const buttonsMapRef = useRef<Map<string, ActionButton>>(new Map());
    const pathname = usePathname();

    // Clear action buttons on route change
    useEffect(() => {
        buttonsMapRef.current.clear();
        setActionButtons([]);
    }, [pathname]);

    const registerActionButton = (button: ActionButton) => {
        // Store in ref to avoid unnecessary re-renders
        if (!buttonsMapRef.current.has(button.id)) {
            buttonsMapRef.current.set(button.id, button);
            // Update state to trigger re-render
            setActionButtons(Array.from(buttonsMapRef.current.values()));
        }
    };

    const unregisterActionButton = (id: string) => {
        if (buttonsMapRef.current.has(id)) {
            buttonsMapRef.current.delete(id);
            setActionButtons(Array.from(buttonsMapRef.current.values()));
        }
    };

    return (
        <ActionButtonsContext.Provider
            value={{
                actionButtons,
                registerActionButton,
                unregisterActionButton,
            }}
        >
            {children}
        </ActionButtonsContext.Provider>
    );
}

export function useActionButtons() {
    const context = useContext(ActionButtonsContext);
    if (context === undefined) {
        throw new Error('useActionButtons must be used within an ActionButtonsProvider');
    }
    return context;
}
