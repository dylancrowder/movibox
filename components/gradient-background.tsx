import type React from "react"
interface GradientBackgroundProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  direction?: "to-r" | "to-b" | "to-tr" | "to-br"
}

export function GradientBackground({
  children,
  className = "",
  colors = ["from-red-500", "via-red-400", "to-yellow-500"],
  direction = "to-r",
}: GradientBackgroundProps) {
  return <div className={`relative bg-gradient-${direction} ${colors.join(" ")} ${className}`}>{children}</div>
}

