import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import image_header from "@/public/logisticas.webp";
import camionImage from "@/public/images/webimages/camion_blog.webp";
import { blogArticleMetadata, blogPostJsonLd } from "@/lib/seo";

const SLUG = "errores-comunes-al-contratar-una-mudanza";

export const metadata: Metadata = blogArticleMetadata(SLUG, {
  title: "Errores Comunes al Contratar Mudanzas | Evita Sobrecostos y Daños",
  description:
    "Guía de errores comunes al contratar mudanzas en Córdoba. Evita sobrecostos, daños y demoras con estos consejos de expertos.",
  keywords: [
    "errores mudanza",
    "contratar mudanza",
    "evitar daños mudanza",
    "presupuesto mudanza",
    "empresa mudanzas",
    "tips mudanzas córdoba",
  ],
  ogImage: "/images/webimages/camion_blog.webp",
  ogImageAlt: "Errores comunes al contratar mudanzas en Córdoba",
});

export default function BlogArticle() {
  const jsonLd = blogPostJsonLd({
    slug: SLUG,
    headline: "Errores Comunes al Contratar una Mudanza",
    description: "Evita sobrecostos, daños y demoras con estos consejos clave",
    image: "/images/webimages/camion_blog.webp",
    datePublished: "2024-03-20",
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
          alt="Errores al contratar mudanzas"
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
            Errores Comunes al Contratar una Mudanza
          </h1>
          <p className="mt-4 text-lg text-white/85 md:text-xl flex items-center justify-center gap-4">
            <span className="flex items-center gap-2"><Clock className="h-5 w-5" /> Lectura: 9 min</span>
            <span className="flex items-center gap-2"><AlertCircle className="h-5 w-5" /> Evita estos errores</span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <article className="prose prose-lg max-w-none">
            <ScrollAnimation animation="fade-up" className="mb-12 overflow-hidden rounded-3xl">
              <Image
                src={camionImage}
                alt="Camión de mudanzas profesional"
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
                  Contratar una mudanza sin tener cuidado puede resultar en sobrecostos inesperados, daños a tus muebles y demoras que complican tu plan. Aquí te compartimos los errores más comunes que cometen nuestros clientes y cómo evitarlos.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. No solicitar presupuestos de múltiples empresas</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Muchos contratan la primera empresa que responden. Los precios pueden variar hasta 30-50% entre competidores.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Haz lo correcto:</strong> Solicita presupuestos a 3-4 empresas. Detalla exactamente qué se mudará, día, origen y destino.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Compara apples with apples:</strong> Asegúrate que todos incluyan lo mismo (embalaje, desmontaje, montaje, seguros).</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>En Transporte Rojo:</strong> Ofrecemos presupuestos sin cargo en 24 horas con detalles completos.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Presupuestar sobre información incompleta</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Decir "me mudo de un departamento a otro" no es suficiente. Las empresas necesitan detalles.
                  </p>
                  <div className="bg-accent/50 p-6 rounded-xl border border-primary/10 space-y-3">
                    <p className="text-muted-foreground font-semibold">Información que debes proporcionar:</p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• <strong>Volumen:</strong> ¿Cuántos metros cúbicos? (dormitorios, living, cocina, etc.)</li>
                      <li>• <strong>Accesos:</strong> ¿Hay ascensor? ¿Pasillos estrechos? ¿Pisos?</li>
                      <li>• <strong>Servicios especiales:</strong> ¿Necesitas embalaje? ¿Desmontaje/montaje?</li>
                      <li>• <strong>Muebles delicados:</strong> ¿Hay piano, pecera, obras de arte, muebles antiguos?</li>
                      <li>• <strong>Distancia:</strong> ¿Dentro de Córdoba Capital o interior provincial?</li>
                    </ul>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    Omitir datos resulta en presupuestos bajos que luego aumentan en el día de la mudanza.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Confiar únicamente en presupuestos por teléfono o WhatsApp</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Un presupuesto real requiere ver el lugar, especialmente para volumenes grandes.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Mejor opción:</strong> Solicita que un asesor visite tu hogar para evaluar. Es gratis y toma 15-20 minutos.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Ventaja:</strong> Identifican escaleras estrechas, muebles que necesitan desarmarse, y dan presupuestos precisos.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. No verificar referencias y reputación</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Contratar sin revisar qué dicen otros clientes es arriesgado. Busca:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Google Reviews y testimonios en redes sociales.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">¿Tiene experiencia? ¿Cuántos años lleva en el mercado?</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">¿Tienen seguro para daños? ¿Qué garantías ofrecen?</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">¿Responden rápido? ¿Son profesionales en la comunicación?</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. No confirmar detalles por escrito</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Acuerdos verbales son fácil de olvidar. Siempre pide:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Presupuesto escrito</strong> con detalles de qué está incluido.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Confirmación de fecha y hora</strong> con al menos 48 horas de anticipación.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Aclaraciones sobre costos extras</strong> (estacionamiento, pujas de carga, servicios especiales).</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. No preguntar sobre el seguro</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Accidentes pasan. Un espejo roto, un sofá manchado o un vidrio roto pueden costar.
                  </p>
                  <div className="bg-accent/50 p-6 rounded-xl border border-primary/10">
                    <p className="text-muted-foreground"><strong>Pregunta:</strong> ¿Qué incluye el seguro? ¿Cobre todo accidente o hay excepciones? ¿Cuál es el monto máximo de cobertura? En Movibox, nuestro seguro cubre daños accidentales en traslado.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Empacar de forma inadecuada</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Muchos clientes empacan con materiales baratos o insuficientes. Resultado: daños prevenibles.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Usa materiales adecuados:</strong> Papel de burbuja, periódico, mantas, cajas de cartón resistente.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>No sobrecarges cajas:</strong> Distribuye el peso uniformemente.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Considera servicio profesional de embalaje:</strong> Cuesta extra pero protege tus cosas valiosas.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. No estar presente durante la carga</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    No puedes supervisar si los muebles se cargan correctamente. Aunque es incómodo, tu presencia es clave.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Verifica que no carguen más de lo que debería ir (puede dañar el vehículo y tus cosas).</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Asegúrate que aseguren bien los muebles (amarras, protecciones).</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Marca daños pre-existentes para no asumir responsabilidad después.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Contratar justo antes de la fecha</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Esperar hasta última hora significa opciones limitadas y precios más altos.
                  </p>
                  <div className="bg-accent/50 p-6 rounded-xl border border-primary/10">
                    <p className="text-muted-foreground"><strong>Ideal:</strong> Contrata 2-3 semanas antes. Así aseguran disponibilidad y precios competitivos.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. No preguntar sobre el destino de residuos</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Cajas, materiales de embalaje y cosas viejas se generan en toda mudanza.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong>Pregunta:</strong> ¿La empresa retira cajas y basura? ¿Hay costo extra?</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Algunos dejan todo tirado, obligándote a limpiar después.</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 mt-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Conclusión</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Contratar una mudanza de calidad requiere tiempo para investigar, comparar y hacer preguntas. Los errores aquí listados cuestan dinero, estrés y dolores de cabeza.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    En Movibox priorizamos la comunicación clara, presupuestos detallados, profesionalismo y cuidado de tus pertenencias. Somos tu aliado para una mudanza segura y sin sorpresas.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </article>

          {/* CTA Section */}
          <ScrollAnimation animation="fade-up" className="mt-20 rounded-3xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Listo para contratar correctamente tu mudanza?</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contáctanos y recibirás un presupuesto sin cargo, detallado y honesto. Atendemos familias y comercios en Córdoba Capital y provincia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacto">Solicitar presupuesto</Link>
              </Button>
              <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#1da852] text-white font-semibold rounded-lg flex items-center gap-3 shadow-none border border-black">
                <Link href="https://wa.me/5493512586221?text=Hola%20Movibox%2C%20vengo%20de%20Google%20Ads.%20Necesito%20mudanza%20en%20C%C3%B3rdoba.%20%C2%BFMe%20pueden%20hacer%20presupuesto%3F" target="_blank">
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
              <Link href="/blog/cuando-usar-guardamuebles">
                <article className="h-full rounded-3xl border border-primary/10 bg-white p-8 hover:-translate-y-1 hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Cuándo conviene usar un guardamuebles</h3>
                  <p className="text-sm text-muted-foreground">
                    Casos reales donde el almacenamiento temporal ahorra dinero y resuelve problemas.
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
