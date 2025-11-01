import React, { Suspense } from "react";
import FaqBuyer from "./FaqBuyer";


export const metadata = {
  title: "Buy an Existing Business with PBFS – Buyer FAQs",
  description:
    "Know all queries when buy a profitable business using PBFS. Access our comprehensive FAQs to guide your purchase, from valuation to closing the deal",
};


const Page = () => {

  return (
    <div>
      <Suspense fallback={<p>loading..</p>}>
        <FaqBuyer></FaqBuyer>
      </Suspense>
    </div>
  );
};

export default Page;
