import Link from "next/link";
import type { ReactNode } from "react";
import { products } from "@/lib/products";
import { siteConfig, waLink } from "@/lib/site-config";
import { wholesaleSegments, type Segment } from "@/lib/segments";
import PointsOfSaleList from "@/components/PointsOfSaleList";
import ProductCard from "@/components/ProductCard";
import ParallaxHero from "@/components/ParallaxHero";

const benefits = [
  { label: "Distribuidor oficial", icon: "badge" },
  { label: "Entrega directa", icon: "truck" },
  { label: "Precios por volumen", icon: "boxes" },
  { label: "Atención personalizada", icon: "chat" },
] as const;

const icons: Record<(typeof benefits)[number]["icon"], ReactNode> = {
  badge: (
    <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Zm-1.5 12.5L7 11l1.4-1.4 2.1 2.1L15.6 7.6 17 9l-6.5 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
  ),
  truck: (
    <path d="M2 6h11v10H2V6Zm11 3h4l3 3v4h-7V9ZM6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  ),
  boxes: (
    <path d="M3 8 12 4l9 4-9 4-9-4Zm0 0v9l9 4V12M21 8v9l-9 4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
  ),
  chat: (
    <path d="M4 4h16v11H8l-4 4V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  ),
};

const segmentIcons: Record<Segment["icon"], ReactNode> = {
  building: (
    <path d="M4 21V4h9v17M13 21h7V9h-7M7 8h1M7 11h1M7 14h1M7 17h1M16 12h1M16 15h1M16 18h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
  ),
  barbell: (
    <path d="M3 9v6M6 7v10M9 11h6M6 12h12M18 7v10M21 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  ),
  pill: (
    <path d="m6.5 17.5 11-11a4 4 0 1 1 5.66 5.66l-11 11a4 4 0 1 1-5.66-5.66Zm4.5-4.5 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
  ),
  flag: (
    <path d="M5 3v18M5 4h13l-3 4 3 4H5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
  ),
};

export default function Home() {
  return (
    <>
      <section className="pt-12 sm:pt-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
            Distribuidor oficial de {siteConfig.brand.name} en Guayaquil
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl md:text-5xl">
            Bienestar integral con <span className="text-orange">Balance Products</span>
            <br />
            en Guayaquil.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-stone">
            Hidralife, Maximum, Mishá, Arriba y Stevia Balance, distribuidos
            oficialmente en Guayaquil y Gran Guayaquil.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#donde-comprar" className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark">
              Comprar para mí
            </a>
            <a
              href="#mayoristas"
              className="rounded-full border-2 border-forest px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              Quiero vender en mi negocio
            </a>
          </div>
        </div>

        <div className="relative mt-10 hidden h-[460px] w-screen -ml-[calc(50vw-50%)] sm:block md:h-[560px]">
          <ParallaxHero
            src="/images/products/hero.png"
            alt="Línea completa Balance Products: Hidralife, Maximum, Arriba, Mishá y Stevia Balance"
          />
        </div>
        <div className="relative mt-10 h-[520px] w-screen -ml-[calc(50vw-50%)] sm:hidden">
          <ParallaxHero
            src="/images/products/hero-mobile.png"
            alt="Línea completa Balance Products: Hidralife, Maximum, Arriba, Mishá y Stevia Balance"
          />
        </div>
      </section>

      <section className="bg-forest py-4 text-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.label} className="flex items-center justify-center gap-2 py-2 text-xs font-medium sm:text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-lime">
                {icons[b.icon]}
              </svg>
              {b.label}
            </div>
          ))}
        </div>
      </section>

      <section id="donde-comprar" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
          Comprar para mí
        </h2>
        <p className="mt-2 max-w-2xl text-stone">
          Encuentra Balance Products al detalle en estos puntos de venta en
          Guayaquil.
        </p>
        <div className="mt-8">
          <PointsOfSaleList analyticsPrefix="maps_click_home" />
        </div>
        <p className="mt-6 text-sm text-stone">
          ¿No encuentras un punto cerca de ti?{" "}
          <a
            href={waLink("Hola ATLINN, busco 1-2 unidades de Balance Products, ¿dónde las consigo cerca de mí?")}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="whatsapp_click_donde_comprar"
            className="font-semibold text-forest hover:underline"
          >
            Escríbenos por WhatsApp
          </a>
          .
        </p>
      </section>

      <section id="mayoristas" className="scroll-mt-20 bg-cream-dark py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
            Quiero vender en mi negocio
          </h2>
          <p className="mt-2 max-w-2xl text-stone">
            Cotizamos por caja para tu negocio y te la entregamos nosotros mismos
            en Guayaquil.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {wholesaleSegments.map((segment) => (
              <a
                key={segment.slug}
                href={waLink(segment.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event={`whatsapp_click_segment_${segment.slug}`}
                className="flex flex-col gap-2 rounded-xl border border-line-stroke bg-white p-5 transition-shadow hover:shadow-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="text-orange">
                  {segmentIcons[segment.icon]}
                </svg>
                <h3 className="font-display text-base font-semibold text-charcoal">{segment.title}</h3>
                <p className="text-sm text-stone">{segment.description}</p>
                <span className="mt-auto pt-2 text-sm font-semibold text-forest">Cotizar →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
            Catálogo que distribuimos
          </h2>
          <Link href="/productos" className="text-sm font-semibold text-forest hover:underline">
            Ver todo →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-orange px-6 py-10 text-center text-cream sm:px-10">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            ¿Dudas o consultas?
          </h2>
          <p className="max-w-md text-sm text-cream/90">
            Escríbenos por WhatsApp al {siteConfig.whatsapp.display} y te ayudamos a armar tu pedido.
          </p>
          <a
            href={waLink("Hola ATLINN, quiero hacer un pedido.")}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="whatsapp_click_cta_band"
            className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
