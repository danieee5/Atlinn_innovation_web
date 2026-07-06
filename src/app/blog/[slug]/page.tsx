import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getProductBySlug } from "@/lib/products";
import { siteConfig, waLink } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-EC", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedProducts = (post.relatedProductSlugs ?? [])
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 2, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="mb-6 text-sm text-stone">
        <Link href="/blog" className="hover:text-forest">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{post.title}</span>
      </nav>

      <div className="text-xs font-medium uppercase tracking-wide text-stone">
        {formatDate(post.publishedAt)} · {post.readingMinutes} min de lectura
      </div>
      <h1 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-charcoal/85">
        {post.sections.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="mb-2 font-display text-xl font-semibold text-forest">{section.heading}</h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="mt-2 first:mt-0">{p}</p>
            ))}
          </div>
        ))}

        {post.citation && (
          <p className="text-sm text-stone">
            Fuente y catálogo completo de la marca:{" "}
            <a
              href={post.citation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest hover:underline"
            >
              {post.citation.label}
            </a>
            .
          </p>
        )}
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-3">
          {relatedProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/productos/${product.slug}`}
              className="rounded-full border border-line-stroke bg-white px-4 py-2 text-sm font-semibold text-forest hover:shadow-sm"
            >
              Ver {product.line} →
            </Link>
          ))}
        </div>
      )}

      <div className="mt-12 flex flex-col items-start gap-3 rounded-2xl bg-cream-dark p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-charcoal">
          ¿Tu negocio quiere ofrecer Balance Products en Guayaquil?
        </p>
        <a
          href={waLink("Hola ATLINN, quiero cotizar cajas de Balance Products.")}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event={`whatsapp_click_blog_${post.slug}`}
          className="shrink-0 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-orange-dark"
        >
          Cotizar por caja
        </a>
      </div>
    </article>
  );
}
