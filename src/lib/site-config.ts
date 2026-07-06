export const siteConfig = {
  name: "ATLINN Innovations",
  shortName: "ATLINN",
  legalName: "ATL Innovations Atlinn S.A.",
  foundedYear: 2019,
  tagline: "Distribuidor oficial de Balance Products en Guayaquil",
  description:
    "ATLINN Innovations es el distribuidor oficial de Balance Products en Guayaquil: Hidralife, Maximum, Mishá, Arriba y Stevia Balance al por mayor para empresas, gimnasios y farmacias, con entrega directa en toda la ciudad.",
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
  deliveryZones: ["Guayaquil", "Samborondón", "Vía a Daule", "Salitre"],
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
