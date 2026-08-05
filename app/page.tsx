import type { Metadata } from "next";
import Image from "next/image";
import {
  Truck,
  MapPin,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight,
  Warehouse,
} from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import HeroButtons from "@/components/HeroButtons";
import Link from "next/link";
import img from "../public/images/header/headerchacra.webp";
import { Button } from "@/components/ui/button";
import mudanza_imagen from "@/public/images/camion/imagen_fish2.webp"
import wsp from "@/public/images/iconos/whatsapp.webp";

import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";

export const metadata: Metadata = {
  title:
    "Mudanzas en Córdoba Capital y Provincia | Movibox Mudanzas",
  description:
    "Mudanzas en Córdoba Capital y provincia. Servicio profesional con camión equipado. Presupuesto gratis por WhatsApp.",
  alternates: { canonical: "https://www.movibox.com.ar/" },

  openGraph: {
    type: "website",
    title:
      "Mudanzas en Córdoba Capital y Provincia | Movibox Mudanzas",
    description:
      "Mudanzas en Córdoba Capital y provincia. Servicio profesional con camión equipado. Presupuesto gratis por WhatsApp.",
    url: "https://www.movibox.com.ar/",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fa9eaffe9e866466ba711000ec1f0ae5e?format=webp&width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Mudanzas y Guardamuebles en Córdoba Capital - Movibox Mudanzas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas en Córdoba Capital y Provincia | Movibox Mudanzas",
    description:
      "Mudanzas en Córdoba Capital y provincia. Servicio profesional con camión equipado. Presupuesto gratis por WhatsApp.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fa9eaffe9e866466ba711000ec1f0ae5e?format=webp&width=1200&height=630"],
  },
  robots: { index: true, follow: true },
};

const stats = [
  { icon: Truck, label: "Transporte", value: "Camión" },
  { icon: MapPin, label: "Cobertura", value: "Córdoba" },
  { icon: Clock, label: "Presupuesto", value: "Sin cargo" },
];

const aboutHighlights = [
  "Mudanzas y fletes en Córdoba Capital y provincia",
  "Guardamuebles en galpón propio con almacenamiento seguro",
  "Retiro, traslado y entrega a domicilio",
  "Camión equipado para mudanzas residenciales y comerciales",
];
//h
const services = [
  {
    icon: Truck,
    title: "Mudanzas y Fletes en Córdoba",
    description:
      "Mudanzas completas de viviendas, departamentos y oficinas. Fletes de objetos individuales o grandes volúmenes en Córdoba Capital y provincia.",
    image: "/images/camion/imagen_camion.webp",
    href: "/mudanzas",
  },
  {
    icon: Warehouse,
    title: "Guardamuebles y Almacenamiento",
    description:
      "Servicio de almacenamiento seguro con vigilancia 24/7. Buscamos, almacenamos y entregamos cuando lo necesites sin costo adicional.",
    image: "/galpon.webp",
    href: "/guardamuebles",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Servicio confiable",
    description:
      "Atención personalizada en cada mudanza y traslado dentro de Córdoba Capital y provincia.",
  },
  {
    icon: Truck,
    title: "Camión equipado",
    description:
      "Un camión preparado para mudanzas residenciales, comerciales y fletes en la provincia de Córdoba.",
  },
  {
    icon: Warehouse,
    title: "Almacenamiento seguro y vigilado",
    description:
      "Depósito propio con control de acceso, vigilancia 24/7 y seguimiento digital para total transparencia.",
  },
  {
    icon: MapPin,
    title: "Cobertura en Córdoba y provincia",
    description:
      "Servicio especializado en traslados dentro de Córdoba Capital y toda la provincia con respuesta rápida.",
  },
];

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.movibox.com.ar/#organization",
      name: "Movibox Mudanzas",
      url: "https://www.movibox.com.ar",
      logo: "https://www.movibox.com.ar/images/iconos/logo-movibox.svg",
      sameAs: [
        "https://www.facebook.com/movibox",
        "https://www.instagram.com/moviboxcba"
      ],
      telephone: "+5493512586221",
      email: "movibox.cba@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Camino Chacra de la Merced Km 1/2",
        addressLocality: "Córdoba",
        addressRegion: "Córdoba",
        addressCountry: "AR",
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.movibox.com.ar/#website",
      url: "https://www.movibox.com.ar",
      name: "Movibox Mudanzas - Mudanzas y Guardamuebles en Córdoba",
      inLanguage: "es-AR",
      publisher: {
        "@id": "https://www.movibox.com.ar/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.movibox.com.ar/buscar?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      name: "Movibox Mudanzas - Mudanzas y Guardamuebles en Córdoba",
      description:
        "Mudanzas y guardamuebles en Córdoba Capital y provincia. Camión y galpón.",
      url: "https://www.movibox.com.ar/",
      mainEntity: {
        "@id": "https://www.movibox.com.ar/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.movibox.com.ar"
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* HERO */}
      {/* HERO: RUTA CRÍTICA (Sin animaciones pesadas para bajar el LCP delay) */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
        <Image
          src={img}
          alt="Camión de Movibox Mudanzas realizando mudanza en Córdoba"
          fill
          className="object-cover"
          priority
          fetchPriority="high" // Prioridad máxima para el navegador
          loading="eager"      // Fuerza la carga inmediata
          sizes="100vw"
          quality={60}         // Bajamos un 5% más para ganar velocidad
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Simplificado gradiente */}

        <div className="container relative z-10 px-4 pb-24 pt-16 md:px-6">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="space-y-6 md:max-w-2xl">
              <span className="inline-flex items-center justify-center rounded-full bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90 border border-white/20">
                Empresa de transporte y depósito
              </span>

              {/* El H1 ahora renderiza sin esperar a JS de animaciones */}
              <h1 className="text-4xl font-black text-white sm:text-6xl leading-tight">
                Mudanzas y Guardamuebles en Córdoba Capital
              </h1>

              <p className="text-lg text-white/90 sm:text-xl leading-relaxed">
                En <strong>Movibox Mudanzas</strong> estamos especializados en mudanzas y guardamuebles
                en Córdoba. Ofrecemos traslados seguros y almacenamiento con vigilancia 24/7.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
                <HeroButtons />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
          <ChevronDown className="h-10 w-10 text-white/60 animate-bounce" />
        </div>
      </section>
      {/* ABOUT */}
      <section className="bg-white py-32">
        <div className="container px-4 md:px-6 grid gap-16 lg:grid-cols-2 items-center">
          <ScrollAnimation animation="fade-up" className="space-y-8">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
              Mucho más que un traslado
            </span>


            <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
              Mudanzas y guardamuebles en Córdoba, con galpón propio
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600">

              Desde Córdoba brindamos un servicio integral que incluye{" "}
              <strong>mudanzas completas</strong>, <strong>almacenamiento seguro</strong> y{" "}
              <strong>fletes especializados.</strong> Cada
              servicio es planificado según el tipo de carga, ubicación y tiempo de entrega
              requerido.
            </p>
            <p className="text-lg text-neutral-600">
              Contamos con un equipo profesional que maneja cada
              traslado con cuidado.
            </p>
            <ul className="space-y-4">
              {aboutHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 rounded-full bg-secondary-500 p-1.5 text-white shadow-md flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>

                  <span className="text-sm font-medium text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[903/763]">
              <Image
                src={mudanza_imagen}
                alt="Equipo profesional de Movibox Mudanzas realizando mudanza"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={70}
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-accent py-32">
        <div className="container px-4 md:px-6 text-center">
          <ScrollAnimation animation="fade-up" className="space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
              Nuestros servicios
            </span>


            <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
              Mudanzas y guardamuebles - Soluciones completas en Córdoba
            </h2>

            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Cada servicio está diseñado para ofrecer seguridad, eficiencia y confiabilidad.
              Desde mudanzas residenciales hasta fletes especializados y almacenamiento, nos
              adaptamos a tus necesidades y garantizamos atención profesional en cada etapa.
            </p>
          </ScrollAnimation>

          {/* FILA HORIZONTAL CENTRADA */}
          <div className="mb-12 flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <ScrollAnimation
                key={service.title}
                animation="fade-up"
                delay={index * 100}
              >
                <Link href={service.href}>
                  <article className="
  w-full
  max-w-[360px]
  min-h-[520px]
  flex flex-col
  rounded-3xl
  overflow-hidden
  border border-primary/70
  bg-white
  shadow-sm
  transition
  hover:-translate-y-1
  hover:shadow-lg
">

                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="360px"
                        quality={70}
                      />
                    </div>

                    {/* Contenido */}
                    <div className="p-8 flex flex-col flex-1 text-left">

                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="
                  rounded-full
                  p-3
                  bg-muted/40
                  ring-1 ring-primary/40
                  text-primary
                "
                        >
                          <service.icon className="h-5 w-5" />
                        </div>

                        <div className="text-lg font-semibold">
                          {service.title}
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-sm text-slate-600 mb-6">

                        {service.title === "Mudanzas y Fletes en Córdoba"
                          ? "Trasladamos tus pertenencias dentro de Córdoba Capital y provincia con vehículos adaptados a cada tipo de carga, asegurando rapidez y cuidado. Equipo profesional con asistencia completa en embalaje y desembalaje."
                          : "Guardamos tus pertenencias en instalaciones seguras, con control de acceso y entrega flexible según tu necesidad. Vigilancia 24/7, inventario digital y seguimiento transparente de cada paquete."}
                      </p>

                      {/* CTA */}
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-2 transition-colors duration-200 hover:text-orange-500 hover:underline active:text-orange-700 cursor-pointer">
                        Conocer más <ArrowRight className="h-4 w-4" />
                      </span>



                    </div>
                  </article>
                </Link>
              </ScrollAnimation>
            ))}
          </div>


          <ScrollAnimation animation="fade-up">
            <div className="mt-6 flex justify-center">
              <Button
                asChild
                variant="primary"
                size="lg"
              >
                <Link href="/mudanzas">Ver mudanzas</Link>
              </Button>
            </div>


          </ScrollAnimation>
        </div>
      </section>




      {/* BENEFITS */}
      <section className="bg-neutral-100 py-32">
        <div className="container px-4 md:px-6 text-center">
          <ScrollAnimation animation="fade-up" className="space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
              Por qué elegirnos
            </span>
            <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
              Beneficios de mudarte y guardar muebles al mejor precio
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Nuestro compromiso es brindarte un servicio confiable y profesional. Cada traslado se ejecuta con seguridad, eficiencia y respeto por tus pertenencias. La experiencia nos permiten ofrecer soluciones adaptadas a cada cliente.
            </p>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={benefit.title} animation="fade-up" delay={index * 120}>
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

      {/* BLOG SEO SECTION */}
      <section className="bg-secondary-50 py-32">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
              Blog & Consejos
            </span>

            <h2 className="text-4xl font-black sm:text-5xl leading-tight text-primary">
              Consejos útiles para mudanzas y guardamuebles en Córdoba
            </h2>

            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Compartimos guías prácticas, recomendaciones y experiencias reales para ayudarte
              a planificar tu mudanza, reducir costos y proteger tus pertenencias.
            </p>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Cómo organizar una mudanza sin estrés en Córdoba",
                description:
                  "Guía paso a paso para planificar tiempos, embalaje y traslado de forma segura.",
                href: "/blog/como-organizar-una-mudanza-sin-estres",
              },
              {
                title: "Cuándo conviene usar un guardamuebles",
                description:
                  "Casos reales donde el almacenamiento temporal ahorra dinero y problemas.",
                href: "/blog/cuando-usar-guardamuebles",
              },
              {
                title: "Errores comunes al contratar una mudanza",
                description:
                  "Evita sobrecostos, daños y demoras con estos consejos clave.",
                href: "/blog/errores-comunes-al-contratar-una-mudanza",
              },
            ].map((post, index) => (
              <ScrollAnimation key={post.title} animation="fade-up" delay={index * 120}>
                <article className="h-full rounded-md bg-white p-8 shadow-card border border-neutral-300 flex flex-col hover:shadow-card-hover hover:-translate-y-1">
                  <div className="text-lg font-semibold text-primary mb-3">
                    {post.title}
                  </div>
                  <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                    {post.description}
                  </p>

                  <Link
                    href={post.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-2 transition-colors duration-200 hover:text-secondary-600 hover:underline active:text-secondary-700 cursor-pointer"
                  >
                    Leer artículo <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-up">
            <div className="mt-16 flex justify-center">
              <Button asChild variant="primary" size="lg">
                <Link href="/blog">Ver todos los artículos</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>




      {/* CALL TO ACTION FINAL */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <ScrollAnimation
            animation="fade-up"
            className="space-y-8 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black sm:text-5xl text-primary leading-tight">
              ¿Listo para coordinar tu mudanza o flete?
            </h2>

            <p className="text-lg leading-relaxed text-neutral-600">

              Nuestro equipo especializado te asesora en cada etapa: embalaje,
              traslado, depósito y entrega final. Recibí un presupuesto rápido,
              claro y sin compromiso.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* WhatsApp */}
              <Button
                asChild
                variant="whatsapp"
                size="lg"
              >
                <WhatsAppConversionLink
                  href="https://wa.me/5493512586221"
                  className="flex items-center gap-3"
                >
                  <Image
                    src={wsp}
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    priority
                  />
                  Consultar por WhatsApp
                </WhatsAppConversionLink>
              </Button>

              {/* Ver ubicación */}
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link href="/contacto#ubicacion" className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Ver ubicación
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
