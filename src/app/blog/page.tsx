import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guías sobre hidratación, guayusa, cacao arriba, proteína y stevia, y cómo comprar Balance Products en Guayaquil.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-EC", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
        Blog
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-4xl">
        Guías sobre hidratación y bienestar
      </h1>
      <p className="mt-3 max-w-xl text-stone">
        Todo sobre las líneas de Balance Products y cómo conseguirlas en
        Guayaquil.
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-xl border border-line-stroke bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="text-xs font-medium uppercase tracking-wide text-stone">
              {formatDate(post.publishedAt)} · {post.readingMinutes} min de lectura
            </div>
            <h2 className="mt-2 font-display text-xl font-semibold text-forest">{post.title}</h2>
            <p className="mt-2 text-sm text-stone">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
