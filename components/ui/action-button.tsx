"use client"

import { useEffect, useRef } from "react"
import type { ActionButton as ActionButtonType } from "@/components/context/action-buttons-context"
import { useActionButtons } from "@/components/context/action-buttons-context"

interface ActionButtonProps extends Omit<ActionButtonType, "id"> {
  id: string
}

export function ActionButton({ id, ...props }: ActionButtonProps) {
  const { registerActionButton, unregisterActionButton } = useActionButtons()
  const registeredRef = useRef(false)

  // Register the button only once
  useEffect(() => {
    if (!registeredRef.current) {
      registerActionButton({ id, ...props })
      registeredRef.current = true
    }

    // Clean up on unmount
    return () => {
      if (registeredRef.current) {
        unregisterActionButton(id)
        registeredRef.current = false
      }
    }
  }, [id]) // Intentionally omitting other dependencies to prevent re-registration

  // This component doesn't render anything visible
  return null
}

