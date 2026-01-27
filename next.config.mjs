/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  domains: ['flagcdn.com', 'your-image-host.com', 'www.gravatar.com'],
  formats: ["image/avif", "image/webp"],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "api.profitablebusinessesforsale.com",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "api.profitablebusinessesforsale.com",
      pathname: "/Uploads/**",
    },
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
    {
      protocol: "https",
      hostname: "www.gravatar.com",
      pathname: "/**",
    },
  ],
},


  // Permanent 301 redirects for SEO
  async redirects() {
    return [
      // Old FAQ pages to new ones
      {
        source: "/seller-faq",
        destination: "/faq-seller",
        permanent: true,
      },
      {
        source: "/buyer-faq",
        destination: "/faq-buyer",
        permanent: true,
      },

      // Redirect www to non-www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.profitablebusinessesforsale.com",
          },
        ],
        destination: "https://profitablebusinessesforsale.com/:path*",
        permanent: true,
      },

      // Redirect HTTP non-www to HTTPS non-www
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
          {
            type: "host",
            value: "profitablebusinessesforsale.com",
          },
        ],
        destination: "https://profitablebusinessesforsale.com/:path*",
        permanent: true,
      },

      // Redirect HTTP www to HTTPS non-www
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
          {
            type: "host",
            value: "www.profitablebusinessesforsale.com",
          },
        ],
        destination: "https://profitablebusinessesforsale.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Remote images configuration
//   images: {
//     remotePatterns: [
//       // Live server - lowercase uploads
//       {
//         protocol: "http",
//         hostname: "10.10.20.57",
//         pathname: "/uploads/**",
//       },
//       // Live server - uppercase Uploads
//       {
//         protocol: "http",
//         hostname: "10.10.20.57",
//         pathname: "/Uploads/**",
//       },
//       // Localhost
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "8001",
//         pathname: "/uploads/**",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "8001",
//         pathname: "/Uploads/**",
//       },
//       // External CDNs
//       {
//         protocol: "http",
//         hostname: "i.ibb.co",
//         pathname: "/**",
//       },
//       {
//         protocol: "http",
//         hostname: "purecatamphetamine.github.io",
//         pathname: "/**",
//       },
//       {
//         protocol: "http",
//         hostname: "flagcdn.com",
//         pathname: "/**",
//       },
      
//     ],
//     domains: ['flagcdn.com', 'your-image-host.com'],
    
//     // Modern image formats
//     formats: ["image/avif", "image/webp"],
//   },



 
// };

// export default nextConfig;
