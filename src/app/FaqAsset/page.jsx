import React, { Suspense } from "react";

import FaqAssetSeller from "./FaqAssest";

export const metadata = {
  title: "PFBS FAQ’s of Business Assets for Sale & Buy Directory",
  description:
    "Explore PFBS’s Business assets for sale directory: your go-to FAQ & resource hub to buy or sell digital and physical business assets effortlessly",
};

const Page = () => {
  return (
    <div>
      <Suspense fallback={<p>loading..</p>}>
        <FaqAssetSeller></FaqAssetSeller>
      </Suspense>
    </div>
  );
};

export default Page;
