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




export const metadata: Metadata = {
  title: "Mudanzas en Córdoba Capital y Provincia | Movibox Mudanzas",
  description:
    "Mudanzas en Córdoba Capital y toda la provincia. Camión, fletes y traslados residenciales. Cotización gratuita por WhatsApp. Servicio seguro y al mejor precio.",
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
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=1200&height=630",
        width: 1200,
        height: 630,
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
      description: "Mudanzas en Córdoba Capital y toda la provincia. Camión, fletes y traslados residenciales. Cotización gratuita por WhatsApp.",
      url: "https://www.movibox.com.ar/mudanzas",
      primaryImageOfPage: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=1200&height=630"
    },
    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/mudanzas#residential-moving",
      name: "Mudanzas Residenciales en Córdoba",
      description: "Servicio completo de mudanzas para casas y departamentos en Córdoba Capital y provincia. Incluye desmontaje, embalaje, traslado y montaje.",
      serviceType: "Mudanzas residenciales",
      areaServed: {
        "@type": "City",
        name: "Córdoba"
      },
      provider: {
        '@id': 'https://www.movibox.com.ar/#movingcompany'
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/mudanzas#commercial-moving",
      name: "Mudanzas Comerciales en Córdoba",
      description: "Mudanzas de oficinas, locales y establecimientos comerciales. Personal especializado en traslado de equipamiento empresarial.",
      serviceType: "Mudanzas comerciales",
      areaServed: {
        "@type": "City",
        name: "Córdoba"
      },
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany"
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "Service",
      "@id": "https://www.movibox.com.ar/mudanzas#freight-service",
      name: "Fletes en Córdoba",
      description: "Transporte de objetos individuales, muebles y cargas puntuales en Córdoba Capital y provincia. Vehículos adaptados para cada tipo de carga.",
      serviceType: "Fletes",
      areaServed: {
        "@type": "City",
        name: "Córdoba"
      },
      provider: {
        "@id": "https://www.movibox.com.ar/#movingcompany"
      },
      telephone: "+5493512586221",
    },
    {
      "@type": "MovingCompany",
      "@id": "https://www.movibox.com.ar/#movingcompany"
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
      icon: ShieldCheck,
      title: "Seguro contra accidentes personales",
      description: "Contamos con cobertura de seguros para accidentes personales durante la mudanza, para mayor tranquilidad y responsabilidad.",
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
        "Dentro de Córdoba Capital, el precio se calcula por hora. Te informamos el valor antes de comenzar.",
    },
    {
      question: "¿La cotización tiene costo?",
      answer:
        "No. La cotización es totalmente gratuita y respondemos por WhatsApp en menos de 5 minutos.",
    },
    {
      question: "¿Trabajan fines de semana?",
      answer:
        "Sí. Realizamos mudanzas de lunes a domingo, incluidos feriados.",
    },
    {
      question: "¿Suben muebles por escalera?",
      answer: "Sí, nuestros ayudantes pueden subir los muebles por escalera.",
    },
    {
      question: "¿Desarman y arman muebles?",
      answer: "Sí, podemos desarmar y armar los muebles durante la mudanza.",
    },
    {
      question: "¿Embalar objetos frágiles está incluido?",
      answer: "No. El embalaje de objetos frágiles tiene un valor adicional.",
    },
    {
      question: "¿Aceptan transferencias o efectivo?",
      answer: "Sí, aceptamos transferencias bancarias y efectivo.",
    },
    {
      question: "¿Qué zonas cubren?",
      answer: "Realizamos mudanzas en toda Córdoba Capital.",
    },
    {
      question: "¿Qué sucede si llueve?",
      answer:
        "Dependiendo del lugar y las condiciones, somos flexibles y coordinamos la mudanza con vos.",
    },
    {
      question: "¿Realizan mudanzas de oficinas?",
      answer: "Sí, realizamos mudanzas de oficinas y locales comerciales.",
    },
    {
      question: "¿Pueden guardar los muebles temporalmente?",
      answer: "Sí, contamos con servicio de guardamuebles.",
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
      <section className="relative flex min-h-screen items-center overflow-hidden overflow-x-hidden bg-black pt-24">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fd3a2d7e220454406b3a2fa6ac186b834?format=webp&width=800&height=1200"
          alt="Camión de mudanzas de Movibox Mudanzas"
          fill
          className="object-cover object-center md:hidden"
          priority
          unoptimized
          sizes="100vw"
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=800&height=1200"
          alt="Camión de mudanzas de Movibox Mudanzas"
          fill
          className="hidden object-cover object-center md:left-1/2 md:block md:w-1/2"
          priority
          quality={70}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container relative z-10 px-4 pb-24 pt-16 md:px-6">
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
            <div className="space-y-6 md:max-w-2xl">
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90 border border-white/20">
                Mudanzas y Fletes en Córdoba
              </span>

              <h1 className="text-4xl font-black text-white sm:text-6xl leading-tight">
                Mudanzas en Córdoba Capital
                <br />
                <span className="text-secondary-400">Con ayudantes y trato profesional.</span>
              </h1>

              <p className="text-lg text-white/90 sm:text-xl leading-relaxed">
                Atención inmediata y 
                cotización gratuita por WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start md:items-center">
                <HeroButtons />
              </div>

              <p className="text-xs text-white/70">
                Respuesta en menos de 5 minutos · Atención directa
              </p>
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
      <section id="camion" className="bg-white py-16 sm:py-32 overflow-x-hidden">
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
              <article className="rounded-md border border-neutral-300 shadow-card hover:shadow-card-hover transition">
                <div className="relative aspect-[903/763] w-full bg-neutral-100">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F676ba5d5151c479483d7f7ad5e3444af?format=webp&width=800&height=1200"
                    alt="Camión de mudanzas en Córdoba - Movibox Mudanzas"
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        
                  <h3 className="text-sm text-neutral-600 font-semibold uppercase tracking-wide mb-4">Nos ocupamos de que tus pertenencias lleguen en perfecto estado.</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 font-bold mt-0.5">✓</span>
                      <span className="text-sm text-neutral-700">Protección para tus muebles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 font-bold mt-0.5">✓</span>
                      <span className="text-sm text-neutral-700">Herramientas adecuadas para cada mudanza</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 font-bold mt-0.5">✓</span>
                      <span className="text-sm text-neutral-700">Carga segura durante el traslado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-500 font-bold mt-0.5">✓</span>
                      <span className="text-sm text-neutral-700">Cuidado en cada detalle</span>
                    </li>
                  </ul>
                  <Button asChild variant="primary" size="lg" className="w-full">
                    <WhatsAppConversionLink
                      href="https://wa.me/5493512586221?text=Hola%20%F0%9F%91%8B%2C%20quer%C3%ADa%20consultar%20por%20una%20mudanza.%20%C2%BFMe%20cuentan%20c%C3%B3mo%20trabajan%20y%20me%20pasan%20un%20presupuesto%3F"
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
              Así trabajamos tu mudanza
            </h2>

          </ScrollAnimation>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Nos contás los detalles",
                description: "Indicamos origen, destino, cantidad de muebles y fecha estimada.",
              },
              {
                step: "2",
                title: "Evaluamos tu mudanza",
                description: "Calculamos el servicio necesario según la cantidad de cosas y las características del traslado.",
              },
              {
                step: "3",
                title: "Coordinamos día y horario",
                description: "Organizamos todo para que tu mudanza sea simple y sin complicaciones.",
              },
              {
                step: "4",
                title: "Realizamos el traslado",
                description: "Cargamos, protegemos y trasladamos tus pertenencias con cuidado hasta su destino.",
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
<WhatsAppConversionLink
  href="https://wa.me/5493512586221?text=Hola%20%F0%9F%91%8B%2C%20quer%C3%ADa%20consultar%20por%20una%20mudanza.%20%C2%BFMe%20cuentan%20c%C3%B3mo%20trabajan%20y%20me%20pasan%20un%20presupuesto%3F"
  className="flex items-center gap-3"
>
  <Image src={wsp} alt="WhatsApp" width={32} height={32} />
  Cotizar ahora por WhatsApp
</WhatsAppConversionLink>

              </Button>
            </div>

            <p className="text-xs text-white/70 pt-4">
              📞 351 258-6221 · Respondemos en menos de 5 minutos
            </p>
          </ScrollAnimation>
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
