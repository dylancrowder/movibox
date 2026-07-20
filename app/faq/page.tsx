import type { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import wsp from "@/public/images/iconos/whatsapp.webp";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Mudanzas y Guardamuebles en Córdoba",
  description:
    "Preguntas frecuentes sobre mudanzas, guardamuebles, fletes y almacenamiento en Córdoba. Resuelve tus dudas sobre traslados, seguridad y precios. Respuestas de expertos.",
  keywords: [
    "preguntas frecuentes mudanzas cordoba",
    "FAQ guardamuebles",
    "dudas sobre mudanza",
    "como funciona guardamuebles",
    "mudanza en cordoba capital",
    "almacenamiento seguro",
    "mudanzas cordoba provincia",
  ],
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
        "Una mudanza en Córdoba Capital suele completarse entre 4 a 8 horas, dependiendo del volumen, cantidad de pisos, accesibilidad y distancia. Mudanzas más complejas o de grandes volúmenes pueden requerir 1 o 2 días. Realizamos una evaluación previa para darte un estimado certero.",
    },
    {
      question: "¿Incluyen embalaje en el servicio de mudanza?",
      answer:
        "Ofrecemos embalaje profesional como servicio adicional. Nuestro equipo utiliza materiales de calidad para proteger tus muebles y objetos. También podemos asesorarte sobre cómo preparar y embalar tus pertenencias para minimizar riesgos durante el traslado.",
    },
    {
      question: "¿Qué tipos de carga transportan?",
      answer:
        "Transportamos todo tipo de carga residencial y comercial: muebles, electrodomésticos, libros, cuadros, plantas, objetos frágiles, equipos de oficina y más. Tenemos experiencia en traslados especiales como pianos, obras de arte y objetos de valor que requieren cuidado extra.",
    },
    {
      question: "¿Cómo es el proceso de una mudanza?",
      answer:
        "El proceso es simple: 1) Contactanos y describimos tu mudanza (cantidad de muebles, pisos, distancia). 2) Realizamos una evaluación y planificamos el traslado. 3) El día de la mudanza, nuestro equipo busca tus pertenencias, embala, carga, transporta y desembala en el nuevo domicilio. 4) Realizamos seguimiento y confirmar entrega.",
    },
    {
      question: "¿Realizan mudanzas fuera de la provincia de Córdoba?",
      answer:
        "No. Nuestro servicio de mudanzas y fletes está limitado a Córdoba Capital y toda la provincia de Córdoba. Si necesitás guardar muebles mientras definís tu próximo hogar en la provincia, podemos ayudarte con guardamuebles.",
    },
  ],
  guardamuebles: [
    {
      question: "¿Cómo funciona el servicio de guardamuebles?",
      answer:
        "Nuestro servicio de guardamuebles es integral: buscamos tus pertenencias en tu domicilio, las transportamos a nuestro depósito seguro, las almacenamos en excelentes condiciones, realizamos control de inventario digital y las entregamos cuando las necesites. Sin costo adicional por búsqueda y entrega.",
    },
    {
      question: "¿Cuánto tiempo puedo guardar mis muebles?",
      answer:
        "Puedes guardar tus pertenencias el tiempo que necesites: días, semanas, meses o años. Planes totalmente flexibles sin compromisos de tiempo mínimo. Contactanos para cotizar el almacenamiento según tu período.",
    },
    {
      question: "¿Qué medidas de seguridad tiene el depósito?",
      answer:
        "Nuestro depósito cuenta con vigilancia 24/7 con cámaras de seguridad, control de acceso digital, cerco perímetral y personal de seguridad. Cada cliente tiene un espacio independiente y seguro para sus pertenencias.",
    },
    {
      question: "¿Qué pasa si necesito acceder a mis cosas guardadas?",
      answer:
        "Puedes solicitar acceso a tu espacio de almacenamiento dentro de nuestros horarios de atención (lunes a viernes 8:00-18:00, sábados 9:00-13:00). Mantenemos un inventario digital de todas tus pertenencias para que sepas exactamente qué tienes guardado.",
    },
    {
      question: "¿Cómo puedo saber el estado de mis muebles guardados?",
      answer:
        "Realizamos seguimiento digital de tu almacenamiento. Puedes consultar en cualquier momento el estado de tu depósito, acceder a fotos de tus pertenencias y recibir actualizaciones sobre cualquier cambio. Disponible en horario de atención.",
    },
    {
      question: "¿Qué ocurre si tengo que extender el tiempo de guardado?",
      answer:
        "Sin problemas. Puedes extender el período de almacenamiento en cualquier momento contactándonos. Nuestros planes son flexibles y se adaptan a tus necesidades cambiantes.",
    },
  ],
  fletes: [
    {
      question: "¿Cuál es la diferencia entre flete y mudanza?",
      answer:
        "Un flete es el transporte de objetos específicos o cargas puntuales (una heladera, un escritorio, etc). Una mudanza es un traslado integral de todo el contenido de un domicilio o local. Ofrecemos ambos servicios con profesionalismo y cuidado.",
    },
    {
      question: "¿Realizan fletes de objetos individuales?",
      answer:
        "Sí, realizamos fletes de objetos específicos en Córdoba Capital y provincia. Transportamos desde un mueble hasta grandes volúmenes. Contamos con vehículos adaptados para cada tipo de carga.",
    },
    {
      question: "¿Atienden urgencias o fletes con poco tiempo?",
      answer:
        "Tenemos disponibilidad para fletes urgentes. Contactanos por teléfono o WhatsApp y evaluamos tu necesidad. Contamos con una guardia de WhatsApp 24/7 para consultas de emergencia.",
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
        "El costo se ajusta según distancia, volumen y accesibilidad de la zona. Realizamos una evaluación previa del trabajo para darte un presupuesto justo y transparente, sin sorpresas.",
    },
  ],
  horarios: [
    {
      question: "¿Cuál es el horario de atención?",
      answer:
        "Atendemos de lunes a viernes de 8:00 a 18:00 horas, y sábados de 9:00 a 13:00. Para urgencias, contáctanos por WhatsApp y evaluamos disponibilidad. Disponemos de guardia 24/7 para consultas.",
    },
    {
      question: "¿Realizan mudanzas en fin de semana?",
      answer:
        "Realizamos mudanzas los sábados según disponibilidad. Contactanos para evaluar tu necesidad específica de horario y coordinar.",
    },
    {
      question: "¿Puedo agendar una mudanza con anticipación?",
      answer:
        "Sí, recomendamos agendar con al menos 3-5 días de anticipación para coordinar mejor. Sin embargo, también atendemos solicitudes con menos tiempo según disponibilidad de nuestro equipo.",
    },
  ],
  seguimiento: [
    {
      question: "¿Cómo hago seguimiento de mi mudanza?",
      answer:
        "Brindamos comunicación permanente durante todo el proceso. Nuestro equipo te contacta antes de iniciar, durante el traslado y al finalizar. Puedes llamar o enviar WhatsApp en cualquier momento para consultar el estado.",
    },
    {
      question: "¿Qué pasa si encuentro daños después de la mudanza?",
      answer:
        "Realizamos un reporte detallado al finalizar la mudanza. Si encuentras daños, reportalos dentro de las 48 horas. Documentamos todo y nos hacemos cargo de la responsabilidad según corresponda.",
    },
  ],
};

export default function FAQPage() {
  const allFaqs = [
    ...faqs.mudanzas,
    ...faqs.guardamuebles,
    ...faqs.fletes,
    ...faqs.cobertura,
    ...faqs.horarios,
    ...faqs.seguimiento,
  ];

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/95 to-primary/80 py-20">
        <div className="container px-4 md:px-6">
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
                Todo lo que necesitas saber sobre nuestros{" "}
                <Link href="/mudanzas" className="text-primary font-medium hover:underline">
                  servicios de mudanzas
                </Link>{" "}
                completas, residenciales y comerciales en Córdoba.
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
                y almacenamiento seguro con vigilancia 24/7.
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
              <h2 className="text-3xl font-black text-foreground">Seguimiento y Garantías</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cómo hacemos seguimiento de tu mudanza y qué garantías ofrecemos.
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
                Si tienes una pregunta específica que no está en nuestro FAQ, contactanos directamente. Nuestro equipo está siempre disponible para resolver tus dudas.
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
                <WhatsAppConversionLink href="https://wa.me/5493512586221" conversionLabel="faq_whatsapp_click" className="flex items-center gap-2">
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
              Listo para confiar tu mudanza a Movibox Logística
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Somos tu opción en Córdoba para mudanzas y guardamuebles con camión y galpón.
            </p>

            <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#1da852] text-white font-semibold gap-2">
              <WhatsAppConversionLink href="https://wa.me/5493512586221?text=Hola,%20después%20de%20revisar%20las%20preguntas%20frecuentes,%20tengo%20más%20dudas%20y%20quiero%20solicitar%20un%20servicio." conversionLabel="faq_cta_whatsapp" className="flex items-center gap-2">
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
