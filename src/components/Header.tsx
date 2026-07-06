import Link from "next/link";
import Image from "next/image";
import { waLink } from "@/lib/site-config";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/como-comprar", label: "Cómo comprar" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-stroke bg-cream/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/catalog/logo-atlinn.png"
            alt="ATLINN Innovations"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={waLink("Hola ATLINN, quiero cotizar cajas de Balance Products.")}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="whatsapp_click_header"
            className="rounded-full bg-orange px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-orange-dark sm:px-5"
          >
            Cotizar por caja
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
