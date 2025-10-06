import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@unorepo/ui", "@unorepo/utils"],
  experimental: {
    turbo: {
      resolveAlias: {
        "@unorepo/ui": "../../packages/ui",
        "@unorepo/utils": "../../packages/utils",
      },
    },
  },
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
