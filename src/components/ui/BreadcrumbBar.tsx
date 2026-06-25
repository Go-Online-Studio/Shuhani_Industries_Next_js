import React from "react";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

interface Breadcrumb {
  name: string;
  href?: string;
}

interface BreadcrumbBarProps {
  items: Breadcrumb[];
}

export default function BreadcrumbBar({ items }: BreadcrumbBarProps) {
  return (
    <div className="relative z-20 bg-white/6 border-y border-white/8 py-3.5">
      <div className="container mx-auto px-6">
        <nav className="flex items-center text-xs font-medium">
          <Link
            href={withBasePath("/")}
            className="text-primary-light hover:text-primary transition-colors duration-350"
          >
            Home
          </Link>

          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-white/30 mx-2 font-light">/</span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-primary-light hover:text-primary transition-colors duration-350"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-text-muted">{item.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
