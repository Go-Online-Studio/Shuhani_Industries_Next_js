import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.suhaniindustries.in";
  
  // Public routes
  const routes = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Products
  const products = [
    "/products/3d-carving",
    "/products/2d-carving",
    "/products/wave-board",
    "/products/metal-cnc",
    "/products/wooden-legs",
    "/products/custom-fabrication"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...products];
}
