"use client";

import Link from "next/link";
import {
  Clock,
  Archive,
  Truck,
} from "lucide-react";

declare global {
  interface Window {
    gtag: (command: string, action: string, config?: Record<string, unknown>) => void;
  }
}

export function CtaFloatingButtons() {
  const buttons = [
    {
      icon: Truck,
      label: "Solicitar Mudanza",
      color: "bg-gradient-to-r from-brand-orange to-orange-600",
      href: "https://wa.me/5493512586221?text=Hola,%20necesito%20una%20mudanza%20en%20Córdoba.",
    },
    {
      icon: Archive,
      label: "Solicitar Guardamuebles",
      color: "bg-gradient-to-r from-brand-darkblue to-brand-lightblue",
      href: "https://wa.me/5493512586221?text=Hola,%20necesito%20información%20sobre%20guardamuebles.",
    },
    {
      icon: Clock,
      label: "Servicio 24hs",
      color: "bg-gradient-to-r from-brand-orange via-orange-600 to-brand-orange",
      href: "https://wa.me/5493512586221?text=Hola,%20necesito%20un%20servicio%20urgente%2024hs.",
    },
  ];

  const handleClick = (label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        button_name: label,
      });
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 pointer-events-none">
      <div className="container max-w-7xl mx-auto px-0">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-3 pointer-events-auto">
          {buttons.map((button, index) => {
            const Icon = button.icon;
            return (
              <Link
                key={button.label}
                href={button.href}
                target="_blank"
                onClick={() => handleClick(button.label)}
                className={`
                  flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2
                  px-2 md:px-4 py-2 md:py-3 rounded-lg md:rounded-lg
                  text-white font-bold text-xs md:text-sm
                  shadow-lg shadow-black/30
                  transition-all duration-300
                  hover:scale-105 md:hover:scale-108 hover:shadow-xl
                  active:scale-95
                  border-2 border-white/30
                  backdrop-blur-sm
                  relative overflow-hidden
                  group
                  ${button.color}
                `}
                title={button.label}
                style={{
                  animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="h-4 md:h-4 w-4 md:w-4 relative z-10 transition-transform group-hover:scale-125 group-hover:-translate-y-1 flex-shrink-0" />
                <span className="relative z-10 text-center md:text-left whitespace-normal md:whitespace-nowrap">{button.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
