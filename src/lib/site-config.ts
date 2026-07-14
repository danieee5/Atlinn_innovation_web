export const siteConfig = {
  name: "ATLINN Innovations",
  shortName: "ATLINN",
  legalName: "ATL Innovations S.A.",
  foundedYear: 2019,
  tagline: "Distribuidor autorizado de Balance Products en el Guayas",
  description:
    "ATLINN Innovations es distribuidor autorizado de Balance Products en el Guayas: Hidralife, Maximum, Mishá, Arriba y Stevia Balance para hogares, negocios, empresas y gimnasios, con atención directa por WhatsApp.",
  brand: {
    name: "Balance Products",
    url: "https://balanceproducts.com.ec",
    origin: "Quito (Valle de los Chillos)",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.atlinninnovations.com",
  locale: "es_EC",
  whatsapp: {
    number: "593998332837",
    display: "099 833 2837",
  },
  email: "atlinnovatiosa@gmail.com",
  instagram: "https://www.instagram.com/balanceproductsgye",
  instagramHandle: "@balanceproductsgye",
  address: {
    city: "Guayaquil",
    region: "Guayas",
    country: "Ecuador",
  },
  deliveryZones: ["Guayaquil", "Samborondón", "Vía a la Costa"],
  bankTransfer: {
    banco: "Banco del Austro",
    tipoCuenta: "Corriente",
    numeroCuenta: "1209205048",
    nombre: "ATL INNOVATIONS ATLINN S.A.",
    ruc: "0993232440001",
    correo: "atlinnovatiosa@gmail.com",
    whatsapp: "0998332837",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
