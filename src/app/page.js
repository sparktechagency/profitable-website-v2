

import { Suspense } from "react";



import Hero from "@/components/HomePage/Hero";
import BusinessCard from "@/components/HomePage/BusinessCard";
import Category from "@/components/HomePage/Category";
import Country from "@/components/HomePage/Country";
import Review from "@/components/HomePage/Review";
import SimpleProcess from "@/components/HomePage/SimpleProcess";

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
    <main className="min-h-screen">
      {/* Hero Section */}
 

      <Suspense fallback={<div />}> 
        <Hero></Hero>
      </Suspense>
      <div className="container m-auto lg:px-4 px-4">
        <Suspense fallback={<div />}> 
          <BusinessCard></BusinessCard>
        </Suspense>
        <Suspense fallback={<div />}> 
          <Category></Category>
        </Suspense>
        <Suspense fallback={<div />}> 
          <Country></Country>
        </Suspense>
        <Suspense fallback={<div />}> 
          <SimpleProcess></SimpleProcess>
        </Suspense>
        <Suspense fallback={<div />}> 
          <Review></Review>
        </Suspense>
      </div>
    </main>
  );
}
