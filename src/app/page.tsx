import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { products } from "@/lib/products";
import { siteConfig, waLink } from "@/lib/site-config";
import { wholesaleSegments, type Segment } from "@/lib/segments";
import PointsOfSaleList from "@/components/PointsOfSaleList";
import ProductCard from "@/components/ProductCard";
import ParallaxHero from "@/components/ParallaxHero";

const benefits = [
  { label: "Distribuidor autorizado", icon: "badge" },
  { label: "Entrega rápida", icon: "truck" },
  { label: "Precios por volumen", icon: "boxes" },
  { label: "Atención personalizada", icon: "chat" },
] as const;

const directPurchaseMessage =
  "Hola ATLINN, quiero comprar Balance Products para mi casa. Me ayudan con disponibilidad y entrega?";

const businessPurchaseMessage =
  "Hola ATLINN, quiero comprar Balance Products para mi negocio. Me ayudan con precios y disponibilidad?";

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
  coffee: (
    <path d="M4 8h11v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm11 2h2a2 2 0 0 1 0 4h-2M6 3v2M10 3v2M14 3v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  utensils: (
    <path d="M6 3v8M3.5 3v8M8.5 3v8M3.5 8h5M6 11v10M14 3v18M14 3c4 2.5 5 6 2 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
};

const whyChooseUs = [
  {
    title: "Productos originales",
    text: "Balance Products distribuidos por canal autorizado.",
    icon: "badge",
  },
  {
    title: "Entrega rápida",
    text: "Atención para Guayaquil, Samborondón y Vía a la Costa.",
    icon: "truck",
  },
  {
    title: "Cobertura local",
    text: "Acompañamiento para hogares, negocios, empresas y gimnasios.",
    icon: "boxes",
  },
  {
    title: "Asesoría directa",
    text: "Te ayudamos a elegir productos, sabores y cantidades.",
    icon: "chat",
  },
] as const;

const mediaGallery = [
  {
    src: "/images/social/balance-products-linea-completa.jpeg",
    alt: "Línea completa de productos Balance sobre mesón",
  },
  {
    src: "/images/social/hidralife-cuatro-sabores.jpeg",
    alt: "Hidralife en cuatro sabores",
  },
  {
    src: "/images/social/maximum-post-entrenamiento.jpeg",
    alt: "Maximum Protein Drink para post entrenamiento",
  },
  {
    src: "/images/social/misha-botellas-naturaleza.jpeg",
    alt: "Botellas de Mishá en entorno natural",
  },
  {
    src: "/images/social/arriba-nectar-mango.jpeg",
    alt: "Arriba néctar de cacao sabor mango",
  },
  {
    src: "/images/social/stevia-mejor-endulzador.jpeg",
    alt: "Stevia Balance como endulzador natural",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="pt-12 sm:pt-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
            Distribuidor autorizado {siteConfig.brand.name}. Tu bienestar empieza aquí.
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl md:text-5xl">
            Bienestar integral con <span className="text-orange">Balance Products</span> para consumidores y negocios en Guayaquil
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-stone">
            Bebidas funcionales, suplementos y productos naturales para mejorar tu bienestar o fortalecer la oferta de tu negocio. Atención directa para hogares, gimnasios, cafeterías, restaurantes y empresas.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold text-forest">
            Entrega rápida y segura en Guayaquil, Samborondón y Vía a la Costa.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={waLink(directPurchaseMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="whatsapp_click_hero_personal"
              className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark"
            >
              Comprar para mí
            </a>
            <a
              href={waLink(businessPurchaseMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="whatsapp_click_hero_business"
              className="rounded-full border-2 border-forest px-5 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-cream sm:px-6"
            >
              Comprar para mi negocio
            </a>
          </div>
        </div>

        <div className="relative mt-10 hidden aspect-[1672/941] w-screen -ml-[calc(50vw-50%)] sm:block">
          <ParallaxHero
            src="/images/products/hero.png"
            alt="Línea completa Balance Products: Hidralife, Maximum, Arriba, Mishá y Stevia Balance"
          />
        </div>
        <div className="relative mt-10 aspect-[887/1774] w-screen -ml-[calc(50vw-50%)] sm:hidden">
          <ParallaxHero
            src="/images/products/hero-mobile.png"
            alt="Línea completa Balance Products: Hidralife, Maximum, Arriba, Mishá y Stevia Balance"
          />
        </div>
      </section>

      <section className="bg-forest py-4 text-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.label} className="flex items-center justify-center gap-2 py-2 text-xs font-semibold uppercase tracking-wide sm:text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-lime">
                {icons[b.icon]}
              </svg>
              {b.label}
            </div>
          ))}
        </div>
      </section>

      <section id="donde-comprar" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <span className="text-sm font-semibold text-orange">Compra directa con nosotros</span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-forest sm:text-3xl">
              Recibe Balance Products en casa hoy mismo
            </h2>
            <p className="mt-3 max-w-2xl text-stone">
              Evita filas, recibe atención personalizada y confirma stock por WhatsApp. Puedes pagar por transferencia y coordinar entrega rápida para Guayaquil, Samborondón y Vía a la Costa.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink(directPurchaseMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="whatsapp_click_direct_personal"
                className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-orange-dark"
              >
                Pedir por WhatsApp - Envío Express
              </a>
              <Link href="/productos" className="rounded-full border-2 border-forest px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-cream">
                Ver catálogo
              </Link>
            </div>
          </div>

          <div className="grid gap-3 rounded-xl border border-line-stroke bg-white p-5">
            {[
              "Entrega rápida y segura",
              "Pago por transferencia",
              "Orientación por producto, sabor y cantidad",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-medium text-charcoal">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mayoristas" className="scroll-mt-20 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
            Compra para tu negocio
          </h2>
          <p className="mt-2 max-w-2xl text-stone">
            Solicita precios por volumen y fortalece tu oferta con bebidas funcionales, suplementos y productos naturales.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {wholesaleSegments.map((segment) => (
              <a
                key={segment.slug}
                href={waLink(segment.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event={`whatsapp_click_segment_${segment.slug}`}
                className="flex min-h-64 flex-col gap-3 rounded-xl border border-line-stroke bg-white p-5 transition-shadow hover:shadow-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="text-orange">
                  {segmentIcons[segment.icon]}
                </svg>
                <h3 className="font-display text-base font-semibold text-charcoal">{segment.title}</h3>
                <p className="text-sm text-stone">{segment.description}</p>
                <p className="text-sm text-charcoal/80">{segment.benefit}</p>
                <span className="mt-auto inline-flex w-fit rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream">
                  Acceder a precios de distribuidor
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-14 text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Por qué elegir Balance Products con ATLINN
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-xl border border-cream/15 bg-cream/5 p-5">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="text-lime">
                  {icons[item.icon]}
                </svg>
                <h3 className="mt-3 font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-cream/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_0.72fr] md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
              Productos para bienestar, energía y rendimiento
            </h2>
            <p className="mt-3 text-stone">
              Hidralife, Maximum, Mishá, Arriba y Stevia Balance se integran a rutinas de hidratación, entrenamiento, consumo diario y atención en negocios.
            </p>
            <div className="mt-5 flex gap-2 text-xs font-semibold uppercase tracking-wide text-forest">
              <span>Fotos</span>
              <span aria-hidden="true">/</span>
              <span>Video</span>
              <span aria-hidden="true">/</span>
              <span>Catálogo</span>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-line-stroke bg-black shadow-sm">
            <video
              src="/atlin_video_promocional.mp4"
              poster="/images/video/atlin-video-poster.jpeg"
              controls
              muted
              playsInline
              preload="metadata"
              className="aspect-[9/16] w-full object-contain"
            />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
          <div className="flex snap-x gap-4 overflow-x-auto pb-3">
            {mediaGallery.map((item) => (
              <div
                key={item.src}
                className="relative aspect-[4/5] w-60 shrink-0 snap-start overflow-hidden rounded-xl border border-line-stroke bg-white sm:w-72"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 288px, 240px"
                  className="object-contain bg-white"
                />
              </div>
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-cream-dark py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
            Nuestros productos están disponibles en puntos autorizados
          </h2>
          <p className="mt-2 max-w-3xl text-stone">
            Encuentra nuestros productos en las siguientes cadenas, gimnasios y puntos de venta a nivel nacional.
          </p>
          <div className="mt-8">
            <PointsOfSaleList analyticsPrefix="maps_click_home" />
          </div>
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
            href={waLink("Hola ATLINN, quiero más información sobre precios de Balance Products para mi casa o negocio.")}
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
