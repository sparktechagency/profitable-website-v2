/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remote images configuration
  images: {
    remotePatterns: [
      // Live server - lowercase uploads
      {
        protocol: "https",
        hostname: "api.profitablebusinessesforsale.com",
        pathname: "/uploads/**",
      },
      // Live server - uppercase Uploads
      {
        protocol: "https",
        hostname: "api.profitablebusinessesforsale.com",
        pathname: "/Uploads/**",
      },
      // Localhost
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/Uploads/**",
      },
      // External CDNs
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "purecatamphetamine.github.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
    ],
    // Modern image formats
    formats: ["image/avif", "image/webp"],
  },

  // GZIP compression
  compress: true,

  // React strict mode
  reactStrictMode: true,

  // SWC minify
  swcMinify: true,

  // SEO friendly redirects
  async redirects() {
    return [
      { source: "/FaqAsset", destination: "/faq-asset", permanent: true },
      { source: "/search", destination: "/asset-seller", permanent: true },
      // Add more redirects here
    ];
  },
};

export default nextConfig;
