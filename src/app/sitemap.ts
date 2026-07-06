import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/productos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/nosotros`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/como-comprar`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/contacto`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly", priority: 0.5 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteConfig.url}/productos/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
