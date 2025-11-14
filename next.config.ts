import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
    images: {
        domains: [
            'assets.aceternity.com',
            'images.unsplash.com',
            'raw.githubusercontent.com'
        ],
    },
};

export default nextConfig;
