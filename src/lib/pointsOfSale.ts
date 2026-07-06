export type PointOfSaleCategory = {
  title: string;
  icon: "pill" | "cart" | "barbell";
  places: string[];
};

export const pointsOfSale: PointOfSaleCategory[] = [
  {
    title: "Farmacias",
    icon: "pill",
    places: ["Fybeca", "Sana Sana"],
  },
  {
    title: "Supermercados y tiendas",
    icon: "cart",
    places: ["Supermaxi", "Megamaxi", "Aki", "Del Portal", "Tiendas Al Paso"],
  },
  {
    title: "Gimnasios",
    icon: "barbell",
    places: ["Gym Taurus", "Mackgym", "House Gym", "Gym 360"],
  },
];

export function mapsSearchLink(place: string) {
  return `https://www.google.com/maps/search/${encodeURIComponent(`${place} Guayaquil`)}`;
}
