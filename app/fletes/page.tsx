import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, PackageCheck, Truck } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import HeroButtons from "@/components/HeroButtons";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";

const pageUrl = "https://www.movibox.com.ar/fletes";
const whatsappMessage =
  "Hola 👋, quería consultar por un miniflete. ¿Me pasan un presupuesto?";

export const metadata: Metadata = {
  title: "Minifletes en Córdoba | Movibox",
  description:
    "Minifletes en Córdoba para mascotas, bicis, motos, compras grandes y muebles pequeños. Servicio rápido, práctico y a tu alcance.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Minifletes en Córdoba | Rápido, práctico y a tu alcance",
    description:
      "Traslados de bajo volumen en Córdoba. Consultá por tu miniflete y coordiná tu viaje por WhatsApp.",
    url: pageUrl,
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Servicio de minifletes de Movibox en Córdoba",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: "Minifletes en Córdoba",
      description:
        "Servicio de minifletes para traslados de bajo volumen en Córdoba.",
      url: pageUrl,
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#minifletes`,
      name: "Minifletes en Córdoba",
      description:
        "Traslados de bajo volumen para mascotas, bicicletas, motos, compras grandes y muebles pequeños. Servicio solo con chofer, sin personal de carga y descarga.",
      serviceType: "Minifletes",
      areaServed: { "@type": "City", name: "Córdoba" },
      provider: { "@id": "https://www.movibox.com.ar/#movingcompany" },
      telephone: "+5493512586221",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://www.movibox.com.ar",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Minifletes",
          item: pageUrl,
        },
      ],
    },
  ],
};

const highlights = [
  {
    title: "Ideal para",
    description:
      "Mascotas, bicis, motos, compras grandes o muebles pequeños.",
    image:
      "https://47flete.com/_astro/IdealPara_secci%C3%B3nFLETES_47Flete.Bp54Tnt9.svg",
    alt: "Ícono de objetos ideales para un miniflete",
  },
  {
    title: "Disponibilidad",
    description:
      "¡Es instantáneo! Aunque siempre te recomendamos reservar para asegurarte el lugar.",
    image:
      "https://47flete.com/_astro/Disponibilidad_secci%C3%B3nFLETES_47Flete.BH56lgJ_.svg",
    alt: "Ícono de disponibilidad inmediata",
  },
  {
    title: "Tener en cuenta",
    description:
      "El traslado es solo con chofer, no incluye personal de carga y descarga.",
    image:
      "https://47flete.com/_astro/TenerEnCuenta_secci%C3%B3nFLETES_47Flete.O73LY4lK.svg",
    alt: "Ícono de información a tener en cuenta",
  },
];

const faqs = [
  {
    question: "¿Qué puedo trasladar con un miniflete?",
    answer:
      "Es ideal para mascotas, bicicletas, motos, compras grandes o muebles pequeños, y otros traslados de bajo volumen.",
  },
  {
    question: "¿El servicio incluye carga y descarga?",
    answer:
      "No. El traslado se realiza solo con chofer y no incluye personal de carga y descarga.",
  },
  {
    question: "¿Hay disponibilidad inmediata?",
    answer:
      "Podemos coordinar traslados de forma inmediata según disponibilidad. Para asegurarte el lugar, te recomendamos reservar.",
  },
  {
    question: "¿Cómo consulto disponibilidad y precio?",
    answer:
      "Escribinos por WhatsApp con el origen, el destino y qué necesitás trasladar. Te confirmamos disponibilidad y presupuesto.",
  },
];

export default function FletesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="flex min-h-screen flex-col overflow-x-hidden bg-white">
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-24">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2Fd3a2d7e220454406b3a2fa6ac186b834?format=webp&width=800&height=1200"
            alt="Vehículo de Movibox preparado para un miniflete"
            fill
            className="object-cover object-center md:hidden"
            priority
            unoptimized
            sizes="100vw"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2F1d05692a989447279efcc4793855eda2%2F5e96d8e8ca404994b620cb04ec9e66bd?format=webp&width=800&height=1200"
            alt="Vehículo de Movibox preparado para un miniflete"
            fill
            className="hidden object-cover object-center md:left-1/2 md:block md:w-1/2"
            priority
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="container relative z-10 px-4 pb-24 pt-16 md:px-6">
            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
              <div className="space-y-6 md:max-w-2xl">
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90">
                  Minifletes en Córdoba
                </span>

                <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
                  Minifletes
                  <br />
                  <span className="text-secondary-400">
                    Rápido, práctico y a tu alcance.
                  </span>
                </h1>

                <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                  ¿Hiciste una compra en el súper? ¿Necesitás llevar a tu
                  mascota al veterinario o traer esas plantas nuevas para el
                  jardín? Nuestro servicio de Miniflete es la opción más
                  dinámica para traslados de bajo volumen.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start md:items-center">
                  <HeroButtons
                    whatsappMessage={whatsappMessage}
                    whatsappLabel="Consultar por WhatsApp"
                  />
                </div>

                <p className="text-xs text-white/70">
                  Atención directa · Consultá disponibilidad y precio
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 text-center md:px-6">
            <ScrollAnimation
              animation="fade-up"
              className="mb-16 space-y-6"
            >
              <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
                Minifletes
              </span>
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Una solución simple para tus traslados chicos
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
                Movemos lo que necesitás, cuando lo necesitás. Coordiná tu
                traslado de bajo volumen en Córdoba de forma rápida y directa.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              {highlights.map((item, index) => (
                <ScrollAnimation
                  key={item.title}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <article className="h-full rounded-md border border-neutral-300 bg-white p-8 text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={64}
                      height={64}
                      unoptimized
                      className="mb-6 h-16 w-16"
                    />
                    <h3 className="mb-3 text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <ScrollAnimation
              animation="fade-up"
              className="mb-16 space-y-6 text-center"
            >
              <span className="inline-block rounded-full bg-secondary-100 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary-700">
                Así de fácil
              </span>
              <h2 className="text-4xl font-black leading-tight text-primary sm:text-5xl">
                Coordiná tu miniflete en tres pasos
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Nos contactás",
                  description:
                    "Contanos qué necesitás trasladar y desde dónde hasta dónde.",
                  icon: MapPin,
                },
                {
                  step: "2",
                  title: "Coordinamos",
                  description:
                    "Te confirmamos disponibilidad y coordinamos el horario del viaje.",
                  icon: Clock3,
                },
                {
                  step: "3",
                  title: "Hacemos el traslado",
                  description:
                    "El chofer realiza el viaje con lo que necesitás llevar.",
                  icon: Truck,
                },
              ].map((item) => (
                <ScrollAnimation key={item.step} animation="fade-up">
                  <article className="h-full rounded-md border-2 border-primary-700 bg-white p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500 text-lg font-bold text-white">
                      {item.step}
                    </div>
                    <item.icon className="mx-auto mb-4 h-6 w-6 text-secondary-500" />
                    <h3 className="mb-3 text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-primary-700 to-primary-800 py-16 text-white sm:py-32">
          <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
            <ScrollAnimation animation="fade-up" className="space-y-7">
              <PackageCheck className="mx-auto h-12 w-12 text-secondary-400" />
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                ¿Necesitás un miniflete?
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
                Escribinos por WhatsApp y coordinamos tu traslado según
                disponibilidad.
              </p>
              <Button
                asChild
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              >
                <WhatsAppConversionLink
                  href={`https://wa.me/5493512586221?text=${encodeURIComponent(whatsappMessage)}`}
                  className="flex items-center justify-center gap-3"
                >
                  <Image
                    src="/images/iconos/whatsapp.webp"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                  />
                  Consultar por WhatsApp
                </WhatsAppConversionLink>
              </Button>
              <p className="pt-2 text-xs text-white/70">
                351 258-6221 · Atención directa
              </p>
            </ScrollAnimation>
          </div>
        </section>

        <section className="bg-neutral-100 py-16 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <ScrollAnimation
              animation="fade-up"
              className="mb-16 space-y-6 text-center"
            >
              <h2 className="text-4xl font-black text-primary sm:text-5xl">
                Preguntas frecuentes
              </h2>
            </ScrollAnimation>
            <FAQ faqs={faqs} />
          </div>
        </section>
      </article>
    </>
  );
}
