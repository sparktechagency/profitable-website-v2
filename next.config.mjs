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
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "p2zltbm7-8000.inc1.devtunnels.ms",
//         pathname: "/uploads/**",
//       },

//       {
//         protocol: "https",
//         hostname: "localhost",
//         pathname: "/uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "localhost",
//         pathname: "/Uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "localhost",
//         port: "4173",
//         pathname: "/uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "localhost",
//         port: "4173",
//         pathname: "/Uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "i.ibb.co",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "purecatamphetamine.github.io",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "flagcdn.com",
//         pathname: "/**",
//       },
//        {
//         protocol: "https",
//         hostname: "p2zltbm7-8000.inc1.devtunnels.ms",
//         pathname: "/Uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "p2zltbm7-8000.inc1.devtunnels.ms",
//         pathname: "/uploads/**",
//       },

//       // other hosts
//       {
//         protocol: "https",
//         hostname: "i.ibb.co",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "flagcdn.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;