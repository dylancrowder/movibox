import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Star,
  Truck,
  UsersRound,
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
  title: "Mudanzas en Córdoba Capital y Provincia | Movibox",
  description:
    "Empresa de mudanzas en Córdoba para casas, departamentos y oficinas. Camión, ayudantes y protección de muebles. Coordiná tu presupuesto por WhatsApp.",
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
      "https://www.movibox.com.ar/images/header/flota.webp",
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
        url: "https://www.movibox.com.ar/images/header/flota.webp",
        alt: "Flota de Movibox para mudanzas en Córdoba",
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
      primaryImageOfPage: "https://www.movibox.com.ar/images/header/flota.webp",
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
      icon: Truck,
      title: "Camión para el traslado",
      description: "Un vehículo de Movibox destinado a realizar la mudanza acordada.",
    },
    {
      icon: UsersRound,
      title: "Carga y descarga",
      description: "Personal para acompañar las tareas de carga y descarga de tus pertenencias.",
    },
    {
      icon: ShieldCheck,
      title: "Protección de muebles",
      description: "Mantas, film, fajas y herramientas para proteger y sujetar los muebles durante el traslado.",
    },
    {
      icon: PackageCheck,
      title: "Organización del servicio",
      description: "Coordinamos origen, destino, fecha y detalles del traslado antes de comenzar.",
    },
    {
      icon: MessageCircle,
      title: "Coordinación directa",
      description: "Podés consultar y coordinar los detalles de tu mudanza por WhatsApp.",
    },
  ];

  const faqItems = [
    {
      question: "¿Qué incluye el servicio de mudanza?",
      answer: "Incluye camión, personal para carga y descarga, organización del traslado y protección de muebles con mantas, film, fajas y herramientas.",
    },
    {
      question: "¿Los ayudantes están incluidos?",
      answer: "Sí, el servicio contempla personal para la carga y descarga. Coordinamos el trabajo según lo que necesitás trasladar.",
    },
    {
      question: "¿Cómo se calcula el precio?",
      answer: "En Córdoba Capital hay una tarifa por hora. Para otros recorridos, el presupuesto se define según el trayecto y las características de la mudanza.",
    },
    {
      question: "¿El presupuesto tiene algún compromiso?",
      answer: "El presupuesto es sin compromiso. Si decidís avanzar, coordinamos la fecha y el alcance del servicio.",
    },
    {
      question: "¿Cómo se coordina la fecha?",
      answer: "Escribinos por WhatsApp con la fecha que tenés en mente, el origen, el destino y qué necesitás trasladar para coordinar el servicio.",
    },
    {
      question: "¿Realizan mudanzas dentro y fuera de Córdoba?",
      answer: "Sí, trabajamos en Córdoba Capital y distintas localidades de la provincia. Consultanos por tu recorrido.",
    },
    {
      question: "¿Cómo protegen los muebles durante el traslado?",
      answer: "Usamos mantas, film, fajas y herramientas para proteger y sujetar los muebles durante la mudanza.",
    },
    {
      question: "¿Cuánto tiempo puede durar una mudanza?",
      answer: "Depende del volumen, el recorrido y las condiciones de acceso. Al pedir el presupuesto, contanos esos detalles para coordinar mejor.",
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
            src="/images/header/flota.webp"
            alt="Vehículos de Movibox para realizar mudanzas"
            fill
            className="object-cover object-center md:left-1/2 md:w-1/2"
            priority
            unoptimized
            sizes="(min-width: 768px) 50vw, 100vw"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="container relative z-10 px-4 pb-24 pt-16 md:px-6">

            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">

              <div className="space-y-6 md:max-w-2xl">
                <Breadcrumb items={[]} currentPage="Mudanzas" inverted />
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90">
                  Casas · Departamentos · Oficinas
                </span>
                  
                <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
                   <span className="text-secondary-400">
                    Mudanzas
                  </span> en Córdoba
                  <br />
                
                </h1>
                <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                  Nos encargamos de organizar tu mudanza, con camión, ayudantes y protección para tus muebles. Vos no tenés que preocuparte por nada.
                </p>
                <p className="text-sm leading-relaxed text-white/80">
                  Trabajamos en Córdoba Capital y localidades de la provincia. Coordinamos cada detalle directamente por WhatsApp.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start md:items-center [&_a]:h-auto [&_a]:min-h-12 [&_a]:whitespace-normal [&_a]:px-4">
                  <HeroButtons
                    whatsappMessage="Hola, quiero solicitar un presupuesto para una mudanza. Origen: ... Destino: ... Fecha: ..."
                    whatsappLabel="Solicitar presupuesto por WhatsApp"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/90 md:justify-start">
                  <span>Camión para el traslado</span>
                  <span>Personal para carga y descarga</span>
                  <span>Protección de muebles</span>
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


        {/* =====================================================
            POR QUÉ ELEGIRNOS
        ====================================================== */}

        <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">

          <div className="container px-4 md:px-6 text-center max-w-7xl mx-auto">

            <ScrollAnimation
              animation="fade-up"
              className="space-y-6 mb-20"
            >
              <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
                Servicio de mudanza
              </span>
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Qué incluye tu mudanza
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
                Organizamos el traslado para que sepas qué esperar desde el primer contacto hasta la descarga.
              </p>
            </ScrollAnimation>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">

              {benefits.map((benefit, index) => (
                <ScrollAnimation
                  key={benefit.title}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <article className="h-full rounded-md border border-neutral-300 bg-white p-8 text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                    <benefit.icon className="mb-6 h-12 w-12 text-secondary-500" />
                    <h3 className="mb-3 text-lg font-semibold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {benefit.description}
                    </p>
                  </article>
                </ScrollAnimation>
              ))}

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
                Fotos reales de nuestros vehículos
              </span>

              <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
                Vehículos de Movibox
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
                          Mantas, film, fajas y herramientas para proteger y sujetar muebles
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

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Nos contactás por WhatsApp",
                  description: "Iniciamos la conversación para conocer qué necesitás.",
                  icon: MessageCircle,
                },
                {
                  step: "2",
                  title: "Nos contás los detalles",
                  description: "Compartinos qué trasladás, el origen, el destino y la fecha.",
                  icon: PackageCheck,
                },
                {
                  step: "3",
                  title: "Presupuestamos y coordinamos",
                  description: "Te enviamos el presupuesto y coordinamos la fecha del servicio.",
                  icon: CalendarDays,
                },
                {
                  step: "4",
                  title: "Realizamos la mudanza",
                  description: "Hacemos la carga, el traslado y la descarga según lo coordinado.",
                  icon: Truck,
                },
              ].map((item) => (

                <ScrollAnimation
                  key={item.step}
                  animation="fade-up"
                >

                  <article className="h-full rounded-md border-2 border-primary-700 bg-white p-6 sm:p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1">

                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500 text-lg font-bold text-white">
                      {item.step}
                    </div>
                    <item.icon className="mx-auto mb-4 h-6 w-6 text-secondary-500" />
                    <h3 className="mb-3 text-xl font-semibold text-primary">
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

      <section className="bg-white py-16 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="mb-12 space-y-6 text-center">
            <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">Presupuesto previo</span>
            <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">Precios y presupuestos claros</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">El costo se define según el recorrido y las características de la mudanza. Te compartimos el presupuesto antes de realizar el servicio.</p>
          </ScrollAnimation>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <article className="rounded-md border border-neutral-300 bg-neutral-100 p-8 text-center shadow-card">
              <Clock3 className="mx-auto mb-4 h-10 w-10 text-secondary-500" />
              <h3 className="mb-3 text-xl font-semibold text-primary">Dentro de Córdoba Capital</h3>
              <p className="mb-6 text-sm leading-relaxed text-neutral-600">Consultá la tarifa por hora vigente y qué contempla el servicio.</p>
              <Button asChild variant="primary" size="lg" className="w-full whitespace-normal sm:w-auto">
                <Link href="/precios-mudanzas">Ver precios de mudanzas</Link>
              </Button>
            </article>
            <article className="rounded-md border border-neutral-300 bg-neutral-100 p-8 text-center shadow-card">
              <MapPin className="mx-auto mb-4 h-10 w-10 text-secondary-500" />
              <h3 className="mb-3 text-xl font-semibold text-primary">Otras localidades</h3>
              <p className="mb-6 text-sm leading-relaxed text-neutral-600">El presupuesto se prepara según el recorrido y los detalles de tu mudanza.</p>
              <Button asChild variant="whatsapp" size="lg" className="w-full whitespace-normal sm:w-auto">
                <WhatsAppConversionLink href="https://wa.me/5493512586221?text=Hola%2C%20quiero%20consultar%20un%20presupuesto%20para%20una%20mudanza%20fuera%20de%20C%C3%B3rdoba%20Capital.%20Origen%3A%20...%20Destino%3A%20...">
                  <Image src={wsp} alt="WhatsApp" width={28} height={28} />
                  Solicitar presupuesto
                </WhatsAppConversionLink>
              </Button>
            </article>
          </div>
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

        <section className="bg-gradient-to-b from-primary-700 to-primary-800 py-16 text-white sm:py-24">
          <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
            <ScrollAnimation animation="fade-up" className="space-y-7">
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">¿Listo para organizar tu mudanza?</h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">Contanos origen, destino y qué necesitás trasladar. Te enviamos el presupuesto y coordinamos por WhatsApp.</p>
              <Button asChild variant="whatsapp" size="lg" className="h-auto min-h-12 w-full whitespace-normal px-4 sm:w-auto">
                <WhatsAppConversionLink href="https://wa.me/5493512586221?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto%20para%20una%20mudanza.%20Origen%3A%20...%20Destino%3A%20...%20Fecha%3A%20..." className="flex items-center gap-3">
                  <Image src={wsp} alt="WhatsApp" width={28} height={28} />
                  Solicitar presupuesto por WhatsApp
                </WhatsAppConversionLink>
              </Button>
            </ScrollAnimation>
          </div>
        </section>

      </article>
    </>
  );
}
