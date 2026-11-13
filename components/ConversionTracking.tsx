"use client";

import { useEffect } from "react";
import {
  serviceInterestFromPathname,
  trackContactEvent,
} from "@/lib/analytics";

export function ConversionTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const isPhoneLink = href.startsWith("tel:");
      const isWhatsAppLink =
        link.hostname === "wa.me" ||
        link.hostname.endsWith(".whatsapp.com");

      if (!isPhoneLink && !isWhatsAppLink) return;

      trackContactEvent(
        "movibox_contact_click",
        serviceInterestFromPathname(window.location.pathname),
        isPhoneLink ? "phone" : "whatsapp"
      );
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
