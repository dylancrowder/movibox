import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary: Naranja para CTAs principales (mudanzas, cotizaciones)
        primary: "bg-secondary text-secondary-foreground hover:bg-secondary-600 hover:shadow-card-hover hover:-translate-y-1 active:translate-y-0 shadow-card",

        // Secondary: Azul para CTAs secundarios
        secondary: "bg-primary text-primary-foreground hover:bg-primary-600 hover:shadow-card-hover hover:-translate-y-1 active:translate-y-0 shadow-card",

        // Outline: Borde azul, sin relleno
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary-50 hover:shadow-card transition-all",

        // Ghost: Minimal, solo texto
        ghost: "text-primary hover:text-primary-600 hover:bg-primary-50 transition-colors",

        // WhatsApp: Verde específico para WhatsApp
        whatsapp: "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp-600 hover:shadow-card-hover hover:-translate-y-1 active:translate-y-0 shadow-card",

        // Destructive: Rojo para acciones destructivas
        destructive: "bg-error text-white hover:bg-red-700 hover:shadow-card-hover hover:-translate-y-1 active:translate-y-0 shadow-card",

        // Link: Solo texto con subrayado
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs rounded-xs",
        default: "h-11 px-6 text-sm rounded-sm",
        lg: "h-12 px-8 text-base rounded-sm",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
