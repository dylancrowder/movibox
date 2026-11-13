import type { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import wsp from "@/public/images/iconos/whatsapp.webp";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import { Breadcrumb } from "@/components/Breadcrumb";
import { createBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre mudanzas | Movibox",
  description:
    "Respuestas prácticas sobre cotizaciones, servicios, cobertura y contratación de mudanzas, fletes y guardamuebles en Córdoba.",
  alternates: { canonical: "https://www.movibox.com.ar/faq" },
  openGraph: {
    type: "website",
    title: "Preguntas Frecuentes | Mudanzas en Córdoba",
    description:
      "Preguntas y respuestas sobre mudanzas, guardamuebles, fletes y almacenamiento en Córdoba Capital y provincia.",
    url: "https://www.movibox.com.ar/faq",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fa9eaffe9e866466ba711000ec1f0ae5e?format=webp&width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "FAQ - Preguntas frecuentes sobre mudanzas y guardamuebles",
      },
    ],
  },
};

const faqs = {
  mudanzas: [
    {
      question: "¿Realizan mudanzas en toda Córdoba Capital y provincia?",
      answer:
        "Sí, realizamos mudanzas completas en Córdoba Capital y toda la provincia de Córdoba. Contamos con camión y equipo profesional para traslados residenciales y comerciales dentro de la provincia.",
    },
    {
      question: "¿Cuánto tiempo demora una mudanza en Córdoba?",
      answer:
        "El tiempo depende del volumen, la distancia y las condiciones de acceso. Compartí esos datos al pedir una cotización para que se evalúe tu caso.",
    },
    {
      question: "¿Incluyen embalaje en el servicio de mudanza?",
      answer:
        "No todos los servicios incluyen embalaje. Consultá qué tareas y materiales corresponden a tu presupuesto antes de confirmar.",
    },
    {
      question: "¿Qué tipos de carga transportan?",
      answer:
        "Realizamos mudanzas de viviendas, departamentos, oficinas y locales. Indicá qué querés trasladar para confirmar si el servicio se adapta a la carga.",
    },
    {
      question: "¿Cómo es el proceso de una mudanza?",
      answer:
        "Contanos la fecha, el origen, el destino, qué necesitás trasladar y las condiciones de acceso. Con esa información se define el alcance y el presupuesto.",
    },
    {
      question: "¿Realizan mudanzas fuera de la provincia de Córdoba?",
      answer:
        "Sí, podés consultar por mudanzas de larga distancia. El presupuesto se prepara según el origen, el destino y el servicio solicitado.",
    },
  ],
  guardamuebles: [
    {
      question: "¿Cómo funciona el servicio de guardamuebles?",
      answer:
        "Ofrecemos espacios cerrados para cada cliente en un galpón sectorizado. La contratación es mensual y hay opciones de 5, 10 y 15 m³.",
    },
    {
      question: "¿Cuánto tiempo puedo guardar mis muebles?",
      answer:
        "El servicio se contrata por mes. Consultá las condiciones vigentes si necesitás guardar tus pertenencias durante varios meses.",
    },
    {
      question: "¿Qué medidas de seguridad tiene el depósito?",
      answer:
        "El galpón está sectorizado y cada cliente dispone de un espacio cerrado. El establecimiento cuenta con monitoreo y control.",
    },
    {
      question: "¿Qué pasa si necesito acceder a mis cosas guardadas?",
      answer:
        "Consultá cómo coordinar una visita o el acceso a tu espacio antes de contratar.",
    },
  ],
  fletes: [
    {
      question: "¿Cuál es la diferencia entre flete y mudanza?",
      answer:
        "Un flete suele referirse al traslado de objetos o cargas puntuales; una mudanza, al traslado de los muebles y pertenencias de una vivienda o espacio de trabajo.",
    },
    {
      question: "¿Realizan fletes de objetos individuales?",
      answer:
        "Podés consultar por el traslado de objetos y cargas puntuales en Córdoba Capital y provincia.",
    },
  ],
  cobertura: [
    {
      question: "¿En qué zonas de Córdoba atienden?",
      answer:
        "Atendemos Córdoba Capital, Sierras Chicas y toda la provincia de Córdoba. Contactanos con tu localidad y evaluamos disponibilidad y presupuesto.",
    },
    {
      question: "¿Hay costo adicional por mudanzas a lugares lejanos?",
      answer:
        "El precio depende del origen, el destino, el volumen y las condiciones del servicio. Pedí una cotización con esos datos.",
    },
  ],
  horarios: [
    {
      question: "¿Cuál es el horario de atención?",
      answer:
        "Consultá por teléfono o WhatsApp la disponibilidad de atención y de fechas para el servicio que necesitás.",
    },
    {
      question: "¿Realizan mudanzas en fin de semana?",
      answer:
        "La disponibilidad depende de la fecha. Escribinos para consultar opciones.",
    },
    {
      question: "¿Puedo agendar una mudanza con anticipación?",
      answer:
        "Sí. Compartí la fecha que tenés prevista y consultá la disponibilidad para coordinar.",
    },
  ],
  seguimiento: [
    {
      question: "¿Cómo hago seguimiento de mi mudanza?",
      answer:
        "Podés comunicarte por WhatsApp para coordinar el servicio y consultar sobre el traslado.",
    },
  ],
};

export default function FAQPage() {
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.movibox.com.ar/faq#webpage",
        name: "Preguntas frecuentes sobre mudanzas y guardamuebles en Córdoba",
        description:
          "Preguntas y respuestas prácticas sobre cotizaciones, servicios y contratación en Córdoba.",
        url: "https://www.movibox.com.ar/faq",
      },
      createBreadcrumbJsonLd([
        { name: "Inicio", path: "/" },
        { name: "Preguntas frecuentes", path: "/faq" },
      ]),
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/95 to-primary/80 py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Breadcrumb
              items={[]}
              currentPage="Preguntas frecuentes"
              inverted
            />
          </div>
          <ScrollAnimation animation="fade-up" className="space-y-6 text-center">
            <h1 className="text-5xl font-black text-white sm:text-6xl leading-tight">
              Preguntas Frecuentes
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90 leading-relaxed">
              Resolvemos tus dudas sobre mudanzas, guardamuebles y fletes en Córdoba Capital y provincia.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="bg-white py-20">
        <div className="container px-4 md:px-6">
          {/* Mudanzas */}
          <ScrollAnimation animation="fade-up" className="mb-20 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-foreground">Mudanzas en Córdoba</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Información sobre nuestros{" "}
                <Link href="/mudanzas" className="text-primary font-medium hover:underline">
                  servicios de mudanzas
                </Link>{" "}
                servicios de mudanza en Córdoba.
              </p>
            </div>
            <FAQ faqs={faqs.mudanzas} />
          </ScrollAnimation>

          {/* Guardamuebles */}
          <ScrollAnimation animation="fade-up" className="mb-20 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-foreground">Guardamuebles y Almacenamiento</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Preguntas sobre cómo funciona nuestro{" "}
                <Link href="/guardamuebles" className="text-primary font-medium hover:underline">
                  servicio de guardamuebles
                </Link>{" "}
                y contratación mensual.
              </p>
            </div>
            <FAQ faqs={faqs.guardamuebles} />
          </ScrollAnimation>

          {/* Fletes */}
          <ScrollAnimation animation="fade-up" className="mb-20 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-foreground">Fletes y Transporte</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Consultas sobre transporte de objetos específicos y fletes en Córdoba.
              </p>
            </div>
            <FAQ faqs={faqs.fletes} />
          </ScrollAnimation>

          {/* Cobertura */}
          <ScrollAnimation animation="fade-up" className="mb-20 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-foreground">Cobertura Geográfica</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Información sobre las zonas donde operamos en Córdoba y fuera de provincia.
              </p>
            </div>
            <FAQ faqs={faqs.cobertura} />
          </ScrollAnimation>

          {/* Horarios */}
          <ScrollAnimation animation="fade-up" className="mb-20 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-foreground">Horarios y Disponibilidad</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Detalles sobre nuestros horarios de atención y cómo agendar servicios.
              </p>
            </div>
            <FAQ faqs={faqs.horarios} />
          </ScrollAnimation>

          {/* Seguimiento */}
          <ScrollAnimation animation="fade-up" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-foreground">Coordinación del servicio</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cómo coordinar una mudanza y mantener el contacto durante el traslado.
              </p>
            </div>
            <FAQ faqs={faqs.seguimiento} />
          </ScrollAnimation>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="bg-accent py-20">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-foreground">¿No encontraste tu respuesta?</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Si tenés una pregunta específica que no está en este listado, contactanos por WhatsApp o completá el formulario.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contacto">Ir a Contacto</Link>
              </Button>
              <Button
                size="lg"
                asChild
                variant="whatsapp"
              >
                <WhatsAppConversionLink href="https://wa.me/5493512586221" className="flex items-center gap-2">
                  <Image src={wsp} alt="WhatsApp" width={24} height={24} />
                  Escribir por WhatsApp
                </WhatsAppConversionLink>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white py-20">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="space-y-8 text-center">
            <h2 className="text-4xl font-black text-foreground leading-tight">
              Listo para confiar tu mudanza a Movibox Mudanzas
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Somos tu opción en Córdoba para mudanzas y guardamuebles con camión y galpón.
            </p>

            <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#1da852] text-white font-semibold gap-2">
              <WhatsAppConversionLink href="https://wa.me/5493512586221?text=Hola,%20después%20de%20revisar%20las%20preguntas%20frecuentes,%20tengo%20más%20dudas%20y%20quiero%20solicitar%20un%20servicio." className="flex items-center gap-2">
                <Image src={wsp} alt="WhatsApp" width={20} height={20} />
                Habla con nosotros
              </WhatsAppConversionLink>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
