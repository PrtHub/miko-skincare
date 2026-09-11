import { MetadataRoute } from "next";
import { LAYERING_RULES } from "@/lib/data/layeringRules";
import { PREGNANCY_INGREDIENTS } from "@/lib/data/pregnancyData";
import { ACTIVES_LIST } from "@/lib/data/actives";
import { BLOG_POSTS } from "@/lib/data/blogs";
import { GUIDES_LIST } from "@/lib/data/guides";
import { CONCERNS_LIST } from "@/lib/data/concerns";
import { SKIN_TYPES_LIST } from "@/lib/data/skinTypes";
import { SENSITIVITIES_LIST } from "@/lib/data/sensitivities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikocare.pro";
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
      url: `${baseUrl}/concerns`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routine`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sensitivities`,
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
      priority: 0.85,
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

  // Dynamic concern routes: /concerns/[slug]
  const concernRoutes: MetadataRoute.Sitemap = CONCERNS_LIST.map((concern) => ({
    url: `${baseUrl}/concerns/${concern.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic routine skin-type routes: /routine/[slug]
  const routineRoutes: MetadataRoute.Sitemap = SKIN_TYPES_LIST.map((routine) => ({
    url: `${baseUrl}/routine/${routine.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  // Dynamic sensitivity routes: /sensitivities/[slug]
  const sensitivityRoutes: MetadataRoute.Sitemap = SENSITIVITIES_LIST.map(
    (sens) => ({
      url: `${baseUrl}/sensitivities/${sens.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    })
  );

  return [
    ...staticRoutes,
    ...pairRoutes,
    ...pregnancyRoutes,
    ...ingredientRoutes,
    ...blogRoutes,
    ...guideRoutes,
    ...concernRoutes,
    ...routineRoutes,
    ...sensitivityRoutes,
  ];
}
