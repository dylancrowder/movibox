import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, TrendingDown, Users, Lightbulb } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";

const SLUG = "mejor-momento-para-mudarse";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Mejor Momento para Mudarse | Guía de Épocas y Temporadas",
  description:
    "¿Cuándo es el mejor momento para mudarse? Análisis de épocas, temporadas, costos y disponibilidad. Guía completa para planificar tu mudanza en Córdoba.",
  keywords: [
    "mejor momento para mudarse",
    "épocas de mudanza",
    "cuándo mudarse",
    "mudanzas temporada baja",
    "costos mudanza por temporada",
    "mudanzas Córdoba",
  ],
});

export default function MejorMomentoPage() {
  const schema = blogPostJsonLd({
    slug: SLUG,
    headline: "Mejor Momento para Mudarse - Guía de Temporadas",
    description:
      "Análisis detallado de cuándo es el mejor momento para mudarse considerando costos, disponibilidad y otros factores.",
    image: "/logisticas.jpg",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    type: "Article",
  });

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/95 to-primary/80 py-20">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="space-y-6">
            <h1 className="text-5xl font-black text-white sm:text-6xl leading-tight">
              ¿Cuál es el Mejor Momento para Mudarse?
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Análisis detallado de épocas, temporadas y factores clave para elegir el momento ideal de tu mudanza.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <ScrollAnimation animation="fade-up" className="space-y-12">
              {/* Intro */}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Elegir el momento adecuado para mudarse puede ahorrar dinero, estrés y facilitar todo el proceso. En esta guía analizamos las mejores épocas del año para mudarte en Córdoba.
                </p>
              </div>

              {/* Season Analysis */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground">Análisis por Temporada</h2>

                {/* Spring */}
                <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h3 className="text-2xl font-bold text-foreground mb-3">🌱 Primavera (Septiembre a Noviembre)</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong>Ventajas:</strong> Clima agradable, precios moderados, disponibilidad intermedia. Es una época de transición entre temporada baja y alta.
                    </p>
                    <p>
                      <strong>Desventajas:</strong> Comienzan a aumentar los costos hacia fin de temporada. Disponibilidad limitada hacia fin de noviembre.
                    </p>
                    <p>
                      <strong>Recomendación:</strong> Buena opción si tienes flexibilidad. Planifica con 2-3 semanas de anticipación.
                    </p>
                  </div>
                </div>

                {/* Summer */}
                <div className="border-l-4 border-amber-500 pl-6 py-4">
                  <h3 className="text-2xl font-bold text-foreground mb-3">☀️ Verano (Diciembre a Febrero)</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong>Ventajas:</strong> Temporada de vacaciones escolares, muchas personas se mudan. Disponibilidad de empresas varía.
                    </p>
                    <p>
                      <strong>Desventajas:</strong> Precios más altos. Alto calor complica la mudanza. Mucha demanda puede saturar los servicios.
                    </p>
                    <p>
                      <strong>Recomendación:</strong> Si debes mudarte en verano, planifica muy con anticipación (mínimo 3-4 semanas).
                    </p>
                  </div>
                </div>

                {/* Fall */}
                <div className="border-l-4 border-secondary/70 pl-6 py-4">
                  <h3 className="text-2xl font-bold text-foreground mb-3">🍂 Otoño (Marzo a Mayo)</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong>Ventajas:</strong> Clima perfecto. Temperatura moderada para trabajar. Precios en baja después del verano.
                    </p>
                    <p>
                      <strong>Desventajas:</strong> Fin del otoño puede aumentar la demanda. Retorno a clases genera algo de movimiento.
                    </p>
                    <p>
                      <strong>Recomendación:</strong> Excelente época. Una de las mejores del año por clima y precios.
                    </p>
                  </div>
                </div>

                {/* Winter */}
                <div className="border-l-4 border-primary/70 pl-6 py-4">
                  <h3 className="text-2xl font-bold text-foreground mb-3">❄️ Invierno (Junio a Agosto)</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong>Ventajas:</strong> Precios más bajos. Disponibilidad alta. Clima frío pero trabajable. Menos demanda general.
                    </p>
                    <p>
                      <strong>Desventajas:</strong> Temperaturas bajas pueden complicar el trabajo. Menos luz natural. Posibles lluvias.
                    </p>
                    <p>
                      <strong>Recomendación:</strong> La mejor época para ahorrar dinero. Ideal si tu presupuesto es limitado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Day of Week */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">El Mejor Día de la Semana</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">✅ Mejores días</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Martes a Jueves: Menos demanda, mejor disponibilidad</li>
                      <li>• Primer miércoles del mes: Precios más bajos</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">❌ Evitar estos días</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Viernes a domingo: Mayor costo y demanda</li>
                      <li>• Primeros y últimos días del mes: Saturado</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Factors */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Factores a Considerar</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Tu presupuesto",
                      desc: "Si tienes presupuesto limitado, elige invierno o temporada baja.",
                    },
                    {
                      title: "Compromisos personales",
                      desc: "Ciclo escolar de hijos, trabajo, estudios pueden condicionar tus fechas.",
                    },
                    {
                      title: "Clima y comodidad",
                      desc: "El otoño y primavera ofrecen las mejores condiciones climáticas.",
                    },
                    {
                      title: "Disponibilidad de empresa",
                      desc: "Planifica con anticipación en temporada alta para asegurar tu fecha.",
                    },
                  ].map((factor) => (
                    <div key={factor.title} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">{factor.title}</h4>
                      <p className="text-sm text-muted-foreground">{factor.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">💡 Tips Para Ahorrar Dinero</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Evita las fechas de fin de mes (mayor demanda)</li>
                  <li>✓ Elige martes a jueves (menos saturado)</li>
                  <li>✓ Considera mudar a inicio de invierno o primavera</li>
                  <li>✓ Planifica con 3-4 semanas de anticipación</li>
                  <li>✓ Pide presupuestos a múltiples empresas</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">¿Ya Decidiste Cuándo Mudarte?</h3>
                <p className="text-muted-foreground">
                  En Movibox te ayudamos a coordinar tu mudanza en el mejor momento. Contáctanos para obtener un presupuesto personalizado.
                </p>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary">
                  <Link href="/mudanzas">Solicitar presupuesto</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-accent py-20">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="text-center space-y-8">
            <h2 className="text-3xl font-black text-foreground">Más Artículos del Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <article className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Cómo empacar para una mudanza
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Técnicas profesionales y materiales necesarios para proteger tus pertenencias.
                </p>
                <Link href="/blog/como-empacar-para-una-mudanza" className="text-primary text-sm font-semibold flex items-center gap-2">
                  Leer más <ArrowRight className="h-4 w-4" />
                </Link>
              </article>

              <article className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Cómo organizar una mudanza sin estrés
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Guía paso a paso para planificar tu mudanza correctamente.
                </p>
                <Link href="/blog/como-organizar-una-mudanza-sin-estres" className="text-primary text-sm font-semibold flex items-center gap-2">
                  Leer más <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
