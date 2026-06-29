import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "Shuhani_Industries_Next_js";
const basePath = isProduction ? `/${repoName}` : "";
const baseUrl = isProduction ? `https://go-online-studio.github.io/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_BASE_URL: baseUrl,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
