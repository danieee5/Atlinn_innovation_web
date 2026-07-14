import type { Metadata } from "next";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Catálogo de productos naturales",
  description:
    "Hidralife (electrolitos), Maximum (proteína), Mishá (guayusa), Arriba y Stevia Balance: catálogo de productos naturales que ATLINN distribuye al por mayor a gimnasios, farmacias y empresas en Guayaquil.",
  alternates: { canonical: "/productos" },
  openGraph: {
    images: [{ url: "/images/products/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ProductosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
        Distribuidor oficial en Guayaquil
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-4xl">
        Catálogo de {siteConfig.brand.name}
      </h1>
      <p className="mt-3 max-w-2xl text-stone">
        Las líneas de {siteConfig.brand.name} que distribuimos al por mayor en
        Guayaquil, para empresas, gimnasios y farmacias.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl bg-white">
        <Image
          src="/images/products/catalogo-grupal.png"
          alt="Catálogo completo Balance Products: Hidralife, Maximum, Arriba, Mishá y Stevia Balance"
          width={1672}
          height={941}
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
