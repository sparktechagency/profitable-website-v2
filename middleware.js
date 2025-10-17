import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const path = url.pathname;

  // Read token from cookies or localStorage (cookies recommended in Next.js)
  const token = request.cookies.get("accessToken")?.value;

  // Mocked profile data fetch simulation
  // In a real app, you might verify the token using a backend API
  const role = request.cookies.get("role")?.value;
  const isSubscribed = request.cookies.get("subscriptionPlan")?.value;

  // Define protected routes
  const privateRoutes = ["/chat"];
  const planeRoutes = ["/plane"];
  const business = ["/myBusiness/details"];
  const faqs = ["/faqs"];
  const profiles = ["/profilePage"];
  const adds = ["/addnewbusiness"];
  const subscription = ["/subscription"];
  const contacts = ["/buyer-contact-info"];
  const forms = ["/business-details-with-form/:id"];

  // Helper to check if path matches route with :id param
  const matchRoute = (routes) =>
    routes.some((route) => {
      const regex = new RegExp(`^${route.replace(":id", "[^/]+")}$`);
      return regex.test(path);
    });

  const isPrivate =
    privateRoutes.includes(path) ||
    planeRoutes.includes(path) ||
    business.includes(path) ||
    faqs.includes(path) ||
    profiles.includes(path) ||
    adds.includes(path) ||
    subscription.includes(path) ||
    contacts.includes(path) ||
    matchRoute(forms);

  // 🧱 Require login
  if (isPrivate && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("from", path);
    return NextResponse.redirect(loginUrl);
  }

  // 🚫 Restrict Investor from adding new business
  if (adds.includes(path) && role === "Investor") {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 💳 Require subscription for specific routes
  const subscriptionRequiredRoutes = [
    "/addnewbusiness",
    "/chat",
    "/subscription",
    "/business-details-with-form/:id",
  ];

  const needsSubscription = matchRoute(subscriptionRequiredRoutes);
  if (needsSubscription && !isSubscribed) {
    const planeUrl = new URL("/plane", request.url);
    return NextResponse.redirect(planeUrl);
  }

  // ✅ Allow access
  return NextResponse.next();
}

// 👇 Choose which routes to apply middleware on
export const config = {
  matcher: [
    "/chat",
    "/plane",
    "/myBusiness/:path*",
    "/faqs",
    "/profilePage",
    "/addnewbusiness",
    "/subscription",
    "/buyer-contact-info",
    "/business-details-with-form/:path*",
  ],
};
