import type { Metadata } from "next";
import Image from "next/image";

import {
  Clock3,
  MapPin,
  PackageCheck,
  Star,
  Truck,
  UsersRound,
} from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import HeroButtons from "@/components/HeroButtons";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";

const pageUrl = "https://www.movibox.com.ar/fletes";
const whatsappMessage =
  "Hola, quería consultar por un flete o miniflete. ¿Me pasan un presupuesto?";

export const metadata: Metadata = {
  title: "Fletes y Minifletes en Córdoba | Movibox",
  description:
    "Traslados en Córdoba para objetos puntuales, muebles y cargas de distintos tamaños. Consultá por un ayudante para carga y descarga.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Fletes y Minifletes en Córdoba | Movibox",
    description:
      "Coordinamos traslados en Córdoba para cargas chicas o voluminosas. También podés sumar un ayudante para carga y descarga.",
    url: pageUrl,
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Servicio de fletes y minifletes de Movibox en Córdoba",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: "Fletes y minifletes en Córdoba",
      description:
        "Traslados en Córdoba para objetos puntuales, muebles y cargas de distintos tamaños, con opción de sumar un ayudante.",
      url: pageUrl,
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#fletes`,
      name: "Fletes y minifletes en Córdoba",
      description:
        "Traslados de objetos puntuales, muebles y cargas de distintos tamaños. El servicio incluye chofer y permite sumar un ayudante para carga y descarga.",
      serviceType: "Fletes y minifletes",
      areaServed: { "@type": "City", name: "Córdoba" },
      provider: { "@id": "https://www.movibox.com.ar/#movingcompany" },
      telephone: "+5493512586221",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://www.movibox.com.ar",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Flete",
          item: pageUrl,
        },
      ],
    },
  ],
};

const reviews = [
  {
    name: "Ludmila Bustos",
    text: "Excelente el servicio!!! Nos encantó, los chicos cargaron y embalaron todo con mucho cuidado. El camión un lujo, están muy bien preparados y se nota que tienen muchísima experiencia.\n\nMuchas gracias por todo 🙌🏻",
    rating: 5,
    image: "/images/reviews/fotogoogle.png",
    googleUrl: "https://maps.app.goo.gl/PsUtQbGTV6SiYhsG9",
  },
  {
    name: "Pedro César Costa",
    text: "Excelente, muy rápido, eficiente, el camión mucho espacio y los chicos trataron todo con mucho cuidado. Muy recomendable!!!",
    rating: 5,
    image: "/images/reviews/fp.png",
    googleUrl: "https://maps.app.goo.gl/FUxGnmCGp4zV8smr8",
  },
];

const highlights = [
  {
    title: "Para distintos traslados",
    description:
      "Desde una compra grande o un objeto puntual hasta muebles y cargas de mayor volumen.",
    icon: PackageCheck,
  },
  {
    title: "Coordinación flexible",
    description:
      "Consultamos disponibilidad y coordinamos día y horario según el recorrido y el tamaño de la carga.",
    icon: Clock3,
  },
  {
    title: "Ayuda para cargar",
    description:
      "El servicio incluye chofer. Si necesitás asistencia, podés sumar un ayudante para la carga y descarga.",
    icon: UsersRound,
  },
];

const faqs = [
  {
    question: "¿Qué diferencia hay entre un flete y un miniflete?",
    answer:
      "Coordinamos tanto traslados de objetos puntuales y compras grandes como cargas de mayor volumen. Te recomendamos la opción adecuada cuando nos cuentes qué necesitás llevar.",
  },
  {
    question: "¿Puedo agregar un ayudante?",
    answer:
      "Sí. El servicio incluye chofer y podés sumar un ayudante si necesitás apoyo para cargar o descargar. Lo incluimos en el presupuesto.",
  },
  {
    question: "¿Trasladan mascotas?",
    answer:
      "Sí, también trasladamos mascotas. Escribinos para contarnos qué mascota necesitás llevar y desde dónde hasta dónde, así coordinamos los detalles del viaje.",
  },
  {
    question: "¿Hay disponibilidad inmediata?",
    answer:
      "La disponibilidad depende del recorrido y el horario. Escribinos para coordinar el traslado; reservar con anticipación ayuda a asegurar el lugar.",
  },
  {
    question: "¿Cómo consulto disponibilidad y precio?",
    answer:
      "Escribinos por WhatsApp con el origen, el destino, qué necesitás trasladar y si querés sumar un ayudante. Te confirmamos disponibilidad y presupuesto.",
  },
];

export default function FletesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="flex min-h-screen flex-col overflow-x-hidden bg-white">
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-24">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fd3a2d7e220454406b3a2fa6ac186b834?format=webp&width=800&height=1200"
            alt="Vehículo de Movibox preparado para realizar fletes"
            fill
            className="object-cover object-center md:hidden"
            priority
            unoptimized
            sizes="100vw"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=800&height=1200"
            alt="Vehículo de Movibox preparado para realizar fletes"
            fill
            className="hidden object-cover object-center md:left-1/2 md:block md:w-1/2"
            priority
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="container relative z-10 px-4 pb-24 pt-16 md:px-6">
            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
              <div className="space-y-6 md:max-w-2xl">
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90">
                  Fletes y minifletes en Córdoba
                </span>

                <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
                  Fletes y minifletes
                  <br />
                  <span className="text-secondary-400">
                    Traslados a tu medida en Córdoba.
                  </span>
                </h1>

                <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                  Desde una compra voluminosa o un objeto puntual hasta muebles
                  y cargas de mayor tamaño, coordinamos el traslado según lo que
                  necesitás llevar. Si hace falta, podés sumar un ayudante para
                  la carga y descarga.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start md:items-center">
                  <HeroButtons
                    whatsappMessage={whatsappMessage}
                    whatsappLabel="Consultar por WhatsApp"
                  />
                </div>

                <p className="text-xs text-white/70">
                  Atención directa · Chofer y ayudante opcional
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 text-center md:px-6">
            <ScrollAnimation
              animation="fade-up"
              className="mb-16 space-y-6"
            >
              <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
                Fletes y minifletes
              </span>
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Una opción para cada tipo de carga
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
                Coordinamos viajes para objetos individuales, compras, muebles y
                cargas de mayor volumen en Córdoba. También podés agregar un
                ayudante para la carga y descarga.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              {highlights.map((item, index) => (
                <ScrollAnimation
                  key={item.title}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <article className="h-full rounded-md border border-neutral-300 bg-white p-8 text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                    <item.icon className="mb-6 h-12 w-12 text-secondary-500" />
                    <h3 className="mb-3 text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-x-hidden bg-white py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <ScrollAnimation
              animation="fade-up"
              className="mb-16 space-y-6 text-center"
            >
              <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
                Nuestro vehículo
              </span>
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Un vehículo preparado para tus fletes
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Trasladamos muebles, compras y cargas puntuales con un servicio
                coordinado para que cada envío llegue a destino de forma segura.
              </p>
            </ScrollAnimation>

            <div className="mx-auto max-w-3xl">
              <ScrollAnimation animation="fade-up">
                <article className="overflow-hidden rounded-md border border-neutral-300 shadow-card transition hover:shadow-card-hover">
                  <div className="relative aspect-[903/763] w-full bg-neutral-100">
                    <Image
                      src="/images/camion/imagen_camion2.webp"
                      alt="Vehículo de Movibox para fletes y minifletes en Córdoba"
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-600">
                      Un vehículo versátil para trasladar distintos tipos de carga.
                    </h3>
                    <ul className="mb-6 space-y-3">
                      {[
                        "Espacio para muebles y cargas voluminosas",
                        "Traslado de objetos y compras puntuales",
                        "Carga sujeta y protegida durante el viaje",
                        "Chofer y ayudante opcional para carga y descarga",
                      ].map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <span className="mt-0.5 font-bold text-secondary-500">
                            ✓
                          </span>
                          <span className="text-sm text-neutral-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppConversionLink
                        href={`https://wa.me/5493512586221?text=${encodeURIComponent(whatsappMessage)}`}
                        className="flex items-center justify-center gap-3"
                      >
                        <Image
                          src="/images/iconos/whatsapp.webp"
                          alt="WhatsApp"
                          width={32}
                          height={32}
                        />
                        Solicitar presupuesto por WhatsApp
                      </WhatsAppConversionLink>
                    </Button>
                  </div>
                </article>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <ScrollAnimation
              animation="fade-up"
              className="mb-16 space-y-6 text-center"
            >
              <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
                Así de fácil
              </span>
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Coordiná tu traslado en tres pasos
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Nos contactás",
                  description:
                    "Contanos qué necesitás trasladar y desde dónde hasta dónde.",
                  icon: MapPin,
                },
                {
                  step: "2",
                  title: "Coordinamos",
                  description:
                    "Te confirmamos disponibilidad y coordinamos el horario del viaje.",
                  icon: Clock3,
                },
                {
                  step: "3",
                  title: "Hacemos el traslado",
                  description:
                    "Realizamos el flete con el chofer y el ayudante que hayas solicitado.",
                  icon: Truck,
                },
              ].map((item) => (
                <ScrollAnimation key={item.step} animation="fade-up">
                  <article className="h-full rounded-md border-2 border-primary-700 bg-white p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500 text-lg font-bold text-white">
                      {item.step}
                    </div>
                    <item.icon className="mx-auto mb-4 h-6 w-6 text-secondary-500" />
                    <h3 className="mb-3 text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-x-hidden bg-white py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <ScrollAnimation
              animation="fade-up"
              className="mb-16 space-y-4 text-center"
            >
              <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
                Reseñas en Google
              </span>
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Lo que dicen nuestros clientes
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
                Opiniones reales de clientes que confiaron en Movibox.
              </p>
            </ScrollAnimation>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {reviews.map((review, index) => (
                <ScrollAnimation
                  key={review.name}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <a
                    href={review.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver la reseña de ${review.name} en Google`}
                    className="group block h-full"
                  >
                    <article className="flex h-full flex-col rounded-md border border-neutral-300 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
                      <div className="mb-5 flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-5 w-5 fill-secondary-500 text-secondary-500"
                          />
                        ))}
                      </div>
                      <p className="mb-7 whitespace-pre-line text-sm leading-relaxed text-neutral-700 sm:text-base">
                        “{review.text}”
                      </p>
                      <div className="mt-auto flex items-center gap-4 border-t border-neutral-200 pt-5">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                          <Image
                            src={review.image}
                            alt={`Foto de ${review.name}`}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate font-bold text-primary">
                            {review.name}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-neutral-500">
                              Cliente de Movibox
                            </span>
                            <span className="text-neutral-300">·</span>
                            <span className="text-xs font-semibold text-secondary-700">
                              Reseña en Google
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 text-xs font-semibold text-secondary-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Ver reseña en Google →
                      </div>
                    </article>
                  </a>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation
              animation="fade-up"
              className="mt-12 flex justify-center"
            >
              <a
                href="https://share.google/HgF8uA5kwawwJXYdq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver todas las reseñas de Movibox en Google"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary-700 px-6 py-3 text-sm font-bold text-primary-700 transition hover:bg-primary-700 hover:text-white"
              >
                Ver todas nuestras reseñas en Google →
              </a>
            </ScrollAnimation>
          </div>
        </section>

        <section className="bg-gradient-to-b from-primary-700 to-primary-800 py-16 text-white sm:py-32">
          <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
            <ScrollAnimation animation="fade-up" className="space-y-7">
              <PackageCheck className="mx-auto h-12 w-12 text-secondary-400" />
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                ¿Necesitás coordinar un flete?
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
                Contanos qué necesitás trasladar y si querés sumar un
                ayudante. Coordinamos el servicio según disponibilidad.
              </p>
              <Button
                asChild
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              >
                <WhatsAppConversionLink
                  href={`https://wa.me/5493512586221?text=${encodeURIComponent(whatsappMessage)}`}
                  className="flex items-center justify-center gap-3"
                >
                  <Image
                    src="/images/iconos/whatsapp.webp"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                  />
                  Consultar por WhatsApp
                </WhatsAppConversionLink>
              </Button>
              <p className="pt-2 text-xs text-white/70">
                351 258-6221 · Atención directa
              </p>
            </ScrollAnimation>
          </div>
        </section>

        <section className="bg-neutral-100 py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <ScrollAnimation
              animation="fade-up"
              className="mb-16 space-y-6 text-center"
            >
              <h2 className="text-4xl font-black text-primary sm:text-5xl">
                Preguntas frecuentes
              </h2>
            </ScrollAnimation>
            <FAQ faqs={faqs} />
          </div>
        </section>
      </article>
    </>
  );
}
