import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Truck,
  Building,
  ArrowUpCircle,
  MapPin,
  Zap,
  Shield,
  ChevronDown,
} from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import HeroButtons from "@/components/HeroButtons";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import wsp from "@/public/images/iconos/whatsapp.webp";
import camion from "@/public/images/camion/imagen_fish2.webp";
import heroImage from "@/public/images/camion/imagen_camion2.webp";


export const metadata: Metadata = {
  title: "Mudanzas en Córdoba Capital y Provincia | Movibox Logística",
  description:
    "Mudanzas en Córdoba Capital y toda la provincia. Camión, fletes y traslados residenciales. Cotización gratuita por WhatsApp. Servicio seguro y al mejor precio.",
  keywords: [
    "mudanzas Córdoba Capital",
    "mudanzas Córdoba provincia",
    "empresa de mudanzas Córdoba",

    "mudanzas residenciales Córdoba",
    "fletes Córdoba Capital",
    "mudanzas urgentes Córdoba",
    "mudanzas comerciales Córdoba",

    "traslado de muebles Córdoba",
    "mudanzas dentro de Córdoba",
  ],
  alternates: { canonical: "https://www.movibox.com.ar/mudanzas" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Mudanzas en Córdoba | Rápidas, Seguras y al Mejor Precio",
    description:
      "Mudanzas  en Córdoba Capital y provincia. Servicio completo con personal capacitado. Presupuesto gratuito por WhatsApp.",
    url: "https://www.movibox.com.ar/mudanzas",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fa9eaffe9e866466ba711000ec1f0ae5e?format=webp&width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Mudanzas en Córdoba Capital y Provincia - Movibox Logística",
      },
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/mudanzas#residential-moving",
      name: "Mudanzas Residenciales en Córdoba",
      description: "Servicio completo de mudanzas para casas y departamentos en Córdoba Capital y provincia. Incluye desmontaje, embalaje, traslado y montaje.",
      serviceType: "Moving Service",
      areaServed: {
        "@type": "City",
        name: "Córdoba"
      },
      provider: {
        "@type": "MovingCompany",
        name: "Movibox Logística",
        url: "https://www.movibox.com.ar"
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/mudanzas#commercial-moving",
      name: "Mudanzas Comerciales en Córdoba",
      description: "Mudanzas de oficinas, locales y establecimientos comerciales. Personal especializado en traslado de equipamiento empresarial.",
      serviceType: "Moving Service",
      areaServed: {
        "@type": "City",
        name: "Córdoba"
      },
      provider: {
        "@type": "MovingCompany",
        name: "Movibox Logística",
        url: "https://www.movibox.com.ar"
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/mudanzas#freight-service",
      name: "Fletes en Córdoba",
      description: "Transporte de objetos individuales, muebles y cargas puntuales en Córdoba Capital y provincia. Vehículos adaptados para cada tipo de carga.",
      serviceType: "Freight Service",
      areaServed: {
        "@type": "City",
        name: "Córdoba"
      },
      provider: {
        "@type": "MovingCompany",
        name: "Movibox Logística",
        url: "https://www.movibox.com.ar"
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "MovingCompany",
      "@id": "https://www.movibox.com.ar/mudanzas#company",
      name: "Movibox Logística",
      description: "Mudanzas y fletes en Córdoba Capital y provincia con camión y equipo profesional.",
      url: "https://www.movibox.com.ar/mudanzas",
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
      email: "movibox.cba@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Camino Chacra de la Merced Km 1/2",
        addressLocality: "Córdoba",
        addressRegion: "Córdoba",
        addressCountry: "AR",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Córdoba Capital"
        },
        {
          "@type": "AdministrativeArea",
          name: "Córdoba Provincia"
        },
        {
          "@type": "Country",
          name: "Argentina"
        }
      ],
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
          "name": "Mudanzas en Córdoba",
          "item": "https://www.movibox.com.ar/mudanzas"
        }
      ]
    }
  ]
};

export default function MudanzasPage() {
  const benefits = [
    {
      icon: Truck,
      title: "Camión propio",
      description: "Vehículo equipado para mudanzas y fletes en Córdoba Capital y provincia. Calidad garantizada.",
    },
    {
      icon: Clock,
      title: "Puntualidad garantizada",
      description: "Llegamos a la hora acordada. Sin demoras ni sorpresas.",
    },
    {
      icon: ShieldCheck,
      title: "Cuidado profesional",
      description: "Protegemos tus muebles y pertenencias con máxima responsabilidad.",
    },
    {
      icon: Building,
      title: "Para todos",
      description: "Viviendas, departamentos, oficinas y locales comerciales.",
    },
    {
      icon: CheckCircle2,
      title: "Precio exacto",
      description: "Te decimos el valor antes de comenzar. Sin sorpresas.",
    },
  ];

  const faqItems = [
    {
      question: "¿Cuánto cuesta una mudanza?",
      answer:
        "El precio depende de la cantidad de muebles, distancia y accesos. Te damos el valor exacto antes de comenzar mediante una cotización gratuita.",
    },
    {
      question: "¿La cotización tiene costo?",
      answer:
        "No. La cotización es totalmente gratuita y la hacemos de forma inmediata por WhatsApp.",
    },
    {
      question: "¿Trabajan fines de semana?",
      answer:
        "Sí. Realizamos mudanzas de lunes a domingo, incluidos feriados.",
    },
  ];

  return (

  <>
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <article className="flex min-h-screen flex-col bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden overflow-x-hidden pt-24">
        <Image
          src={heroImage}
          alt="Mudanzas en Córdoba - Movibox Logística"
          fill
          className="object-cover"
          priority
          unoptimized
          />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container relative z-10 px-4 pb-24 pt-16 md:px-6">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="space-y-6 md:max-w-2xl">
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90 border border-white/20">
                Mudanzas y Fletes en Córdoba
              </span>

              <h1 className="text-4xl font-black text-white sm:text-6xl leading-tight">
                Mudanzas en Córdoba Capital
                <br />
                <span className="text-secondary-400">Servicio para hogares y empresas</span>
              </h1>

              <p className="text-lg text-white/90 sm:text-xl leading-relaxed">
                Atención inmediata, precio acordado antes de empezar.
                Cotización gratuita por WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start md:items-center">
                <HeroButtons />
              </div>

              <p className="text-xs text-white/70">
                Respuesta inmediata · Atención directa
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
          <ChevronDown className="h-10 w-10 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* COBERTURA GEOGRÁFICA */}
      <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 text-center max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
              Por qué elegirnos
            </span>
            <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
              Mudanzas  en todo Córdoba
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Servicio completo con vehículos propios. Cubrimos Nueva Córdoba, General Paz, Cerro de las Rosas, Centro y toda la provincia de Córdoba.
            </p>
          </ScrollAnimation>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={benefit.title} animation="fade-up" delay={index * 100}>
                <article className="h-full rounded-md border border-neutral-300 bg-white p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1">
                  <div className="rounded-full bg-secondary-500 w-fit p-3 text-white mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {benefit.description}
                  </p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA DE VEHÍCULOS */}
      <section className="bg-white py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
              Nuestro camión
            </span>
            <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
              Camión equipado para tu mudanza en Córdoba
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Un camión para mudanzas y fletes en Córdoba Capital y toda la provincia.
            </p>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <article className="rounded-md overflow-hidden border border-neutral-300 shadow-card hover:shadow-card-hover transition">
                <div className="relative w-full h-80 bg-neutral-100">
                  <Image
                    src={camion}
                    alt="Camión de mudanzas en Córdoba - Movibox Logística"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                  <h3 className="text-2xl font-bold text-primary mb-2">Camión</h3>
                  <p className="text-sm text-neutral-600 font-semibold uppercase tracking-wide mb-4">Mudanzas en Córdoba</p>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    Preparado para departamentos, casas y fletes dentro de Córdoba Capital y provincia. Coordinamos según tu volumen y disponibilidad.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 font-bold mt-0.5">✓</span>
                      <span className="text-sm text-neutral-700">Mudanzas residenciales y comerciales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 font-bold mt-0.5">✓</span>
                      <span className="text-sm text-neutral-700">Fletes y objetos puntuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 font-bold mt-0.5">✓</span>
                      <span className="text-sm text-neutral-700">Interior provincial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 font-bold mt-0.5">✓</span>
                      <span className="text-sm text-neutral-700">Combinable con guardamuebles</span>
                    </li>
                  </ul>
                  <Button asChild variant="primary" size="lg" className="w-full">
                    <WhatsAppConversionLink
                      href="https://wa.me/5493512586221?text=Hola,%20necesito%20realizar%20una%20mudanza%20en%20C%C3%B3rdoba.%20%C2%BFTienen%20disponibilidad?%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n."
                      conversionLabel="mudanza_whatsapp_click"
                    >
                      <Image src={wsp} alt="WhatsApp" width={32} height={32} />
                      Cotizar mudanza
                    </WhatsAppConversionLink>
                  </Button>
                </div>
              </article>
            </ScrollAnimation>
          </div>


        </div>
      </section>

      {/* CTA STICKY SECTION */}
    

      {/* PROCESO SIMPLE */}
      <section className="bg-neutral-100 py-16 sm:py-32 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
              3 pasos fáciles para tu mudanza
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Contratar nuestro servicio de mudanzas en Córdoba es simple y rápido.
            </p>
          </ScrollAnimation>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Pedí tu cotización",
                description: "Contactanos por WhatsApp o formulario con los detalles de tu mudanza dentro de Córdoba.",
              },
              {
                step: "2",
                title: "Confirmá el presupuesto",
                description: "Te pasamos el precio exacto, sin sorpresas. Acordamos fecha y horario.",
              },
              {
                step: "3",
                title: "Tu mudanza lista",
                description: "Llegamos a la hora, embalamos, trasladamos y montamos todo en tu nuevo lugar.",
              },
            ].map((item) => (
              <ScrollAnimation key={item.step} animation="fade-up">
                <article className="h-full rounded-md border-2 border-primary-700 bg-white p-6 sm:p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-500 text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Guardamuebles Relacionados */}
      <section className="bg-secondary-50 py-16 sm:py-32 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-12">
            <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
              ¿También necesitás guardar tus muebles?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Si además de mudanza necesitás almacenamiento temporal o de largo plazo, contamos con guardamuebles propio con vigilancia 24/7.
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

      {/* CTA PRINCIPAL */}
      <section className="bg-gradient-to-b from-primary-700 to-primary-800 py-16 sm:py-32 overflow-x-hidden text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollAnimation animation="fade-up" className="space-y-8">
            <h2 className="text-4xl font-black sm:text-5xl leading-tight">
              ¿Necesitás mudanza en Córdoba?
            </h2>

            <p className="text-lg leading-relaxed text-white/90">
              Contamos con disponibilidad inmediata para mudanzas dentro de toda Córdoba Capital y provincia. Presupuesto gratuito en menos de 5 minutos.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row w-full pt-4">
              <Button
                asChild
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
                >
<Link
  href="https://wa.me/5493512586221?text=Hola,%20necesito%20realizar%20una%20mudanza%20en%20C%C3%B3rdoba.%20%C2%BFTienen%20disponibilidad?%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n."
  target="_blank"
  className="flex items-center gap-3"
>
  <Image src={wsp} alt="WhatsApp" width={32} height={32} />
  Cotizar ahora por WhatsApp
</Link>

              </Button>
            </div>

            <p className="text-xs text-white/70 pt-4">
              📞 351 258-6221 · Respuesta en menos de 24hs
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-32 bg-neutral-100 overflow-x-hidden">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
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
