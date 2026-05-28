import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Warehouse, CheckCircle2 } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import image_header from "@/public/logisticas.webp";
import depositoImage from "@/public/images/webimages/hombre-de-tiro-medio-trabajando-en-almacen.webp";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";

const SLUG = "cuando-usar-guardamuebles";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Cuándo Conviene Usar un Guardamuebles | Guía y Casos Reales",
  description:
    "Descubre cuándo es recomendable alquilar un guardamuebles en Córdoba. Casos reales donde el almacenamiento temporal te ahorra dinero y soluciona problemas.",
  keywords: [
    "guardamuebles córdoba",
    "almacenamiento temporal",
    "depósito de muebles",
    "cuándo usar guardamuebles",
    "alquilar guardamuebles",
    "almacenamiento seguro",
  ],
  ogImage: "/images/webimages/hombre-de-tiro-medio-trabajando-en-almacen.jpg",
  ogImageAlt: "Almacenamiento seguro en guardamuebles en Córdoba",
});

export default function BlogArticle() {
  const jsonLd = blogPostJsonLd({
    slug: SLUG,
    headline: "Cuándo Conviene Usar un Guardamuebles",
    description: "Casos reales y consejos sobre almacenamiento temporal en Córdoba",
    image: "/images/webimages/hombre-de-tiro-medio-trabajando-en-almacen.jpg",
    datePublished: "2024-02-10",
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
          alt="Almacenamiento seguro en guardamuebles"
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
            Cuándo Conviene Usar un Guardamuebles
          </h1>
          <p className="mt-4 text-lg text-white/85 md:text-xl flex items-center justify-center gap-4">
            <span className="flex items-center gap-2"><Clock className="h-5 w-5" /> Lectura: 7 min</span>
            <span className="flex items-center gap-2"><Warehouse className="h-5 w-5" /> Casos reales</span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <article className="prose prose-lg max-w-none">
            <ScrollAnimation animation="fade-up" className="mb-12 overflow-hidden rounded-3xl">
              <Image
                src={depositoImage}
                alt="Guardamuebles profesional con almacenamiento seguro"
                width={800}
                height={400}
                className="w-full object-cover"
                quality={85}
              />
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" className="space-y-8">
              <div className="rounded-2xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Introducción</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A veces, una mudanza no sucede el mismo día que dejas tu vivienda anterior. En otras ocasiones, necesitas espacio temporal para reorganizar tu hogar. En este artículo, descubrirás cuándo alquilar un guardamuebles es la mejor opción y cómo puede ahorrarte dinero, estrés y problemas.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Cambio de vivienda con fechas desfasadas</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Este es el caso más común. Entregas tu departamento actual el 30 de noviembre, pero tu nuevo hogar no está disponible hasta el 15 de diciembre. ¿Qué haces con tus muebles en esos 15 días?
                  </p>
                  <div className="bg-accent/50 p-6 rounded-xl border border-primary/10">
                    <p className="text-muted-foreground"><strong>Solución:</strong> Alquila un guardamuebles por 15 días. Es mucho más económico que pagar hogar temporal, hotel o presionar a tu casero/vendedor para extender las fechas. En Transporte Rojo ofrecemos planes flexibles desde 7 días hasta 12 meses.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Reformas y remodelaciones en el hogar</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Si vas a hacer reformas importantes (pintar, cambiar pisos, ampliar habitaciones), necesitarás retirar muebles y cosas del lugar.
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Duración típica:</strong> 1-3 meses mientras se realizan las reformas.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Ventaja:</strong> Tu hogar queda limpio para trabajar, sin riesgos de daño a muebles durante las obras.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Retorno tranquilo:</strong> Cuando terminen las reformas, tus cosas están intactas y organizadas esperándote.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Mudanzas dentro de Córdoba con fechas que no coinciden</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Algunos clientes aceptan un trabajo en otra ciudad o país y aún no saben si permanecerán allí. No quieren deshacerse de sus muebles, pero tampoco pueden llevar todo.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Almacenan en Córdoba mientras deciden su futuro.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Después de 6-12 meses, regresan o envían los muebles a su nuevo destino.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Paz mental: Sus pertenencias están seguras, vigiladas 24/7.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Herencias y necesidad de espacio temporal</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Cuando recibes muebles de una herencia o de un familiar cercano, a veces no tienes espacio inmediato para colocarlos en tu hogar. Un guardamuebles te da tiempo para:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Decidir qué muebles conservas.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Restaurar o reparar piezas antiguas con cuidado.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Vender lo que no necesitas sin apuros.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Separaciones y reestructuración del hogar</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    En situaciones de divorcio o separación, uno de los cónyuges necesita tiempo para buscar nuevo hogar mientras viven temporalmente con familiares o en departamento reducido.
                  </p>
                  <div className="bg-accent/50 p-6 rounded-xl border border-primary/10">
                    <p className="text-muted-foreground"><strong>Beneficio:</strong> Guardar los muebles en depósito seguro permite evitar discusiones, proteger las pertenencias y tomar decisiones con calma sobre qué se queda y qué se vende.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Vendimias de stock o comerciantes de segunda mano</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Algunos emprendedores compran muebles o artículos en lotes para vender después. Necesitan almacenarlos mientras trabajan en limpiar, restaurar y comercializar.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Espacio seguro y vigilado para inventario.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Acceso fácil para retirar items según demanda.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Tarifas flexibles por m² sin contrato largo.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Ventajas de un guardamuebles profesional vs. improvisation</h2>
                  <div className="space-y-4 my-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-primary/10 bg-white p-6">
                        <h4 className="font-bold text-foreground mb-3 text-red-600">❌ Guardar en casa de un amigo</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Cosas olvidadas o perdidas</li>
                          <li>• Riesgo de daño sin responsabilidad</li>
                          <li>• Incomodidad al amigo</li>
                          <li>• Sin climatización ni seguridad</li>
                        </ul>
                      </div>
                      <div className="rounded-xl border border-primary/10 bg-white p-6">
                        <h4 className="font-bold text-foreground mb-3 text-green-600">✅ Guardamuebles profesional</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Acceso a tu vehículo cuando quieras</li>
                          <li>• Seguro y vigilancia 24/7</li>
                          <li>• Ambientes secos y ventilados</li>
                          <li>• Responsabilidad profesional</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 mt-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Conclusión: El guardamuebles es una inversión inteligente</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    No siempre puedes ejecutar tu mudanza en las fechas ideales. Un guardamuebles te da flexibilidad, seguridad y tranquilidad mental. En lugar de meter tus muebles en un sótano dañado, un galpón sin vigilancia o la casa de alguien más, invierte en almacenamiento profesional. Te ahorrará problemas a largo plazo.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </article>

          {/* CTA Section */}
          <ScrollAnimation animation="fade-up" className="mt-20 rounded-3xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Necesitas un guardamuebles en Córdoba?</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En Transporte Rojo ofrecemos almacenamiento seguro con vigilancia 24/7, control de acceso digital y planes flexibles. Buscamos, guardamos y entregamos sin cargo adicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/guardamuebles">Ver más sobre guardamuebles</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contacto">Solicitar presupuesto</Link>
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
              <Link href="/blog/como-organizar-una-mudanza-sin-estres">
                <article className="h-full rounded-3xl border border-primary/10 bg-white p-8 hover:-translate-y-1 hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Cómo organizar una mudanza sin estrés</h3>
                  <p className="text-sm text-muted-foreground">
                    Guía paso a paso para planificar tiempos, embalaje y traslado de forma segura en Córdoba.
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
