import { review } from "@/lib/review";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> / <span>About</span>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p className="text-gray-600">
            Exclusive has more than 1 million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumers.
          </p>
        </div>

        {/* Image Section */}
        <div className="m-8">
          <Image src='/img/about.png' className="w-full" width={900} height={900} alt="img"/>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center p-6 py-16 bg-white border rounded hover:bg-[#fe6201] hover:text-white">
        <Image src='/img/a.png' className="" width={70} height={70} alt="img"/>
          <div className="text-2xl font-bold  ">10.5k</div>
          <div className="">Sellers active on our site</div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 hover:bg-[#fe6201] hover:text-white py-16 bg-white border rounded">
        <Image src='/img/d.png' className="" width={70} height={70} alt="img"/>
          <div className="text-2xl font-bold ">33k</div>
          <div className="">Monthly Product Sale</div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 hover:bg-[#fe6201] hover:text-white py-16 bg-white border rounded">
        <Image src='/img/c.png' className="" width={70} height={70} alt="img"/>
          <div className="text-2xl font-bold ">45.5k</div>
          <div className="">Customers active on our site</div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 py-16 hover:bg-[#fe6201] hover:text-white bg-white border rounded">
        <Image src='/img/d.png' className="" width={70} height={70} alt="img"/>
          <div className="text-2xl font-bold ">25k</div>
          <div className="">Annual gross sale on our site</div>
        </div>
      </div>
      <div>
        <h1 className="mt-20 mb-7 text-4xl">Happy Customers Says</h1>
        <div>
          <div className="md:grid md:grid-cols-2 ">
            {
              review.slice(0,2).map((item)=> <>
              <div className="border rounded-2xl m-3 p-5">
                <div>
                <div className="flex justify-center mb-2">
                <Image className="bg-red-100 rounded-full" src={item.img} width={50} height={50} alt="img"/>
                </div>
                <p className="text-center">{item.client_name}</p>
                </div>
                <h1 className="text-3xl text-rose-300"><BiSolidQuoteAltRight /></h1>
                <p className="p-2 px-5">{item.description}</p>
                <h1 className="flex justify-end text-3xl text-rose-300">
                <BiSolidQuoteAltRight />
                </h1>
              </div>
              </>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
