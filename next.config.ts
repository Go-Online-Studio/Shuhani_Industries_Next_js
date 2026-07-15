import type { NextConfig } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.suhaniindustries.in";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
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
