import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/data/blogs";
import { getActiveBySlug } from "@/lib/data/actives";
import { AppStoreButton } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miko-skincare.app";

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Skincare Science Article | Miko",
    };
  }

  return {
    title: post.seoTitle,
    description: post.description,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url: `${baseUrl}/blogs/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Related articles
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Organization",
          name: post.author,
          url: baseUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "Miko Skincare",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/miko-mark-master.jpg`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${baseUrl}/blogs/${slug}`,
        },
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${baseUrl}/blogs/${slug}`,
          },
        ],
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

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="space-y-4">
          <Link
            href="/blogs"
            className="text-xs font-mono text-[#7C7166] hover:text-[#241E19] flex items-center gap-1.5 transition-colors"
          >
            ← Back to Articles Directory
          </Link>

          <div className="flex items-center gap-3 text-xs font-mono text-[#7C7166]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6F0] border border-[#E8DFC8] text-[#241E19] font-medium">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>Updated {post.updatedAt}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#241E19] tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-xs font-mono text-[#7C7166]">
            By {post.author}
          </p>
        </div>

        {/* Lead Summary Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE7DC] shadow-xs space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
            Executive Summary
          </span>
          <p className="font-serif text-lg sm:text-xl text-[#241E19] leading-relaxed">
            {post.summary}
          </p>
        </div>

        {/* Article Body Content */}
        <article className="space-y-10">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241E19] pt-2">
                {section.heading}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#554C43] leading-relaxed">
                {section.body.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Callout Box */}
              {section.callout && (
                <div
                  className={`p-5 sm:p-6 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-1 ${
                    section.callout.type === "myth"
                      ? "bg-[#FAF6F0] border-[#B07A26]/30 text-[#554C43]"
                      : "bg-[#EDF5F0] border-[#4E8F68]/30 text-[#554C43]"
                  }`}
                >
                  <span className="font-mono font-bold uppercase tracking-wider text-[11px] block">
                    {section.callout.type === "myth" ? "Debunked" : "Key Insight"}
                  </span>
                  <p>{section.callout.text}</p>
                </div>
              )}

              {/* INCI List Chips */}
              {section.inciList && section.inciList.length > 0 && (
                <div className="pt-2 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C7166] block font-semibold">
                    Associated INCI Declarations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {section.inciList.map((inci) => (
                      <span
                        key={inci}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F2EBE1] text-[#241E19] border border-[#EFE7DC]"
                      >
                        {inci}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Cross-Linking: Related Actives & Pairings */}
        {((post.relatedActives && post.relatedActives.length > 0) ||
          (post.relatedPairs && post.relatedPairs.length > 0)) && (
          <section className="pt-6 border-t border-[#EFE7DC] space-y-4">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Connected Formulation Profiles & Rules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.relatedActives?.map((slug) => {
                const active = getActiveBySlug(slug);
                if (!active) return null;
                return (
                  <Link
                    key={slug}
                    href={`/ingredients/${active.slug}`}
                    className="p-4 rounded-xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
                  >
                    <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                      Active Ingredient Dossier
                    </span>
                    <span className="font-serif text-base text-[#241E19] group-hover:text-[#383028] block">
                      {active.name} →
                    </span>
                    <p className="text-xs text-[#7C7166] line-clamp-1">
                      {active.description}
                    </p>
                  </Link>
                );
              })}
              {post.relatedPairs?.map((pairSlug) => (
                <Link
                  key={pairSlug}
                  href={`/can-i-use/${pairSlug}`}
                  className="p-4 rounded-xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-1.5 group"
                >
                  <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                    Verified Conflict Rule
                  </span>
                  <span className="font-serif text-base text-[#241E19] group-hover:text-[#383028] block">
                    Can I use these together? →
                  </span>
                  <p className="text-xs text-[#7C7166] capitalize">
                    {pairSlug.replace(/-/g, " ")}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Further Reading Grid */}
        {otherPosts.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-[#EFE7DC]">
            <h2 className="font-serif text-2xl text-[#241E19]">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blogs/${p.slug}`}
                  className="p-5 rounded-2xl bg-white border border-[#EFE7DC] hover:border-[#DFD5C6] transition-all space-y-2 group"
                >
                  <span className="text-[10px] font-mono text-[#7C7166] uppercase block">
                    {p.category} · {p.readTime}
                  </span>
                  <span className="font-serif text-base text-[#241E19] group-hover:text-[#383028] block">
                    {p.title} →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <aside className="p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="font-serif text-xl text-[#241E19]">
              Audit your products against formulation rules
            </h2>
            <p className="text-xs text-[#554C43] max-w-md leading-relaxed">
              Miko scans your bottles, extracts the active ingredients, and detects
              molecular conflicts on your phone — no cloud database required.
            </p>
          </div>
          <AppStoreButton size="md" />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
