import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Truck, CheckCircle2 } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import image_header from "@/public/logisticas.jpg";
import mudanzaImage from "@/public/images/webimages/pexels-tima-miroshnichenko-6169181.jpg";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";

const SLUG = "como-organizar-una-mudanza-sin-estres";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Cómo Organizar una Mudanza sin Estrés en Córdoba | Guía Completa",
  description:
    "Guía paso a paso para planificar tu mudanza en Córdoba. Aprende a organizar tiempos, embalaje y traslado de forma segura. Consejos prácticos de expertos.",
  keywords: [
    "cómo organizar una mudanza",
    "mudanza en córdoba",
    "guía mudanzas",
    "embalaje mudanza",
    "planificar mudanza",
    "consejos mudanzas",
  ],
  ogImage: "/images/webimages/pexels-tima-miroshnichenko-6169181.jpg",
  ogImageAlt: "Cómo organizar una mudanza sin estrés en Córdoba",
});

export default function BlogArticle() {
  const jsonLd = blogPostJsonLd({
    slug: SLUG,
    headline: "Cómo Organizar una Mudanza sin Estrés en Córdoba",
    description: "Guía completa paso a paso para planificar tu mudanza de forma segura",
    image: "/images/webimages/pexels-tima-miroshnichenko-6169181.jpg",
    datePublished: "2024-01-15",
    dateModified: "2024-12-01",
  });

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden text-center">
        <Image
          src={image_header}
          alt="Cómo organizar una mudanza sin estrés"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/50" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>
          <h1 className="text-4xl font-black text-white drop-shadow-lg md:text-6xl leading-tight">
            Cómo Organizar una Mudanza sin Estrés
          </h1>
          <p className="mt-4 text-lg text-white/85 md:text-xl flex items-center justify-center gap-4">
            <span className="flex items-center gap-2"><Clock className="h-5 w-5" /> Lectura: 8 min</span>
            <span className="flex items-center gap-2"><Truck className="h-5 w-5" /> Guía completa</span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <article className="prose prose-lg max-w-none">
            <ScrollAnimation animation="fade-up" className="mb-12 overflow-hidden rounded-3xl">
              <Image
                src={mudanzaImage}
                alt="Equipo profesional organizando una mudanza"
                width={800}
                height={400}
                className="w-full"
                quality={85}
              />
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" className="space-y-8">
              <div className="rounded-2xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Introducción</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Una mudanza puede ser una de las experiencias más estresantes, pero con la planificación adecuada, se convierte en un proceso ordenado y manejable. En este artículo, te compartimos una guía completa paso a paso para organizar tu mudanza en Córdoba de forma segura y eficiente.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Comienza con 4-6 semanas de anticipación</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Cuanto antes planifiques, menos estrés tendrás. Lo primero es hacer un inventario detallado de todas tus pertenencias.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Dibuja planos:</strong> Mide las puertas, pasillos y habitaciones de tu nuevo hogar para asegurar que los muebles grandes pasen sin problemas.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Lista de inventario:</strong> Anota qué cosas mudas y cuáles descartas. Aprovecha para donar o vender lo que no necesites.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Calcula volumen:</strong> Estima cuántos metros cúbicos necesitarás para contratar el vehículo correcto.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Elige la fecha correcta</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Evita mudanzas en los meses de mayor demanda (diciembre, enero, febrero) si es posible. Los precios son menores en otros meses, y los equipos trabajan con menos presión. Elige un día entre semana si puedes, cuando el tráfico es más fluido.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Contrata profesionales con anticipación</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Con 3-4 semanas antes, contacta empresas de mudanzas. Solicita presupuestos de al menos 3 opciones y compara precios, servicios y referencias.
                  </p>
                  <div className="bg-accent/50 p-6 rounded-xl border border-primary/10">
                    <p className="text-muted-foreground"><strong>Tip:</strong> En Transporte Rojo, ofrecemos presupuestos sin cargo en 24 horas. Incluimos embalaje, desmontaje y montaje según tu necesidad.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Embalaje organizado y eficiente</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Empieza a empacar 2-3 semanas antes, comenzando por los objetos que menos usas. Sigue estos pasos:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Codifica por colores:</strong> Usa marcadores de diferentes colores para cada habitación. Así sabrás exactamente dónde va cada caja.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Número de inventario:</strong> Numera cada caja y mantén una lista detallada de su contenido.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Protege lo frágil:</strong> Usa papel de burbuja, periódicos y mantas para proteger muebles y objetos delicados.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>No sobrecargues cajas:</strong> Usa cajas más pequeñas para cosas pesadas. Facilita el transporte y reduce riesgos de daño.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. La semana previa a la mudanza</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <strong>Confirma detalles:</strong> Llama a la empresa de mudanzas para confirmar fecha, hora y cualquier detalle especial.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Vacía heladeras y congeladores, deja descongelando con tiempo.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Notifica a servicios (gas, luz, internet) para que desconecten en la fecha correcta.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Cambia domicilio en tu banco, AFIP y documentos importantes.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Empaca lo que no usarás hasta después del traslado.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. El día de la mudanza</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <strong>Prepárate físicamente:</strong> Descansa bien la noche anterior, desayuna adecuadamente y viste ropa cómoda.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Llega temprano:</strong> Prepara acceso fácil, retira autos si es necesario.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Monitorea:</strong> Mantente cerca mientras cargan. Verifica que todo se cargue correctamente.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Inspecciona el nuevo hogar:</strong> Antes de descargar, verifica que puertas y accesos sean válidos.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Comprueba inventario:</strong> Marca cada caja conforme llega para asegurar que nada se pierda.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Después de la mudanza</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <strong>No todo debe estar perfecto el primer día.</strong> Tómate tiempo para organizarte.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Conecta servicios en el nuevo domicilio.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Desempaca gradualmente, comenzando por lo esencial.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Recicla o dona cajas de cartón.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Valida el estado de tus muebles y objetos.</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 mt-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Conclusión</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Con esta guía paso a paso, tu mudanza en Córdoba será mucho más ordenada y menos estresante. Lo clave es la planificación, el embalaje organizado y contar con profesionales confiables.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </article>

          {/* CTA Section */}
          <ScrollAnimation animation="fade-up" className="mt-20 rounded-3xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Listo para tu mudanza en Córdoba?</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En Transporte Rojo contamos con equipo profesional y experiencia para hacer tu mudanza sin estrés. Solicita un presupuesto sin cargo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/mudanzas">Ver mudanzas en Córdoba</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/contacto">Solicitar presupuesto</Link>
              </Button>
              <Button size="lg" asChild className="bg-brand-deep hover:bg-brand-bright text-white font-semibold rounded-lg flex items-center gap-3 shadow-none border border-black">
                <Link href="https://wa.me/5493512586221" target="_blank">
                  Consultar por WhatsApp
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Más artículos que te interesarán</h2>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollAnimation animation="fade-up">
              <Link href="/blog/cuando-usar-guardamuebles">
                <article className="h-full rounded-3xl border border-primary/10 bg-white p-8 hover:-translate-y-1 hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Cuándo conviene usar un guardamuebles</h3>
                  <p className="text-sm text-muted-foreground">
                    Casos reales donde el almacenamiento temporal ahorra dinero y te resuelve problemas durante una mudanza.
                  </p>
                </article>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={120}>
              <Link href="/blog/errores-comunes-al-contratar-una-mudanza">
                <article className="h-full rounded-3xl border border-primary/10 bg-white p-8 hover:-translate-y-1 hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Errores comunes al contratar una mudanza</h3>
                  <p className="text-sm text-muted-foreground">
                    Evita sobrecostos, daños y demoras con estos consejos clave de nuestros profesionales.
                  </p>
                </article>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
