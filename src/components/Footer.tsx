import Link from "next/link";
import { siteConfig, waLink } from "@/lib/site-config";
import { products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-line-stroke bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-semibold">
            ATL <span className="text-orange">INNOVATIONS</span> S.A.
          </div>
          <p className="mt-3 max-w-xs text-sm text-cream/80">
            {siteConfig.tagline}. Atención directa desde {siteConfig.address.city}, Ecuador.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-lime">Productos</div>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/productos/${p.slug}`} className="hover:text-cream">
                  {p.line}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-lime">Empresa</div>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li><Link href="/nosotros" className="hover:text-cream">Nosotros</Link></li>
            <li><Link href="/blog" className="hover:text-cream">Blog</Link></li>
            <li><Link href="/como-comprar" className="hover:text-cream">Cómo comprar</Link></li>
            <li><Link href="/contacto" className="hover:text-cream">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-lime">Hablemos</div>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <a
                href={waLink("Hola ATLINN, tengo una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="whatsapp_click_footer"
                className="hover:text-cream"
              >
                WhatsApp {siteConfig.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream"
              >
                {siteConfig.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-4 py-4 pb-24 text-xs text-cream/60 sm:px-6 sm:pb-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.legalName}). Todos los derechos reservados.
          </p>
          <p className="mt-1 sm:pr-20">
            {siteConfig.name} es distribuidor autorizado de {siteConfig.brand.name} en el Guayas.{" "}
            {siteConfig.brand.name} es una marca elaborada en {siteConfig.brand.origin}.
          </p>
        </div>
      </div>
    </footer>
  );
}
