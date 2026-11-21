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
import { Breadcrumb } from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import HeroButtons from "@/components/HeroButtons";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import { VehicleImageCarousel } from "@/components/vehicle-image-carousel";

const pageUrl = "https://www.movibox.com.ar/fletes";
const whatsappMessage =
  "Hola, quería consultar por un flete. ¿Me pasan un presupuesto?";

export const metadata: Metadata = {
  title: "Fletes y Minifletes en Córdoba | Movibox",
  description:
    "Traslados en Córdoba para objetos puntuales, muebles y cargas de distintos tamaños. Consultá por un ayudante para carga y descarga.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Fletes y Minifletes en Córdoba | Movibox",
    description:
      "Coordinamos traslados en Córdoba para cargas chicas o voluminosas. También podés sumar un ayudante para carga y descarga.",
    images: [
      "https://www.movibox.com.ar/images/header/flota.webp",
    ],
  },
  openGraph: {
    type: "website",
    title: "Fletes y Minifletes en Córdoba | Movibox",
    description:
      "Coordinamos traslados en Córdoba para cargas chicas o voluminosas. También podés sumar un ayudante para carga y descarga.",
    url: pageUrl,
    images: [
      {
        url: "https://www.movibox.com.ar/images/header/flota.webp",

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
      primaryImageOfPage: "https://www.movibox.com.ar/images/header/flota.webp",
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
    text: "Excelente el servicio. Los chicos cargaron y embalaron todo con mucho cuidado.",
    rating: 5,
    image: "/images/reviews/fotogoogle.png",
    googleUrl: "https://maps.app.goo.gl/PsUtQbGTV6SiYhsG9",
  },
  {
    name: "Pedro César Costa",
    text: "Excelente, muy rápido y eficiente. Trataron todo con mucho cuidado.",
    rating: 5,
    image: "/images/reviews/fp.png",
    googleUrl: "https://maps.app.goo.gl/FUxGnmCGp4zV8smr8",
  },
];

const loads = [
  {
    title: "Electrodomésticos",
    description: "Heladeras, lavarropas y cocinas.",
    image: "/images/fletes/fiorinocargada.jpeg",
    alt: "Carga de electrodomésticos para su traslado",
  },
  {
    title: "Muebles",
    description: "Sillones, camas, mesas y placares.",
    image: "https://images.pexels.com/photos/7464722/pexels-photo-7464722.jpeg?auto=compress&cs=tinysrgb&w=640",
    alt: "Traslado de un sillón",
  },
  {
    title: "Compras",
    description: "Trasladamos productos adquiridos en comercios.",
    image: "/images/webimages/pexels-tima-miroshnichenko-6169181.webp",
    alt: "Preparación de una entrega de compras",
  },
  {
    title: "Mercadería",
    description: "Cajas, bultos y cargas comerciales.",
    image: "/images/webimages/hombre_subiendo_caja.webp",
    alt: "Carga de cajas para su traslado",
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta contratar un flete?",
    answer: "El costo depende de la modalidad y las características del trabajo. Escribinos con los detalles para pedir un presupuesto.",
  },
  {
    question: "¿Cómo se cotiza el precio por hora?",
    answer: "En los trabajos por hora, el tiempo del servicio determina el costo. Contanos qué necesitás para consultar.",
  },
  {
    question: "¿Cómo se cotiza por traslado?",
    answer: "Consideramos el origen, el destino, el tipo de carga y las características del trabajo.",
  },
  {
    question: "¿Puedo contratar ayudantes?",
    answer: "Sí, podés solicitar ayudantes para cargar y descargar, según las necesidades de cada trabajo.",
  },
  {
    question: "¿Qué tipo de objetos transportan?",
    answer: "Trasladamos heladeras, lavarropas, cocinas, muebles, compras de comercios, cajas, bultos y cargas comerciales.",
  },
  {
    question: "¿Realizan fletes dentro de Córdoba Capital?",
    answer: "Sí, realizamos fletes en Córdoba Capital. Consultanos por tu recorrido.",
  },
  {
    question: "¿Puedo solicitar un flete para una compra?",
    answer: "Sí, trasladamos compras de muebles y electrodomésticos desde comercios.",
  },
  {
    question: "¿Cómo puedo consultar disponibilidad?",
    answer: "Escribinos por WhatsApp con el origen, destino y lo que necesitás trasladar.",
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
            src="/images/header/flota.webp"
            alt="Vehículo de Movibox preparado para realizar fletes"
            fill
            className="object-cover object-center md:hidden"
            priority
            unoptimized
            sizes="100vw"
          />
          <Image
            src="/images/header/flota.webp"
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
                <Breadcrumb items={[]} currentPage="Fletes" inverted />

                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90">
                  Fletes y minifletes en Córdoba
                </span>

                <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
                  Fletes y minifletes
                  <br />
                  <span className="text-secondary-400">
                    en Córdoba
                  </span>
                </h1>

                <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                  Trasladamos muebles, electrodomésticos, compras y mercadería. Con chofer incluido y ayudantes según lo que necesites trasladar.
                </p>

                <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-start md:items-center [&_a]:h-auto [&_a]:min-h-12 [&_a]:whitespace-normal [&_a]:px-4">
                  <HeroButtons
                    whatsappMessage={whatsappMessage}
                    whatsappLabel="Solicitar presupuesto por WhatsApp"
                  />
                </div>

                <p className="text-xs text-white/70">
                  Chofer incluido · Ayudante opcional
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
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Una opción para cada tipo de carga
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {loads.map((item, index) => (
                <ScrollAnimation
                  key={item.title}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <article className="h-full overflow-hidden rounded-md border border-neutral-300 bg-white text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="relative aspect-[4/3] bg-neutral-100">
                      <Image src={item.image} alt={item.alt} fill unoptimized={item.image.startsWith("https://")} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-semibold text-primary">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
                    </div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <ScrollAnimation animation="fade-up" className="mb-12 space-y-6 text-center">
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">¿Cómo cotizamos tu flete?</h2>
              <p className="mx-auto max-w-2xl text-neutral-600">Cotizamos tu flete según las características de cada trabajo.</p>
            </ScrollAnimation>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <ScrollAnimation animation="fade-up">
                <article className="h-full rounded-md border border-neutral-300 bg-white p-8 shadow-card">
                  <Clock3 className="mb-6 h-12 w-12 text-secondary-500" />
                  <h3 className="mb-3 text-xl font-semibold text-primary">Por hora</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">Ideal para trabajos donde el tiempo de servicio determina el costo.</p>
                </article>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={100}>
                <article className="h-full rounded-md border border-neutral-300 bg-white p-8 shadow-card">
                  <MapPin className="mb-6 h-12 w-12 text-secondary-500" />
                  <h3 className="mb-3 text-xl font-semibold text-primary">Por traslado</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">Cotizamos según el origen, el destino, el tipo de carga y las características del trabajo.</p>
                </article>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animation="fade-up" className="mt-8">
              <article className="rounded-md border border-neutral-300 bg-primary-50 p-8 text-center">
                <UsersRound className="mx-auto mb-4 h-10 w-10 text-secondary-500" />
                <h3 className="mb-3 text-xl font-semibold text-primary">Ayudantes según lo que necesites</h3>
                <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-600">Podés contratar el traslado con chofer o solicitar ayudantes para cargar y descargar, dependiendo de las necesidades de cada trabajo.</p>
              </article>
            </ScrollAnimation>
          </div>
        </section>

        <section className="overflow-x-hidden bg-white py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <ScrollAnimation
              animation="fade-up"
              className="mb-16 space-y-6 text-center"
            >
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Nuestro vehículo
              </h2>
            </ScrollAnimation>

            <div className="mx-auto max-w-4xl">
              <ScrollAnimation animation="fade-up">
                <article className="overflow-hidden rounded-md border border-neutral-300 shadow-card transition hover:shadow-card-hover">
                  <VehicleImageCarousel />
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8">
                    <ul className="mb-6 space-y-3">
                      {[
                        "Vehículos para trasladar distintos tipos de carga",
                        "Carga protegida durante el viaje",
                        "Chofer incluido; ayudante opcional",
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
                      className="h-auto min-h-12 w-full whitespace-normal px-4 py-2 text-center"
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

        <section className="bg-primary-50 py-16 sm:py-32">
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

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Nos contás qué necesitás",
                  description: "Compartinos qué necesitás trasladar.",
                  icon: PackageCheck,
                },
                {
                  step: "2",
                  title: "Evaluamos y cotizamos",
                  description: "Consideramos origen, destino, tipo de carga y si necesitás ayudantes para pasarte un presupuesto.",
                  icon: MapPin,
                },
                {
                  step: "3",
                  title: "Coordinamos el traslado",
                  description: "Coordinamos el servicio y realizamos el traslado acordado.",
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
