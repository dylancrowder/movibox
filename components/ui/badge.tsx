import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        // Primary: Naranja (acción, urgencia)
        primary: "bg-secondary-100 text-secondary-700",

        // Secondary: Azul (información)
        secondary: "bg-primary-50 text-primary-700",

        // Destructive: Rojo (alerta)
        destructive: "bg-red-100 text-red-700",

        // Success: Verde (confirmación)
        success: "bg-green-100 text-green-700",

        // Warning: Amarillo (precaución)
        warning: "bg-yellow-100 text-yellow-700",

        // Outline: Solo borde
        outline: "border-2 border-primary text-primary bg-transparent",

        // Subtle: Muy suave
        subtle: "bg-neutral-100 text-neutral-700",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
