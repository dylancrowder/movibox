import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Truck,
  Star,
  ChevronDown,
} from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import HeroButtons from "@/components/HeroButtons";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import wsp from "@/public/images/iconos/whatsapp.webp";

export const metadata: Metadata = {
  title: "Mudanzas de larga distancia | Movibox",
  description:
    "Mudanzas de larga distancia entre provincias y dentro de Argentina. Traslado de casas, departamentos, oficinas y muebles. Cotización gratuita por WhatsApp.",
  alternates: {
    canonical: "https://www.movibox.com.ar/mudanzas-larga-distancia",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Mudanzas de larga distancia | Presupuesto gratis",
    description:
      "Mudanzas entre provincias y dentro de Argentina. Coordinamos carga, traslado y descarga. Pedí tu presupuesto gratis por WhatsApp.",
    url: "https://www.movibox.com.ar/mudanzas-larga-distancia",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Camión de Movibox para mudanzas de larga distancia",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.movibox.com.ar/mudanzas-larga-distancia#webpage",
      name: "Mudanzas de larga distancia",
      description:
        "Mudanzas de larga distancia entre provincias y dentro de Argentina. Traslado de casas, departamentos, oficinas y muebles. Cotización gratuita por WhatsApp.",
      url: "https://www.movibox.com.ar/mudanzas-larga-distancia",
      primaryImageOfPage:
        "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=1200&height=630",
    },
    {
      "@type": "Service",
      "@id":
        "https://www.movibox.com.ar/mudanzas-larga-distancia#residential-moving",
      name: "Mudanzas residenciales de larga distancia",
      description:
        "Servicio de mudanzas de larga distancia para casas y departamentos. Coordinamos carga, protección, traslado y descarga según el origen y destino.",
      serviceType: "Mudanzas residenciales",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany",
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "Service",
      "@id":
        "https://www.movibox.com.ar/mudanzas-larga-distancia#commercial-moving",
      name: "Mudanzas comerciales de larga distancia",
      description:
        "Mudanzas de oficinas, locales y equipamiento comercial entre provincias y dentro de Argentina.",
      serviceType: "Mudanzas comerciales",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany",
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/mudanzas-larga-distancia#freight-service",
      name: "Traslados y fletes de larga distancia",
      description:
        "Traslado de muebles, electrodomésticos, cajas y cargas puntuales a larga distancia, entre provincias y dentro de Argentina.",
      serviceType: "Fletes",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany",
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "MovingCompany",
      "@id": "https://www.movibox.com.ar/#movingcompany",
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
          name: "Mudanzas de larga distancia",
          item: "https://www.movibox.com.ar/mudanzas-larga-distancia",
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
      title: "Protección y embalaje",
      description:
        "Llevamos mantas, film, cajas, fajas y herramientas para proteger y trasladar tus pertenencias con seguridad.",
      href: null,
    },
    {
      icon: Clock,
      title: "Puntualidad garantizada",
      description:
        "Llegamos a la hora acordada. Sin demoras ni sorpresas.",
      href: null,
    },
    {
      icon: ShieldCheck,
      title: "Cuidado profesional",
      description:
        "Protegemos tus muebles y pertenencias con máxima responsabilidad.",
      href: null,
    },
    {
      icon: ShieldCheck,
      title: "Seguro contra accidentes personales",
      description:
        "Contamos con cobertura de seguros para accidentes personales durante la mudanza, para mayor tranquilidad y responsabilidad.",
      href: null,
    },
    {
      icon: ShieldCheck,
      title: "Seguro opcional",
      description:
        "Podés sumar un seguro al traslado para contar con mayor tranquilidad durante el viaje.",
      href: null,
    },
    {
      icon: CheckCircle2,
      title: "Precio exacto",
      description:
        "Te decimos el valor antes de comenzar. Sin sorpresas.",
      href: "/precios-mudanzas",
    },
  ];

  const faqItems = [
    {
      question: "¿Cuánto cuesta una mudanza de larga distancia?",
      answer:
        "Las mudanzas de larga distancia se cotizan según origen, destino, cantidad de pertenencias, volumen, fecha y necesidades de carga y descarga. Te damos un presupuesto antes de reservar.",
    },
    {
      question: "¿La cotización tiene costo?",
      answer:
        "No. La cotización es gratuita. Nos pasás los datos del viaje y te respondemos por WhatsApp.",
    },
    {
      question: "¿Qué días realizan mudanzas?",
      answer:
        "Coordinamos mudanzas según disponibilidad, incluyendo fines de semana y feriados.",
    },
    {
      question: "¿La carga y descarga están incluidas?",
      answer:
        "La carga y descarga se coordinan según las condiciones de cada traslado. Indicános si hay escaleras, ascensor o alguna dificultad de acceso para incluirlo en la cotización.",
    },
    {
      question: "¿Desarman y arman muebles?",
      answer:
        "Sí, podemos coordinar desmontaje y armado de muebles cuando el servicio lo requiere.",
    },
    {
      question: "¿Protegen los muebles durante el viaje?",
      answer:
        "Sí. Utilizamos elementos de protección para reducir riesgos durante la carga, traslado y descarga. El embalaje especial puede cotizarse según lo que necesites.",
    },
    {
      question: "¿Cómo se calcula el presupuesto?",
      answer:
        "Consideramos distancia, volumen, fecha, accesos y servicios adicionales. Por eso necesitamos conocer origen y destino antes de darte un precio.",
    },
    {
      question: "¿A qué destinos realizan mudanzas?",
      answer:
        "Realizamos mudanzas entre provincias y dentro de Argentina. La disponibilidad y el presupuesto dependen del origen, destino, fecha y volumen.",
    },
    {
      question: "¿Pueden viajar entre provincias?",
      answer:
        "Sí. Coordinamos viajes largos entre distintas provincias, sujeto a disponibilidad y coordinación previa.",
    },
    {
      question: "¿Realizan mudanzas de oficinas?",
      answer:
        "Sí, podemos coordinar mudanzas de oficinas, locales y equipamiento comercial a larga distancia.",
    },
    {
      question: "¿Qué información necesitan para cotizar?",
      answer:
        "Origen, destino, fecha aproximada y una descripción o fotos de lo que necesitás trasladar. También es importante indicar escaleras, ascensor y accesos si corresponde.",
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
            src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fd3a2d7e220454406b3a2fa6ac186b834?format=webp&width=800&height=1200"
            alt="Camión de Movibox para mudanzas de larga distancia"
            fill
            className="object-cover object-center md:hidden"
            priority
            unoptimized
            sizes="100vw"
          />

          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=800&height=1200"
            alt="Camión de Movibox para mudanzas de larga distancia"
            fill
            className="hidden object-cover object-center md:left-1/2 md:block md:w-1/2"
            priority
            quality={70}
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/35 md:to-black/20" />

          <div className="container relative z-10 px-4 pb-24 pt-16 md:px-6">

            <div className="flex flex-col items-center text-center md:w-7/12 md:items-start md:text-left">

              <div className="space-y-6 md:max-w-3xl">

                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary-300/40 bg-secondary-500/20 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-secondary-100">
                  Servicio de larga distancia
                </span>

                <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
                  Mudanzas de larga distancia
                  <br />
                  <span className="text-secondary-400">
                    Entre provincias y dentro de Argentina.
                  </span>
                </h1>

                <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                  Coordinamos carga, protección, traslado y descarga de casas,
                  departamentos, oficinas y muebles. Decinos origen, destino y fecha:
                  te enviamos un presupuesto claro y sin cargo.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start md:items-center">
                  <HeroButtons
                    whatsappMessage="Hola 👋, quería consultar por una mudanza de larga distancia."
                  />
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
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
                Por qué elegirnos
              </span>

              <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
                Todo listo para el traslado
              </h2>

              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Nos encargamos de principio a fin. Presupuesto rápido y
                atención por WhatsApp según tu origen y destino.
              </p>
            </ScrollAnimation>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">

              {benefits.map((benefit, index) => {

                const card = (
                  <article className="h-full rounded-md border border-neutral-300 bg-white p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1">

                    <div className="rounded-full bg-secondary-500 w-fit p-3 text-white mb-4">
                      <benefit.icon className="h-6 w-6" />
                    </div>

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
                        aria-label="Ver precios de mudanzas"
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
                Realizamos mudanzas y fletes con un servicio pensado para que
                tu traslado sea simple y sin complicaciones.
              </p>

            </ScrollAnimation>

            <div className="max-w-3xl mx-auto">

              <ScrollAnimation animation="fade-up">

                <article className="rounded-md border border-neutral-300 shadow-card hover:shadow-card-hover transition">

                  <div className="relative aspect-[903/763] w-full bg-neutral-100">

                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F676ba5d5151c479483d7f7ad5e3444af?format=webp&width=800&height=1200"
                      alt="Camión de Movibox para viajes largos y mudanzas"
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                  </div>

                  <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50">

                    <h3 className="text-sm text-neutral-600 font-semibold uppercase tracking-wide mb-4">
                      Nos ocupamos de que tus pertenencias lleguen en perfecto
                      estado.
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
                          Herramientas adecuadas para cada mudanza
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
                        href="https://wa.me/5493512586221?text=Hola%20%F0%9F%91%8B%2C%20quer%C3%ADa%20consultar%20por%20una%20mudanza%20de%20larga%20distancia."
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
                    "Nos escribís por WhatsApp y nos indicás ciudad de origen, destino, fecha aproximada y qué necesitás trasladar.",
                },
                {
                  step: "2",
                  title: "Coordinamos tu mudanza",
                  description:
                    "Analizamos el traslado, te pasamos el presupuesto y coordinamos día y horario.",
                },
                {
                  step: "3",
                  title: "Realizamos el traslado",
                  description:
                    "Llegamos en la fecha acordada, cargamos, protegemos y trasladamos tus pertenencias hasta el destino.",
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
            DATOS PARA COTIZAR
        ====================================================== */}

        <section className="bg-white py-16 sm:py-24 overflow-x-hidden">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <ScrollAnimation animation="fade-up" className="text-center space-y-5 mb-12">
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
                Cotización rápida
              </span>
              <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
                Decinos de dónde a dónde te mudás
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Para cotizar un viaje largo necesitamos origen, destino, fecha aproximada
                y una descripción de lo que vas a trasladar.
              </p>
            </ScrollAnimation>

            <div className="grid gap-5 md:grid-cols-4">
              {[
                ["01", "Origen", "Ciudad y localidad desde donde cargamos."],
                ["02", "Destino", "Ciudad y localidad donde descargamos."],
                ["03", "Fecha", "Día aproximado en el que necesitás viajar."],
                ["04", "Carga", "Muebles, cajas, electrodomésticos y demás pertenencias."],
              ].map(([number, title, description]) => (
                <ScrollAnimation key={number} animation="fade-up">
                  <article className="h-full rounded-md border border-neutral-300 bg-neutral-50 p-6">
                    <div className="text-sm font-black text-secondary-600 mb-3">{number}</div>
                    <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
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
        ¿Necesitás una mudanza de larga distancia?
      </h2>

      <p className="text-lg leading-relaxed text-white/90 max-w-2xl mx-auto">
        Pasanos origen, destino y fecha aproximada. Te enviamos tu presupuesto sin compromiso.
      </p>

      <div className="flex justify-center pt-2">

        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="w-full sm:w-auto"
        >

          <WhatsAppConversionLink
            href="https://wa.me/5493512586221?text=Hola%20%F0%9F%91%8B%2C%20quer%C3%ADa%20consultar%20por%20una%20mudanza%20de%20larga%20distancia."
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
        📞 351 258-6221 · Respondemos rápido
      </p>

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
