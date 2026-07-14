export type Segment = {
  slug: string;
  title: string;
  description: string;
  benefit: string;
  icon: "building" | "barbell" | "coffee" | "utensils";
  whatsappMessage: string;
};

export const wholesaleSegments: Segment[] = [
  {
    slug: "empresas",
    title: "Empresas",
    description: "Hidratación funcional para colaboradores, oficinas y eventos corporativos.",
    benefit: "Abastece reuniones, activaciones y jornadas internas con productos listos para servir.",
    icon: "building",
    whatsappMessage: "Hola ATLINN, quiero solicitar precios de Balance Products para mi empresa.",
  },
  {
    slug: "gimnasios",
    title: "Gimnasios y boxes",
    description: "Aumenta tus ingresos ofreciendo bebidas funcionales en tu punto de venta.",
    benefit: "Hidralife y Maximum encajan con consumo post entrenamiento y reposición diaria.",
    icon: "barbell",
    whatsappMessage: "Hola ATLINN, quiero solicitar precios de Balance Products para mi gimnasio.",
  },
  {
    slug: "cafeterias",
    title: "Cafeterías",
    description: "Stevia y sucralosa para mejorar costos sin sacrificar calidad.",
    benefit: "Suma opciones sin azúcar para bebidas calientes, frías y preparaciones del día.",
    icon: "coffee",
    whatsappMessage: "Hola ATLINN, quiero solicitar precios de Balance Products para mi cafetería.",
  },
  {
    slug: "restaurantes",
    title: "Restaurantes",
    description: "Amplía tu menú con bebidas funcionales y saludables cero azúcar.",
    benefit: "Ofrece alternativas naturales para clientes que buscan bienestar y mejor hidratación.",
    icon: "utensils",
    whatsappMessage: "Hola ATLINN, quiero solicitar precios de Balance Products para mi restaurante.",
  },
];
