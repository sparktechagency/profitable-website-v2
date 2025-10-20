import React, { Suspense } from "react";
import ChooseRole from "./ChooseRole";

// ✅ Add SEO metadata here
export const metadata = {
  title: "Choose Your Role to get Start a Business - PBFS",
  description:
    "Connect with top Business Brokers in Dubai through PBFS. List, buy, or sell profitable businesses with confidence and ease today.",
};

const Page = () => {
  return (
    <div>
      <Suspense fallback={<p>loading..</p>}>
        <ChooseRole />
      </Suspense>
    </div>
  );
};

export default Page;
