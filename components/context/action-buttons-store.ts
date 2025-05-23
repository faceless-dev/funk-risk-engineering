'use client';

import type React from 'react';

import { create } from 'zustand';

export type ActionButton = {
    className?: string;
    href?: string;
    icon?: React.ReactNode;
    id: string;
    label: string;
    onClick?: () => void;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
};

interface ActionButtonsStore {
    addButton: (button: ActionButton) => void;
    buttons: ActionButton[];
    clearButtons: () => void;
    removeButton: (id: string) => void;
}

export const useActionButtonsStore = create<ActionButtonsStore>((set) => ({
    addButton: (button) =>
        set((state) => {
            // Check if button already exists
            const exists = state.buttons.some((b) => b.id === button.id);
            if (exists) {
                return state; // Don't add if it already exists
            }
            return { buttons: [...state.buttons, button] };
        }),
    buttons: [],
    clearButtons: () => set({ buttons: [] }),
    removeButton: (id) =>
        set((state) => ({
            buttons: state.buttons.filter((button) => button.id !== id),
        })),
}));
