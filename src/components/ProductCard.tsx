import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line-stroke bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-white" style={{ backgroundColor: `${product.accentHex}18` }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-3"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-stone">
          {product.category}
        </span>
        <h3 className="font-display text-base font-semibold text-charcoal">
          {product.line}
        </h3>
        <p className="text-sm text-stone">{product.tagline}</p>
        <ul className="mt-1 flex flex-wrap gap-1.5">
          {product.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="rounded-full bg-cream-dark px-2.5 py-1 text-[11px] font-medium text-charcoal"
            >
              {feature}
            </li>
          ))}
        </ul>
        {product.flavors.length > 0 && (
          <p className="text-xs text-stone">
            Sabores: {product.flavors.map((flavor) => flavor.name).join(", ")}
          </p>
        )}
        {product.presentations && (
          <p className="text-xs text-stone">
            Presentaciones: {product.presentations.join(" / ")}
          </p>
        )}
        <span className="mt-auto pt-2 text-sm font-semibold text-forest group-hover:underline">
          Ver detalles y sabores →
        </span>
      </div>
    </Link>
  );
}
