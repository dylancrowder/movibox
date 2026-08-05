import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import image_header from "@/public/logisticas.webp";

export const metadata: Metadata = {
  title: "Precios y Tarifas | Movibox Mudanzas",
  description:
    "Consulta las tarifas de mudanzas, fletes y guardamuebles en Córdoba. Presupuesto transparente y sin sorpresas.",
  keywords: [
    "precios mudanzas cordoba",
    "tarifas de mudanza",
    "precio guardamuebles cordoba",
    "cotización mudanza",
  ],
  alternates: { canonical: "https://www.movibox.com.ar/precios" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Precios y Tarifas | Movibox Mudanzas",
    description:
      "Consulta las tarifas de mudanzas, fletes y guardamuebles en Córdoba. Presupuesto transparente y sin sorpresas.",
    url: "https://www.movibox.com.ar/precios",
    images: [
      {
        url: "https://www.movibox.com.ar/logisticas.webp",
        width: 1200,
        height: 630,
        alt: "Precios y tarifas de mudanzas en Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precios y Tarifas | Movibox Mudanzas",
    description:
      "Consulta las tarifas de mudanzas, fletes y guardamuebles en Córdoba.",
    images: ["https://www.movibox.com.ar/logisticas.webp"],
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Precios y Tarifas - Movibox Mudanzas",
  description:
    "Página de precios y tarifas para mudanzas, fletes y guardamuebles en Córdoba.",
  url: "https://www.movibox.com.ar/precios",
};

export default function PreciosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden text-center">
        <Image
          src={image_header}
          alt="Tarifas y precios de mudanzas y guardamuebles en Córdoba"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-white">
          <h1 className="text-4xl font-black sm:text-5xl">Precios y Tarifas</h1>
          <p className="mt-4 text-lg text-white/90">
            Consultá las tarifas de mudanzas, fletes y guardamuebles en Córdoba. Presupuesto transparente y sin sorpresas.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-3xl border border-neutral-200 bg-slate-50 p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground">Tarifas estimadas</h2>
              <p className="mt-4 text-base text-muted-foreground">
                Estas tarifas son orientativas. Para un presupuesto exacto, contactanos para evaluar volumen, distancia y accesibilidad.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-8 shadow-sm border border-neutral-200">
                  <h3 className="text-xl font-semibold">Mudanzas</h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li>• Mudanza local desde $XXX por hora</li>
                    <li>• Mudanza interprovincial desde $XXX por km</li>
                    <li>• Embalaje adicional desde $XXX</li>
                  </ul>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-sm border border-neutral-200">
                  <h3 className="text-xl font-semibold">Guardamuebles</h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li>• Almacenamiento desde $XXX por m³ al mes</li>
                    <li>• Búsqueda y retiro gratuito en Córdoba Capital</li>
                    <li>• Entrega a domicilio según zona</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-primary/5 p-8 text-primary shadow-sm">
              <h2 className="text-2xl font-semibold">¿Querés un presupuesto real?</h2>
              <p className="mt-3 text-base text-primary/90">
                Envianos los detalles de tu mudanza o guardamuebles y te respondemos rápido con un cálculo claro.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="/contacto">Contactanos</Link>
                </Button>
                <WhatsAppConversionLink href="https://wa.me/5493512586221">
                  WhatsApp
                </WhatsAppConversionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
