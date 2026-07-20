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
  Car,
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
import GoogleReviews from "@/components/GoogleReviews";

export const metadata: Metadata = {
  title: "Guardamuebles con Servicio de Mudanza en Córdoba | Movibox Logística",

  description:
    "Guardamuebles en Córdoba Capital y provincia. Galpón, almacenamiento seguro, retiro y entrega a domicilio. Presupuesto sin cargo por WhatsApp.",

  keywords: [
    "guardamuebles Córdoba Capital",
    "guardar muebles Córdoba",
    "almacenamiento seguro Córdoba",
    "guardamuebles económico Córdoba",
    "depósito de muebles Córdoba",
    "almacenamiento temporal Córdoba",
    "guardamuebles vigilancia 24/7",
    "alquiler depósito Córdoba",
    "guardamuebles sin contrato",
    "almacenamiento muebles Córdoba Capital",
  ],

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
      "Guardamuebles con Servicio de Mudanza en Córdoba | Movibox Logística",
    description:
      "Guardamuebles con servicio de mudanza en Córdoba Capital. Almacenamiento seguro, búsqueda y entrega. Presupuesto gratis.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5a3dd389d784483191199e72753cc676?format=webp&width=800&height=1200",
        width: 1200,
        height: 630,
        alt: "Guardamuebles en Córdoba con vigilancia 24/7 - Movibox Logística",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Guardamuebles con Servicio de Mudanza en Córdoba | Movibox Logística",
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

    // 1️⃣ EMPRESA
    {
      "@type": "LocalBusiness",
      "@id": "https://www.movibox.com.ar/#localbusiness",
      name: "Movibox Logística",
      url: "https://www.movibox.com.ar",
      telephone: "+5493512586221",
      priceRange: "$$",
      sameAs: [
        "https://maps.app.goo.gl/AcbHjSsHASLjHpY6A"
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -31.403489,
        longitude: -64.137619
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Camino Chacra de la Merced Km 1/2",
        addressLocality: "Córdoba",
        addressRegion: "Córdoba",
        addressCountry: "AR"
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:00",
        closes: "18:00"
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Provincia de Córdoba"
      },
    },

    // 2️⃣ SERVICIO
    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/guardamuebles#service",
      name: "Guardamuebles en Córdoba",
      description: "Servicio de guardamuebles con vigilancia 24/7 y retiro a domicilio en Córdoba Capital.",
      provider: {
        "@id": "https://www.movibox.com.ar/#localbusiness"
      },
      areaServed: {
        "@type": "City",
        name: "Córdoba Capital"
      }
    },

    // 3️⃣ INSTALACIÓN FÍSICA
    {
      "@type": "SelfStorage",
      "@id": "https://www.movibox.com.ar/guardamuebles#storage",
      name: "Guardamuebles Movibox Logística",
      url: "https://www.movibox.com.ar/guardamuebles",
      provider: {
        "@id": "https://www.movibox.com.ar/#localbusiness"
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

    // 4️⃣ BREADCRUMB
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
      question: "¿Por qué el precio es orientativo?",
      answer:
        "Porque cada mudanza es distinta. El precio final depende del volumen real (metros cúbicos) y cómo se acomodan tus cosas. Por eso confirmamos el valor exacto por WhatsApp.",
    },
    {
      question: "¿Cómo calculan el precio?",
      answer:
        "Medimos largo × ancho × alto y calculamos los metros cúbicos. En base a eso te damos el valor exacto.",
    },
    {
      question: "¿Hay contrato o plazo mínimo?",
      answer:
        "No. Guardás un mes o el tiempo que necesites. Sin penalizaciones.",
    },
    {
      question: "¿Puedo cambiar el espacio después?",
      answer:
        "Sí. Si necesitás más o menos espacio, ajustamos el precio.",
    },
    {
      question: "¿Cómo contratar?",
      answer:
        "Mandá un WhatsApp con qué necesitás guardar. Te damos el presupuesto exacto. Si te parece bien, coordinamos el retiro.",
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
                price: "$79.900",
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
                price: "$129.900",
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
                price: "$179.900",
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

      {/* ESPACIOS PERSONALIZADOS Y GUARDA DE VEHÍCULOS */}
      <section className="bg-white py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Espacios Personalizados */}
            <ScrollAnimation animation="fade-up" className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  Opción flexible
                </span>
                <h2 className="text-h3-mobile sm:text-h3-tablet lg:text-h3-desktop leading-tight text-primary">
                  Espacios personalizados
                </h2>
              </div>

              <p className="text-lg text-neutral-600 leading-relaxed">
                Los espacios de 5, 10 y 15 metros son referencias. Si necesitás un tamaño diferente, podemos crear un espacio personalizado ajustado exactamente a lo que guardarás.
              </p>

              <ul className="space-y-4">
                {[
                  "Medimos tu contenido exactamente",
                  "Pagás solo por lo que usas",
                  "Flexible: más grande o más chico",
                  "Presupuesto a medida sin sorpresas",
                  "Mismo nivel de seguridad que otros espacios",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="rounded-full bg-secondary-50 p-1.5 text-secondary-600 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="primary"
                size="default"
                className="w-full sm:w-auto"
              >
                <WhatsAppConversionLink
                  href="https://wa.me/5493512586221?text=Hola%20necesito%20un%20espacio%20personalizado%20para%20guardamuebles"
                >
                  <Image src={wsp} alt="WhatsApp" width={28} height={28} />
                  Solicitar espacio personalizado
                </WhatsAppConversionLink>
              </Button>
            </ScrollAnimation>

            {/* Guarda de Vehículos */}
            <ScrollAnimation animation="fade-up" delay={100} className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-600 bg-secondary/10 px-3 py-1.5 rounded-full">
                  Servicio especial
                </span>
                <h2 className="text-h3-mobile sm:text-h3-tablet lg:text-h3-desktop leading-tight text-primary">
                  Guardamos vehículos
                </h2>
              </div>

              <p className="text-lg text-neutral-600 leading-relaxed">
                Tenemos espacios seguros para guardar autos, motos, bicicletas y vehículos varios. Protegidos del clima, vigilados 24/7 y con acceso a tu vehículo cuando lo necesites.
              </p>

              <ul className="space-y-4">
                {[
                  "Espacios techos y secos",
                  "Vigilancia 24/7 con cámaras",
                  "Acceso a tu vehículo cuando quieras",
                  "Estacionamiento seguro con control",
                  "Ideal para vehículos no usados",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="rounded-full bg-secondary-50 p-1.5 text-secondary-600 flex-shrink-0 mt-0.5">
                      <Car className="h-4 w-4" />
                    </span>
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="primary"
                size="default"
                className="w-full sm:w-auto"
              >
                <WhatsAppConversionLink
                  href="https://wa.me/5493512586221?text=Hola%20quiero%20guardar%20un%20vehículo%20en%20Transporte%20Rojo"
                >
                  <Image src={wsp} alt="WhatsApp" width={28} height={28} />
                  Cotizar guarda de vehículo
                </WhatsAppConversionLink>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* VALOR SENTIMENTAL */}
      <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6">
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight text-primary">
              Tus muebles no son solo objetos
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Sabemos que muchas veces guardás recuerdos, herencias o cosas que tienen valor sentimental. Nuestro compromiso es cuidarlos como si fueran propios.
            </p>
          </ScrollAnimation>
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

      {/* CTA STICKY SECTION */}
      <section className="bg-white py-8 border-t border-primary/20 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">¿Necesitás guardar tus cosas?</h3>
              <p className="text-sm text-muted-foreground">Galpón propio con vigilancia 24/7</p>
            </div>
            <Button asChild variant="whatsapp" size="lg" className="w-full md:w-auto">
              <WhatsAppConversionLink href="https://wa.me/5493512586221?text=Hola%20Transporte%20Rojo,%20necesito%20guardar%20mis%20cosas%20en%20el%20guardamuebles.%20¿Cuál%20es%20el%20presupuesto?" className="flex items-center gap-3">
                <Image src={wsp} alt="WhatsApp" width={32} height={32} />
                Consultar
              </WhatsAppConversionLink>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* CÓMO FUNCIONA - 3 PASOS */}
      <section className="bg-secondary-50 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Es fácil
            </span>
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight text-primary">
              3 pasos para guardar tus cosas
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Sin complicaciones. Sin sorpresas.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1️⃣ Contáctanos",
                description: "Mandá un mensaje por WhatsApp. Cuéntanos qué querés guardar y por cuánto tiempo.",
              },
              {
                step: "2️⃣ Presupuesto sin compromiso",
                description: "Te damos el precio real basado en el volumen que necesitás. Sin sorpresas ni costos ocultos.",
              },
              {
                step: "3️⃣ Guardá en nuestro galpón",
                description: "Retiramos o traes tus cosas. Se guardan en tu espacio identificado. Visita cuando quieras.",
              },
            ].map((item, index) => (
              <ScrollAnimation key={item.step} animation="fade-up" delay={index * 120}>
                <div className="bg-white p-8 rounded-lg border border-neutral-300 text-left shadow-card hover:shadow-card-hover hover:-translate-y-1">
                  <h3 className="font-bold text-lg text-primary mb-3">{item.step}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
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

      {/* IDENTIDAD LOCAL - ZONAS DE SERVICIO */}
      <section className="bg-white py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Cobertura local
            </span>
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight">
              Guardamuebles en Córdoba Capital y alrededores
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Brindamos servicio en Nueva Córdoba, General Paz, Cerro de las Rosas, Alta Córdoba, Centro, Villa Cabrera y toda la provincia de Córdoba.
            </p>
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
                    <div className="rounded-full bg-secondary/80 p-3 text-white flex-shrink-0">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Dirección</p>
                      <p className="text-sm text-neutral-600">Camino Chacra de la Merced Km 1/2, Córdoba Capital, Córdoba, Argentina</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="rounded-full bg-secondary/80 p-3 text-white flex-shrink-0">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v1M3 5v12a2 2 0 002 2h14a2 2 0 002-2V5m-5 10l-4 4m0 0l-4-4m4 4V3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Teléfono</p>
                      <a href="tel:+54-351-258-6221" className="text-sm text-primary hover:text-primary-dark font-medium">
                        +54-351-258-6221
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="rounded-full bg-secondary-500 p-3 text-white flex-shrink-0">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01M9 20h6a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">WhatsApp</p>
                      <WhatsAppConversionLink href="https://wa.me/5493512586221" className="text-sm text-primary hover:text-primary-dark font-medium">
                        +54 9 351 258-6221
                      </WhatsAppConversionLink>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="rounded-full bg-secondary-500 p-3 text-white flex-shrink-0">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Horario</p>
                      <p className="text-sm text-neutral-600">Consulta disponibilidad por WhatsApp</p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  variant="whatsapp"
                  size="lg"
                  className="mt-8 w-full"
                >
                  <WhatsAppConversionLink
                    href="https://wa.me/5493512586221?text=Hola%20quiero%20visitar%20el%20galpón%20de%20guardamuebles"
                  >
                    <Image src={wsp} alt="WhatsApp" width={20} height={20} />
                    Coordinar una visita
                  </WhatsAppConversionLink>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="rounded-lg overflow-hidden shadow-card-hover h-96">
                <iframe
                  title="Ubicación de Guardamuebles Movibox Logística en Córdoba"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.386001258131!2d-64.13761962363223!3d-31.40348947426776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bdb06350fce1%3A0xfb8e2b8b3f0115a7!2sTransporte%20Rojo!5e0!3m2!1ses!2sar!4v1764611451965!5m2!1ses!2sar"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviews
        title="Clientes satisfechos con nuestro guardamuebles"
        subtitle="Lee lo que opinan nuestros clientes sobre el servicio de guardamuebles en Córdoba"
        showTitle={true}
        maxReviews={6}
      />

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

      {/* LO QUE NECESITAS SABER */}
      <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Dudas comunes
            </span>
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight text-primary">
              Lo que necesitás saber
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Respondemos las preguntas que más importan.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🔒",
                title: "¿Mis cosas están seguras?",
                answer: "100% seguras. Vigilancia 24/7 con cámaras, alarmas monitoreadas, control de acceso registrado y personal en el lugar.",
              },
              {
                icon: "📦",
                title: "¿Qué se puede guardar?",
                answer: "Lo que sea: muebles, cajas, cosas variadas, depósito personal. Cada cliente tiene su espacio claramente separado del de otros.",
              },
              {
                icon: "💰",
                title: "¿El precio cambia?",
                answer: "No. Una vez acordado el presupuesto, ese es tu precio durante el período. Sin sorpresas ni aumentos ocultos.",
              },
              {
                icon: "📅",
                title: "¿Plazo mínimo o máximo?",
                answer: "Ninguno. Guardá 1 mes o el tiempo que necesites. Cancelás cuando quieras sin penalizaciones.",
              },
              {
                icon: "🔄",
                title: "¿Puedo cambiar el espacio?",
                answer: "Claro. Si necesitás más o menos espacio, ajustamos el presupuesto según lo que uses.",
              },
              {
                icon: "✅",
                title: "¿Cómo contratar?",
                answer: "Mandá un WhatsApp contando qué necesitás guardar. Te damos el presupuesto exacto. Si te late, coordinamos.",
              },
            ].map((item, index) => (
              <ScrollAnimation key={item.title} animation="fade-up" delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 border border-primary/70 shadow-sm">
                  <div className="flex gap-3 items-start">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-32 bg-white overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Preguntas frecuentes
            </span>
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop leading-tight">
              Dudas sobre precio y seguridad
            </h2>
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

      {/* CTA FINAL */}
      <section className="bg-secondary-50 py-16 sm:py-32 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-7xl">
          <ScrollAnimation animation="fade-up" className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop text-foreground leading-tight">
              Presupuesto exacto en minutos
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Cuéntanos qué necesitás guardar y te decimos el precio real. Sin compromisos.
            </p>

            <Button
              asChild
              variant="primary"
              size="lg"
            >
              <WhatsAppConversionLink
                href="https://wa.me/5493512586221?text=Hola%20quiero%20un%20presupuesto%20real%20para%20guardamuebles"
              >
                <Image src={wsp} alt="WhatsApp" width={32} height={32} />
                Obtener presupuesto por WhatsApp
              </WhatsAppConversionLink>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </article>
  );
}
