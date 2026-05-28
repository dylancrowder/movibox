import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimation } from "@/components/scroll-animation";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import image_header from "@/public/logisticas.jpg";
import ContactoForm from "@/components/ContactoForm";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import wsp from "@/public/images/iconos/whatsapp.png";

const faqs = [
  {
    question: "¿Realizan mudanzas en toda Córdoba Capital y provincia?",
    answer:
      "Sí. Ofrecemos servicio de mudanzas completas en Córdoba Capital y toda la provincia, con equipo profesional y vehículos equipados para cada tipo de carga.",
  },
  {
    question: "¿Puedo alquilar un depósito temporal?",
    answer:
      "Contamos con guardamuebles propio con vigilancia 24/7, control de acceso digital e inventario actualizado. Planes flexibles según tu necesidad de almacenamiento.",
  },
  {
    question: "¿Cómo sigo mi mudanza o flete?",
    answer:
      "Brindamos comunicación permanente y seguimiento personalizado para que sepas en qué etapa se encuentra tu servicio en todo momento.",
  },
  {
    question: "¿Cuánto demora una mudanza en Córdoba?",
    answer:
      "Una mudanza en Córdoba Capital suele completarse entre 4 a 8 horas dependiendo del volumen y accesos. Evaluamos cada caso para darte un estimado certero.",
  },
];

export const metadata: Metadata = {
  title: "Contacto Movibox Logística | Presupuesto Mudanzas y Guardamuebles",
  description:
    "Contactá a Movibox Logística para mudanzas en Córdoba Capital y provincia, guardamuebles seguro. Presupuesto gratis en menos de 24 horas. WhatsApp y formulario de contacto.",
  keywords: [
    "contacto movibox logística",
    "presupuesto mudanzas cordoba",
    "mudanzas cordoba capital",
    "guardamuebles cordoba",
    "alquilar deposito cordoba",
    "presupuesto gratis mudanzas",
  ],
  alternates: { canonical: "https://www.movibox.com.ar/contacto" },
  openGraph: {
    type: "website",
    title: "Contacto Movibox Logística | Presupuesto Mudanzas Córdoba",
    description:
      "Contactá a Movibox Logística para solicitar presupuesto de mudanzas y guardamuebles en Córdoba. Respuesta inmediata por WhatsApp.",
    url: "https://www.movibox.com.ar/contacto",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fa9eaffe9e866466ba711000ec1f0ae5e?format=webp&width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Contacto Movibox Logística - Presupuesto mudanzas Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto Movibox Logística | Mudanzas Córdoba",
    description:
      "Solicita tu presupuesto de mudanzas o guardamuebles. Respuesta inmediata por WhatsApp.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fa9eaffe9e866466ba711000ec1f0ae5e?format=webp&width=1200&height=630",
    ],
  },
  robots: { index: true, follow: true },
};

const contactMethods = [
  {
    icon: Phone,
    title: "Teléfono directo",
    value: "+54 9 351 258-6221",
    description: "Atención personalizada de lunes a sábado.",
    href: "tel:+5493512586221",
    action: "Llamar",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+54 9 351 258-6221",
    description: "Respuesta inmediata y seguimiento en vivo.",
    href: "https://wa.me/5493512586221",
    external: true,
    action: "Enviar WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contacto@movibox.com.ar",
    description: "Envíanos los detalles para recibir una propuesta completa.",
    href: "mailto:contacto@movibox.com.ar",
    action: "Enviar Email",
  },
  {
    icon: MapPin,
    title: "Base de operaciones",
    value: "Camino Chacra de la Merced Km 1/2, Córdoba",
    description: "Coordinamos retiros en toda la ciudad y alrededores.",
    href: "#ubicacion",
    action: "Ver ubicación",
  },
];

export default function ContactoPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto - Movibox Logística",
    description: "Página de contacto para solicitar presupuestos de mudanzas y transporte en Córdoba",
    url: "https://www.movibox.com.ar/contacto",
    mainEntity: {
      "@type": "MovingCompany",
      name: "Movibox Logística",
      telephone: "+54-351-258-6221",
      email: "contacto@movibox.com.ar",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Camino Chacra de la Merced Km 1/2",
        addressLocality: "Córdoba",
        addressRegion: "Córdoba",
        addressCountry: "AR",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Sections */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden text-center">
        <Image
          src={image_header}
          alt="Oficina de Movibox Logística atendiendo consultas de mudanzas y transporte"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/50" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h1 className="text-5xl font-black text-white drop-shadow-lg md:text-7xl leading-tight">
            Contacto Movibox Logística
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl text-left max-w-prose leading-relaxed">
            Coordiná tu mudanza, flete o guardamuebles con nuestro equipo especializado.
            Dejanos tus datos y recibí un presupuesto rápido, claro y sin compromiso.
          </p>
        </div>
      </section>

      {/* Canales de contacto */}
      <section className="bg-accent py-32">
        <div className="container px-4 md:px-6">
          <ScrollAnimation
            animation="fade-up"
            className="mx-auto mb-16 max-w-3xl text-center space-y-6"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-deep bg-primary/10 px-3 py-1.5 rounded-full">
              Canales de contacto
            </span>
            <h2 className="text-balance text-4xl font-black sm:text-5xl text-foreground leading-tight">
              Elegí la vía que prefieras
            </h2>
          <p className="text-lg leading-relaxed text-foreground/80">

              Hablá con nosotros por teléfono, WhatsApp o correo electrónico y coordiná tu mudanza o flete de manera rápida y segura.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const isExternal = Boolean(method.external);

              return (
                <ScrollAnimation key={method.title} animation="fade-up" delay={index * 120}>
                  <a
                    href={method.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col justify-between rounded-3xl border border-primary/10 bg-white/95 p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {method.title}
                        </p>
                        <p className="text-sm font-semibold text-foreground">{method.value}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                      {method.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary/80">
                      {method.action} <span aria-hidden="true">→</span>
                    </span>
                  </a>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulario e información operativa */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <ScrollAnimation animation="fade-up">
              <ContactoForm />
            </ScrollAnimation>

            <div className="space-y-8">
              <ScrollAnimation animation="fade-up" delay={120}>
                <div className="rounded-2xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-lg shadow-primary/5">
                  <h3 className="text-2xl font-bold text-foreground">
                    Información operativa
                  </h3>
                  <div className="mt-6 space-y-5 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-foreground">Horarios de atención</p>
                        <p>Lunes a Viernes: 8:00 – 18:00</p>
                        <p>Sábados: 9:00 – 13:00</p>
                        <p className="mt-1 text-primary">Guardia WhatsApp 24/7 para urgencias.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-foreground">Cobertura</p>
                        <p>Córdoba Capital, Sierras Chicas y toda la provincia de Córdoba.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={260}>
                <div
                  id="ubicacion"
                  className="overflow-hidden rounded-3xl border border-primary/10 bg-white/95 shadow-lg shadow-primary/5"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground">Nuestra base en Córdoba</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Visitá nuestro centro logístico para coordinar retiros, embalaje y almacenamiento de manera segura y confiable.
                    </p>
                  </div>
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      title="Ubicación de Movibox Logística en Córdoba Capital"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.386001258131!2d-64.13761962363223!3d-31.40348947426776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bdb06350fce1%3A0xfb8e2b8b3f0115a7!2sTransporte%20Rojo!5e0!3m2!1ses!2sar!4v1764611451965!5m2!1ses!2sar"
                      className="absolute inset-0 h-full w-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>










                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-32">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="mx-auto mb-16 max-w-3xl text-center space-y-6">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-deep bg-primary/10 px-3 py-1.5 rounded-full">
              Preguntas frecuentes
            </span>
            <h2 className="text-balance text-4xl font-black sm:text-5xl text-foreground leading-tight">
              Resolvemos tus dudas antes de la mudanza
            </h2>
         <p className="text-lg leading-relaxed text-foreground/80">

              Respondemos las consultas más habituales sobre mudanzas y guardamuebles en Córdoba.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={120}>
            <FAQ faqs={faqs} />
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-white py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
          <ScrollAnimation animation="fade-up" className="space-y-8">
            <h2 className="text-4xl font-black sm:text-5xl text-foreground leading-tight">
              ¿Listo para coordinar tu mudanza o flete?
            </h2>
        <p className="text-lg leading-relaxed text-foreground/80">

              Nuestro equipo especializado te asesora en cada etapa: embalaje, traslado, depósito y entrega final. Recibí un presupuesto rápido, claro y sin compromiso.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/mudanzas">Ver servicios de mudanzas</Link>
              </Button>
              <Button size="lg" asChild className="bg-brand-deep hover:bg-brand-bright text-white font-semibold rounded-lg flex items-center gap-3 shadow-none border border-black">
                <Link href="https://wa.me/5493512586221" target="_blank">
                  <Image src={wsp} alt="WhatsApp" width={24} height={24} />
                  Consultar por WhatsApp
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
