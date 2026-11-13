import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const publicPaths = [
  "/",
  "/mudanzas",
  "/guardamuebles",
  "/precios-mudanzas",
  "/mudanzas-larga-distancia",
  "/fletes",
  "/contacto",
  "/faq",
  "/blog",
  "/blog/como-empacar-para-una-mudanza",
  "/blog/como-organizar-una-mudanza-sin-estres",
  "/blog/cuando-usar-guardamuebles",
  "/blog/deposito-guardamuebles",
  "/blog/errores-comunes-al-contratar-una-mudanza",
  "/blog/mejor-momento-para-mudarse",
  "/blog/mudanzas-y-fletes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
