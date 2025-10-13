"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Spin, message } from "antd";
import { useGetProfileQuery } from "@/redux/Api/userApi"; // adjust path
import toast from "react-hot-toast"; // Use toast for consistent UX

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: profileData, isLoading } = useGetProfileQuery(undefined, {
    skip: !localStorage.getItem("accessToken"), // Skip query if no token
  });

  const [isClient, setIsClient] = useState(false);
  const [token, setToken] = useState(null);

  // Set token and client flag on mount
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setToken(accessToken);
    setIsClient(true);
  }, []);

  // Define protected routes and their restrictions
  const routeConfig = [
    {
      paths: ["/chat", "/addnewbusiness", "/subscription", "/business-details-with-form/:id"],
      requiresToken: true,
      requiresSubscription: true,
    },
    {
      paths: ["/myBusiness/details", "/faqs", "/profilePage", "/buyer-contact-info"],
      requiresToken: true,
      requiresSubscription: false,
    },
    {
      paths: ["/addnewbusiness"],
      restrictedRoles: ["Investor"],
    },
    {
      paths: ["/plane"],
      requiresToken: false, // Allow access to /plane without token
      requiresSubscription: false,
    },
  ];

  // Helper function to check if a path matches the current pathname
  const isPathMatch = (path) => {
    if (path.includes(":id")) {
      const regex = new RegExp(`^${path.replace(":id", "[^/]+")}$`);
      return regex.test(pathname);
    }
    return path === pathname;
  };

  // Find matching route configuration
  const matchedRoute = routeConfig.find((config) =>
    config.paths.some((path) => isPathMatch(path))
  );

  // Redirect logic
  useEffect(() => {
    if (!isClient || isLoading) return; // Wait for client-side rendering and profile data

    if (matchedRoute) {
      // Token check
      if (matchedRoute.requiresToken && !token) {
        toast.error("Please login first");
        router.push("/auth/login");
        return;
      }

      // Role-based restriction
      if (
        matchedRoute.restrictedRoles &&
        matchedRoute.restrictedRoles.includes(profileData?.data?.role)
      ) {
        toast.error(
          `Investors are not allowed to access ${pathname.split("/").pop()}`
        );
        router.push("/auth/login");
        return;
      }

      // Subscription check
      if (matchedRoute.requiresSubscription && !profileData?.data?.subscriptionPlan) {
        toast.error("You need a subscription to access this page");
        router.push("/plane");
        return;
      }
    }
  }, [isClient, token, profileData, isLoading, pathname, router, matchedRoute]);

  // Show loading spinner during initial load or profile fetch
  if (!isClient || isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  // Render children if all checks pass
  return token || !matchedRoute?.requiresToken ? children : null;
}