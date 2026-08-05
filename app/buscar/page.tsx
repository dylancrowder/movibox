import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import image_header from "@/public/logisticas.webp";

export const metadata: Metadata = {
  title: "Buscar Mudanzas y Guardamuebles | Movibox Mudanzas",
  description:
    "Busca servicios de mudanzas, guardamuebles y fletes en Córdoba. Encontrá la solución que necesitas con Movibox Mudanzas.",
  keywords: [
    "buscar mudanza cordoba",
    "buscar guardamuebles cordoba",
    "servicio mudanzas cordoba",
    "fletes cordoba",
    "buscar movibox",
  ],
  alternates: { canonical: "https://www.movibox.com.ar/buscar" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    title: "Buscar Mudanzas y Guardamuebles | Movibox Mudanzas",
    description:
      "Busca servicios de mudanzas, guardamuebles y fletes en Córdoba con Movibox Mudanzas.",
    url: "https://www.movibox.com.ar/buscar",
    images: [
      {
        url: "https://www.movibox.com.ar/logisticas.webp",
        width: 1200,
        height: 630,
        alt: "Buscar mudanzas y guardamuebles en Córdoba con Movibox Movibox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buscar Mudanzas y Guardamuebles | Movibox Mudanzas",
    description:
      "Busca servicios de mudanzas, guardamuebles y fletes en Córdoba con Movibox Mudanzas.",
    images: ["https://www.movibox.com.ar/logisticas.webp"],
  },
};

const searchSchema = {
  "@context": "https://schema.org",
  "@type": "SearchResultsPage",
  url: "https://www.movibox.com.ar/buscar",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.movibox.com.ar/buscar?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string | string[] };
}) {
  const query =
    typeof searchParams.q === "string" ? searchParams.q :
    Array.isArray(searchParams.q) ? searchParams.q.join(" ") :
    "";

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchSchema) }}
      />

      <section className="relative flex min-h-[55vh] items-center overflow-hidden text-center">
        <Image
          src={image_header}
          alt="Buscar servicios de mudanzas y guardamuebles en Córdoba"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-white">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm uppercase tracking-[0.25em] text-white/90">
            Buscador de servicios
          </span>
          <h1 className="mt-8 text-4xl font-black sm:text-5xl">
            Busca mudanzas, guardamuebles y fletes en Córdoba
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Encontrá rápidamente los servicios que ofrecemos. Si no aparece lo que buscás,
            escribinos por WhatsApp y te ayudamos personalmente.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-200 bg-slate-50 p-10 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Resultados de búsqueda</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground">
                  {query ? `Resultados para “${query}”` : "Buscar servicios en Movibox"}
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <Search className="h-5 w-5" />
                {query || "Ingresa una búsqueda en el parámetro q"}
              </div>
            </div>

            <div className="mt-8 space-y-6 text-slate-700">
              {query ? (
                <p>
                  Estamos trabajando para ofrecer resultados dinámicos. Por ahora, podés visitar nuestras páginas de servicios principales o contactarnos directamente.
                </p>
              ) : (
                <p>
                  Agregá <code className="rounded bg-slate-100 px-2 py-1">?q=tu+servicio</code> a la URL para buscar.
                </p>
              )}
              <ul className="space-y-3">
                <li>• <Link href="/mudanzas" className="text-primary font-semibold hover:underline">Mudanzas en Córdoba</Link></li>
                <li>• <Link href="/guardamuebles" className="text-primary font-semibold hover:underline">Guardamuebles en Córdoba</Link></li>
                <li>• <Link href="/contacto" className="text-primary font-semibold hover:underline">Contacto y presupuestos</Link></li>
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild>
                <Link href="/contacto">Contactanos</Link>
              </Button>
              <Button asChild variant="whatsapp">
                <Link href="https://wa.me/5493512586221">Abrir WhatsApp</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">¿No encontraste lo que buscabas?</p>
            <h2 className="text-3xl font-bold">
              Preguntanos directamente por tu mudanza o guardamuebles
            </h2>
            <p className="text-lg text-slate-300">
              Nuestro equipo está disponible por WhatsApp para darte una cotización rápida y sin compromiso.
            </p>
            <WhatsAppConversionLink href="https://wa.me/5493512586221">
              Enviar WhatsApp
            </WhatsAppConversionLink>
            <p className="text-sm text-slate-400">
              También podés explorar nuestros servicios desde las páginas principales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
