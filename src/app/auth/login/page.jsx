
import React, { Suspense } from "react";
import LoginPage from "./LoginPage";

const page = () => {
  return (
    <div>
      <Suspense fallback={<p>loading..</p>}>
        <LoginPage></LoginPage>
      </Suspense>
    </div>
  );
};

export default page;
