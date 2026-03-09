export default async function sitemap() {
  const baseUrl = "https://profitablebusinessesforsale.com";

  // 🔥 Fetch Blogs from API
  let blogs = [];
 try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_MAIN_URL}/formation/get-all-format-website`,
      { cache: "no-store" }
    );

    const data = await res.json();
    blogs = data?.data || [];
  } catch (error) {
    console.error("Blog fetch error:", error);
  }


  // 🔥 Fetch Listings from API
  let listings = [];
  try {
    const listingsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_MAIN_URL}/business/filter-business`, { cache: "no-store" });
    const listingsData = await listingsRes.json();
    listings = listingsData?.data || []; 
  } catch (error) {
    console.error("Error fetching listings:", error);
  }

  // ✅ Static Routes
  const staticRoutes = [
    "",
    "/about-us",
    "/business-schedule",
    "/business-valuation",
    "/blogs",
  
    "/contact-us",
   "/plane",
   "/chat",
   "/myBusiness/details",
   "/refund-and-cancellation-policy",
   "/businesses-for-sale",
    "/privacy-policy",
    "/terms-and-conditions",
    "/faq-seller",
    "/faq-buyer",
    "/faq-brokers",
    "/faq-investors",
    "/faq-business",
    "/faq-asset",
    "/faq-franchise",
    "/profilePage",
    "/Seller",
    "/addnewbusiness"
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // ✅ Dynamic Blog Pages
const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt
      ? new Date(blog.updatedAt)
      : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
console.log(blogUrls)
  // ✅ Dynamic Business Listing Pages
  const listingUrls = listings.map((item) => ({
    url: `${baseUrl}/business/get-single-business-with-users/${item.slug}`,
    lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // ✅ Return all sitemap URLs
  return [...staticUrls, ...blogUrls, ...listingUrls];
}