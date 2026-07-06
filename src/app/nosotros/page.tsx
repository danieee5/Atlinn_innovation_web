import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { wholesaleSegments } from "@/lib/segments";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "ATLINN Innovations (ATL Innovations Atlinn S.A.) es el distribuidor oficial de Balance Products en Guayaquil: productos naturales, proteína e hidratación al por mayor para gimnasios, farmacias y empresas.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
        Distribuidor oficial desde {siteConfig.foundedYear}
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-4xl">
        Llevamos Balance Products a Guayaquil
      </h1>
      <p className="mt-4 text-base leading-relaxed text-charcoal/80">
        Desde {siteConfig.foundedYear}, {siteConfig.name} ({siteConfig.legalName})
        es el distribuidor oficial de {siteConfig.brand.name} en Guayaquil.
        {" "}{siteConfig.brand.name} elabora sus bebidas y suplementos funcionales
        en {siteConfig.brand.origin}; nosotros recibimos el producto, cotizamos
        por caja a empresas, gimnasios y farmacias, y lo entregamos nosotros
        mismos en la ciudad.
      </p>
      <p className="mt-4 text-base leading-relaxed text-charcoal/80">
        Somos el único canal autorizado de la marca en Guayaquil. Si tu
        negocio quiere ofrecer Hidralife, Maximum, Mishá, Arriba o Stevia
        Balance a sus clientes, o si buscas un proveedor confiable para
        revender, hablas directamente con nosotros.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-line-stroke bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-forest">Distribuidor autorizado</h2>
          <p className="mt-2 text-sm text-stone">
            Trabajamos directamente con {siteConfig.brand.name} para traer su
            catálogo a Guayaquil con respaldo y trazabilidad.
          </p>
        </div>
        <div className="rounded-xl border border-line-stroke bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-forest">Entrega directa</h2>
          <p className="mt-2 text-sm text-stone">
            Entrega gratis en {siteConfig.deliveryZones.join(", ")}. Fuera de
            estas zonas, coordinamos envío por courier.
          </p>
        </div>
        <div className="rounded-xl border border-line-stroke bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-forest">Atención personalizada</h2>
          <p className="mt-2 text-sm text-stone">
            Cotizamos por WhatsApp, sin intermediarios ni formularios largos.
          </p>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-forest">A quién servimos</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {wholesaleSegments.map((segment) => (
            <div key={segment.slug} className="rounded-xl bg-cream-dark p-4 text-sm">
              <div className="font-semibold text-charcoal">{segment.title}</div>
              <p className="mt-1 text-stone">{segment.description}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-14 text-sm text-stone">
        {siteConfig.brand.name} elabora su catálogo completo en{" "}
        {siteConfig.brand.origin}. Puedes conocer la marca en su{" "}
        <a
          href={siteConfig.brand.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-forest hover:underline"
        >
          sitio oficial
        </a>
        , y en Guayaquil comprar por caja a través de nosotros. Revisa{" "}
        <Link href="/como-comprar" className="font-semibold text-forest hover:underline">
          cómo comprar
        </Link>{" "}
        según seas empresa o consumidor individual.
      </p>
    </div>
  );
}
