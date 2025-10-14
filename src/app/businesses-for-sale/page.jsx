import { Suspense } from "react";
import Business from "./Business";



export default function Home() {
  return (
  <Suspense fallback={<p>loading..</p>}>
    <Business/>
  </Suspense>
  );
}
