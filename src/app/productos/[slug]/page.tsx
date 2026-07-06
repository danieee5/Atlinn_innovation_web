import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, products } from "@/lib/products";
import { siteConfig, waLink } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/productos/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `${siteConfig.url}/productos/${product.slug}`,
      images: [{ url: product.image, width: 1200, height: 1600, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: siteConfig.brand.name },
    category: product.category,
    image: `${siteConfig.url}${product.image}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/productos/${product.slug}`,
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: siteConfig.name },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Productos", item: `${siteConfig.url}/productos` },
      { "@type": "ListItem", position: 2, name: product.line, item: `${siteConfig.url}/productos/${product.slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <nav className="mb-6 text-sm text-stone">
        <Link href="/productos" className="hover:text-forest">Productos</Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{product.line}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div
          className="relative h-72 overflow-hidden rounded-2xl sm:h-96"
          style={{ backgroundColor: product.accentHex }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
            {product.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold text-forest">
            {product.name}
          </h1>
          <p className="mt-2 text-base text-stone">{product.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
            {product.description}
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-charcoal">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-forest">
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {(product.wholesaleUnit || product.minimumOrder) && (
            <div className="mt-6 flex flex-wrap gap-6 rounded-xl bg-cream-dark p-4 text-sm">
              {product.wholesaleUnit && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-stone">Unidad de venta</div>
                  <div className="mt-0.5 font-semibold text-charcoal">{product.wholesaleUnit}</div>
                </div>
              )}
              {product.minimumOrder && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-stone">Pedido mínimo</div>
                  <div className="mt-0.5 font-semibold text-charcoal">{product.minimumOrder}</div>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={waLink(`Hola ATLINN, quiero cotizar cajas de ${product.line}.`)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event={`whatsapp_click_product_${product.slug}`}
              className="inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-orange-dark"
            >
              Cotizar por caja
            </a>
            <Link href="/como-comprar#unidad" className="text-sm font-semibold text-forest hover:underline">
              ¿Buscas 1-2 unidades?
            </Link>
          </div>
        </div>
      </div>

      {product.flavors.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-forest">Sabores disponibles</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {product.flavors.map((flavor) => (
              <div key={flavor.name} className="flex items-center gap-2 rounded-full border border-line-stroke bg-white px-4 py-2 text-sm">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: flavor.colorHex }}
                  aria-hidden="true"
                />
                {flavor.name}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-semibold text-forest">Información</h2>
          <dl className="mt-4 divide-y divide-line-stroke rounded-xl border border-line-stroke bg-white">
            {product.nutrition.map((n) => (
              <div key={n.label} className="flex items-center justify-between px-4 py-3 text-sm">
                <dt className="text-stone">{n.label}</dt>
                <dd className="font-semibold text-charcoal">{n.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-forest">Ideal para</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.useCases.map((u) => (
              <span key={u} className="rounded-full bg-cream-dark px-3 py-1.5 text-sm text-charcoal">
                {u}
              </span>
            ))}
          </div>

          {product.presentations && (
            <>
              <h2 className="mt-6 font-display text-xl font-semibold text-forest">Presentaciones</h2>
              <ul className="mt-3 space-y-1 text-sm text-charcoal">
                {product.presentations.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
