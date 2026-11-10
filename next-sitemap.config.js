/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.movibox.com.ar/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  autoLastmod: false,
  exclude: ["/servicios", "/precios"],
  outDir: "public",
};
