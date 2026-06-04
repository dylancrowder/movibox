"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag: (command: string, action: string, config?: Record<string, unknown>) => void;
  }
}

const whatsappMessages: Record<string, string> = {
  "/":
    "Hola, necesito presupuesto para mudanza en Córdoba",

  "/servicios":
    "Hola, quiero conocer más sobre sus servicios de mudanzas, fletes y guardamuebles",

  "/mudanzas":
    "Hola, necesito realizar una mudanza en Córdoba. ¿Tienen disponibilidad? Me gustaría recibir información y una cotización.",

  "/fletes":
    "Hola, necesito flete en Córdoba para trasladar muebles o mercadería",

  "/guardamuebles":
    "Hola, estoy buscando un guardamuebles en Córdoba. ¿Tienen disponibilidad? Me gustaría recibir información y ayuda para cotizar.",
};

export function WhatsAppButton() {
  const pathname = usePathname();

  const message =
    whatsappMessages[pathname] ??
    "Hola, necesito presupuesto para mudanza o flete en Córdoba";

  const encodedMessage = encodeURIComponent(message);

  const handleClick = () => {
    // ✅ Evento de conversión Google Ads (seguimiento de click en WhatsApp)
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        value: 1.0,
        currency: "ARS",
      });
    }

    // Abrir WhatsApp
    window.open(`https://wa.me/5493512586221?text=${encodedMessage}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      variant="whatsapp"
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-lg hover:scale-110 active:scale-95"
      title="Contacto por WhatsApp – Mudanzas y fletes en Córdoba"
      aria-label="Contactar por WhatsApp para mudanzas y fletes en Córdoba"
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M19.11 17.46c-.28-.14-1.65-.81-1.9-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44 0 1.44 1.03 2.83 1.17 3.03.14.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33zM16.02 3.2c-6.98 0-12.65 5.67-12.65 12.65 0 2.23.58 4.32 1.6 6.13L3.2 28.8l6.98-1.83c1.74.95 3.74 1.5 5.84 1.5 6.98 0 12.65-5.67 12.65-12.65S23 3.2 16.02 3.2zm0 22.82c-1.89 0-3.64-.54-5.13-1.47l-.37-.23-4.14 1.09 1.1-4.03-.24-.39c-.97-1.55-1.52-3.39-1.52-5.33 0-5.39 4.39-9.78 9.78-9.78s9.78 4.39 9.78 9.78-4.39 9.78-9.78 9.78z" />
      </svg>
    </Button>
  );
}
