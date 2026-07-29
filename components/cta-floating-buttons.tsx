"use client";

import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Archive,
  Truck,
} from "lucide-react";

export function CtaFloatingButtons() {
  const buttons = [
    {
      icon: Truck,
      label: "Solicitar Mudanza",
      variant: "primary" as const,
      href: "https://wa.me/5493512586221?text=Hola%20%F0%9F%91%8B%2C%20quer%C3%ADa%20consultar%20por%20una%20mudanza.%20%C2%BFMe%20cuentan%20c%C3%B3mo%20trabajan%20y%20me%20pasan%20un%20presupuesto%3F",
    },
    {
      icon: Archive,
      label: "Solicitar Guardamuebles",
      variant: "secondary" as const,
      href: "https://wa.me/5493512586221?text=Hola,%20necesito%20información%20sobre%20guardamuebles.",
    },
    {
      icon: Clock,
      label: "Servicio 24hs",
      variant: "primary" as const,
      href: "https://wa.me/5493512586221?text=Hola,%20necesito%20un%20servicio%20urgente%2024hs.",
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 pointer-events-none">
      <div className="container max-w-7xl mx-auto px-0">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-3 pointer-events-auto">
          {buttons.map((button, index) => {
            const Icon = button.icon;
            return (
              <WhatsAppConversionLink
                key={button.label}
                href={button.href}
                className="relative overflow-hidden group"
                title={button.label}
                style={{
                  animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <Button
                  variant={button.variant}
                  size="sm"
                  className="w-full h-auto py-2 md:py-3 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 font-bold text-xs md:text-sm shadow-lg hover:scale-105 active:scale-95 border-2 border-white/30 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Icon className="h-4 w-4 relative z-10 transition-transform group-hover:scale-125 group-hover:-translate-y-1 flex-shrink-0" />
                  <span className="relative z-10 text-center md:text-left whitespace-normal md:whitespace-nowrap">{button.label}</span>
                </Button>
              </WhatsAppConversionLink>
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
