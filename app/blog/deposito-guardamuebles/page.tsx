import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Lock, Clock, MapPin, DollarSign, Shield } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Breadcrumb } from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import image_header from "@/public/logisticas.jpg";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";

const SLUG = "deposito-guardamuebles";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Depósito y Guardamuebles en Córdoba | Guía de Almacenamiento",
  description:
    "Guía de guardamuebles en Córdoba Capital: bauleras, depósitos con vigilancia 24/7, planes mensuales y retiro a domicilio. Consejos para elegir almacenamiento seguro.",
  keywords: [
    "guardamuebles en córdoba capital",
    "alquiler de bauleras en córdoba",
    "depósitos para guardar muebles en córdoba",
    "alquiler de depósitos para muebles en córdoba",
    "guardamuebles cordoba",
    "bauleras en córdoba capital",
  ],
  ogImage: "/images/webimages/galpon.jpg",
  ogImageAlt: "Guardamuebles y depósitos en Córdoba Capital con seguridad 24/7",
});

export default function DepositoGuardamueblesPage() {
  const faqItems = [
    { question: "¿Cuál es el costo mensual?", answer: "Varía según tamaño: pequeño $400-800/mes, mediano $800-1.500/mes, grande $1.500-2.500+/mes. Presupuesto sin cargo." },
    { question: "¿Puedo acceder a mi depósito cuando quiera?", answer: "Acceso de lunes a sábado 9-18 hs. Para emergencias fuera de horario, consulta por servicio especial con cargo adicional." },
    { question: "¿Incluye seguro?", answer: "Sí, cobertura básica. Ofrecemos seguros ampliados (valor declarado) por +10% del tarifa mensual." },
    { question: "¿Qué pasa si quiero guardar cosas de forma indefinida?", answer: "Podés renovar mensualmente. Descuentos especiales: -10% por 3 meses, -15% por 6 meses, -20% por 12 meses." },
    { question: "¿Cómo es el proceso de retiro?", answer: "Coordinamos fecha. Entregamos a domicilio sin costo. Desembalamos si lo necesitas. Inventario de verificación." },
    { question: "¿Qué pasa si tengo mudanza durante el almacenamiento?", answer: "Sin problema. Podemos coordinar traslado del depósito a la nueva dirección sin costo adicional." },
    { question: "¿Hay costo por retiros parciales?", answer: "No. Podés retirar items parcialmente. Actualizamos inventario. Sin cargo por retiros frecuentes." },
    { question: "¿Puedo recibir visitas de terceros en el depósito?", answer: "No. Por seguridad, solo el cliente puede acceder. Fotos/videos disponibles previa solicitud." },
  ];
  const jsonLd = blogPostJsonLd({
    slug: SLUG,
    headline: "Depósito y Guardamuebles en Córdoba: almacenamiento seguro y flexible",
    description:
      "Guía completa sobre servicios de guardamuebles en Córdoba. Incluye tipos de planes, proceso y preguntas frecuentes.",
    image: "/images/webimages/galpon.jpg",
    datePublished: "2024-01-15",
    dateModified: "2024-12-01",
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
          alt="Depósito y guardamuebles seguro en Córdoba"
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
            Depósito y Guardamuebles en Córdoba
          </h1>
          <p className="mt-4 text-lg text-white/85 md:text-xl">
            Almacenamiento seguro con vigilancia 24/7. Soluciones flexibles para mudanzas temporales, reformas y almacenamiento prolongado.
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
                currentPage="Guardamuebles y Almacenamiento"
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
                    En <strong>Transporte Rojo</strong> brindamos un servicio integral de <strong>guardamuebles y almacenamiento seguro</strong> en Córdoba Capital. Contamos con galpones propios equipados para conservar tus pertenencias en perfectas condiciones, con vigilancia permanente y acceso controlado.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nuestros depósitos son ideales para quienes realizan mudanzas temporales, reformas en el hogar o necesitan un espacio adicional para resguardar mercadería, equipos o mobiliario de oficina.
                  </p>
                </div>

                {/* Sección: Casos de Uso */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">¿Cuándo usar nuestro guardamuebles?</h2>
                  <p className="text-muted-foreground">
                    El almacenamiento es la solución ideal para varias situaciones:
                  </p>

                  <div className="grid gap-4 mt-6">
                    {[
                      { title: "Mudanzas temporales", desc: "Estás en transición entre casas y necesitás guardar tus cosas temporalmente." },
                      { title: "Reformas y renovación", desc: "Renovás tu hogar y precisás espacio para guardar muebles durante el proceso." },
                      { title: "Viajes prolongados", desc: "Te vas del país o viajas largo tiempo y necesitás guardar tus pertenencias." },
                      { title: "Ampliaciones de espacio", desc: "Tenés objetos que no usás frecuentemente pero querés mantener guardados." },
                      { title: "Almacenamiento comercial", desc: "Empresas que necesitan guardar inventario, equipos o documentos." },
                      { title: "Cambio de negocio", desc: "Cambio de rubro y necesitás guardar stock o equipos de forma temporal." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-4 rounded-lg bg-accent/50">
                        <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sección: Características de Seguridad */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Seguridad y características de nuestros depósitos</h2>
                  <p className="text-muted-foreground">
                    Cada espacio está diseñado para ofrecer máxima seguridad, limpieza y ventilación:
                  </p>

                  <div className="space-y-3 mt-6">
                    {[
                      { icon: Lock, title: "Acceso controlado", desc: "Sistema de seguridad con tarjeta magnética y registro de accesos." },
                      { icon: Clock, title: "Vigilancia 24/7", desc: "Personal de seguridad y cámaras de vigilancia permanentemente activas." },
                      { icon: Shield, title: "Espacios limpios y secos", desc: "Ambientes ventilados, deshumidificados y sin plagas." },
                      { icon: MapPin, title: "Ubicación estratégica", desc: "Base en Córdoba Capital con fácil acceso desde cualquier zona." },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex gap-4 p-4 rounded-lg bg-secondary/20 border border-primary/20">
                          <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sección: Planes y Tarifas */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Planes de almacenamiento flexible</h2>
                  <p className="text-muted-foreground">
                    Ofrecemos planes adaptados a cada necesidad: <strong>diarios, semanales o mensuales</strong>, con tarifas claras y sin compromisos extensos.
                  </p>

                  <div className="grid gap-4 mt-6 md:grid-cols-3">
                    {[
                      {
                        plan: "Plan Semanal",
                        desc: "Ideal para mudanzas rápidas y transiciones cortas.",
                        features: ["Hasta 7 días", "Acceso permanente", "Inventario incluido", "Retiro incluido"],
                      },
                      {
                        plan: "Plan Mensual",
                        desc: "Para almacenamiento de mediano plazo con flexibilidad.",
                        features: ["Hasta 30 días", "Acceso permanente", "Inventario completo", "Retiro incluido"],
                      },
                      {
                        plan: "Plan Trimestral+",
                        desc: "Almacenamiento prolongado con descuentos especiales.",
                        features: ["Desde 3 meses", "Acceso permanente", "Seguro incluido", "Beneficios especiales"],
                      },
                    ].map((item, i) => (
                      <div key={i} className="p-6 rounded-xl border border-primary/20 bg-white shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.plan}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                        <ul className="space-y-2">
                          {item.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mt-4 italic">
                    *Consulta precios actuales y disponibilidad. Ofrecemos descuentos por contratación de servicios combinados (mudanza + almacenamiento).
                  </p>
                </div>

                {/* Sección: Proceso */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Cómo funciona nuestro servicio</h2>

                  <div className="space-y-3 mt-6">
                    {[
                      { step: "1", title: "Contacto inicial", desc: "Comunícate con nosotros para conocer disponibilidad y planes." },
                      { step: "2", title: "Visita técnica", desc: "Te asesoramos sobre el espacio ideal y documentación requerida." },
                      { step: "3", title: "Retiro de pertenencias", desc: "Nuestro equipo retira tus cosas de tu domicilio (incluido en el servicio)." },
                      { step: "4", title: "Inventario detallado", desc: "Registramos todo lo que guardamos para mayor transparencia." },
                      { step: "5", title: "Almacenamiento seguro", desc: "Vigilancia permanente, espacios ventilados y acceso controlado." },
                      { step: "6", title: "Entrega a domicilio", desc: "Cuando lo necesites, entregamos en tu nuevo lugar sin costo adicional." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-lg bg-muted/50">
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

                {/* Sección: Ventajas */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Ventajas de elegir Transporte Rojo</h2>
                  <ul className="space-y-3 mt-6">
                    {[
                      "Galpones propios en Córdoba Capital con fácil acceso",
                      "Almacenamos muebles, pertenencias, equipos, vehículos y motos",
                      "Seguridad y vigilancia 24 horas sin interrupciones",
                      "Ambientes secos, ventilados y limpios",
                      "Planes personalizados según la duración del almacenamiento",
                      "Inventario completo y detallado de tus objetos almacenados",
                      "Servicio de retiro y entrega a domicilio sin costo",
                      "Acceso flexible para visitas o retiros parciales",
                      "Seguros opcionales para mayor protección",
                      "Galpón propio en Córdoba con atención personalizada",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sección: Combinación de Servicios */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Combiná servicios para mayor comodidad</h2>
                  <p className="text-muted-foreground">
                    Podés combinar nuestro <Link href="/mudanzas" className="text-primary font-medium hover:underline">servicio de mudanzas</Link> con almacenamiento temporal en nuestro galpón dentro de la provincia de Córdoba.
                  </p>
                </div>

                {/* Sección: Tamaños y Espacios Disponibles */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Opciones de espacios disponibles</h2>
                  <p className="text-muted-foreground">
                    Ofrecemos diferentes tamaños de depósitos adaptados a cada necesidad:
                  </p>

                  <div className="grid gap-4 mt-6 md:grid-cols-2">
                    {[
                      { size: "Pequeño", vol: "5-10 m³", desc: "Ideal para monoambiente o pocos muebles", uso: "Almacenamiento 1-2 meses" },
                      { size: "Mediano", vol: "15-25 m³", desc: "Cómodo para departamento de 1-2 dormitorios", uso: "Almacenamiento 3-6 meses" },
                      { size: "Grande", vol: "30-50 m³", desc: "Perfecto para casa completa o negocio", uso: "Almacenamiento prolongado" },
                      { size: "Personalizado", vol: "Variable", desc: "Espacio según medidas específicas del cliente", uso: "Cualquier duración" },
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-lg border border-primary/10 bg-accent/30">
                        <h3 className="font-semibold text-foreground">{item.size}</h3>
                        <p className="text-sm text-primary font-medium mt-1">{item.vol}</p>
                        <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                        <p className="text-xs text-muted-foreground mt-2 italic">Uso típico: {item.uso}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sección: Qué NO Guardamos */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Restricciones y políticas de almacenamiento</h2>
                  <p className="text-muted-foreground">
                    Para mantener la seguridad y los estándares de nuestras instalaciones, hay ciertos items que no podemos almacenar:
                  </p>

                  <div className="space-y-3 mt-6">
                    {[
                      { item: "Sustancias inflamables", why: "Riesgo de incendio" },
                      { item: "Productos químicos peligrosos", why: "Contaminación de espacios" },
                      { item: "Alimentos perecederos", why: "Plagas y mal olor" },
                      { item: "Animales vivos", why: "Prohibido por ley" },
                      { item: "Armas o explosivos", why: "Ilegalidad" },
                      { item: "Residuos o basura", why: "Contaminación" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-lg bg-red-50 border border-red-200">
                        <span className="text-red-600 font-bold text-lg flex-shrink-0">✗</span>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{item.item}</p>
                          <p className="text-sm text-muted-foreground mt-1">{item.why}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sección: Mantenimiento y Cuidados */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Cuidados especiales para almacenamiento prolongado</h2>
                  <p className="text-muted-foreground">
                    Si guardás cosas por mucho tiempo, recomendamos estas prácticas:
                  </p>

                  <ul className="space-y-3 mt-6">
                    {[
                      { tip: "Ventilación", desc: "Nuestros espacios están ventilados. Evita plástico hermético en muebles delicados." },
                      { tip: "Protección de polvo", desc: "Cubre con telas transpirables, no plástico. Permite circulación de aire." },
                      { tip: "Revisiones periódicas", desc: "Recomendamos visitas cada 3 meses para verificar estado de muebles." },
                      { tip: "Organización vertical", desc: "Apila cajas eficientemente. Deja espacio para circulación de aire." },
                      { tip: "Inventario actualizado", desc: "Mantén registro fotográfico. Te ayuda con seguros e identificación." },
                      { tip: "Control de humedad", desc: "Nuestras instalaciones tienen deshumidificadores. No necesitas silica gel extra." },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-sm">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{item.tip}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sección: FAQ */}
                <div className="space-y-4 pt-8 border-t">
                  <h2 className="text-3xl font-bold text-foreground">Preguntas frecuentes sobre guardamuebles</h2>
                  <FAQ faqs={faqItems} />
                </div>

                {/* Llamada a Acción */}
                <div className="pt-8 border-t">
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/contacto">Consultá disponibilidad y tarifas</Link>
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
                      { icon: Lock, label: "Vigilancia", value: "24/7" },
                      { icon: DollarSign, label: "Presupuesto", value: "Sin cargo" },
                      { icon: Clock, label: "Acceso", value: "Flexible" },
                      { icon: MapPin, label: "Ubicación", value: "Córdoba Capital" },
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
                  <Button asChild className="w-full bg-brand-deep hover:bg-brand-bright text-white font-semibold flex items-center justify-center gap-2 shadow-none border border-black">
                    <a href="https://wa.me/5493512586221" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Card: Artículos Relacionados */}
                <div className="rounded-3xl border border-primary/10 bg-white p-6 space-y-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">Artículos relacionados</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/blog/mudanzas-y-fletes" className="text-primary font-medium hover:underline">
                        → Mudanzas y fletes en Córdoba
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
