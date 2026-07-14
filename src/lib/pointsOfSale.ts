export type PointOfSaleCategory = {
  title: string;
  icon: "pill" | "cart" | "barbell";
  places: PointOfSale[];
};

export type PointOfSale = {
  name: string;
  logo?: string;
};

export const pointsOfSale: PointOfSaleCategory[] = [
  {
    title: "Farmacias",
    icon: "pill",
    places: [
      { name: "Fybeca", logo: "/images/partners/fybeca_logo.png" },
      { name: "Sana Sana", logo: "/images/partners/sanasana_logo.jpg" },
    ],
  },
  {
    title: "Supermercados y tiendas",
    icon: "cart",
    places: [
      { name: "Supermaxi", logo: "/images/partners/supermaxi_log.jpg" },
      { name: "Megamaxi", logo: "/images/partners/megamaxi_log.png" },
      { name: "Akí", logo: "/images/partners/aki_logo.png" },
      { name: "Del Portal", logo: "/images/partners/delportal_logo.png" },
      { name: "Tiendas Al Paso" },
      { name: "Good Nutrition", logo: "/images/partners/good-nutrition.jpeg" },
    ],
  },
  {
    title: "Gimnasios",
    icon: "barbell",
    places: [
      { name: "Mack Gym", logo: "/images/partners/mack-gym.jpeg" },
      { name: "One Gym", logo: "/images/partners/one-gym.jpeg" },
      { name: "Gym Taurus", logo: "/images/partners/taurusgym_logo.svg" },
      { name: "House Gym", logo: "/images/partners/housegym_logo.png" },
      { name: "Gym 360" },
    ],
  },
];

export function mapsSearchLink(place: string) {
  return `https://www.google.com/maps/search/${encodeURIComponent(`${place} Guayaquil`)}`;
}
