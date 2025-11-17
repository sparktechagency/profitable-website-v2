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
    domains: ['flagcdn.com', 'your-image-host.com'],
    
    // Modern image formats
    formats: ["image/avif", "image/webp"],
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
