// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Navbar } from "@/components/navbar";
import { Suspense } from "react";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true
});

// ✅ Metadata usando la API de Next 14
export const metadata: Metadata = {
  metadataBase: new URL('https://www.movibox.com.ar'),
  title: {
    default: "Mudanzas en Córdoba Capital y Provincia | Movibox Mudanzas",
    template: "%s | Movibox Mudanzas"
  },
  description: "Mudanzas en Córdoba Capital con camión propio, ayudantes y guardamuebles. Presupuesto gratuito por WhatsApp y atención rápida.",
  authors: [{ name: "Movibox Mudanzas", url: "https://www.movibox.com.ar" }],
  creator: "Movibox Mudanzas",
  publisher: "Movibox Mudanzas",

  alternates: { canonical: "https://www.movibox.com.ar/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.movibox.com.ar/",
    title: "Mudanzas en Córdoba Capital y Provincia | Movibox Mudanzas",
    description: "Mudanzas en Córdoba Capital con camión propio, ayudantes y guardamuebles. Presupuesto gratuito por WhatsApp y atención rápida.",
    siteName: "Movibox Mudanzas",
    images: [
      {
        url: "/images/header/headerchacra.webp",
        width: 1200,
        height: 630,
        alt: "Mudanzas en Córdoba - Movibox Mudanzas",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mudanzas en Córdoba Capital y Provincia | Movibox Mudanzas",
    description: "Mudanzas en Córdoba Capital con camión propio, ayudantes y guardamuebles. Presupuesto gratuito por WhatsApp y atención rápida.",
    images: ["/images/header/headerchacra.webp"],
  },

  verification: {
    google: "LcTeg2QxwZm1OUTwcTrIvrX6SAoNLntG0iEs7OwfTD4",
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },

  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ Structured Data JSON-LD optimizado para Organization y WebSite
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.movibox.com.ar/#organization',
        name: 'Movibox Mudanzas',
        description: 'Mudanzas, fletes y guardamuebles en Córdoba Capital y toda la provincia.',
        url: 'https://www.movibox.com.ar',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.movibox.com.ar/images/iconos/logo-movibox.svg',
          width: 300,
          height: 300,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+5493512586221',
            areaServed: 'AR',
            availableLanguage: ['es'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'WhatsApp',
            telephone: '+543512586221',
          },
        ],
        brand: {
          '@type': 'Brand',
          name: 'Movibox',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Córdoba',
          },
          {
            '@type': 'State',
            name: 'Provincia de Córdoba',
          },
        ],
        paymentAccepted: [
          'Cash',
          'Visa',
          'MasterCard',
          'Transferencia',
        ],
        currenciesAccepted: ['ARS'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios Movibox',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mudanzas en Córdoba',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Guardamuebles en Córdoba',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.movibox.com.ar/#website',
        url: 'https://www.movibox.com.ar',
        name: 'Movibox Mudanzas - Mudanzas y Guardamuebles en Córdoba',
        inLanguage: 'es-AR',
        publisher: {
          '@id': 'https://www.movibox.com.ar/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.movibox.com.ar/buscar?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        sameAs: [
          'https://www.instagram.com/moviboxcba',
        ],
      },
    ],
  };

  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NVGC98QB');
            `,
          }}
        />

        {/* ✅ Prevent theme flash - set default theme before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />

        {/* ✅ Structured Data (mejor en head) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />

          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NVGC98QB"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>

          {/* 🧠 Desbloquea render inicial */}
          <Suspense>{children}</Suspense>

          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
