import { Suspense } from "react";
import Business from "./Business";


export const metadata = {
  title: "Most Trusted Platform to Buy or Sell a Business Online | PBFS ",
  description:
    "Explore top businesses for sale across the Globe with PBFS. Buy or sell a profitable business easily with expert business brokers. Find trusted opportunities near you today. ",
  keywords: [
    "Best website to sell a business",
    "Profitable Business For Sale Dubai",
    "Business for sale UAE",
    "Buy business in Dubai",
  ],
  alternates: {  canonical: "https://profitablebusinessesforsale.com/"
  },
};
export default function Home() {
  return (
  <Suspense fallback={<p>loading..</p>}>
    <Business/>
  </Suspense>
  );
}
