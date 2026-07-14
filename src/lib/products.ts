export type Flavor = {
  name: string;
  colorHex: string;
};

export type NutritionFact = {
  label: string;
  value: string;
};

export type ProductMedia = {
  src: string;
  alt: string;
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
  gallery: ProductMedia[];
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
      { name: "Toronja", colorHex: "#F26C5B" },
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
    gallery: [
      {
        src: "/images/social/hidralife-cuatro-sabores.jpeg",
        alt: "Hidralife en sabores uva, manzana, jamaica y blueberries",
      },
      {
        src: "/images/social/hidralife-gimnasio-zinc.jpeg",
        alt: "Hidralife como suplemento nutricional hidratante con zinc",
      },
      {
        src: "/images/social/hidralife-toronja.jpeg",
        alt: "Hidralife sabor toronja con electrolitos",
      },
    ],
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
    gallery: [
      {
        src: "/images/social/maximum-post-entrenamiento.jpeg",
        alt: "Maximum Protein Drink para volver a la carga después de entrenar",
      },
      {
        src: "/images/social/maximum-frutos-tropicales.jpeg",
        alt: "Maximum sabor frutos tropicales con 20 gramos de proteína",
      },
      {
        src: "/images/social/maximum-gimnasio-botellas.jpeg",
        alt: "Botellas Maximum en gimnasio",
      },
      {
        src: "/images/social/maximum-complementa-entrenamiento.jpeg",
        alt: "Maximum como complemento para entrenamiento",
      },
    ],
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
    gallery: [
      {
        src: "/images/social/misha-botellas-naturaleza.jpeg",
        alt: "Botellas Mishá en entorno natural",
      },
      {
        src: "/images/social/misha-guayusa-beneficios.jpeg",
        alt: "Mishá bebida natural de guayusa con beneficios",
      },
      {
        src: "/images/social/misha-conexion-natural.jpeg",
        alt: "Mishá y conexión con lo natural",
      },
    ],
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
    gallery: [
      {
        src: "/images/social/stevia-beneficios-planta.jpeg",
        alt: "Beneficios de la planta Stevia Balance",
      },
      {
        src: "/images/social/stevia-balance-liquid.jpeg",
        alt: "Stevia Balance líquido",
      },
      {
        src: "/images/social/stevia-mejor-endulzador.jpeg",
        alt: "Stevia Balance como endulzador",
      },
      {
        src: "/images/social/stevia-consumo-azucar.jpeg",
        alt: "Información sobre consumo de azúcar y Stevia Balance",
      },
    ],
  },
  {
    slug: "arriba",
    line: "Arriba",
    name: "Arriba — Néctar de Cacao",
    tagline: "Hidratación natural con fibra prebiótica en varios sabores",
    description:
      "Néctar hecho con cacao ecuatoriano y fibra prebiótica. Una alternativa natural y funcional para hidratarte con sabores como mango, passion fruit y natural.",
    accent: "arriba",
    accentHex: "#B23A2E",
    category: "Néctar funcional",
    features: ["Hidratación natural", "Con fibra prebiótica", "Cacao ecuatoriano", "Mango, passion fruit y natural"],
    flavors: [
      { name: "Mango", colorHex: "#F2B705" },
      { name: "Passion fruit", colorHex: "#D9557E" },
      { name: "Natural", colorHex: "#8A4F2A" },
    ],
    nutrition: [
      { label: "Base", value: "Cacao ecuatoriano" },
      { label: "Fibra", value: "Prebiótica" },
    ],
    useCases: ["Hidratación con sabor", "Bienestar digestivo"],
    wholesaleUnit: "Caja de 12 unidades",
    minimumOrder: "1 caja (12 unidades)",
    image: "/images/products/arriba.png",
    gallery: [
      {
        src: "/images/social/arriba-nectar-mango.jpeg",
        alt: "Arriba néctar de cacao sabor mango",
      },
      {
        src: "/images/social/arriba-nectar-passion-fruit.jpeg",
        alt: "Arriba néctar de cacao sabor passion fruit",
      },
      {
        src: "/images/social/arriba-nectar-original.jpeg",
        alt: "Arriba néctar de cacao original",
      },
      {
        src: "/images/social/arriba-elige-sabor.jpeg",
        alt: "Arriba néctar de cacao en distintos sabores",
      },
      {
        src: "/images/social/arriba-cacao-refrescante.jpeg",
        alt: "Arriba néctar de cacao refrescante",
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
