import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  Package,
  PackageCheck,
  Phone,
  Ruler,
  ShieldCheck,
  Sofa,
  Truck,
  Warehouse,
} from "lucide-react";

import FAQ from "@/components/FAQ";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";
import { ImageCarousel } from "@/components/image-carousel";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import {
  STORAGE_MONTHLY_PLANS,
  formatARS,
} from "@/lib/commercial-data";
import image_header from "@/public/galpon.webp";
import wsp from "@/public/images/iconos/whatsapp.webp";
import box from "@/public/images/guardamuebles/box.jpg";
import box2 from "@/public/images/guardamuebles/box2.jpeg";
export const metadata: Metadata = {
  title: "Alquiler de guardamuebles en Córdoba | Movibox",
  description:
    "Alquiler mensual de guardamuebles en Córdoba, en espacios cerrados dentro de un galpón sectorizado. Opciones de 5, 10 y 15 m³ para muebles y pertenencias.",
  alternates: {
    canonical: "https://www.movibox.com.ar/guardamuebles",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.movibox.com.ar/guardamuebles", // ⚠️ siempre absoluta
    title: "Alquiler de guardamuebles en Córdoba | Movibox",
    description:
      "Espacios cerrados en un galpón sectorizado, con contratación mensual para guardar muebles y pertenencias en Córdoba.",
    images: [
      {
        url: "https://www.movibox.com.ar/galpon.webp",
        width: 1200,
        height: 800,
        alt: "Galpón de guardamuebles de Movibox en Córdoba",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alquiler de guardamuebles en Córdoba | Movibox",
    description:
      "Espacios cerrados en un galpón sectorizado, con contratación mensual en Córdoba.",
    images: ["https://www.movibox.com.ar/galpon.webp"],
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://www.movibox.com.ar/guardamuebles#webpage",
      name: "Alquiler de guardamuebles en Córdoba",
      description:
        "Alquiler mensual de guardamuebles en Córdoba, en espacios cerrados dentro de un galpón sectorizado.",
      url: "https://www.movibox.com.ar/guardamuebles",
      primaryImageOfPage: "https://www.movibox.com.ar/galpon.webp"
    },

    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/guardamuebles#service",
      name: "Alquiler mensual de guardamuebles",
      serviceType: "Almacenamiento temporal de muebles y pertenencias",
      description:
        "Espacios cerrados para cada cliente en un galpón sectorizado en Córdoba.",
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany"
      },
      areaServed: {
        "@type": "City",
        name: "Córdoba Capital"
      },
      offers: STORAGE_MONTHLY_PLANS.map((plan) => ({
        "@type": "Offer",
        name: `Guardamuebles ${plan.volumeM3} m³ por mes`,
        price: plan.monthlyPriceARS,
        priceCurrency: "ARS",
        itemOffered: {
          "@type": "Service",
          name: `Espacio de guardamuebles de ${plan.volumeM3} m³`,
        },
      })),
    },

    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.movibox.com.ar"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Guardamuebles en Córdoba",
          "item": "https://www.movibox.com.ar/guardamuebles"
        }
      ]
    }
  ]
};
export default function GuardamueblesPage() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Monitoreo del establecimiento",
      description:
        "El establecimiento cuenta con monitoreo y control.",
    },
    {
      icon: CircleDollarSign,
      title: "Opciones por volumen",
      description:
        "Consultá los espacios de 5, 10 y 15 m³ y el precio mensual de cada uno.",
    },
    {
      icon: Warehouse,
      title: "Espacio separado",
      description:
        "Cada cliente dispone de un espacio cerrado dentro de un galpón sectorizado.",
    },
    {
      icon: Truck,
      title: "Útil durante una mudanza",
      description:
        "Una alternativa para guardar muebles mientras coordinás el traslado o resolvés el cambio de vivienda.",
    },
    {
      icon: Building2,
      title: "En Córdoba",
      description:
        "Consultá la ubicación y coordiná una visita al establecimiento.",
    },
    {
      icon: BadgeCheck,
      title: "Contratación mensual",
      description:
        "El servicio se contrata por mes. Consultá disponibilidad y condiciones vigentes.",
    },
  ];

  const faqItems = [
    {
      question: "¿Cómo se organizan los espacios?",
      answer:
        "El galpón está sectorizado y cada cliente cuenta con un espacio cerrado. El establecimiento tiene monitoreo y control.",
    },
    {
      question: "¿Qué se puede guardar?",
      answer:
        "Se pueden consultar espacios para guardar muebles, electrodomésticos, herramientas, cajas y otras pertenencias.",
    },
    {
      question: "¿Cuánto cuesta el guardamuebles?",
      answer:
        "Los precios mensuales publicados corresponden a espacios de 5, 10 y 15 m³. Escribinos para confirmar disponibilidad y las condiciones de contratación.",
    },
    {
      question: "¿Cómo es la contratación?",
      answer:
        "La contratación es mensual. Para cotizar, contanos qué necesitás guardar y durante cuánto tiempo.",
    },
    {
      question: "¿Sirve para guardar muebles entre dos alquileres?",
      answer:
        "Sí. El guardamuebles puede servir como almacenamiento temporal entre viviendas o durante una mudanza.",
    },
  ];

  return (
    <article className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center pt-24 overflow-hidden">
        <Image
          src={image_header}
          alt="Galpón de Movibox para guardar muebles en Córdoba"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container relative z-10 px-4 pb-24 pt-16 md:px-6">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="space-y-6 md:max-w-2xl">
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90 border border-white/20">
                <MapPin className="h-4 w-4" />
                Córdoba Capital
              </span>

              <h1 className="text-4xl font-black text-white sm:text-6xl leading-tight">
                Alquiler de guardamuebles en Córdoba
              </h1>

              <ul className="space-y-3">
                {[
                  "Espacios cerrados en un galpón sectorizado",
                  "Monitoreo y control del establecimiento",
                  "Contratación mensual",
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90 text-lg sm:text-xl">
                    <CheckCircle2 className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start md:items-center">
                {/* WhatsApp - Verde */}
                <Button
                  asChild
                  variant="whatsapp"
                  size="lg"
                >
                  <WhatsAppConversionLink
                    href="https://wa.me/5493512586221?text=Hola,%20estoy%20buscando%20un%20guardamuebles%20en%20Córdoba.%20¿Tienen%20disponibilidad?%20Me%20gustaría%20recibir%20información%20y%20ayuda%20para%20cotizar."
                    className="flex items-center gap-3"
                  >
                    <Image src={wsp} alt="WhatsApp" width={32} height={32} />
                    WhatsApp
                  </WhatsAppConversionLink>
                </Button>

                {/* Llamar - Secondary (visible on dark overlay) */}
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                >
                  <Link href="tel:+5493512586221" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Llamar ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
          <ChevronDown className="h-10 w-10 text-white/60 animate-bounce" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-4 md:px-6">
        <Breadcrumb items={[]} currentPage="Guardamuebles" />
      </div>

      {/* ESPACIOS DE 5, 10 Y 15 METROS CÚBICOS */}
      <section className="bg-secondary-50 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Espacios disponibles
            </span>
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight">
              Guardamuebles de 5 m³, 10 m³ y 15 m³
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Elegí entre espacios de 5, 10 y 15 m³. Los precios indicados son mensuales; escribinos para consultar disponibilidad y condiciones.
            </p>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            {STORAGE_MONTHLY_PLANS.map((space, index) => {
              const SpaceIcon = [Package, Warehouse, Truck][index];
              return (
              <ScrollAnimation key={space.volumeM3} animation="fade-up" delay={index * 120}>
                <article className="h-full rounded-lg p-6 sm:p-8 border border-neutral-300 bg-white flex flex-col justify-between shadow-card hover:shadow-card-hover hover:-translate-y-1 overflow-hidden relative">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary-50 p-3 text-primary flex-shrink-0">
                        <SpaceIcon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary">{space.volumeM3} m³</h3>
                        <p className="text-sm text-neutral-600 mt-1">{space.description}</p>
                      </div>
                    </div>

                    <div className="inline-flex items-center bg-secondary-100 text-secondary-700 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {space.badge}
                    </div>

                    <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                      <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-1">
                        Medidas del box
                      </p>
                      <p className="text-sm font-medium text-neutral-800 flex items-center gap-2">
                        <Ruler className="h-4 w-4 text-secondary-600" />
                        {space.dimensions}
                      </p>
                      <p className="text-xs text-neutral-600 mt-2">Largo × Ancho × Alto</p>
                    </div>

                    <div className="bg-secondary-50 rounded-lg p-4 border border-secondary-200">
                      <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-1">
                        Precio mensual
                      </p>
                      <p className="text-2xl font-bold text-secondary-600">
                        {formatARS(space.monthlyPriceARS)}
                      </p>
                      <p className="text-xs text-neutral-600 mt-2">Por mes</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-3">
                        Elementos que caben
                      </p>
                      <ul className="space-y-2">
                        {space.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <span className="text-secondary-600 font-bold mt-0.5">✓</span>
                            <span className="text-neutral-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="primary"
                    size="sm"
                    className="mt-8 w-full"
                  >
                    <WhatsAppConversionLink
                      href={`https://wa.me/5493512586221?text=${encodeURIComponent(`Hola, quiero consultar por un espacio de ${space.volumeM3} m³.`)}`}
                    >
                      <Image src={wsp} alt="WhatsApp" width={28} height={28} />
                      Consultar precio
                    </WhatsAppConversionLink>
                  </Button>
                </article>
              </ScrollAnimation>
            )})}
          </div>
        </div>
      </section>


      {/* BENEFICIOS */}
      <section className="bg-white py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Por qué elegirnos
            </span>
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight">
              Lo que nos diferencia
            </h2>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, index) => (
              <ScrollAnimation key={b.title} animation="fade-up" delay={index * 120}>
                <article className="h-full rounded-lg border border-neutral-300 bg-neutral-50 p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1">
                  <b.icon className="mb-6 h-12 w-12 text-secondary-500" />
                  <h3 className="text-lg font-semibold text-primary mb-3">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {b.description}
                  </p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>


      {/* CÓMO FUNCIONA - 3 PASOS */}
      <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="mb-20 space-y-6 text-center">
            <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
              Es fácil
            </span>
            <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
              3 pasos para guardar tus cosas
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
              Sin complicaciones. Sin sorpresas.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Contáctanos",
                description: "Mandá un mensaje por WhatsApp. Cuéntanos qué querés guardar y por cuánto tiempo.",
              },
              {
                step: "2",
                title: "Presupuesto sin compromiso",
                description: "Elegí un volumen de 5, 10 o 15 m³ y consultá las condiciones mensuales vigentes.",
              },
              {
                step: "3",
                title: "Guardá en nuestro galpón",
                description: "Coordiná el ingreso de tus pertenencias y consultá las condiciones de acceso al espacio.",
              },
            ].map((item) => (
              <ScrollAnimation key={item.step} animation="fade-up">
                <article className="h-full rounded-md border-2 border-primary-700 bg-white p-6 text-center shadow-card hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* GALPÓN - CONFIANZA */}
      <section className="bg-white py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 grid gap-8 sm:gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="space-y-8">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-600 bg-secondary/10 px-3 py-1.5 rounded-full">
              Espacios para cada cliente
            </span>

            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight text-primary">
              Un espacio cerrado para tus muebles y pertenencias
            </h2>

            <p className="text-lg leading-relaxed text-neutral-600">
              El galpón está sectorizado y cada cliente dispone de un espacio cerrado. Podés consultar por almacenamiento de muebles, electrodomésticos, herramientas, cajas y otras pertenencias.
            </p>

            <ul className="space-y-4">
              {[
                "Espacios cerrados para cada cliente",
                "Galpón sectorizado",
                "Monitoreo y control del establecimiento",
                "Contratación mensual",
                "Consultá cómo coordinar una visita",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 rounded-full bg-secondary-500 p-1.5 text-white flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-in-right">
            <ImageCarousel
              images={[
                {
                  src: box2.src,
                  alt: "Espacio de guardamuebles para muebles y pertenencias en Córdoba",
                },
                {
                  src: box.src,
                  alt: "Interior del galpón sectorizado de guardamuebles de Movibox",
                }
              ]}
            />
          </ScrollAnimation>
        </div>
      </section>


      {/* UBICACIÓN - MAPA */}
      <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Ubicación
            </span>
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight text-primary">
              Dónde estamos ubicados
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Visita nuestro galpón en Córdoba Capital. Podés pasar a verificar tu espacio o consultar sobre nuestros servicios.
            </p>
          </ScrollAnimation>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <ScrollAnimation animation="fade-up" className="space-y-6">
              <div className="bg-white rounded-lg p-8 border border-neutral-300 shadow-card">
                <h3 className="text-2xl font-bold mb-6 text-primary">Información de contacto</h3>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/80 text-white shadow-md shadow-secondary/30">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="mb-1 font-semibold text-primary">Dirección</p>
                      <a
                        href="https://maps.app.goo.gl/yBe3szNXrV9ugbWNA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-neutral-600 hover:text-primary hover:underline"
                      >
                        Camino Chacra de la Merced Km 1/2, Córdoba, Argentina
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/80 text-white shadow-md shadow-secondary/30">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Teléfono</p>
                      <a href="tel:+54-351-258-6221" className="text-sm text-primary hover:text-primary-dark font-medium">
                        +54-351-258-6221
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/80 text-white shadow-md shadow-secondary/30">
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">WhatsApp</p>
                      <WhatsAppConversionLink href="https://wa.me/5493512586221" className="text-sm text-primary hover:text-primary-dark font-medium">
                        +54 9 351 258-6221
                      </WhatsAppConversionLink>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/80 text-white shadow-md shadow-secondary/30">
                      <Clock3 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Horario</p>
                      <p className="text-sm text-neutral-600">Consulta disponibilidad por WhatsApp</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild variant="whatsapp" size="lg" className="w-full">
                    <WhatsAppConversionLink href="https://wa.me/5493512586221?text=Hola%20quiero%20visitar%20el%20galpón%20de%20guardamuebles">
                      <Image src={wsp} alt="WhatsApp" width={20} height={20} />
                      Coordinar una visita
                    </WhatsAppConversionLink>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="overflow-hidden rounded-lg shadow-card-hover">
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108977.01611261496!2d-64.1896443!3d-31.3994723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bdd7b0e45ee3%3A0x9ead673f81a48c44!2sMovibox%20mudanzas%20y%20guardamuebles!5e0!3m2!1ses!2sar!4v1787425038224!5m2!1ses!2sar"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="h-full w-full"
                    title="Ubicación de Movibox Mudanzas y Guardamuebles en Córdoba"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>



      {/* CASOS DE USO ESPECÍFICOS */}
      <section className="bg-secondary-50 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Situaciones comunes
            </span>
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight">
              Casos donde guardar muebles es la mejor opción
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Descubre cómo el guardamuebles de Movibox resuelve situaciones específicas.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "Guardar muebles por refacción",
                description: "Durante una refacción, podés consultar por un espacio mensual para guardar muebles y liberar ambientes de trabajo.",
              },
              {
                icon: Clock3,
                title: "Almacenamiento temporal",
                description: "Si las fechas de salida y entrada a una vivienda no coinciden, consultá disponibilidad para guardar tus pertenencias por mes.",
              },
              {
                icon: PackageCheck,
                title: "Almacenamiento de largo plazo",
                description: "Para guardar muebles durante más de un mes, consultá las condiciones de renovación y el volumen que necesitás.",
              },
              {
                icon: Home,
                title: "Cambio de vivienda",
                description: "Si todavía no podés ingresar a tu nueva vivienda, un espacio de guardamuebles puede servirte durante la transición.",
              },
              {
                icon: Sofa,
                title: "Muebles y pertenencias",
                description: "Consultá por el volumen disponible para guardar muebles, electrodomésticos, herramientas y cajas.",
              },
              {
                icon: Truck,
                title: "Almacenamiento durante una mudanza",
                description: "Si necesitás guardar tus cosas mientras coordinás un traslado, consultá los espacios y la contratación mensual.",
              },
            ].map((item, index) => (
              <ScrollAnimation key={item.title} animation="fade-up" delay={index * 80}>
                <div className="bg-accent rounded-2xl p-6 border border-primary/70 shadow-sm">
                  <item.icon className="mb-6 h-12 w-12 text-secondary-500" />
                  <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <ScrollAnimation animation="fade-up" className="mb-12 space-y-6 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-primary">
              Preguntas frecuentes
            </span>
            <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
              Lo que necesitás saber
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
              Respondemos las preguntas que más importan.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up">
            <FAQ faqs={faqItems} />
          </ScrollAnimation>
        </div>
      </section>

      {/* Sección de Mudanzas Relacionadas */}
      <section className="bg-white py-16 sm:py-32 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-12">
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight">
              ¿También necesitás una mudanza?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Realizamos mudanzas completas en Córdoba Capital con trabajos en altura y equipo profesional. Ofrecemos mudanza + guardamuebles de forma integrada.
            </p>
            <Button
              asChild
              variant="secondary"
              size="lg"
            >
              <Link href="/mudanzas">
                Conocer nuestras mudanzas
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

    </article>
  );
}
