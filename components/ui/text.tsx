import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "small" | "lead"
  children: React.ReactNode
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = "body", className, children, ...props }, ref) => {
    const baseClasses = {
      body: "text-body-mobile sm:text-body-tablet lg:text-body-desktop",
      small: "text-small-mobile sm:text-small-tablet lg:text-small-desktop",
      lead: "text-lg sm:text-xl leading-relaxed",
    }

    return (
      <p
        ref={ref}
        className={cn(baseClasses[variant], className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Text.displayName = "Text"

export { Text }
