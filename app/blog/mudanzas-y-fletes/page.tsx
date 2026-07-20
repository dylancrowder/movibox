import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Clock, Truck, DollarSign } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Breadcrumb } from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import image_header from "@/public/logisticas.webp";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";
import wsp from "@/public/images/iconos/whatsapp.webp";

const SLUG = "mudanzas-y-fletes";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Mudanzas y Fletes en Córdoba | Guía Completa 2024 | Movibox Logística",
  description:
    "Guía completa de mudanzas y fletes en Córdoba Capital. Servicio profesional con personal capacitado, vehículos equipados y presupuesto sin cargo. Tips para tu mudanza.",
  keywords: [
    "mudanzas Córdoba",
    "mudanzas Córdoba Capital",
    "fletes Córdoba",
    "transporte de muebles",
    "mudanzas residenciales Córdoba",
    "fletes de carga Córdoba",
    "servicio de transporte Córdoba",
    "mudanzas comerciales Córdoba",
    "costo mudanza Córdoba",
    "embalaje Córdoba",
  ],
  ogImage: "/images/webimages/hombre_subiendo_caja.jpg",
  ogImageAlt: "Equipo profesional realizando embalaje y mudanza segura",
});

export default function MudanzasYFletesPage() {
  const faqItems = [
    { question: "¿Cuál es el costo de una mudanza en Córdoba?", answer: "El costo depende del volumen, distancia y complejidad. Ofrecemos presupuesto sin cargo visitando tu domicilio. Ver tabla de precios arriba." },
    { question: "¿Cuánto tiempo tarda una mudanza local?", answer: "Una mudanza en Córdoba Capital suele completarse en 4 a 8 horas dependiendo del volumen y accesos. Una mudanza de 1-2 dormitorios toma típicamente 4-6 horas." },
    { question: "¿Incluyen embalaje?", answer: "Sí, incluimos embalaje profesional estándar. También ofrecemos materiales premium (burbujas reforzadas, cajas especiales) con costo adicional." },
    { question: "¿Aseguran mis pertenencias?", answer: "Sí, ofrecemos seguro de carga opcional con cobertura de daños accidentales. Las condiciones y límites se evalúan caso por caso." },
    { question: "¿Puedo usar guardamuebles?", answer: "Sí, contamos con guardamuebles seguro con vigilancia 24/7, control de acceso y clima controlado para almacenamiento temporal o prolongado." },
    { question: "¿Trabaja los fines de semana?", answer: "Sí, trabajamos sábados y domingos con tarifa diferencial. Consulta disponibilidad con anticipación." },
    { question: "¿Realizan mudanzas fuera de Córdoba?", answer: "No. Atendemos únicamente Córdoba Capital y toda la provincia de Córdoba. No realizamos mudanzas a otras provincias." },
    { question: "¿Qué debo hacer antes de la mudanza?", answer: "Te recomendamos: descartar lo innecesario, armar un inventario, marcar cajas, desconectar servicios y cambiar domicilio en documentos importantes." },
  ];

  const jsonLd = blogPostJsonLd({
    slug: SLUG,
    headline: "Mudanzas y Fletes en Córdoba: servicio seguro y eficiente",
    description:
      "Guía completa sobre mudanzas y fletes en Córdoba Capital. Incluye consejos, proceso paso a paso y preguntas frecuentes.",
    image: "/images/webimages/hombre_subiendo_caja.jpg",
    type: "NewsArticle",
  });

  return (
    <article className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden text-center">
        <Image
          src={image_header}
          alt="Mudanzas en Córdoba Capital"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/50" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-6xl">
            Mudanzas y Fletes en Córdoba
          </h1>
          <p className="mt-4 text-lg text-white/85 md:text-xl">
            Guía completa para planificar tu mudanza sin estrés en Córdoba. Servicio con camión.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-up">
            <div className="mb-8">
              <Breadcrumb 
                items={[{ label: "Blog", href: "/blog" }]} 
                currentPage="Mudanzas y Fletes"
              />
            </div>
          </ScrollAnimation>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contenido Principal */}
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-up" className="prose prose-lg max-w-none space-y-8">
                {/* Introducción */}
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    En <strong>Movibox Logística</strong> brindamos un servicio integral de <strong>mudanzas y fletes en Córdoba</strong>, adaptado tanto a hogares como a empresas. Contamos con unidades equipadas, operadores experimentados y una coordinación que garantiza puntualidad y cuidado en cada traslado.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    En Movibox Logística ofrecemos mudanzas y fletes en Córdoba Capital y provincia con atención personalizada en cada traslado.
                  </p>
                </div>

                {/* Sección: Tipos de Mudanzas */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Tipos de mudanzas que realizamos</h2>
                  <p className="text-muted-foreground">
                    Nos especializamos en <strong>mudanzas residenciales</strong>, comerciales y fletes de objetos individuales o carga general. Ofrecemos soluciones flexibles que se ajustan al tamaño del envío y a la complejidad del servicio.
                  </p>

                  <div className="grid gap-4 mt-6">
                    {[
                      { title: "Mudanzas residenciales", desc: "Traslado completo de casas y departamentos con embalaje, desmontaje y montaje de muebles." },
                      { title: "Mudanzas comerciales", desc: "Traslado de oficinas, locales y empresas con minimización de tiempo de inactividad." },
                      { title: "Fletes puntuales", desc: "Transporte de objetos individuales o carga general sin necesidad de mudanza completa." },
                      { title: "Mudanzas de larga distancia", desc: "Traslados a otras provincias con coordinación y seguimiento profesional." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-4 rounded-lg bg-accent/50">
                        <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sección: Proceso Paso a Paso */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Proceso paso a paso de tu mudanza</h2>
                  <p className="text-muted-foreground">
                    Nuestro equipo sigue un proceso estructurado para asegurar que tu mudanza sea exitosa:
                  </p>

                  <div className="space-y-3 mt-6">
                    {[
                      { step: "1", title: "Contacto y presupuesto", desc: "Comunícate con nosotros por teléfono o WhatsApp. Realizamos una visita técnica para evaluar tu mudanza y ofrecerte un presupuesto sin cargo." },
                      { step: "2", title: "Confirmación y planificación", desc: "Una vez confirmado, coordinamos fecha, hora y personal necesario. Te brindamos asesoramiento sobre embalaje." },
                      { step: "3", title: "Día de la mudanza", desc: "Nuestro equipo se encarga del embalaje, desmontaje de muebles, carga segura y transporte. Cuidamos cada detalle." },
                      { step: "4", title: "Descarga y montaje", desc: "Entregamos en el destino, desembalamos objetos frágiles y armamos muebles en su lugar definitivo." },
                      { step: "5", title: "Seguimiento post-mudanza", desc: "Resolvemos cualquier inconveniente y aseguramos tu completa satisfacción." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-lg bg-secondary/20 border border-primary/20">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sección: Cobertura */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Cobertura en Córdoba y alrededores</h2>
                  <p className="text-muted-foreground">
                    Realizamos traslados en Córdoba Capital, Sierras Chicas, Villa Carlos Paz, Río Cuarto y localidades del interior provincial. No realizamos mudanzas ni fletes fuera de la provincia de Córdoba. Si necesitás combinar mudanza con almacenamiento, consultá nuestro <Link href="/guardamuebles" className="text-primary font-medium hover:underline">servicio de guardamuebles</Link>.
                  </p>
                </div>

                {/* Sección: Ventajas */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Ventajas de elegirnos</h2>
                  <ul className="space-y-3 mt-6">
                    {[
                      "Veh��culos de distintos tamaños según tu necesidad",
                      "Personal con amplia experiencia en mudanzas",
                      "Atención personalizada y presupuesto sin cargo",
                      "Embalaje profesional y cuidado de objetos frágiles",
                      "Desmontaje y montaje de muebles incluido",
                      "Servicio de guardamuebles y almacenamiento para mudanzas temporales",
                      "Comunicación permanente durante el proceso",
                      "Horarios flexibles adaptados a tus necesidades",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sección: Costo y Presupuesto */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">¿Cuánto cuesta una mudanza en Córdoba?</h2>
                  <p className="text-muted-foreground">
                    El costo depende de varios factores: <strong>volumen de carga</strong>, <strong>distancia de traslado</strong>, <strong>complejidad del trabajo</strong> (número de pisos, escaleras, accesibilidad), y <strong>servicios adicionales</strong> como embalaje premium, desmontaje de muebles o almacenamiento temporal.
                  </p>

                  <p className="text-sm text-muted-foreground mt-4 italic">
                    <strong>Para ver nuestras tarifas detalladas,</strong> consulta la <a href="/precios" className="text-primary font-medium hover:underline">página de Precios y Tarifas</a>.
                  </p>
                </div>

                {/* Sección: Consejos Prácticos */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Consejos prácticos para ahorrar en tu mudanza</h2>
                  <p className="text-muted-foreground">
                    Aquí te dejamos algunos tips para optimizar costos sin comprometer la calidad del servicio:
                  </p>

                  <ul className="space-y-3 mt-6">
                    {[
                      { title: "Deshazte de lo innecesario", desc: "Antes de la mudanza, vende o dona objetos que ya no uses. Menos volumen = menor costo y menos trabajo." },
                      { title: "Agenda con anticipación", desc: "Las mudanzas coordinadas con 2-3 semanas de adelanto suelen tener mejores tarifas que las urgentes." },
                      { title: "Evita fechas pico", desc: "Mudanzas entre semana o fuera de fin de mes son más económicas. Julio y enero (vacaciones) son épocas cara s." },
                      { title: "Ayuda con desmontaje", desc: "Si desmontas muebles previamente, ahorrarás en mano de obra especializada." },
                      { title: "Embalaje inteligente", desc: "Usa cajas propias o reutiliza. El embalaje premium se cobra aparte." },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 p-4 rounded-lg bg-accent/50 border border-primary/10">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-semibold text-xs">
                          ✓
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sección: Qué incluye nuestro servicio */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">¿Qué incluye nuestro servicio de mudanza?</h2>
                  <div className="grid gap-4 md:grid-cols-2 mt-6">
                    {[
                      { service: "Presupuesto sin cargo", included: true },
                      { service: "Visita técnica previa", included: true },
                      { service: "Personal especializado", included: true },
                      { service: "Embalaje profesional", included: true },
                      { service: "Desmontaje de muebles", included: true },
                      { service: "Montaje en destino", included: true },
                      { service: "Carga y descarga", included: true },
                      { service: "Protección de pisos y paredes", included: true },
                      { service: "Vehículos de todos los tamaños", included: true },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-start gap-3 p-3 rounded-lg bg-green-50/50 border border-green-200/50`}>
                        <span className={`mt-1 font-bold text-sm text-green-600`}>
                          ✓
                        </span>
                        <span className={`text-sm text-foreground`}>
                          {item.service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sección: Preguntas Frecuentes */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Preguntas frecuentes sobre mudanzas</h2>
                  <FAQ faqs={faqItems} />
                </div>

                {/* Llamada a Acción */}
                <div className="pt-8 border-t">
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/contacto">Solicitar presupuesto sin compromiso</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <ScrollAnimation animation="fade-up" className="space-y-6">
                {/* Card: Información Rápida */}
                <div className="rounded-3xl border border-primary/10 bg-accent p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Información rápida</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Clock, label: "Respuesta", value: "< 24 horas" },
                      { icon: MapPin, label: "Cobertura", value: "Córdoba Capital" },
                      { icon: DollarSign, label: "Presupuesto", value: "Sin cargo" },
                      { icon: Truck, label: "Cobertura", value: "Córdoba" },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                            <p className="font-semibold text-foreground">{item.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card: Contacto */}
                <div className="rounded-3xl border border-primary/10 bg-white p-6 space-y-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">Contacto directo</h3>
                  <Button asChild className="w-full">
                    <a href="tel:+5493512586221">Llamar: 351 258-6221</a>
                  </Button>
                  <Button asChild variant="whatsapp">
                    <WhatsAppConversionLink href="https://wa.me/5493512586221">
                      WhatsApp
                    </WhatsAppConversionLink>
                  </Button>
                </div>

                {/* Card: Artículos Relacionados */}
                <div className="rounded-3xl border border-primary/10 bg-white p-6 space-y-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">Artículos relacionados</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/mudanzas" className="text-primary font-medium hover:underline">
                        → Servicio de mudanzas
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/deposito-guardamuebles" className="text-primary font-medium hover:underline">
                        → Guardamuebles y almacenamiento
                      </Link>
                    </li>
                    <li>
                      <Link href="/guardamuebles" className="text-primary font-medium hover:underline">
                        → Guardamuebles en Córdoba
                      </Link>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
