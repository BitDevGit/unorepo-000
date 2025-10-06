import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@unorepo/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
