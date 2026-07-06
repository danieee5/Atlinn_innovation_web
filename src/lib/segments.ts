export type Segment = {
  slug: string;
  title: string;
  description: string;
  icon: "building" | "barbell" | "pill" | "flag";
  whatsappMessage: string;
};

export const wholesaleSegments: Segment[] = [
  {
    slug: "empresas",
    title: "Empresas",
    description: "Cajas para bienestar corporativo, oficinas y eventos.",
    icon: "building",
    whatsappMessage: "Hola ATLINN, quiero cotizar cajas de Balance Products para mi empresa.",
  },
  {
    slug: "gimnasios",
    title: "Gimnasios y boxes",
    description: "Electrolitos y proteína para vender en tu nevera.",
    icon: "barbell",
    whatsappMessage: "Hola ATLINN, quiero cotizar cajas de Balance Products para mi gimnasio.",
  },
  {
    slug: "farmacias",
    title: "Farmacias y tiendas",
    description: "Reventa al detalle con precio y entrega por volumen.",
    icon: "pill",
    whatsappMessage: "Hola ATLINN, quiero cotizar cajas de Balance Products para mi farmacia/tienda.",
  },
  {
    slug: "eventos",
    title: "Eventos deportivos",
    description: "Hidratación en punto para carreras y competencias.",
    icon: "flag",
    whatsappMessage: "Hola ATLINN, quiero cotizar cajas de Balance Products para un evento.",
  },
];
