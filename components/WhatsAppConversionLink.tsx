"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface WhatsAppConversionLinkProps {
  href: string;
  children: ReactNode;
  conversionLabel?: string;
  className?: string;
  target?: string;
}

// Mapeo de conversiones con sus respectivos send_to IDs
const conversionMap: Record<string, string> = {
  contacto_whatsapp_click: "AW-18195477517/Zuo3CNuZobgcEI3oo-RD",
  mudanza_whatsapp_click: "AW-18195477517/say3CN6ZobgcEI3oo-RD",
  guardamuebles_whatsapp_click: "AW-18195477517/q8wFCNuht7gcEI3oo-RD",
  guardamuebles_precio_whatsapp: "AW-18195477517/q8wFCNuht7gcEI3oo-RD",
  guardamuebles_personalizado_whatsapp: "AW-18195477517/XiU3COGZobgcEI3oo-RD",
  guardamuebles_vehiculo_whatsapp: "AW-18195477517/Z1PRCN6ht7gcEI3oo-RD",
  guardamuebles_cta_whatsapp: "AW-18195477517/8jZsCNmit7gcEI3oo-RD",
  guardamuebles_visita_whatsapp: "AW-18195477517/q8wFCNuht7gcEI3oo-RD",
  guardamuebles_presupuesto_whatsapp: "AW-18195477517/q8wFCNuht7gcEI3oo-RD",
};

export function WhatsAppConversionLink({
  href,
  children,
  conversionLabel = "whatsapp_click",
  className,
  target = "_blank",
}: WhatsAppConversionLinkProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18195477517/lYdCCL2YvtMcEI3oo-RD",
        value: 1.0,
        currency: "ARS",
      });
      console.log(`📱 ${conversionLabel} conversion event fired to AW-18195477517/lYdCCL2YvtMcEI3oo-RD`);
    } else {
      console.log("⚠️ gtag not available");
    }
  };

  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
