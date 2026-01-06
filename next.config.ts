const nextConfig = {
  output: "export",
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  distDir: 'out',

  turbopack: {
    root: __dirname,
  },

  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
  },

  experimental: {
    optimizePackageImports: ["react-icons"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
