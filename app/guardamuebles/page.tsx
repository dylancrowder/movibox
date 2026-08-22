import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Warehouse,
  Truck,
  Building,
  MapPin,
  MessageCircle,
  Package,
  Ruler,
  Phone,
  ChevronDown,
} from "lucide-react";


import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";
import { ImageCarousel } from "@/components/image-carousel";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import image_header from "@/public/galpon.webp";
import wsp from "@/public/images/iconos/whatsapp.webp";


export const metadata: Metadata = {
  title: "Guardamuebles con Servicio de Mudanza en Córdoba | Movibox Mudanzas",

  description:
    "Guardamuebles en Córdoba Capital y provincia. Galpón, almacenamiento seguro, retiro y entrega a domicilio. Presupuesto sin cargo por WhatsApp.",


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
    title:
      "Guardamuebles con Servicio de Mudanza en Córdoba | Movibox Mudanzas",
    description:
      "Guardamuebles con servicio de mudanza en Córdoba Capital. Almacenamiento seguro, búsqueda y entrega. Presupuesto gratis.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5a3dd389d784483191199e72753cc676?format=webp&width=800&height=1200",
        width: 1200,
        height: 630,
        alt: "Guardamuebles en Córdoba con vigilancia 24/7 - Movibox Mudanzas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Guardamuebles con Servicio de Mudanza en Córdoba | Movibox Mudanzas",
    description:
      "Guardamuebles seguro en Córdoba Capital con vigilancia 24/7 y servicio de mudanza.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5a3dd389d784483191199e72753cc676?format=webp&width=800&height=1200",
    ],
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://www.movibox.com.ar/guardamuebles#webpage",
      name: "Guardamuebles con Servicio de Mudanza en Córdoba",
      description: "Guardamuebles en Córdoba Capital y provincia. Galpón, almacenamiento seguro, retiro y entrega a domicilio. Presupuesto sin cargo por WhatsApp.",
      url: "https://www.movibox.com.ar/guardamuebles",
      primaryImageOfPage: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5a3dd389d784483191199e72753cc676?format=webp&width=800&height=1200"
    },

    // 1️⃣ SERVICIO
    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/guardamuebles#service",
      name: "Guardamuebles en Córdoba",
      description: "Servicio de guardamuebles con vigilancia 24/7 y retiro a domicilio en Córdoba Capital.",
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany"
      },
      areaServed: {
        "@type": "City",
        name: "Córdoba Capital"
      }
    },

    // 2️⃣ INSTALACIÓN FÍSICA
    {
      "@type": "SelfStorage",
      "@id": "https://www.movibox.com.ar/guardamuebles#storage",
      name: "Guardamuebles Movibox Mudanzas",
      url: "https://www.movibox.com.ar/guardamuebles",
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany"
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Camino Chacra de la Merced Km 1/2",
        addressLocality: "Córdoba",
        addressRegion: "Córdoba",
        addressCountry: "AR"
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Vigilancia 24/7" },
        { "@type": "LocationFeatureSpecification", name: "Ambientes secos y ventilados" }
      ]
    },

    // 3️⃣ BREADCRUMB
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
  const plans = [
    {
      name: "Monoambiente",
      size: "Poco espacio",
      volume: "~10 m³",
      items: [
        "Cama simple",
        "Ropero pequeño",
        "Escritorio",
        "Mesita de luz",
        "Sillas",
        "Heladera",
        "Cajas de mudanza",
      ],
    },
    {
      name: "1 Dormitorio",
      size: "Volumen medio",
      volume: "~18 m³",
      items: [
        "Cama matrimonial",
        "Ropero grande",
        "Comedor (mesa + sillas)",
        "Heladera",
        "Lavarropa",
        "Cocina o horno",
        "Escritorio",
        "Cajas de mudanza",
      ],
    },
    {
      name: "2 Dormitorios",
      size: "Mayor volumen",
      volume: "~25 m³",
      items: [
        "2 camas matrimoniales",
        "2 roperos",
        "Comedor completo",
        "Cocina integral",
        "Heladera",
        "Lavarropa",
        "TV y mueble",
        "Cajas y otros enseres",
      ],
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Seguridad real",
      description:
        "Cámaras 24/7, control de acceso y personal en el lugar. Depósito propio.",
    },
    {
      icon: Clock,
      title: "Precio claro",
      description:
        "El valor se calcula por volumen real. Sin sorpresas ni costos ocultos.",
    },
    {
      icon: Warehouse,
      title: "Espacio separado",
      description:
        "Cada cliente tiene su espacio identificado. No se mezclan pertenencias.",
    },
    {
      icon: Truck,
      title: "Retiro opcional",
      description:
        "Podemos buscar y devolver tus cosas cuando lo necesites.",
    },
    {
      icon: Building,
      title: "Galpón propio",
      description:
        "Estamos en Córdoba Capital. Podés visitarnos y verificar.",
    },
    {
      icon: CheckCircle2,
      title: "Sin contrato",
      description:
        "Guardás el tiempo que necesites. Cancelás cuando quieras.",
    },
  ];

  const faqItems = [
    {
      question: "🔒 ¿Mis cosas están seguras?",
      answer:
        "100% seguras. Vigilancia 24/7 con cámaras, alarmas monitoreadas, control de acceso registrado y personal en el lugar.",
    },
    {
      question: "📦 ¿Qué se puede guardar?",
      answer:
        "Lo que sea: muebles, cajas, cosas variadas, depósito personal. Cada cliente tiene su espacio claramente separado del de otros.",
    },
    {
      question: "💰 ¿El precio cambia?",
      answer:
        "No. Una vez acordado el presupuesto, ese es tu precio durante el período. Sin sorpresas ni aumentos ocultos.",
    },
    {
      question: "📅 ¿Plazo mínimo o máximo?",
      answer:
        "Ninguno. Guardá 1 mes o el tiempo que necesites. Cancelás cuando quieras sin penalizaciones.",
    },
    {
      question: "🔄 ¿Puedo cambiar el espacio?",
      answer:
        "Claro. Si necesitás más o menos espacio, ajustamos el presupuesto según lo que uses.",
    },
    {
      question: "✅ ¿Cómo contratar?",
      answer: "Mandá un WhatsApp contando qué necesitás guardar.",
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
          alt="Guardamuebles en Córdoba - Almacenamiento seguro de muebles con vigilancia 24/7"
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
                Guardamuebles en Córdoba Capital con Servicio de Mudanza
              </h1>

              {/* --- CAMBIO AQUÍ: Bullets sutiles en lugar de párrafo --- */}
              <ul className="space-y-3">
                {[
                  "Cámaras y control de acceso",
                  "Retiro y entrega a domicilio",
                  "Sin contrato de tiempo mínimo"
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90 text-lg sm:text-xl">
                    <CheckCircle2 className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              {/* ----------------------------------------------------- */}

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
              Elige el tamaño de espacio que necesitas. Todos los boxes son individuales, están señalizados y cuentan con acceso controlado. Consultá disponibilidad y precio exacto por WhatsApp.
            </p>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                size: "5 m³",
                badge: "Ideal para monoambientes",
                description: "Box compacto",
                dimensions: "2 m × 1,25 m × 2 m",
                icon: Package,
                items: [
                  "Habitación de monoambiente",
                  "Pequeño ropero o biblioteca",
                  "Cajas y equipaje",
                  "Bicicleta o moto",
                  "Sillas y mesas pequeñas",
                  "Objetos personales varios",
                ],
                price: "$59.900",
              },
              {
                size: "10 m³",
                badge: "Ideal para 1 dormitorio",
                description: "Box estándar",
                dimensions: "2,5 m × 2 m × 2 m",
                icon: Warehouse,
                items: [
                  "1 dormitorio completo",
                  "Comedor con sillas",
                  "Heladera y lavarropa",
                  "Escritorio y biblioteca",
                  "Equipos y electrónica",
                  "Cajas de mudanza",
                ],
                price: "$109.900",
              },
              {
                size: "15 m³",
                badge: "Ideal para mudanzas completas",
                description: "Box amplio",
                dimensions: "3 m × 2,5 m × 2 m",
                icon: Truck,
                items: [
                  "2 dormitorios completos",
                  "Sala de estar completa",
                  "Cocina y comedor",
                  "Electrodomésticos grandes",
                  "Equipos de oficina",
                  "Múltiples cajas y muebles",
                ],
                price: "$159.900",
              },
            ].map((space, index) => (
              <ScrollAnimation key={space.size} animation="fade-up" delay={index * 120}>
                <article className="h-full rounded-lg p-6 sm:p-8 border border-neutral-300 bg-white flex flex-col justify-between shadow-card hover:shadow-card-hover hover:-translate-y-1 overflow-hidden relative">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary-50 p-3 text-primary flex-shrink-0">
                        <space.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary">{space.size}</h3>
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
                      <p className="text-2xl font-bold text-secondary-600">{space.price}</p>
                      <p className="text-xs text-neutral-600 mt-2">*Presupuesto exacto por WhatsApp</p>
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
                      href={`https://wa.me/5493512586221?text=Hola%20quiero%20saber%20el%20precio%20para%20un%20espacio%20de%20${space.size}`}
                    >
                      <Image src={wsp} alt="WhatsApp" width={28} height={28} />
                      Consultar precio
                    </WhatsAppConversionLink>
                  </Button>
                </article>
              </ScrollAnimation>
            ))}
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
                  <div className="rounded-full bg-secondary-500 w-fit p-3 text-white mb-4">
                    <b.icon className="h-6 w-6" />
                  </div>
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
                description: "Te damos el precio real basado en el volumen que necesitás. Sin sorpresas ni costos ocultos.",
              },
              {
                step: "3",
                title: "Guardá en nuestro galpón",
                description: "Retiramos o traes tus cosas. Se guardan en tu espacio identificado. Visita cuando quieras.",
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
              Galpón propio
            </span>

            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight text-primary">
              Buscamos tus cosas y las guardamos a salvo por el tiempo que necesites
            </h2>

            <p className="text-lg leading-relaxed text-neutral-600">
              Tenemos un galpón propio en <strong>Camino Chacra de la Merced Km 1/2</strong>, Córdoba Capital. Cada cliente tiene su espacio claramente identificado y separado. Guardamos lo que sea: muebles, cajas, ropa, depósito personal, lo que necesites.
            </p>

            <ul className="space-y-4">
              {[
                "Tu espacio identificado y separado del de otros",
                "Cámaras de seguridad en todas las áreas",
                "Espacios secos, protegidos de humedad",
                "Personal presente en horarios de atención",
                "Puedes visitarlo para verificar",
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
                  src: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fa9eaffe9e866466ba711000ec1f0ae5e?format=webp&width=800&height=1200",
                  alt: "Guardamuebles Córdoba - Almacenamiento seguro de muebles en depósito vigilado",
                },
                {
                  src: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5a3dd389d784483191199e72753cc676?format=webp&width=800&height=1200",
                  alt: "Guardar muebles Córdoba - Almacenamiento con vigilancia de equipamiento y bicicletas",
                },
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
                      <Clock className="h-5 w-5" aria-hidden="true" />
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
                icon: "🔨",
                title: "Guardar muebles por refacción",
                description: "Realizando trabajos en tu casa? Guardamos tus muebles el tiempo que necesites mientras se hacen las refacciones y los devolvemos al terminar.",
              },
              {
                icon: "⏱️",
                title: "Almacenamiento temporal",
                description: "Entre mudanzas, cambio de vivienda o espacio temporal? Guardamos tus cosas días, semanas o meses sin contrato mínimo.",
              },
              {
                icon: "📦",
                title: "Almacenamiento de largo plazo",
                description: "Necesitás guardar muebles por meses o años? Nuestro depósito seguro mantiene tus pertenencias protegidas indefinidamente.",
              },
              {
                icon: "🏠",
                title: "Cambio de vivienda",
                description: "Nueva casa no está lista? Guardamos todo tu contenido hasta que puedas mudarte. Buscamos, guardamos y entregamos sin cargo.",
              },
              {
                icon: "🛋️",
                title: "Muebles de familia",
                description: "Heredaste muebles pero no tenés lugar? Guardamos herencias, reliquias familiares y objetos especiales con máximo cuidado.",
              },
              {
                icon: "🚚",
                title: "Alojamiento en mudanza",
                description: "Mudanza de otra provincia? Almacenamos temporalmente mientras buscás vivienda en Córdoba.",
              },
            ].map((item, index) => (
              <ScrollAnimation key={item.title} animation="fade-up" delay={index * 80}>
                <div className="bg-accent rounded-2xl p-6 border border-primary/70 shadow-sm">
                  <div className="flex gap-3 items-start mb-4">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                  </div>
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
