import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";

const contactMethods = [
  {
    icon: Phone,
    label: "Llamanos",
    value: "+54 9 351 258-6221",
    href: "tel:+5493512586221",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "351 258-6221",
    href: "https://wa.me/5493512586221",
    target: "_blank" as const,
  },
  {
    icon: Mail,
    label: "Email",
    value: "movibox.cba@gmail.com",
    href: "mailto:movibox.cba@gmail.com",
  },
];

const quickInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Camino Chacra de la Merced Km 1/2, Córdoba Capital, Argentina",
  },
  {
    icon: Phone,
    title: "Horarios",
    description: "Lunes a viernes 08:00 - 18:00 hs · Sábados 09:00 - 13:00 hs",
  },
];

export default function ContactCard() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
      <div className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {contactMethods.map(({ icon: Icon, label, value, href, target }) => (
            <Link
              key={label}
              href={href}
              target={target}
              rel={target ? "noopener noreferrer" : undefined}
              className="group flex h-full flex-col gap-4 rounded-2xl border border-primary/10 bg-secondary/60 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  {label}
                </p>
                <p className="text-sm font-medium text-foreground/90">{value}</p>
              </div>
              <span className="mt-auto text-xs font-semibold uppercase tracking-[0.25em] text-primary/60 group-hover:text-primary">
                Contactar
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contacto" className="flex items-center gap-2">
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:border-primary hover:bg-primary/10"
          >
            <WhatsAppConversionLink href="https://wa.me/5493512586221">
              Enviar mensaje por WhatsApp
            </WhatsAppConversionLink>
          </Button>
        </div>
      </div>

      <div className="space-y-6 rounded-2xl border border-primary/10 bg-white/80 p-8 shadow-inner shadow-primary/5">
        <h3 className="text-lg font-semibold text-foreground">Información rápida</h3>
        <p className="text-sm leading-relaxed text-foreground/70">
          Coordinamos visitas sin cargo para evaluar tu mudanza, te asesoramos con la documentación de
          transporte y acompañamos cada etapa del traslado.
        </p>
        <ul className="space-y-5">
          {quickInfo.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex items-start gap-3">
              <span className="rounded-full bg-secondary px-3 py-2 text-primary shadow-sm">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                  {title}
                </p>
                <p className="text-sm text-foreground/90">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
