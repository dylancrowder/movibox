import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import wsp from "@/public/images/iconos/whatsapp.webp";
import mudanzaImage from "@/public/images/webimages/pexels-tima-miroshnichenko-6169181.webp"
import camion from "@/public/images/webimages/camion_blog.webp"
import deposito from "@/public/images/webimages/hombre-de-tiro-medio-trabajando-en-almacen.webp"
import image_header from "@/public/logisticas.webp";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";

export const metadata: Metadata = {
  title: "Blog de Movibox Mudanzas | Mudanzas, Guardamuebles y Fletes",
  description:
    "Artículos, guías y consejos prácticos sobre mudanzas en Córdoba, guardamuebles seguro, fletes y transporte. Tips de expertos en logística local. Aprende cómo mudarte sin estrés.",
  keywords: [
    "blog transporte cordoba",
    "mudanzas cordoba",
    "guardamuebles cordoba",
    "guía mudanzas",
    "consejos mudanzas",
    "fletes cordoba",
    "almacenamiento seguro",
  ],
  alternates: {
    canonical: "https://www.movibox.com.ar/blog",
  },
  openGraph: {
    type: "website",
    title: "Blog de Movibox Mudanzas | Mudanzas, Guardamuebles y Fletes",
    description:
      "Guías y consejos sobre mudanzas en Córdoba, guardamuebles y almacenamiento seguro. Tips de expertos en logística local.",
    url: "https://www.movibox.com.ar/blog",
    images: [
      {
        url: "https://www.movibox.com.ar/logisticas.jpg",
        width: 1200,
        height: 630,
        alt: "Artículos y guías sobre mudanzas, logística y transporte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Movibox Mudanzas",
    description:
      "Consejos prácticos sobre mudanzas, transporte y guardamuebles en Córdoba y Argentina.",
    images: ["https://www.movibox.com.ar/logisticas.jpg"],
  },
};

export default function BlogHomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Movibox Mudanzas",
    description:
      "Artículos, guías y consejos sobre transporte, logística y mudanzas en Argentina.",
    publisher: {
      "@type": "Organization",
      name: "Movibox Mudanzas",
      url: "https://www.movibox.com.ar",
      logo: {
        "@type": "ImageObject",
        url: "https://www.movibox.com.ar/logo.png",
      },
    },
    url: "https://www.movibox.com.ar/blog",
  };

  const posts = [
    {
      title: "Cómo organizar una mudanza sin estrés en Córdoba",
      description:
        "Guía paso a paso para planificar tiempos, embalaje y traslado de forma segura. Aprende estrategias de expertos para una mudanza sin complicaciones.",
      link: "/blog/como-organizar-una-mudanza-sin-estres",
      image: mudanzaImage,
    },
    {
      title: "Cómo empacar para una mudanza",
      description:
        "Técnicas profesionales, materiales necesarios y tips de expertos para embalaje seguro. Protege tus pertenencias correctamente durante el transporte.",
      link: "/blog/como-empacar-para-una-mudanza",
      image: mudanzaImage,
    },
    {
      title: "¿Cuál es el mejor momento para mudarse?",
      description:
        "Análisis de épocas, temporadas y días ideales. Descubre cuándo ahorrar dinero y evitar complicaciones al mudarte en Córdoba.",
      link: "/blog/mejor-momento-para-mudarse",
      image: deposito,
    },
    {
      title: "Cuándo conviene usar un guardamuebles",
      description:
        "Casos reales donde el almacenamiento temporal ahorra dinero y resuelve problemas. Descubre si un guardamuebles es la solución que necesitas.",
      link: "/blog/cuando-usar-guardamuebles",
      image: deposito,
    },
    {
      title: "Errores comunes al contratar una mudanza",
      description:
        "Evita sobrecostos, daños y demoras. Aprende qué debes preguntar y verificar al contratar profesionales para tu traslado.",
      link: "/blog/errores-comunes-al-contratar-una-mudanza",
      image: camion,
    },
  ];

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
          alt="Blog de Movibox Mudanzas - Artículos sobre mudanzas y transporte en Córdoba"
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
            Blog de Movibox Mudanzas
          </h1>
          <p className="mt-4 text-lg text-white/85 md:text-xl">
            Consejos prácticos, guías completas y tips sobre <strong>mudanzas en Córdoba</strong>, <strong>guardamuebles seguro</strong> y <strong>fletes especializados</strong>.
          </p>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="blog-posts-heading">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-up" className="mb-16 max-w-3xl space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contenido destacado
            </span>
            <h2 id="blog-posts-heading" className="text-3xl font-bold sm:text-4xl text-foreground">
              Artículos sobre mudanzas y logística
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubrí estrategias para planificar tu mudanza, optimizar rutas de transporte y proteger tu mercadería durante el almacenamiento.
            </p>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post, i) => (
              <ScrollAnimation key={post.title} animation="fade-up" delay={i * 120}>
                <Link href={post.link}>
                  <article className="group h-full rounded-3xl overflow-hidden border border-primary/10 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={80}
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-foreground">
                        {post.title}
                      </h3>
                      <p className="mt-4 text-sm text-muted-foreground flex-grow">
                        {post.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary/80 mt-6">
                        Leer artículo <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-justify space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Sobre Movibox Mudanzas</h2>
          <p>
            En Movibox Mudanzas ofrecemos soluciones integrales de{" "}
            <Link href="/mudanzas" className="text-primary font-medium hover:underline">
              mudanzas en Córdoba
            </Link>
            , fletes y almacenamiento en Córdoba y todo el país. Contamos con vehículos modernos, equipos capacitados y procesos optimizados para asegurar que tu mudanza o envío se realice de manera segura y eficiente.
          </p>
          <p>
            Nuestro servicio de{" "}
            <Link href="/guardamuebles" className="text-primary font-medium hover:underline">
              guardamuebles en Córdoba
            </Link>{" "}
            permite almacenar tus pertenencias por el tiempo que necesites, manteniéndolas limpias, organizadas y protegidas. Operamos en Córdoba Capital y toda la provincia con camión y galpón.
          </p>
          <p>
            Sabemos que cada mudanza es única, por eso brindamos atención personalizada para ayudarte a planificar cada paso. Nos enfocamos en mudanzas, fletes y guardamuebles locales con un servicio cercano y confiable.
          </p>
          <p>
            Nuestro objetivo es simplificar tu mudanza o envío de carga, ofreciendo soluciones flexibles y económicas, sin comprometer la calidad ni la seguridad de tus pertenencias. Con Movibox, cada traslado se convierte en una experiencia segura y sin estrés.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <ScrollAnimation animation="fade-up" className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              ¿Listo para tu mudanza?
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
              Conocé todos nuestros servicios de transporte
            </h2>
            <p className="text-lg text-muted-foreground">
              Mudanzas y guardamuebles en Córdoba Capital y provincia. Presupuesto sin cargo.
            </p>
            <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#1da852] text-white font-semibold gap-2">
              <WhatsAppConversionLink href="https://wa.me/5493512586221?text=Hola%20Movibox%2C%20encontr%C3%A9%20sus%20servicios%20en%20Google%20Ads.%20%C2%BFMe%20pueden%20asesorar%20sobre%20mudanzas%20o%20guardamuebles%3F" className="flex items-center gap-2">
                <Image src={wsp} alt="WhatsApp" width={20} height={20} />
                Consultar servicios
              </WhatsAppConversionLink>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
