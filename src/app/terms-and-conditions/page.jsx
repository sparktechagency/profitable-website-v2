import React, { Suspense } from "react";

import TermsAndConditionsPage from "./TermsAndCondition";

export const metadata = {
  title: "Terms and Conditions : Profitable Business For Sale",
  description:
    "Review PBFS’s Terms & Conditions: your rights, obligations and guidelines when using our site for franchise & business listings.",
};

const Page = () => {
  return (
    <div>
      <Suspense fallback={<p>loading..</p>}>
        <TermsAndConditionsPage></TermsAndConditionsPage>
      </Suspense>
    </div>
  );
};

export default Page;
