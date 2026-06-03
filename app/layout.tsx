// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import "@/app/critical.css";
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
    default: "Mudanzas en Córdoba Capital y Provincia | Movibox Logística",
    template: "%s | Movibox Logística"
  },
  description: "Mudanzas en Córdoba Capital y provincia. Servicio profesional con camión equipado. Presupuesto sin cargo por WhatsApp.",
  keywords: [
    "mudanzas Córdoba",
    "fletes Córdoba",
    "guardamuebles Córdoba",
    "mudanzas locales",
    "almacenamiento Córdoba",
    "depósito mercadería",
    "empresa de mudanzas",
    "almacenamiento seguro Córdoba",
  ],
  authors: [{ name: "Movibox Logística", url: "https://www.movibox.com.ar" }],
  creator: "Movibox Logística",
  publisher: "Movibox Logística",

  alternates: { canonical: "https://www.movibox.com.ar/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.movibox.com.ar/",
    title: "Mudanzas en Córdoba Capital y Provincia | Movibox Logística",
    description: "Mudanzas en Córdoba Capital y provincia. Servicio profesional con camión equipado. Presupuesto gratis por WhatsApp.",
    siteName: "Movibox Logística",
    images: [
      {
        url: "/images/header/rua.webp",
        width: 1200,
        height: 630,
        alt: "Mudanzas en Córdoba - Movibox Logística",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mudanzas en Córdoba Capital y Provincia | Movibox Logística",
    description: "Mudanzas en Córdoba Capital y provincia. Servicio profesional con camión equipado. Presupuesto gratis por WhatsApp.",
    images: ["/images/header/rua.webp"],
  },

  other: {
    'geo.region': 'AR-X',
    'geo.placename': 'Córdoba',
    'geo.position': '-31.4201;-64.1888',
  },

  verification: {
    google: "LcTeg2QxwZm1OUTwcTrIvrX6SAoNLntG0iEs7OwfTD4",
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ Structured Data JSON-LD optimizado para MovingCompany y LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.movibox.com.ar/#organization',
        name: 'Movibox Logística',
        alternateName: 'Movibox Logística - Mudanzas y Guardamuebles',
        description: 'Mudanzas, fletes y guardamuebles en Córdoba Capital y toda la provincia. Camión y galpón con almacenamiento seguro.',
        url: 'https://www.movibox.com.ar',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.movibox.com.ar/logo.png',
          width: 300,
          height: 300,
        },
        image: 'https://www.movibox.com.ar/images/header/rua.webp',
        telephone: '+54-351-258-6221',
        email: 'movibox.cba@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Camino Chacra de la Merced Km 1/2',
          addressLocality: 'Córdoba',
          addressRegion: 'Córdoba',
          postalCode: '5007',
          addressCountry: 'AR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -31.4201,
          longitude: -64.1888,
        },
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Córdoba Capital',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Córdoba Provincia',
          },
        ],
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '13:00',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: '+54-351-258-6221',
          areaServed: 'AR',
          availableLanguage: ['es'],
        },
        knowsAbout: ['Mudanzas residenciales', 'Mudanzas comerciales', 'Fletes', 'Guardamuebles', 'Almacenamiento seguro'],
      },
      {
        '@type': 'MovingCompany',
        '@id': 'https://www.movibox.com.ar/#movingcompany',
        name: 'Movibox Logística',
        url: 'https://www.movibox.com.ar',
        telephone: '+54-351-258-6221',
        email: 'movibox.cba@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Camino Chacra de la Merced Km 1/2',
          addressLocality: 'Córdoba',
          addressRegion: 'Córdoba',
          addressCountry: 'AR',
        },
        aggregateRating: {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "2"
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.movibox.com.ar/#website',
        url: 'https://www.movibox.com.ar',
        name: 'Movibox Logística - Mudanzas y Guardamuebles en Córdoba',
        inLanguage: 'es-AR',
        publisher: {
          '@id': 'https://www.movibox.com.ar/#organization',
        },
        sameAs: [
          'https://www.facebook.com/movibox',
          'https://www.instagram.com/movibox',
          'https://www.google.com/maps/search/Movibox+Córdoba',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: 'https://www.movibox.com.ar',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mudanzas',
            item: 'https://www.movibox.com.ar/mudanzas',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Guardamuebles',
            item: 'https://www.movibox.com.ar/guardamuebles',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Blog',
            item: 'https://www.movibox.com.ar/blog',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'FAQ',
            item: 'https://www.movibox.com.ar/faq',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Contacto',
            item: 'https://www.movibox.com.ar/contacto',
          },
        ],
      },
    ],
  };

  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PSBNPHZX');
            `,
          }}
        />

        {/* 📊 Optimize font loading - Preconnect para iniciar conexión temprano */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ✅ DNS prefetch for analytics to reduce critical path latency */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

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

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PSBNPHZX"
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




        {/* Google Ads and Analytics Tags */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18195477517"
          strategy="afterInteractive"
        />
        <Script id="google-ads-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Configuración de consentimiento - habilitado para Google Ads
            gtag('consent', 'default', {
              'analytics_storage': 'granted',
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted'
            });

            // Google Ads - Account IDs
            gtag('config', 'AW-17013125582');
            gtag('config', 'AW-18195477517');

            // Google Analytics 4
            gtag('config', 'G-E7K55VT53P');
          `}
        </Script>
      </body>
    </html>
  );
}
