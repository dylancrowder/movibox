import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";
import storageImage from "@/public/images/webimages/hombre-de-tiro-medio-trabajando-en-almacen.webp";

const SLUG = "cuando-usar-guardamuebles";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Cuándo conviene usar un guardamuebles | Movibox",
  description:
    "Situaciones en las que puede servir guardar muebles temporalmente: mudanzas, cambios de vivienda y reformas.",
  keywords: [
    "cuándo usar un guardamuebles",
    "guardar muebles durante una mudanza",
    "almacenamiento temporal de muebles",
    "guardamuebles para mudanza",
  ],
  ogImage: "/images/webimages/hombre-de-tiro-medio-trabajando-en-almacen.webp",
  ogImageAlt: "Muebles almacenados en un espacio de guardamuebles",
});

export default function WhenToUseStoragePage() {
  const jsonLd = blogPostJsonLd({
    slug: SLUG,
    headline: "Cuándo conviene usar un guardamuebles",
    description:
      "Situaciones en las que puede servir guardar muebles temporalmente y qué consultar antes de contratar.",
    image: "/images/webimages/hombre-de-tiro-medio-trabajando-en-almacen.webp",
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
            Guía de almacenamiento
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Cuándo conviene usar un guardamuebles
          </h1>
          <p className="mt-5 text-lg text-white/90">
            Un recurso para organizar una mudanza, una reforma o un cambio de vivienda.
          </p>
        </div>
      </header>

      <article className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
        <div className="mb-10">
          <Breadcrumb
            items={[{ label: "Blog", href: "/blog" }]}
            currentPage="Cuándo usar un guardamuebles"
          />
        </div>

        <Image
          src={storageImage}
          alt="Pertenencias almacenadas durante una mudanza"
          width={1200}
          height={675}
          className="mb-10 h-auto w-full rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <div className="prose prose-lg max-w-none">
          <p>
            Un guardamuebles puede ser útil cuando necesitás liberar espacio en una vivienda por un período y no podés llevar todos los muebles al destino final. Antes de contratar, calculá qué querés guardar, por cuánto tiempo y cuándo vas a necesitar acceder a tus cosas.
          </p>

          <h2>Entre dos viviendas</h2>
          <p>
            Si entregás las llaves de un alquiler antes de recibir la nueva vivienda, el almacenamiento mensual puede ayudar a resolver ese intervalo. Consultá el espacio disponible, las condiciones de acceso y cómo coordinar el traslado.
          </p>

          <h2>Durante una mudanza</h2>
          <p>
            Cuando el traslado se hace en etapas o las fechas de salida y entrada no coinciden, podés guardar muebles y pertenencias temporalmente. Si además necesitás trasladar tus cosas, consultá el alcance del servicio de{" "}
            <Link href="/mudanzas">mudanzas en Córdoba</Link>.
          </p>

          <h2>Mientras se hacen reformas</h2>
          <p>
            Retirar muebles de los ambientes de trabajo ayuda a despejar el espacio durante una refacción. Hacé un inventario de lo que querés guardar y confirmá que las condiciones del servicio se ajusten al plazo previsto.
          </p>

          <h2>Cómo decidir si te conviene</h2>
          <ol>
            <li>Armá una lista de muebles, electrodomésticos, herramientas y cajas.</li>
            <li>Estimá el volumen y compará los espacios disponibles.</li>
            <li>Confirmá el precio mensual, el plazo y las condiciones de acceso.</li>
            <li>Coordiná por separado cómo ingresarán los bienes al espacio.</li>
          </ol>
          <p>
            Movibox ofrece espacios cerrados para cada cliente en un galpón sectorizado, con contratación mensual. Podés consultar las{" "}
            <Link href="/guardamuebles">opciones de guardamuebles en Córdoba</Link>{" "}
            y sus precios publicados.
          </p>

          <div className="not-prose mt-10 rounded-xl bg-primary-50 p-6 text-center">
            <h2 className="text-2xl font-bold text-primary">
              Consultá por almacenamiento mensual
            </h2>
            <p className="mt-2 text-neutral-700">
              Contanos qué necesitás guardar y cuándo.
            </p>
            <WhatsAppConversionLink
              href="https://wa.me/5493512586221?text=Hola%2C%20quiero%20consultar%20por%20un%20guardamuebles."
              className="mt-5 inline-flex rounded-md bg-primary px-5 py-3 font-semibold text-white hover:bg-primary/90"
            >
              Escribir por WhatsApp
            </WhatsAppConversionLink>
          </div>
        </div>
      </article>
    </main>
  );
}
