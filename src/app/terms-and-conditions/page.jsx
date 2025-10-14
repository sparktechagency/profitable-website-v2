import React, { Suspense } from "react";

import TermsAndConditionsPage from "./TermsAndCondition";

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
