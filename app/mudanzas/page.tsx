import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  PackageCheck,
  ShieldCheck,
  Star,
} from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import FAQ from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import HeroButtons from "@/components/HeroButtons";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import { VehicleImageCarousel } from "@/components/vehicle-image-carousel";
import wsp from "@/public/images/iconos/whatsapp.webp";

export const metadata: Metadata = {
  title: "Mudanzas en Córdoba Capital | Movibox",
  description:
    "Mudanzas en Córdoba Capital y provincia para casas, departamentos y oficinas. Camión, ayudantes para carga y descarga y cotizaciones por WhatsApp.",
  alternates: {
    canonical: "https://www.movibox.com.ar/mudanzas",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas en Córdoba Capital | Movibox",
    description:
      "Mudanzas de casas, departamentos y oficinas en Córdoba Capital y provincia. Consultá por WhatsApp.",
    images: [
      "https://www.movibox.com.ar/images/header/headerchacra.webp",
    ],
  },
  openGraph: {
    type: "website",
    title: "Mudanzas en Córdoba Capital y provincia | Movibox",
    description:
      "Mudanzas de casas, departamentos y oficinas en Córdoba Capital y provincia. Camión, ayudantes para carga y descarga y cotizaciones por WhatsApp.",
    url: "https://www.movibox.com.ar/mudanzas",
    images: [
      {
        url: "https://www.movibox.com.ar/images/header/headerchacra.webp",
        width: 1200,
        height: 800,
        alt: "Camión de mudanzas de Movibox Mudanzas en Córdoba",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.movibox.com.ar/mudanzas#webpage",
      name: "Mudanzas en Córdoba Capital y Provincia",
      description:
        "Mudanzas de casas, departamentos y oficinas en Córdoba Capital y provincia, con cotizaciones por WhatsApp.",
      url: "https://www.movibox.com.ar/mudanzas",
      primaryImageOfPage: "https://www.movibox.com.ar/images/header/headerchacra.webp",
    },
    {
      "@type": "Service",
      "@id":
        "https://www.movibox.com.ar/mudanzas#residential-moving",
      name: "Mudanzas Residenciales en Córdoba",
      description:
        "Mudanzas de casas y departamentos en Córdoba Capital y provincia, con camión y ayudantes para carga y descarga.",
      serviceType: "Mudanzas residenciales",
      areaServed: {
        "@type": "City",
        name: "Córdoba",
      },
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany",
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "Service",
      "@id":
        "https://www.movibox.com.ar/mudanzas#commercial-moving",
      name: "Mudanzas Comerciales en Córdoba",
      description:
        "Mudanzas de oficinas y locales en Córdoba Capital y provincia.",
      serviceType: "Mudanzas comerciales",
      areaServed: {
        "@type": "City",
        name: "Córdoba",
      },
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany",
      },
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
          name: "Mudanzas en Córdoba",
          item: "https://www.movibox.com.ar/mudanzas",
        },
      ],
    },
  ],
};

/* =========================================================
   RESEÑAS REALES DE GOOGLE
   ========================================================= */

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

export default function MudanzasPage() {
  const benefits = [
    {
      icon: PackageCheck,
      title: "Protección y embalaje",
      description:
        "Protegemos los muebles con mantas, fajas y cinchas. Consultá por separado si necesitás embalaje de objetos o pertenencias.",
      href: null,
    },
    {
      icon: Clock3,
      title: "Atención personalizada",
      description:
        "Coordinamos el alcance del servicio según el origen, el destino, la fecha y lo que necesitás trasladar.",
      href: null,
    },
    {
      icon: BadgeCheck,
      title: "Cuidado profesional",
      description:
        "Protegemos tus muebles y pertenencias con máxima responsabilidad.",
      href: null,
    },
    {
      icon: ShieldCheck,
      title: "Seguro contra accidentes personales",
      description:
        "El servicio contempla seguro contra accidentes personales.",
      href: null,
    },
    {
      icon: CircleDollarSign,
      title: "Presupuesto según tu traslado",
      description:
        "El precio depende del recorrido y de las características del servicio. Consultá las condiciones antes de reservar.",
      href: "/precios-mudanzas",
    },
  ];

  const faqItems = [
    {
      question: "¿Cuánto cuesta una mudanza?",
      answer:
        "La tarifa para mudanzas dentro de Córdoba Capital se publica por hora. Para otras localidades, el presupuesto depende del recorrido y del servicio.",
    },
    {
      question: "¿Qué información necesito para pedir una cotización?",
      answer:
        "Contanos la fecha, el origen y el destino, qué necesitás trasladar y las condiciones de acceso. Así podemos orientarte sobre el servicio.",
    },
    {
      question: "¿Cómo se protegen los muebles?",
      answer:
        "Usamos mantas, fajas y cinchas para proteger y sujetar muebles durante el traslado. Consultá si necesitás embalaje adicional.",
    },
    {
      question: "¿El embalaje está incluido?",
      answer:
        "No todos los servicios incluyen embalaje. Contanos qué objetos necesitás embalar para que se aclare en el presupuesto.",
    },
    {
      question: "¿Qué pasa si hay escaleras o accesos difíciles?",
      answer:
        "Incluí esa información al pedir la cotización para que se tenga en cuenta al definir el alcance del trabajo.",
    },
    {
      question: "¿Qué zonas cubren?",
      answer:
        "Atendemos Córdoba Capital y localidades de la provincia. También podés consultar por mudanzas de larga distancia.",
    },
    {
      question: "¿Realizan mudanzas de oficinas?",
      answer:
        "Sí, realizamos mudanzas de oficinas y locales comerciales.",
    },
    {
      question: "¿Pueden guardar los muebles temporalmente?",
      answer:
        "Sí. Consultá los espacios y la contratación mensual en nuestra página de guardamuebles.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <article className="flex min-h-screen flex-col bg-white overflow-x-hidden">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative flex min-h-screen items-center overflow-hidden overflow-x-hidden bg-black pt-24">

          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F09cb2742168f45e3860c636d19483011?format=webp&width=1200&height=1800"
            alt="Camión de mudanzas de Movibox Mudanzas"
            fill
            className="object-cover object-center md:left-1/2 md:w-1/2"
            priority
            quality={70}
            sizes="(min-width: 768px) 50vw, 100vw"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="container relative z-10 px-4 pb-24 pt-16 md:px-6">

            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">

              <div className="space-y-6 md:max-w-2xl">

                <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90 border border-white/20">
                  Mudanzas residenciales y comerciales
                </span>

                <h1 className="text-4xl font-black text-white sm:text-6xl leading-tight">
                  Mudanzas en Córdoba Capital
                  <br />
                  <span className="text-secondary-400">
                    Con ayudantes.
                  </span>
                </h1>

                <p className="text-lg text-white/90 sm:text-xl leading-relaxed">
                  Mudanzas de casas, departamentos, oficinas y locales en Córdoba Capital y provincia.
                </p>

                <p className="text-sm leading-relaxed text-white/80">
                  Trabajamos con camión y ayudantes para carga y descarga. Protegemos los muebles con mantas, fajas y cinchas; consultá por embalaje al pedir tu presupuesto.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start md:items-center">
                  <HeroButtons />
                </div>

              </div>
            </div>
          </div>

          <a
            href="#camion"
            aria-label="Ir a la sección del camión"
            className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
          >
            <ChevronDown className="h-10 w-10 animate-bounce text-white/60" />
          </a>

        </section>

        <div className="container mx-auto px-4 py-4 md:px-6">
          <Breadcrumb items={[]} currentPage="Mudanzas" />
        </div>

        {/* =====================================================
            POR QUÉ ELEGIRNOS
        ====================================================== */}

        <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">

          <div className="container px-4 md:px-6 text-center max-w-7xl mx-auto">

            <ScrollAnimation
              animation="fade-up"
              className="space-y-6 mb-20"
            >
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
                Por qué elegirnos
              </span>

              <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
                Todo listo para el traslado
              </h2>

              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Coordinamos el traslado según el volumen, los accesos, el recorrido y la fecha. Consultá por WhatsApp el alcance del servicio para tu mudanza.
              </p>
            </ScrollAnimation>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">

              {benefits.map((benefit, index) => {

                const card = (
                  <article className="h-full rounded-md border border-neutral-300 bg-white p-8 text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">

                    <benefit.icon className="mb-6 h-12 w-12 text-secondary-500" />

                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {benefit.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-neutral-600">
                      {benefit.description}
                    </p>

                  </article>
                );

                return (
                  <ScrollAnimation
                    key={benefit.title}
                    animation="fade-up"
                    delay={index * 100}
                  >
                    {benefit.href ? (
                      <Link
                        href={benefit.href}
                        className="block h-full"
                        aria-label="Consultar precios de mudanzas"
                      >
                        {card}
                      </Link>
                    ) : (
                      card
                    )}
                  </ScrollAnimation>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
            CAMIÓN
        ====================================================== */}

        <section
          id="camion"
          className="bg-white py-16 sm:py-32 overflow-x-hidden"
        >

          <div className="container px-4 md:px-6 max-w-7xl mx-auto">

            <ScrollAnimation
              animation="fade-up"
              className="text-center space-y-6 mb-16"
            >

              <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
                Nuestro camión
              </span>

              <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
                Camión equipado para tu mudanza
              </h2>

              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Contamos con camión para realizar mudanzas y traslados. Consultá qué servicio se adapta al volumen de tus pertenencias.
              </p>

            </ScrollAnimation>

            <div className="max-w-3xl mx-auto">

              <ScrollAnimation animation="fade-up">

                <article className="rounded-md border border-neutral-300 shadow-card hover:shadow-card-hover transition">

                  <VehicleImageCarousel initialIndex={1} />

                  <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50">

                    <h3 className="text-sm text-neutral-600 font-semibold uppercase tracking-wide mb-4">
                      Organizamos el traslado y tomamos recaudos para proteger tus muebles.
                    </h3>

                    <ul className="space-y-3 mb-6">

                      <li className="flex items-start gap-2">
                        <span className="text-secondary-500 font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm text-neutral-700">
                          Protección para tus muebles
                        </span>
                      </li>

                      <li className="flex items-start gap-2">
                        <span className="text-secondary-500 font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm text-neutral-700">
                          Mantas, fajas y cinchas para proteger y sujetar muebles
                        </span>
                      </li>

                      <li className="flex items-start gap-2">
                        <span className="text-secondary-500 font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm text-neutral-700">
                          Carga segura durante el traslado
                        </span>
                      </li>

                      <li className="flex items-start gap-2">
                        <span className="text-secondary-500 font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm text-neutral-700">
                          Cuidado en cada detalle
                        </span>
                      </li>

                    </ul>

                    <Button
                      asChild
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppConversionLink
                        href="https://wa.me/5493512586221?text=Hola%20%F0%9F%91%8B%2C%20quer%C3%ADa%20consultar%20por%20una%20mudanza.%20%C2%BFMe%20cuentan%20c%C3%B3mo%20trabajan%20y%20me%20pasan%20un%20presupuesto%3F"
                      >
                        <Image
                          src={wsp}
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

        {/* =====================================================
            PROCESO SIMPLE
        ====================================================== */}

        <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">

          <div className="container px-4 md:px-6 max-w-7xl mx-auto">

            <ScrollAnimation
              animation="fade-up"
              className="text-center space-y-6 mb-20"
            >
              <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
                Así trabajamos tu mudanza
              </h2>
            </ScrollAnimation>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">

              {[
                {
                  step: "1",
                  title: "Nos contactás",
                  description:
                    "Por WhatsApp o llamada. Nos contás origen, destino, qué necesitás trasladar y la fecha.",
                },
                {
                  step: "2",
                  title: "Coordinamos tu mudanza",
                  description:
                    "Revisamos el presupuesto y coordinamos fecha y horario si decidís avanzar.",
                },
                {
                  step: "3",
                  title: "Realizamos el traslado",
                  description:
                    "El equipo realiza la carga, el traslado y la descarga de acuerdo con lo coordinado.",
                },
              ].map((item) => (

                <ScrollAnimation
                  key={item.step}
                  animation="fade-up"
                >

                  <article className="h-full rounded-md border-2 border-primary-700 bg-white p-6 sm:p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1">

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-500 text-white font-bold text-lg mb-4">
                      {item.step}
                    </div>

                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>

                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </article>

                </ScrollAnimation>

              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            RESEÑAS DE CLIENTES
        ====================================================== */}

       {/* RESEÑAS DE CLIENTES */}
<section className="bg-white py-16 sm:py-32 overflow-x-hidden">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">

    {/* ENCABEZADO */}
    <ScrollAnimation
      animation="fade-up"
      className="text-center space-y-4 mb-16"
    >
      <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
        Reseñas en Google
      </span>

      <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
        Lo que dicen nuestros clientes
      </h2>

      <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
        Opiniones reales de clientes que confiaron en Movibox.
      </p>
    </ScrollAnimation>

    {/* TARJETAS DE RESEÑAS */}
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

      {reviews.map((review, index) => (
        <ScrollAnimation
          key={`${review.name}-${index}`}
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

            <article className="flex h-full flex-col rounded-md border border-neutral-300 bg-white p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer">

              {/* ESTRELLAS */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: review.rating }).map(
                  (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-5 w-5 fill-secondary-500 text-secondary-500"
                    />
                  )
                )}
              </div>

              {/* RESEÑA */}
              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 mb-7 whitespace-pre-line">
                “{review.text}”
              </p>

              {/* CLIENTE */}
              <div className="flex items-center gap-4 mt-auto pt-5 border-t border-neutral-200">

                {/* FOTO */}
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                  <Image
                    src={review.image}
                    alt={`Foto de ${review.name}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>

                {/* NOMBRE */}
                <div className="min-w-0">
                  <p className="font-bold text-primary truncate">
                    {review.name}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500">
                      Cliente de Movibox
                    </span>

                    <span className="text-neutral-300">
                      ·
                    </span>

                    <span className="text-xs font-semibold text-secondary-700">
                      Reseña en Google
                    </span>
                  </div>
                </div>

              </div>

              {/* INDICADOR AL PASAR EL MOUSE */}
              <div className="mt-5 text-xs font-semibold text-secondary-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Ver reseña en Google →
              </div>

            </article>

          </a>

        </ScrollAnimation>
      ))}

    </div>

    {/* BOTÓN PARA VER TODAS LAS RESEÑAS */}
    <ScrollAnimation
      animation="fade-up"
      className="flex justify-center mt-12"
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

        {/* =====================================================
            CTA PRINCIPAL
        ====================================================== */}

      <section className="bg-gradient-to-b from-primary-700 to-primary-800 py-16 sm:py-32 overflow-x-hidden text-white">
  <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">

    <ScrollAnimation
      animation="fade-up"
      className="space-y-7"
    >

      <h2 className="text-4xl font-black sm:text-5xl leading-tight">
        ¿Necesitás una mudanza?
      </h2>

      <p className="text-lg leading-relaxed text-white/90 max-w-2xl mx-auto">
        Escribinos por WhatsApp y te pasamos tu presupuesto sin compromiso.
      </p>

      <div className="flex justify-center pt-2">

        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="w-full sm:w-auto"
        >

          <WhatsAppConversionLink
            href="https://wa.me/5493512586221?text=Hola%20%F0%9F%91%8B%2C%20quer%C3%ADa%20consultar%20por%20una%20mudanza.%20%C2%BFMe%20pasan%20un%20presupuesto%3F"
            className="flex items-center gap-3"
          >

            <Image
              src={wsp}
              alt="WhatsApp"
              width={32}
              height={32}
            />

            Solicitar presupuesto por WhatsApp

          </WhatsAppConversionLink>

        </Button>

      </div>

      <p className="text-xs text-white/70 pt-2">
        📞 351 258-6221 · Consultas por WhatsApp
      </p>

    </ScrollAnimation>

  </div>
</section>

        {/* =====================================================
            GUARDAMUEBLES
        ====================================================== */}

        <section className="bg-secondary-50 py-16 sm:py-32 overflow-x-hidden">

          <div className="container mx-auto px-4 md:px-6 max-w-7xl">

            <ScrollAnimation
              animation="fade-up"
              className="text-center space-y-6 mb-12"
            >

              <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
                ¿También necesitás guardar tus muebles?
              </h2>

              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Si además de mudanza necesitás almacenamiento temporal o de
                largo plazo, consultá nuestro guardamuebles con espacios cerrados
                y contratación mensual.
              </p>

              <Button
                asChild
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/guardamuebles">
                  Conocer nuestro guardamuebles
                </Link>
              </Button>

            </ScrollAnimation>

          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="py-16 sm:py-32 bg-neutral-100 overflow-x-hidden">

          <div className="container px-4 md:px-6 max-w-7xl mx-auto">

            <ScrollAnimation
              animation="fade-up"
              className="text-center space-y-6 mb-20"
            >

              <h2 className="text-4xl font-black sm:text-5xl text-primary">
                Preguntas frecuentes
              </h2>

            </ScrollAnimation>

            <FAQ faqs={faqItems} />

          </div>
        </section>

      </article>
    </>
  );
}
