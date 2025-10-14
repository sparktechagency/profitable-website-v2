import React, { Suspense } from "react";
import FaqBuyer from "./FaqBuyer";

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
