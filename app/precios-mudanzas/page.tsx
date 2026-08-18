import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, MapPin, Truck, Users } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import { Button } from "@/components/ui/button";
import wsp from "@/public/images/iconos/whatsapp.webp";

const whatsappPriceUrl =
  "https://wa.me/5493512586221?text=Hola%2C%20quiero%20coordinar%20una%20mudanza%20dentro%20de%20C%C3%B3rdoba%20Capital.%20%C2%BFQu%C3%A9%20fechas%20tienen%20disponibles%3F";
const whatsappOutsideUrl =
  "https://wa.me/5493512586221?text=Hola%2C%20mi%20mudanza%20es%20fuera%20de%20C%C3%B3rdoba%20Capital.%20Quiero%20consultar%20por%20un%20presupuesto.";

export const metadata: Metadata = {
  title: "Precios de Mudanzas en Córdoba Capital | Movibox",
  description:
    "Conocé el precio de una mudanza en Córdoba Capital: $75.000 por hora con camión y 2 ayudantes. Consultá por WhatsApp sin compromiso.",
  keywords: [
    "precios de mudanzas en Córdoba",
    "cuánto cuesta una mudanza en Córdoba",
    "precio mudanza Córdoba",
    "mudanzas Córdoba Capital",
    "precio por hora mudanza Córdoba",
  ],
  alternates: { canonical: "https://www.movibox.com.ar/precios-mudanzas" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Precios de mudanzas en Córdoba | Movibox",
    description:
      "Mudanzas dentro de Córdoba Capital por $75.000 la hora, con camión y 2 ayudantes.",
    url: "https://www.movibox.com.ar/precios-mudanzas",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Precios de mudanzas en Córdoba",
      description:
        "Precio de mudanzas dentro de Córdoba Capital: $75.000 por hora con camión y 2 ayudantes.",
      url: "https://www.movibox.com.ar/precios-mudanzas",
    },
    {
      "@type": "Service",
      name: "Mudanzas dentro de Córdoba Capital",
      serviceType: "Mudanzas residenciales",
      areaServed: { "@type": "City", name: "Córdoba" },
      provider: { "@id": "https://www.movibox.com.ar/#movingcompany" },
      offers: {
        "@type": "Offer",
        price: "75000",
        priceCurrency: "ARS",
        description: "Precio por hora con camión y 2 ayudantes.",
      },
    },
  ],
};

function WhatsAppButton({
  className = "",
  href = whatsappPriceUrl,
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Button asChild variant="whatsapp" size="lg" className={className}>
      <WhatsAppConversionLink href={href} className="flex items-center gap-3">
        <Image src={wsp} alt="WhatsApp" width={28} height={28} />
        Consultar por WhatsApp
      </WhatsAppConversionLink>
    </Button>
  );
}

export default function PreciosMudanzasPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <section className="bg-primary-700 pb-16 pt-32 text-white sm:pb-24 sm:pt-40">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-white/90">
              Precios transparentes
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
              Precios de mudanzas en Córdoba
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/90 sm:text-2xl">
              Un precio claro, sin sorpresas.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="mx-auto max-w-4xl">
            <div className="rounded-md border-2 border-primary-700 bg-gradient-to-br from-primary-50 to-secondary-50 p-6 text-center shadow-card sm:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-secondary-700">
                Mudanzas dentro de Córdoba Capital
              </p>
              <p className="mt-4 text-5xl font-black leading-none text-primary sm:text-7xl">
                $75.000
              </p>
              <p className="mt-3 text-xl font-bold text-primary sm:text-2xl">por hora</p>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Precio por hora para mudanzas dentro de Córdoba Capital.
              </p>

              <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
                {[
                  { icon: Truck, text: "Camión" },
                  { icon: Users, text: "2 ayudantes" },
                  { icon: MapPin, text: "Córdoba Capital" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-sm border border-neutral-300 bg-white p-4"
                  >
                    <div className="rounded-full bg-secondary-500 p-2 text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-primary">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <WhatsAppButton className="w-full sm:w-auto" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="bg-neutral-100 py-16 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollAnimation animation="slide-in-left" className="space-y-6">
              <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
                Zona de cobertura
              </span>
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Mudanzas dentro de Córdoba Capital
              </h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                Este precio aplica para mudanzas realizadas dentro de Córdoba Capital. Si tu origen o destino está fuera de la ciudad, escribinos y te preparamos un presupuesto según el recorrido.
              </p>
            </ScrollAnimation>



           <ScrollAnimation animation="slide-in-right">
  <div className="relative overflow-hidden rounded-md border border-neutral-300 bg-white shadow-card">
    <Image
      src="/images/webimages/cobertura-cordoba.png"
      alt="Zona de cobertura de mudanzas en Córdoba Capital"
      width={1200}
      height={900}
      className="h-auto w-full object-cover"
      priority
    />

    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-primary-800 px-4 py-2 text-center text-xs font-bold uppercase tracking-widest text-white sm:bottom-8 sm:text-sm">
      Córdoba Capital
    </span>

    <span className="absolute right-5 top-5 rounded-full bg-primary-800 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
      Área de servicio
    </span>
  </div>
</ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="mx-auto max-w-5xl">
            <article className="min-h-[420px] rounded-md border-2 border-primary-700 bg-primary-700 p-8 text-white shadow-card sm:min-h-[480px] sm:p-14">
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <div className="mb-8 w-fit rounded-full bg-secondary-500 p-4 text-white">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                    ¿Tu mudanza es fuera de Córdoba Capital?
                  </h2>
                  <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl">
                    Las mudanzas hacia otras localidades tienen un valor diferente. Consultanos por WhatsApp y te pasamos un presupuesto según el destino y las características de la mudanza.
                  </p>
                </div>
                <div>
                  <WhatsAppButton href={whatsappOutsideUrl} className="w-full sm:w-auto" />
                </div>
              </div>
            </article>
          </ScrollAnimation>
        </div>
      </section>

      <section className="bg-neutral-100 py-16 sm:py-32">
        <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
          <ScrollAnimation animation="fade-up" className="space-y-6">
            <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
              Atención directa
            </span>
            <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
              Consultá tu mudanza por WhatsApp
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600">
              Contanos la fecha, el origen y el destino. Te respondemos con la información que necesitás para organizar tu mudanza.
            </p>
            <div className="pt-2">
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
              <CheckCircle2 className="h-5 w-5 text-secondary-500" />
              Respuesta rápida y presupuesto claro
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
