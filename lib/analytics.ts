export type ServiceInterest =
  | "mudanzas"
  | "guardamuebles"
  | "fletes"
  | "general";

type ContactEventName = "movibox_contact_click" | "movibox_form_submit";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
  }
}

export function trackContactEvent(
  event: ContactEventName,
  serviceInterest: ServiceInterest,
  contactMethod?: "whatsapp" | "phone" | "form"
): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    service_interest: serviceInterest,
    ...(contactMethod ? { contact_method: contactMethod } : {}),
  });
}

export function serviceInterestFromPathname(pathname: string): ServiceInterest {
  if (pathname.startsWith("/guardamuebles")) return "guardamuebles";
  if (pathname.startsWith("/fletes")) return "fletes";
  if (
    pathname.startsWith("/mudanzas") ||
    pathname.startsWith("/precios-mudanzas")
  ) {
    return "mudanzas";
  }

  return "general";
}

export function serviceInterestFromFormValue(value: string): ServiceInterest {
  if (value === "deposito") return "guardamuebles";
  if (value === "fletes") return "fletes";
  if (value === "mudanzas-locales") return "mudanzas";

  return "general";
}
