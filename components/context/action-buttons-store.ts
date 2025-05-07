"use client"

import type React from "react"

import { create } from "zustand"

export type ActionButton = {
  id: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  className?: string
}

interface ActionButtonsStore {
  buttons: ActionButton[]
  addButton: (button: ActionButton) => void
  removeButton: (id: string) => void
  clearButtons: () => void
}

export const useActionButtonsStore = create<ActionButtonsStore>((set) => ({
  buttons: [],
  addButton: (button) =>
    set((state) => {
      // Check if button already exists
      const exists = state.buttons.some((b) => b.id === button.id)
      if (exists) {
        return state // Don't add if it already exists
      }
      return { buttons: [...state.buttons, button] }
    }),
  removeButton: (id) =>
    set((state) => ({
      buttons: state.buttons.filter((button) => button.id !== id),
    })),
  clearButtons: () => set({ buttons: [] }),
}))

