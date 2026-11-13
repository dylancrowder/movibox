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
import { ConversionTracking } from "@/components/ConversionTracking";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.movibox.com.ar'),
  title: "Movibox | Mudanzas y guardamuebles en Córdoba",
  description:
    "Movibox ofrece servicios de mudanza y guardamuebles en Córdoba Capital y la provincia. Conocé cada servicio y pedí una cotización por WhatsApp.",
  authors: [{ name: "Movibox Mudanzas", url: "https://www.movibox.com.ar" }],
  creator: "Movibox Mudanzas",
  publisher: "Movibox Mudanzas",

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
    title: "Movibox | Mudanzas y guardamuebles en Córdoba",
    description:
      "Servicios de mudanza y guardamuebles en Córdoba Capital y la provincia.",
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
    title: "Movibox | Mudanzas y guardamuebles en Córdoba",
    description:
      "Servicios de mudanza y guardamuebles en Córdoba Capital y la provincia.",
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'MovingCompany'],
        '@id': 'https://www.movibox.com.ar/#movingcompany',
        name: 'Movibox Mudanzas',
        url: 'https://www.movibox.com.ar',
        telephone: '+5493512586221',
        email: 'movibox.cba@gmail.com',
        description:
          'Servicios de mudanzas, fletes y guardamuebles en Córdoba Capital y la provincia.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Camino Chacra de la Merced Km 1/2',
          addressLocality: 'Córdoba',
          addressRegion: 'Córdoba',
          addressCountry: 'AR',
        },
        hasMap: 'https://maps.app.goo.gl/yBe3szNXrV9ugbWNA',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: '+5493512586221',
          areaServed: 'AR',
          availableLanguage: ['es'],
        },
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
            name: 'Córdoba',
          },
        ],
        sameAs: ['https://www.instagram.com/moviboxcba'],
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
        name: 'Movibox Mudanzas',
        inLanguage: 'es-AR',
        publisher: {
          '@id': 'https://www.movibox.com.ar/#movingcompany',
        },
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
          <ConversionTracking />

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
