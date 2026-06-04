import * as React from "react"
import { cn } from "@/lib/utils"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4
  children: React.ReactNode
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, className, children, ...props }, ref) => {
    const baseClasses = {
      1: "text-h1-mobile sm:text-h1-tablet lg:text-h1-desktop",
      2: "text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop",
      3: "text-h3-mobile sm:text-h3-tablet lg:text-h3-desktop",
      4: "text-h4-mobile sm:text-h4-tablet lg:text-h4-desktop",
    }

    const Tag = `h${level}` as const

    return (
      <Tag
        ref={ref}
        className={cn(baseClasses[level], className)}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

Heading.displayName = "Heading"

export { Heading }
