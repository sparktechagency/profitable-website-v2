"use client";

import { review } from "@/lib/review";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function About() {
  const splideRef = useRef(null);

  const handlePrevClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("<"); 
    }
  };

  const handleNextClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">"); 
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
     
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> / <span>About</span>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh...
          </p>
          <p className="text-gray-600">
            Exclusive has more than 1 million products to offer, growing very fast...
          </p>
        </div>
        <div className="m-8">
          <Image src='/img/about.png' className="w-full" width={900} height={900} alt="img"/>
        </div>
      </div>

    
      <div>
        <div className="flex justify-between">
          <h1 className="mt-20 mb-7 md:text-4xl text-xl">Happy Customers Says</h1>
          <div className="flex gap-2 mt-20 mr-4">
            <div onClick={handlePrevClick}>
              <div className="bg-neutral-300 hover:bg-orange-600 hover:text-white rounded-full text-2xl p-2 text-gray-500 cursor-pointer">
                <FaArrowLeft />
              </div>
            </div>
            <div onClick={handleNextClick}>
              <div className="bg-neutral-300 hover:bg-orange-600 hover:text-white rounded-full text-2xl p-2 text-gray-500 cursor-pointer">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        {/* Review Slider */}
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 2,
            gap: "1rem",
            arrows: false,
            pagination: false,
            breakpoints: {
              768: { perPage: 1 },
            },
          }}
          aria-label="Customer Reviews"
        >
          {review.map((item, index) => (
            <SplideSlide key={index}>
              <div className="border rounded-2xl m-3 p-5">
                <div className="flex justify-center mb-2">
                  <Image className="bg-red-100 rounded-full" src={item.img} width={50} height={50} alt="img" />
                </div>
                <p className="text-center">{item.client_name}</p>
                <h1 className="text-3xl text-rose-300"><BiSolidQuoteAltRight /></h1>
                <p className="p-2 px-5">{item.description}</p>
                <h1 className="flex justify-end text-3xl text-rose-300">
                  <BiSolidQuoteAltRight />
                </h1>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
