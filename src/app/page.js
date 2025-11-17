

import { Suspense } from "react";



import Hero from "@/components/HomePage/Hero";
import BusinessCard from "@/components/HomePage/BusinessCard";
import Category from "@/components/HomePage/Category";
import Country from "@/components/HomePage/Country";
import Review from "@/components/HomePage/Review";
import SimpleProcess from "@/components/HomePage/SimpleProcess";

export const metadata = {
  title: "Most Trusted Platform to Buy or Sell a Business Online | PBFS  ",
  description:
    " Explore top businesses for sale across the Globe with PBFS. Buy or sell a profitable business easily with expert business brokers. Find trusted opportunities near you today. ",
  keywords: [
    "Best website to sell a business, Profitable Business For Sale Dubai",
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
