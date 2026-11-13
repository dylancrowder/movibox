import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";
import { STORAGE_MONTHLY_PLANS, formatARS } from "@/lib/commercial-data";
import storageImage from "@/public/images/guardamuebles/box.jpg";

const SLUG = "deposito-guardamuebles";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Cuánto cuesta un guardamuebles en Córdoba | Movibox",
  description:
    "Consultá los precios mensuales de guardamuebles de 5, 10 y 15 m³ en Córdoba y cómo estimar el espacio que necesitás.",
  keywords: [
    "cuánto cuesta un guardamuebles en Córdoba",
    "precio guardamuebles Córdoba",
    "guardamuebles por mes",
    "espacio para guardar muebles",
  ],
  ogImage: "/images/guardamuebles/box.jpg",
  ogImageAlt: "Espacio de guardamuebles en Córdoba",
});

export default function GuardamueblesCostPage() {
  const jsonLd = blogPostJsonLd({
    slug: SLUG,
    headline: "Cuánto cuesta un guardamuebles en Córdoba",
    description:
      "Precios mensuales de espacios de guardamuebles de 5, 10 y 15 m³ y consejos para estimar el volumen necesario.",
    image: "/images/guardamuebles/box.jpg",
  });

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="bg-primary-700 px-4 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-white/80">
            Guía de guardamuebles
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            ¿Cuánto cuesta un guardamuebles en Córdoba?
          </h1>
          <p className="mt-5 text-lg text-white/90">
            Compará el precio mensual según el volumen y consultá qué espacio se adapta a tus pertenencias.
          </p>
        </div>
      </header>

      <article className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
        <div className="mb-10">
          <Breadcrumb
            items={[{ label: "Blog", href: "/blog" }]}
            currentPage="Cuánto cuesta un guardamuebles"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            El precio de un guardamuebles depende, entre otras condiciones de contratación, del volumen de espacio que necesitás. En Movibox hay opciones mensuales de <strong>5, 10 y 15 m³</strong>:
          </p>

          <div className="not-prose my-8 grid gap-5 md:grid-cols-3">
            {STORAGE_MONTHLY_PLANS.map((plan) => (
              <section
                key={plan.volumeM3}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <h2 className="text-xl font-bold text-primary">
                  {plan.volumeM3} m³
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  {plan.dimensions}
                </p>
                <p className="mt-5 text-2xl font-bold text-primary">
                  {formatARS(plan.monthlyPriceARS)}
                </p>
                <p className="text-sm text-neutral-600">por mes</p>
              </section>
            ))}
          </div>

          <p>
            Los importes corresponden a los valores mensuales publicados para cada volumen. Consultá disponibilidad y condiciones vigentes antes de contratar.
          </p>

          <figure className="my-10">
            <Image
              src={storageImage}
              alt="Espacio de almacenamiento de muebles de Movibox"
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <figcaption className="mt-2 text-center text-sm text-neutral-600">
              Una fotografía del espacio de guardamuebles.
            </figcaption>
          </figure>

          <h2>¿Qué tamaño de guardamuebles necesito?</h2>
          <p>
            Como primer paso, hacé una lista de los muebles, electrodomésticos, herramientas y cajas que querés guardar. El volumen se estima multiplicando largo × ancho × alto de cada bulto, con las medidas expresadas en metros. La forma de los objetos y cómo se acomodan también influyen en el espacio necesario.
          </p>
          <p>
            Los ejemplos de uso de cada tamaño sirven como referencia, no como una garantía de que todos los muebles de una vivienda entren en el mismo volumen. Si tenés dudas, compartí la lista y las medidas aproximadas al pedir una orientación.
          </p>

          <h2>Qué consultar al comparar precios</h2>
          <ul>
            <li>Qué volumen y espacio se asigna a tus pertenencias.</li>
            <li>Si el valor indicado corresponde a un mes.</li>
            <li>Cuáles son las condiciones de contratación y acceso.</li>
            <li>Cómo coordinar el ingreso y el traslado de los muebles.</li>
          </ul>

          <h2>Guardamuebles durante una mudanza</h2>
          <p>
            Si las fechas entre una vivienda y otra no coinciden, un espacio de guardamuebles puede resolver el almacenamiento temporal. Conocé el{" "}
            <Link href="/guardamuebles">servicio de guardamuebles de Movibox</Link>{" "}
            y consultá por separado las opciones de mudanza y traslado.
          </p>

          <div className="not-prose mt-10 rounded-xl bg-primary-50 p-6 text-center">
            <h2 className="text-2xl font-bold text-primary">
              Consultá por espacio y disponibilidad
            </h2>
            <p className="mt-2 text-neutral-700">
              Contanos qué necesitás guardar y durante cuánto tiempo.
            </p>
            <WhatsAppConversionLink
              href="https://wa.me/5493512586221?text=Hola%2C%20quiero%20consultar%20por%20un%20guardamuebles%20en%20C%C3%B3rdoba."
              className="mt-5 inline-flex rounded-md bg-primary px-5 py-3 font-semibold text-white hover:bg-primary/90"
            >
              Consultar por WhatsApp
            </WhatsAppConversionLink>
          </div>
        </div>
      </article>
    </main>
  );
}
