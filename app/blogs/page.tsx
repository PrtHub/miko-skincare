import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/lib/data/blogs";
import { AppStoreButton } from "@/components/ui/Button";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mikocare.pro";

export const metadata = {
  title: "Skincare Science & Formulation Blog | Miko",
  description:
    "Evidence-based cosmetic chemistry, myth-busting investigations, and on-device privacy architecture written in a calm, pharmacist tone.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Skincare Science & Formulation Blog | Miko",
    description:
      "Evidence-based cosmetic chemistry, myth-busting investigations, and on-device privacy architecture from Miko.",
    url: `${baseUrl}/blogs`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skincare Science & Formulation Blog | Miko",
    description:
      "Evidence-based cosmetic chemistry, formulation teardowns, and skincare myth-busting from Miko.",
  },
};

export default function BlogsHubPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((p) => p.id !== featuredPost.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Skincare Science & Formulation Blog",
        description:
          "Evidence-based cosmetic chemistry, myth-busting investigations, and on-device privacy architecture.",
        url: `${baseUrl}/blogs`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${baseUrl}/blogs`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: BLOG_POSTS.map((post, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `${baseUrl}/blogs/${post.slug}`,
          name: post.title,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2] text-[#241E19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-16">
        {/* Breadcrumbs & Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C7166]">
            <Link href="/" className="hover:text-[#241E19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#241E19]">Blog</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241E19] tracking-tight leading-[1.12]">
            Formulation science, without marketing hyperbole.
          </h1>

          <p className="text-lg sm:text-xl text-[#554C43] leading-relaxed">
            Deep-dive cosmetic chemistry teardowns, 1960s laboratory myth-busting, and
            transparent software architecture — written with pharmacist impartiality.
          </p>
        </div>

        {/* Featured Post Banner */}
        {featuredPost && (
          <Link
            href={`/blogs/${featuredPost.slug}`}
            className="group block p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] shadow-xs hover:shadow-sm transition-all space-y-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-[#7C7166]">
              <span className="px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#E8DFC8] text-[#241E19] font-medium">
                Featured · {featuredPost.category}
              </span>
              <span>
                {featuredPost.readTime} · {featuredPost.publishedAt}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl text-[#241E19] group-hover:text-[#383028] transition-colors leading-snug">
                {featuredPost.title}
              </h2>
              <p className="text-sm sm:text-base text-[#554C43] leading-relaxed max-w-3xl">
                {featuredPost.summary}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#241E19] font-medium">
              <span>Read Full Teardown</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        )}

        {/* Regular Posts Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#EFE7DC] pb-4">
            <h2 className="font-serif text-2xl text-[#241E19]">Recent Teardowns</h2>
            <span className="text-xs font-mono text-[#7C7166]">
              {BLOG_POSTS.length} Articles Published
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7C7166]">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6F0] border border-[#E8DFC8] text-[#554C43]">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#241E19] group-hover:text-[#383028] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE7DC] flex items-center justify-between text-xs font-mono text-[#7C7166]">
                  <span>{post.publishedAt}</span>
                  <span className="text-[#241E19] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cross-Link to Guides Hub */}
        <section className="p-8 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
              Actionable Frameworks
            </span>
            <h2 className="font-serif text-xl text-[#241E19]">
              Looking for practical step-by-step routines?
            </h2>
            <p className="text-xs text-[#554C43] max-w-md leading-relaxed">
              Explore our comprehensive guides to introduce retinoids, audit pregnancy
              shelves, and layer chemical exfoliants without irritation.
            </p>
          </div>
          <Link
            href="/guides"
            className="px-5 py-2.5 rounded-full bg-[#241E19] text-[#FBF7F2] font-mono text-xs font-medium hover:bg-[#383028] transition-colors shrink-0"
          >
            Explore Guides →
          </Link>
        </section>

        {/* App Store CTA */}
        <aside className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE7DC] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="font-serif text-xl text-[#241E19]">
              Test your own products in Miko
            </h2>
            <p className="text-xs text-[#554C43] max-w-md leading-relaxed">
              Photograph any bottle to identify all 32 ingredients, calculate active
              percentages, and detect molecular conflicts directly on your phone.
            </p>
          </div>
          <AppStoreButton size="md" />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
