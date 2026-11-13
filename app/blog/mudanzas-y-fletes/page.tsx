import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";
import truckImage from "@/public/images/webimages/camion_blog.webp";

const SLUG = "mudanzas-y-fletes";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Mudanza o flete: diferencias y cómo elegir | Movibox",
  description:
    "Conocé la diferencia entre una mudanza y un flete y qué información compartir para pedir una cotización en Córdoba.",
  keywords: [
    "diferencia entre mudanza y flete",
    "cuándo contratar un flete",
    "flete o mudanza en Córdoba",
  ],
  ogImage: "/images/webimages/camion_blog.webp",
  ogImageAlt: "Camión de transporte para una mudanza en Córdoba",
});

export default function MovingOrFreightArticle() {
  const jsonLd = blogPostJsonLd({
    slug: SLUG,
    headline: "Mudanza o flete: diferencias y cómo elegir",
    description:
      "Una guía para distinguir un traslado de objetos puntuales de una mudanza de vivienda o espacio de trabajo.",
    image: "/images/webimages/camion_blog.webp",
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
            Guía de transporte
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Mudanza o flete: diferencias y cómo elegir
          </h1>
          <p className="mt-5 text-lg text-white/90">
            Identificá qué tipo de traslado necesitás antes de pedir una cotización.
          </p>
        </div>
      </header>

      <article className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
        <div className="mb-10">
          <Breadcrumb
            items={[{ label: "Blog", href: "/blog" }]}
            currentPage="Mudanza o flete"
          />
        </div>

        <Image
          src={truckImage}
          alt="Camión utilizado para servicios de mudanza y transporte"
          width={1200}
          height={675}
          className="mb-10 h-auto w-full rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <div className="prose prose-lg max-w-none">
          <p>
            Un flete suele resolver el traslado de uno o varios objetos puntuales. Una mudanza, en cambio, suele involucrar los muebles y pertenencias de una vivienda, oficina o local. El alcance concreto se define al cotizar.
          </p>

          <h2>Cuándo consultar por un flete</h2>
          <p>
            Si necesitás mover un mueble, un electrodoméstico o una carga específica, describí qué es, sus medidas aproximadas, el origen y el destino. Indicá también si necesitás ayuda para cargar y descargar.
          </p>
          <p>
            Conocé el servicio de{" "}
            <Link href="/fletes">fletes en Córdoba</Link>.
          </p>

          <h2>Cuándo consultar por una mudanza</h2>
          <p>
            Si trasladás muebles y pertenencias de una casa, departamento, oficina o local, detallá el volumen y las condiciones de acceso de ambos domicilios. Mencioná la fecha y si necesitás protección de muebles o embalaje.
          </p>
          <p>
            Movibox realiza{" "}
            <Link href="/mudanzas">mudanzas en Córdoba Capital y provincia</Link>.
            Para traslados entre localidades o provincias, consultá también la página de{" "}
            <Link href="/mudanzas-larga-distancia">mudanzas de larga distancia</Link>.
          </p>

          <h2>Qué información tener lista</h2>
          <ul>
            <li>Origen, destino y fecha tentativa.</li>
            <li>Lista y cantidad aproximada de los objetos.</li>
            <li>Escaleras, ascensor, distancia de carga y otros accesos.</li>
            <li>Si necesitás ayudantes, protección de muebles o embalaje.</li>
          </ul>
          <p>
            Si necesitás guardar muebles entre una salida y otra, consultá el{" "}
            <Link href="/guardamuebles">servicio de guardamuebles</Link>.
          </p>
        </div>
      </article>
    </main>
  );
}
