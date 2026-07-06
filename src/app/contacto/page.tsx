import type { Metadata } from "next";
import { siteConfig, waLink } from "@/lib/site-config";
import { wholesaleSegments } from "@/lib/segments";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a ATLINN, distribuidor oficial de Balance Products en Guayaquil, por WhatsApp, correo o Instagram para cotizar por caja.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
        Distribuidor oficial en Guayaquil
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-4xl">
        Hablemos
      </h1>
      <p className="mt-3 text-stone">
        WhatsApp es la vía más rápida para cotizar por caja o resolver
        cualquier duda. Respondemos en horario laboral.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <a
          href={waLink("Hola ATLINN, tengo una consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="whatsapp_click_contacto"
          className="rounded-xl border border-line-stroke bg-white p-6 text-center transition-shadow hover:shadow-md"
        >
          <div className="font-display text-lg font-semibold text-forest">WhatsApp</div>
          <div className="mt-1 text-sm text-stone">{siteConfig.whatsapp.display}</div>
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded-xl border border-line-stroke bg-white p-6 text-center transition-shadow hover:shadow-md"
        >
          <div className="font-display text-lg font-semibold text-forest">Correo</div>
          <div className="mt-1 text-sm text-stone">{siteConfig.email}</div>
        </a>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-line-stroke bg-white p-6 text-center transition-shadow hover:shadow-md"
        >
          <div className="font-display text-lg font-semibold text-forest">Instagram</div>
          <div className="mt-1 text-sm text-stone">{siteConfig.instagramHandle}</div>
        </a>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-forest">¿Con qué te ayudamos?</h2>
        <p className="mt-1 text-sm text-stone">
          Elige tu perfil y te escribimos con un mensaje ya armado.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {wholesaleSegments.map((segment) => (
            <a
              key={segment.slug}
              href={waLink(segment.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event={`whatsapp_click_contacto_segment_${segment.slug}`}
              className="rounded-xl bg-cream-dark p-4 text-sm transition-shadow hover:shadow-md"
            >
              <div className="font-semibold text-charcoal">{segment.title}</div>
              <div className="mt-1 text-forest">Cotizar →</div>
            </a>
          ))}
        </div>
        <a
          href={waLink("Hola ATLINN, busco 1-2 unidades de Balance Products, ¿dónde las consigo cerca de mí?")}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="whatsapp_click_contacto_unidad"
          className="mt-4 inline-block text-sm font-semibold text-forest hover:underline"
        >
          ¿Buscas solo 1-2 unidades? Pregunta el punto más cercano →
        </a>
      </section>
    </div>
  );
}
