import React, { Suspense } from "react";
import LoginPage from "./LoginPage";

// ✅ Add this metadata export
export const metadata = {
  title: "Business Opportunities in Dubai, UAE – PBFS Login Portal",
  description:
    "Access the latest Business Opportunities in Dubai with PBFS. Login to explore profitable businesses, franchises, and investment ventures easily and securely.",
  alternates: {
    canonical: "https://profitablebusinessesforsale.com/auth/login"
  },
};


const page = () => {
  return (
    <div>
      <Suspense fallback={<p>loading..</p>}>
        <LoginPage />
      </Suspense>
    </div>
  );
};

export default page;
