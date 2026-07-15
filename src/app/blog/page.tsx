import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import BlogCard from "@/components/ui/BlogCard";
import CTASection from "@/components/sections/CTASection";
import { getAllPosts } from "@/lib/blog";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Blog & Insights | Suhani Industries",
  description: "Read our latest insights and industry trends in CNC machining, architectural wall panel design, and premium woodworking.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  // Read posts directly from file system on the server
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        title="Insights &amp; Industry Trends"
        subtitle="Stay updated with the latest trends in CNC machining, architectural wall panel design, and premium woodworking."
        badge="Company Blog"
        bgImage={withBasePath("/images/bannerImage.webp")}
      />

      {/* 2. Breadcrumbs */}
      <BreadcrumbBar items={[{ name: "Blog" }]} />

      {/* 3. Blog List Grid Section */}
      <section className="py-24 bg-background-custom border-b border-border/30">
        <div className="container mx-auto px-6">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  coverImage={post.coverImage}
                  date={post.date}
                  slug={post.slug}
                  tags={post.tags}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-lg border border-border/30 p-10">
              <h3 className="font-heading text-lg font-bold mb-2">No Articles Yet</h3>
              <p className="text-text-muted text-sm">
                Check back soon! We are curating our best insights.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Bottom CTA Accents */}
      <CTASection />
    </div>
  );
}
