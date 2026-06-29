import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { withBasePath } from "@/lib/basePath";

interface BlogCardProps {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  slug: string;
  tags: string[];
}

export default function BlogCard({
  title,
  excerpt,
  coverImage,
  date,
  slug,
  tags,
}: BlogCardProps) {
  // Format publication date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group bg-bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-350 ease-crafter flex flex-col h-full border border-border/40">
      {/* Image Container */}
      <Link href={`/blog/${slug}`} className="relative aspect-[16/10] overflow-hidden block">
        <Image
          src={withBasePath(coverImage)}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-600 ease-crafter group-hover:scale-107"
        />
        {tags && tags.length > 0 && (
          <span className="absolute top-4 left-4 z-10 text-[10px] font-bold tracking-wider uppercase bg-primary text-white px-3 py-1 rounded-sm shadow-sm">
            {tags[0]}
          </span>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date */}
        <span className="text-[11px] font-medium text-text-light uppercase tracking-wider mb-2 block">
          {formattedDate}
        </span>

        {/* Title */}
        <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors duration-350 block mb-3">
          <h3 className="font-heading text-lg font-bold text-text-dark line-clamp-2 leading-tight">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-sm text-text-muted leading-relaxed line-clamp-3 flex-grow mb-6">
          {excerpt}
        </p>

        {/* Link Arrow */}
        <div className="pt-4 border-t border-border/30">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary-dark transition-colors duration-350"
          >
            Read Article <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform duration-350" />
          </Link>
        </div>
      </div>
    </article>
  );
}
