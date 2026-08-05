import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";

const SLUG = "como-empacar-para-una-mudanza";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Cómo Empacar para una Mudanza | Guía Completa | Movibox",
  description:
    "Guía completa sobre cómo empacar correctamente para una mudanza. Materiales, técnicas y tips para proteger tus pertenencias durante el transporte en Córdoba.",
  keywords: [
    "cómo empacar mudanza",
    "embalaje mudanza profesional",
    "materiales embalaje",
    "proteger muebles mudanza",
    "técnicas embalaje",
    "mudanza Córdoba",
  ],
  ogImage: "/logisticas.webp",
  ogImageAlt: "Cómo empacar para una mudanza en Córdoba",
});

export default function EmpacarMudanzaPage() {
  const schema = blogPostJsonLd({
    slug: SLUG,
    headline: "Cómo Empacar para una Mudanza - Guía Completa",
    description:
      "Guía paso a paso sobre técnicas de embalaje, materiales necesarios y recomendaciones de expertos para mudanzas seguras.",
    image: "/logisticas.webp",
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
              Cómo Empacar para una Mudanza
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Guía completa con técnicas profesionales, materiales necesarios y recomendaciones de expertos para proteger tus pertenencias.
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
                  Empacar correctamente es fundamental para proteger tus muebles y pertenencias durante una mudanza. En esta guía te mostraremos las técnicas profesionales utilizadas por expertos en logística.
                </p>
              </div>

              {/* Section 1: Materiales */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Materiales Esenciales para Empacar</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Antes de comenzar a empacar, asegúrate de tener todos los materiales necesarios:
                </p>
                <ul className="space-y-3">
                  {[
                    "Cajas de mudanza de diferentes tamaños",
                    "Papel de embalaje y papel periódico",
                    "Cinta de embalaje reforzada",
                    "Marcadores permanentes",
                    "Papel burbuja para objetos frágiles",
                    "Bolsas de plástico para ropa y textiles",
                    "Mantas o cobertores para muebles grandes",
                    "Protectores de esquinas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2: Técnicas */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Técnicas Profesionales de Embalaje</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">1. Objetos Frágiles</h3>
                    <p className="text-muted-foreground">
                      Envuelve platos, vasos y vidrio con papel burbuja o papel de embalaje. Coloca dos capas de papel entre cada objeto. Usa cajas más pequeñas para evitar exceso de peso.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">2. Ropa y Textiles</h3>
                    <p className="text-muted-foreground">
                      Usa bolsas de plástico o cajas para agrupar ropa por tipos. Aprovecha las bolsas de vacío para ropa voluminosa. Etiqueta cada caja con su contenido.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">3. Muebles</h3>
                    <p className="text-muted-foreground">
                      Desmonta los muebles cuando sea posible. Guarda los tornillos y accesorios en bolsas etiquetadas. Cubre los muebles grandes con mantas para proteger la estructura.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">4. Electrodomésticos</h3>
                    <p className="text-muted-foreground">
                      Vacía y limpia todos los electrodomésticos antes de empacar. Protege con mantas si es necesario. Si es posible, conserva la caja original.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Tips */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Tips Importantes</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
                  {[
                    "Etiqueta todas las cajas con el contenido y la habitación de destino",
                    "Coloca objetos pesados en cajas pequeñas y ligeros en cajas grandes",
                    "No sobrecargues las cajas: máximo 20-25 kg",
                    "Guarda documentos importantes, joyas y objetos de valor en tu poder",
                    "Empaca un día antes para tener tiempo de revisar",
                    "Fotografía objetos valiosos antes de empacar",
                  ].map((tip) => (
                    <div key={tip} className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Recomendaciones */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Recomendaciones de Expertos</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    En Movibox Mudanzas recomendamos:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Comienza a empacar al menos una semana antes de la mudanza</li>
                    <li>• Utiliza materiales de calidad para mejor protección</li>
                    <li>• Si tienes objetos muy valiosos, considera embalaje profesional</li>
                    <li>• Haz un inventario detallado de lo que empaques</li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">¿Necesitas Ayuda con el Embalaje?</h3>
                <p className="text-muted-foreground">
                  En Movibox Mudanzas ofrecemos servicio profesional de embalaje. Nuestro equipo conoce las mejores técnicas para proteger tus pertenencias.
                </p>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary">
                  <Link href="/mudanzas">Conocer más sobre nuestros servicios</Link>
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
            <h2 className="text-3xl font-black text-foreground">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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

              <article className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Errores comunes al contratar una mudanza
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Evita estos errores costosos al planificar tu traslado.
                </p>
                <Link href="/blog/errores-comunes-al-contratar-una-mudanza" className="text-primary text-sm font-semibold flex items-center gap-2">
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
