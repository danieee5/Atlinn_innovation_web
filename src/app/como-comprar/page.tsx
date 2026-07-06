import type { Metadata } from "next";
import { siteConfig, waLink } from "@/lib/site-config";
import PointsOfSaleList from "@/components/PointsOfSaleList";

export const metadata: Metadata = {
  title: "Cómo comprar",
  description:
    "Cómo cotizar cajas de Balance Products al por mayor con ATLINN en Guayaquil, y dónde comprar 1-2 unidades al detalle.",
  alternates: { canonical: "/como-comprar" },
};

const wholesaleSteps = [
  {
    title: "Escríbenos por WhatsApp",
    body: `Cuéntanos qué productos y cuántas cajas necesitas al ${siteConfig.whatsapp.display}.`,
  },
  {
    title: "Te cotizamos",
    body: "Te confirmamos precio por volumen, disponibilidad y fecha de entrega.",
  },
  {
    title: "Realiza tu transferencia",
    body: "Transfiere el valor a la cuenta de Banco del Austro que aparece abajo.",
  },
  {
    title: "Te entregamos nosotros mismos",
    body: "Entrega en 24 horas o más, gratis en Guayaquil, Samborondón, Vía a Daule y Salitre.",
  },
];

const bankRows: [string, string][] = [
  ["Banco", siteConfig.bankTransfer.banco],
  ["Tipo de cuenta", siteConfig.bankTransfer.tipoCuenta],
  ["Nro. cuenta", siteConfig.bankTransfer.numeroCuenta],
  ["Nombre", siteConfig.bankTransfer.nombre],
  ["RUC", siteConfig.bankTransfer.ruc],
  ["Correo", siteConfig.bankTransfer.correo],
  ["WhatsApp", siteConfig.bankTransfer.whatsapp],
];

const faqs = [
  {
    question: "¿Puedo comprar una sola botella de Balance Products?",
    answer:
      "Nuestros pedidos directos son por caja. Para 1-2 unidades te indicamos la farmacia o tienda más cercana en Guayaquil.",
  },
  {
    question: "¿Cuánto se demora la entrega?",
    answer:
      "24 horas o más desde que confirmamos tu pedido. La entrega es gratis dentro de Guayaquil, Samborondón, Vía a Daule y Salitre.",
  },
  {
    question: "¿Hacen envíos fuera de Guayaquil?",
    answer:
      "Fuera de Guayaquil y Gran Guayaquil coordinamos el envío por courier (como Servientrega), con un costo adicional según la tarifa del operador.",
  },
  {
    question: "¿Cuál es el pedido mínimo por caja?",
    answer:
      "Para bebidas (Hidralife, Maximum, Mishá, Arriba) el pedido mínimo es 1 caja de 12 unidades. Para Stevia Balance, el mínimo es 3 fundas o cajas.",
  },
  {
    question: "¿Puedo pagar con transferencia bancaria?",
    answer:
      "Sí, aceptamos transferencia a la cuenta de Banco del Austro que aparece en esta página. También puedes enviarnos el comprobante por WhatsApp.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ComoComprarPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
        Distribuidor oficial en Guayaquil
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-4xl">
        Cómo comprar
      </h1>
      <p className="mt-3 max-w-2xl text-stone">
        Nuestros pedidos directos son por caja, para negocios que quieren
        revender o abastecerse. Si buscas 1-2 unidades, te indicamos dónde
        comprarlas al detalle.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-forest">
          Compra al por mayor
        </h2>
        <p className="mt-1 text-sm text-stone">
          Para empresas, gimnasios, farmacias, revendedores y eventos.
        </p>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2">
          {wholesaleSteps.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-line-stroke bg-white p-6">
              <span className="font-display text-2xl font-semibold text-orange">{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-forest">{step.title}</h3>
              <p className="mt-1 text-sm text-stone">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex justify-start">
          <a
            href={waLink("Hola ATLINN, quiero cotizar cajas de Balance Products.")}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="whatsapp_click_como_comprar_mayoreo"
            className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark"
          >
            Cotizar por caja
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line-stroke bg-forest text-cream">
          <div className="px-6 py-5 text-lg font-display font-semibold">
            Datos para tu transferencia
          </div>
          <dl className="divide-y divide-cream/15">
            {bankRows.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <dt className="text-xs font-semibold uppercase tracking-wide text-lime">{label}</dt>
                <dd className="text-sm font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-6 flex justify-start">
          <a
            href={waLink("Hola ATLINN, ya realicé mi transferencia, adjunto comprobante.")}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="whatsapp_click_como_comprar_comprobante"
            className="rounded-full border-2 border-forest px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-cream"
          >
            Enviar comprobante por WhatsApp
          </a>
        </div>
      </section>

      <section id="unidad" className="mt-14 scroll-mt-20 rounded-2xl bg-cream-dark p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-forest">
          ¿Solo quieres 1 o 2 unidades?
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-stone">
          No hacemos entregas a domicilio de unidades sueltas. Encuentra
          Balance Products al detalle en estos puntos de venta en Guayaquil:
        </p>
        <div className="mt-6">
          <PointsOfSaleList analyticsPrefix="maps_click_como_comprar" />
        </div>
        <a
          href={waLink("Hola ATLINN, busco 1-2 unidades de Balance Products, ¿dónde las consigo cerca de mí?")}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="whatsapp_click_como_comprar_unidad"
          className="mt-6 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-orange-dark"
        >
          ¿No encuentras un punto cerca? Escríbenos
        </a>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-forest">Preguntas frecuentes</h2>
        <div className="mt-5 flex flex-col divide-y divide-line-stroke rounded-xl border border-line-stroke bg-white">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-5">
              <h3 className="font-display text-base font-semibold text-charcoal">{faq.question}</h3>
              <p className="mt-1 text-sm text-stone">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
