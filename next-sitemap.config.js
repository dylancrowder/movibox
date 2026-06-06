/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.movibox.com.ar/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  exclude: ["/servicios"],
  outDir: "public",
};
