import type { Metadata } from "next";

export const SITE_URL = "https://www.movibox.com.ar";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function blogPostUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

export function createBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type BlogPostJsonLdOptions = {
  slug: string;
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  type?: "BlogPosting" | "Article" | "NewsArticle";
};

export function blogPostJsonLd(options: BlogPostJsonLdOptions) {
  const url = blogPostUrl(options.slug);
  const image = absoluteUrl(options.image ?? "/logisticas.webp");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": options.type ?? "BlogPosting",
        headline: options.headline,
        description: options.description,
        image,
        url,
        mainEntityOfPage: url,
        author: {
          "@type": "Organization",
          name: "Movibox Logística",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "Movibox Logística",
        },
        datePublished: options.datePublished ?? "2024-01-15",
        dateModified: options.dateModified ?? "2024-12-01",
      },
      createBreadcrumbJsonLd([
        { name: "Inicio", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: options.headline, path: `/blog/${options.slug}` },
      ]),
    ],
  };
}

export type BlogArticleMetadataOptions = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
};

export function blogArticleMetadata(
  slug: string,
  options: BlogArticleMetadataOptions
): Metadata {
  const url = blogPostUrl(slug);
  const ogImage = absoluteUrl(options.ogImage ?? "/logisticas.webp");

  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title: options.title,
      description: options.description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: options.ogImageAlt ?? options.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
      images: [ogImage],
    },
  };
}
