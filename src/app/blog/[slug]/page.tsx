import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
import CTASection from "@/components/sections/CTASection";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { withBasePath } from "@/lib/basePath";

interface Props {
  params: Promise<{ slug: string }>;
}

// Statically generate all blog post routes at build time
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Dynamically generate SEO metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<import("next").Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Suhani Industries Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        title={post.title}
        subtitle={`Published by ${post.author} on ${formattedDate}`}
        badge="Blog Article"
        bgImage="/images/BackPatternBlog.svg"
      />

      {/* 2. Breadcrumbs */}
      <div className="hidden sm:block">
        <BreadcrumbBar
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.title },
          ]}
        />
      </div>

      {/* 3. Article Content Section */}
      <section className="py-20 bg-background-custom border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 sm:p-14 shadow-sm border border-border/30">
            {/* Article Header */}
            <div className="mb-8 pb-6 border-b border-border/50">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-text-dark leading-tight">
                {post.title}
              </h2>
            </div>

            {/* Featured Image Section */}
            {post.coverImage && (
              <div className="relative w-full h-[240px] sm:h-[420px] mb-10 rounded-xl overflow-hidden shadow-md border border-border/10 bg-background-custom">
                <Image
                  src={withBasePath(post.coverImage)}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover hover:scale-[1.02] transition-transform duration-500 ease-in-out"
                />
              </div>
            )}

            {/* Custom JSX Markdown Content Body */}
            <MarkdownRenderer content={post.content} />
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA banner */}
      <CTASection />
    </div>
  );
}
