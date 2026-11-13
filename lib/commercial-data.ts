const arsNumberFormatter = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 0,
});

export const MOVING_HOURLY_PRICE_ARS = 90_000;

export const STORAGE_MONTHLY_PLANS = [
  {
    volumeM3: 5,
    monthlyPriceARS: 79_900,
    badge: "Ideal para monoambientes",
    description: "Box compacto",
    dimensions: "2 m × 1,25 m × 2 m",
    items: [
      "Cajas y equipaje",
      "Bicicleta",
      "Sillas y mesas pequeñas",
      "Muebles y pertenencias",
    ],
  },
  {
    volumeM3: 10,
    monthlyPriceARS: 129_900,
    badge: "Ideal para 1 dormitorio",
    description: "Box estándar",
    dimensions: "2,5 m × 2 m × 2 m",
    items: [
      "Muebles de un dormitorio",
      "Heladera y lavarropa",
      "Escritorio y biblioteca",
      "Cajas de mudanza",
    ],
  },
  {
    volumeM3: 15,
    monthlyPriceARS: 179_900,
    badge: "Ideal para mudanzas completas",
    description: "Box amplio",
    dimensions: "3 m × 2,5 m × 2 m",
    items: [
      "Muebles de varios ambientes",
      "Electrodomésticos",
      "Herramientas",
      "Cajas y otras pertenencias",
    ],
  },
] as const;

export function formatARS(value: number): string {
  return `$${arsNumberFormatter.format(value)}`;
}
