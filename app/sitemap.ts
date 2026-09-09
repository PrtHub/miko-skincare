import { MetadataRoute } from "next";
import { LAYERING_RULES } from "@/lib/data/layeringRules";
import { PREGNANCY_INGREDIENTS } from "@/lib/data/pregnancyData";
import { ACTIVES_LIST } from "@/lib/data/actives";
import { BLOG_POSTS } from "@/lib/data/blogs";
import { GUIDES_LIST } from "@/lib/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";
  const now = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/can-i-use`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pregnancy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ingredients`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routine/application-order`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Dynamic pair routes: /can-i-use/[pair]
  const pairRoutes: MetadataRoute.Sitemap = LAYERING_RULES.map((rule) => ({
    url: `${baseUrl}/can-i-use/${rule.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic pregnancy routes: /pregnancy/[ingredient]
  const pregnancyRoutes: MetadataRoute.Sitemap = PREGNANCY_INGREDIENTS.map(
    (item) => ({
      url: `${baseUrl}/pregnancy/${item.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );

  // Dynamic ingredient routes: /ingredients/[slug]
  const ingredientRoutes: MetadataRoute.Sitemap = ACTIVES_LIST.map((active) => ({
    url: `${baseUrl}/ingredients/${active.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic blog routes: /blogs/[slug]
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic guide routes: /guides/[slug]
  const guideRoutes: MetadataRoute.Sitemap = GUIDES_LIST.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...pairRoutes,
    ...pregnancyRoutes,
    ...ingredientRoutes,
    ...blogRoutes,
    ...guideRoutes,
  ];
}
