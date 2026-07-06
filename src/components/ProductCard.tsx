import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line-stroke bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: product.accentHex }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
        <span className="mt-auto pt-2 text-sm font-semibold text-forest group-hover:underline">
          Ver producto →
        </span>
      </div>
    </Link>
  );
}
