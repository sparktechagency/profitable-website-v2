import React, { Suspense } from "react";
import MainChat from "./MainChat";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<p>loading..</p>}>
        <MainChat></MainChat>
      </Suspense>
    </div>
  );
};

export default Page;
