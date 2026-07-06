export type Flavor = {
  name: string;
  colorHex: string;
};

export type NutritionFact = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  line: string;
  name: string;
  tagline: string;
  description: string;
  accent: "hidralife" | "maximum" | "misha" | "balance" | "arriba";
  accentHex: string;
  category: "Hidratación" | "Proteína" | "Infusión natural" | "Endulzante natural" | "Néctar funcional";
  features: string[];
  flavors: Flavor[];
  nutrition: NutritionFact[];
  presentations?: string[];
  wholesaleUnit?: string;
  minimumOrder?: string;
  useCases: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "hidralife",
    line: "Hidralife",
    name: "Hidralife — Electrolitos Orales",
    tagline: "Hidratación superior para tu día a día",
    description:
      "La única fórmula con 6 electrolitos esenciales más zinc. Repone lo que tu cuerpo pierde con el calor, el deporte y la rutina diaria, sin azúcar ni glucosa.",
    accent: "hidralife",
    accentHex: "#8BC53F",
    category: "Hidratación",
    features: [
      "6 electrolitos esenciales + zinc",
      "0 calorías",
      "Sin azúcar",
      "Sin glucosa",
    ],
    flavors: [
      { name: "Uva", colorHex: "#7A3B8C" },
      { name: "Manzana", colorHex: "#8BC53F" },
      { name: "Jamaica", colorHex: "#C8203D" },
      { name: "Blueberries", colorHex: "#2E6FA7" },
    ],
    nutrition: [
      { label: "Electrolitos", value: "6 esenciales + zinc" },
      { label: "Calorías", value: "0" },
      { label: "Azúcar", value: "0 g" },
    ],
    useCases: ["Deporte", "Calor", "Hidratación", "Recuperación", "Bienestar diario"],
    wholesaleUnit: "Caja de 12 unidades",
    minimumOrder: "1 caja (12 unidades)",
    image: "/images/products/hidralife.png",
  },
  {
    slug: "maximum",
    line: "Maximum",
    name: "Maximum — Protein Drink",
    tagline: "Nutrición inteligente para tu rendimiento y recuperación",
    description:
      "Bebida de proteína de suero clara (whey isolate), pensada para después de entrenar: 20 gramos de proteína, 4 gramos de BCAA y cero azúcar en cada botella.",
    accent: "maximum",
    accentHex: "#D9557E",
    category: "Proteína",
    features: [
      "20 gramos de proteína",
      "4 g de BCAA",
      "0 azúcar",
      "80 calorías",
      "Ideal post entrenamiento",
    ],
    flavors: [
      { name: "Frutos rojos", colorHex: "#B23A2E" },
      { name: "Frutos tropicales", colorHex: "#F2B705" },
    ],
    nutrition: [
      { label: "Proteína", value: "20 g" },
      { label: "BCAA", value: "4 g" },
      { label: "Azúcar", value: "0 g" },
      { label: "Calorías", value: "80" },
    ],
    useCases: ["Post entrenamiento", "Recuperación muscular", "Rendimiento"],
    wholesaleUnit: "Caja de 12 unidades",
    minimumOrder: "1 caja (12 unidades)",
    image: "/images/products/maximum.png",
  },
  {
    slug: "misha",
    line: "Mishá",
    name: "Mishá — Infusión Natural de Guayusa con Jengibre",
    tagline: "Energía natural y sostenida que proviene de la naturaleza",
    description:
      "Infusión 100% natural de guayusa amazónica y jengibre, enriquecida con vitamina E y selenio. Energía sostenida sin químicos, endulzada con stevia.",
    accent: "misha",
    accentHex: "#D98E2B",
    category: "Infusión natural",
    features: [
      "100% natural",
      "Energía natural sin químicos",
      "Antioxidantes naturales",
      "Enriquecida con vitamina E y selenio",
      "Baja en calorías",
      "Endulzada con stevia",
    ],
    flavors: [
      { name: "Frutos rojos", colorHex: "#B23A2E" },
      { name: "Limón", colorHex: "#8BC53F" },
      { name: "Naranjilla", colorHex: "#F2B705" },
    ],
    nutrition: [
      { label: "Origen", value: "Guayusa amazónica + jengibre" },
      { label: "Endulzante", value: "Stevia" },
      { label: "Calorías", value: "Bajas" },
    ],
    useCases: ["Energía sostenida", "Antioxidante", "Bienestar diario"],
    wholesaleUnit: "Caja de 12 unidades",
    minimumOrder: "1 caja (12 unidades)",
    image: "/images/products/misha.png",
  },
  {
    slug: "stevia-balance",
    line: "Stevia Balance",
    name: "Stevia Balance — Endulzante Natural con Antioxidantes",
    tagline: "Endulza sin calorías, con vitaminas C y E",
    description:
      "Endulzante natural a base de stevia con antioxidantes, vitaminas C y E, y selenio. Ideal para endulzar bebidas y alimentos sin sumar calorías.",
    accent: "balance",
    accentHex: "#6B4A8A",
    category: "Endulzante natural",
    features: [
      "0 calorías",
      "Con vitaminas C y E",
      "Con selenio",
      "Antioxidante natural",
      "Ideal para bebidas y alimentos",
    ],
    flavors: [],
    nutrition: [
      { label: "Calorías", value: "0" },
      { label: "Vitaminas", value: "C y E" },
      { label: "Mineral", value: "Selenio" },
    ],
    presentations: [
      "Caja 200 unidades (sobres de 1 g)",
      "Funda 500 unidades (sobres de 1 g)",
      "Stevia líquida (40 ml)",
    ],
    minimumOrder: "3 fundas o cajas",
    useCases: ["Endulzar bebidas", "Endulzar alimentos", "Dietas bajas en calorías"],
    image: "/images/products/stevia-balance.png",
  },
  {
    slug: "arriba",
    line: "Arriba",
    name: "Arriba — Néctar de Cacao",
    tagline: "Hidratación natural con fibra prebiótica, sabor mango",
    description:
      "Néctar hecho con cacao ecuatoriano, con fibra prebiótica y sabor mango. Una alternativa natural y funcional para hidratarte con un toque de sabor distinto.",
    accent: "arriba",
    accentHex: "#B23A2E",
    category: "Néctar funcional",
    features: ["Hidratación natural", "Con fibra prebiótica", "Cacao ecuatoriano", "Sabor mango"],
    flavors: [{ name: "Mango", colorHex: "#F2B705" }],
    nutrition: [
      { label: "Base", value: "Cacao ecuatoriano" },
      { label: "Fibra", value: "Prebiótica" },
    ],
    useCases: ["Hidratación con sabor", "Bienestar digestivo"],
    wholesaleUnit: "Caja de 12 unidades",
    minimumOrder: "1 caja (12 unidades)",
    image: "/images/products/arriba.png",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
