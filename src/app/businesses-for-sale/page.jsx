import { Suspense } from "react";
import Business from "./Business";


export const metadata = {
  title: "PBFS – Best Website to Sell a Business in Dubai, UAE",
  description:
    "Explore Our Profitable Businesses For Sale in Dubai, UAE. Buy or sell your business confidently on the best website for profitable business deals.",
  keywords: [
    "Best website to sell a business",
    "Profitable Business For Sale Dubai",
    "Business for sale UAE",
    "Buy business in Dubai",
  ],
};
export default function Home() {
  return (
  <Suspense fallback={<p>loading..</p>}>
    <Business/>
  </Suspense>
  );
}
