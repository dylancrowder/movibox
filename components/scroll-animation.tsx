"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left" | "zoom-in"
  delay?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  const baseClasses =
    "will-change-[opacity,transform] transition-opacity transition-transform duration-700"

  const hiddenState = {
    "fade-up": "opacity-0 translate-y-6",
    "fade-in": "opacity-0",
    "slide-in-right": "opacity-0 translate-x-6",
    "slide-in-left": "opacity-0 -translate-x-6",
    "zoom-in": "opacity-0 scale-95",
  }[animation]

  const visibleState = "opacity-100 translate-x-0 translate-y-0 scale-100"

  return (
    <div
      ref={ref}
      className={`
        ${className}
        ${baseClasses}
        ${isVisible ? visibleState : hiddenState}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
