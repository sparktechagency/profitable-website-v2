"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import backCard from "../../../public/Home/ii.png";
import {
  useGetAllBusinessHomeQuery,
  useGetAllBusinessMostViewQuery,
  useGetAllFeturesBusinessQuery,
  useGetMostViewBusinessIdeaQuery,
} from "@/redux/Api/businessApi";
import { useGetProfileQuery } from "@/redux/Api/userApi";
import { imageUrl } from "@/redux/Api/baseApi";

// Splide Slider Import
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const BusinessCard = () => {
  const searchParams = useSearchParams();
  const selectedCountry = searchParams.get("country");

  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();
  const role = profileData?.data?.role;
  const id = profileData?.data?._id;

  const { data: interestData } = useGetAllFeturesBusinessQuery({
    businessRole: "Seller",
    country: selectedCountry,
  });

  const { data: interestDataa } = useGetAllFeturesBusinessQuery({
    businessRole: "Asset Seller",
    country: selectedCountry,
  });

  const { data: interestDataaa } = useGetAllFeturesBusinessQuery({
    businessRole: "Francise Seller",
    country: selectedCountry,
  });

  const { data: interestDataaaa } = useGetMostViewBusinessIdeaQuery({
    country: selectedCountry,
  });

  const {
    data: businessData,
    isLoading,
    isError,
  } = useGetAllBusinessHomeQuery();

  const { data: MostbusinessData } = useGetAllBusinessMostViewQuery({
    userId: id,
    role: role,
    country: selectedCountry,
  });

  const mostBusiness = MostbusinessData?.data || [];

  const isBrowser = typeof window !== "undefined" && typeof localStorage !== "undefined";
  const hasAccessToken = isBrowser ? localStorage.getItem("accessToken") : null;

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load businesses
      </p>
    );

  const business = businessData?.data || [];

  // Common Splide options for all sections
  const splideOptions = {
    type: "slide",
    perPage: 4,
    perMove: 1,
    gap: "1.5rem",
    pagination: false,
    arrows: true,
    breakpoints: {
      1280: { perPage: 3 },
      1024: { perPage: 3 },
      768: { perPage: 2 },
      640: { perPage: 1 },
    },
  };

  return (
    <div className="lg:mt-16 mt-11">
      {/*================ Popular Businesses Section ================*/}
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4"></div>
            <div>
              <h2 className="md:text-2xl text-lg font-bold text-blue-500">
                Popular Businesses
              </h2>
              <p className="text-gray-600 text-sm md:max-w-3xl">
                Buy a business that’s built for success. Explore the most
                profitable and popular businesses for sale in the UAE, USA, UK,
                Australia, India, and beyond.
              </p>
            </div>
          </div>
          <Link
            href="/search"
            className="text-blue-500 hover:underline text-sm md:text-lg"
          >
            Explore More
          </Link>
        </div>

        <Splide options={splideOptions} aria-label="Popular Businesses Slider">
          {mostBusiness?.length > 0 ? (
            mostBusiness.map((business) => (
              <SplideSlide className='border border-[#0091FF] bg-cover bg-center rounded' key={business._id} style={{ backgroundImage: `url(${backCard.src})` }}>
                <div
                  className=" "
                  
                >
                  <div className="h-48 relative">
                    <Image
                      src={
                        business?.image?.length > 0
                          ? `${imageUrl}/Uploads/business-image/${business?.image}`
                          : "/fallback-image.jpg"
                      }
                      alt={business?.title}
                      className="w-full h-full object-cover rounded-t"
                      width={400}
                      height={192}
                      priority={false}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {business?.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{business?.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">{business?.category}</span> ||{" "}
                      <span className="text-[#D97706]">{business?.subCategory}</span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">{business?.askingPrice}</span>
                    </p>
                    <Link href={`/details/${business?.slug}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            ))
          ) : (
            <SplideSlide>
              <p className="text-center text-gray-500 py-10">No data found</p>
            </SplideSlide>
          )}
        </Splide>
      </div>

      {/*================ Featured Businesses Section ================*/}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4"></div>
            <div>
              <h2 className="md:text-2xl text-lg font-bold text-blue-500">
                Featured Businesses
              </h2>
              <p className="text-gray-600 text-sm max-w-3xl">
                Discover verified and high-performing businesses for sale across
                multiple industries.
              </p>
            </div>
          </div>
          <Link
            href="/search"
            className="text-blue-500 hover:underline text-sm md:text-lg"
          >
            Explore More
          </Link>
        </div>

        <Splide options={splideOptions} aria-label="Featured Businesses Slider">
          {interestData?.data?.length > 0 ? (
            interestData.data.map((business) => (
              <SplideSlide className="border border-[#0091FF] bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${backCard.src})` }} key={business._id}>
                <div
                  
                >
                  <div className="h-48 relative">
                    <Image
                      src={`${imageUrl}/Uploads/business-image/${business?.image}`}
                      alt={business?.title}
                      className="w-full h-full object-cover rounded-t"
                      width={400}
                      height={192}
                      priority={false}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {business?.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{business?.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">{business?.category}</span> ||{" "}
                      <span className="text-[#D97706]">{business?.subCategory}</span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">{business?.askingPrice}</span>
                    </p>
                    <Link href={`/details/${business?.slug}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            ))
          ) : (
            <SplideSlide>
              <p className="text-center text-gray-500 py-10">No data found</p>
            </SplideSlide>
          )}
        </Splide>
      </div>

      {/*================ Featured Business Assets Section ================*/}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4"></div>
            <div>
              <h2 className="md:text-2xl text-lg font-bold text-blue-500">
                Featured Business Assets
              </h2>
              <p className="text-gray-600 text-sm max-w-3xl">
                Find business assets for sale including equipment, licenses,
                brands, and intellectual property.
              </p>
            </div>
          </div>
          <Link
            href="/search?businessRole=Asset Seller"
            className="text-blue-500 hover:underline text-sm md:text-lg"
          >
            Explore More
          </Link>
        </div>

        <Splide options={splideOptions} aria-label="Business Assets Slider">
          {interestDataa?.data?.length > 0 ? (
            interestDataa.data.map((business) => (
              <SplideSlide  className="border border-[#0091FF] bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${backCard.src})` }} key={business._id}>
                <div
                 
                >
                  <div className="h-48 relative">
                    <Image
                      src={`${imageUrl}/Uploads/business-image/${business?.image}`}
                      alt={business?.title}
                      className="w-full h-full object-cover rounded-t"
                      width={400}
                      height={192}
                      priority={false}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {business?.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{business?.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">{business?.category}</span> ||{" "}
                      <span className="text-[#D97706]">{business?.subCategory}</span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">{business?.askingPrice}</span>
                    </p>
                    <Link href={`/details/${business?.slug}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            ))
          ) : (
            <SplideSlide>
              <p className="text-center text-gray-500 py-10">No data found</p>
            </SplideSlide>
          )}
        </Splide>
      </div>

      {/*================ Featured Franchises Section ================*/}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4"></div>
            <div>
              <h2 className="md:text-2xl text-lg font-bold text-blue-500">
                Featured Franchises
              </h2>
              <p className="text-gray-600 text-sm max-w-3xl">
                Explore franchise opportunities from trusted global brands.
              </p>
            </div>
          </div>
          <Link
            href="/search?businessRole=Francise Seller"
            className="text-blue-500 hover:underline text-sm md:text-lg"
          >
            Explore More
          </Link>
        </div>

        <Splide options={splideOptions} aria-label="Franchises Slider">
          {interestDataaa?.data?.length > 0 ? (
            interestDataaa.data.map((business) => (
              <SplideSlide  className="border border-[#0091FF] bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${backCard.src})` }} key={business._id}>
                <div
                 
                >
                  <div className="h-48 relative">
                    <Image
                      src={`${imageUrl}/Uploads/business-image/${business?.image}`}
                      alt={business?.title}
                      className="w-full h-full object-cover rounded-t"
                      width={400}
                      height={192}
                      priority={false}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {business?.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{business?.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">{business?.category}</span> ||{" "}
                      <span className="text-[#D97706]">{business?.subCategory}</span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">{business?.askingPrice}</span>
                    </p>
                    <Link href={`/details/${business?.slug}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            ))
          ) : (
            <SplideSlide>
              <p className="text-center text-gray-500 py-10">No data found</p>
            </SplideSlide>
          )}
        </Splide>
      </div>

      {/*================ Business Ideas (Investor Only) Section ================*/}
      {(!hasAccessToken || (hasAccessToken && role === "Investor")) && (
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4"></div>
              <div>
                <h2 className="md:text-2xl text-lg font-bold text-blue-500">
                  Business Ideas (Investor - Only Listings)
                </h2>
                <p className="text-gray-600 text-sm max-w-3xl">
                  Browse innovative business ideas and startup concepts submitted by aspiring entrepreneurs.
                </p>
              </div>
            </div>
            <Link
              href="/search?businessRole=Business Idea Lister"
              className="text-blue-500 hover:underline text-sm md:text-lg"
            >
              Explore More
            </Link>
          </div>

          <Splide options={splideOptions} aria-label="Business Ideas Slider">
            {interestDataaaa?.data?.length > 0 ? (
              interestDataaaa.data.map((business) => (
                <SplideSlide  className="border border-[#0091FF] bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${backCard.src})` }} key={business._id}>
                  <div
                   
                  >
                    <div className="h-48 relative">
                      <Image
                        src={`${imageUrl}/Uploads/business-image/${business?.image}`}
                        alt={business?.title}
                        className="w-full h-full object-cover rounded-t"
                        width={400}
                        height={192}
                        priority={false}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {business?.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{business?.location}</p>
                      <div className="mb-2">
                        <span className="text-blue-500">{business?.category}</span> ||{" "}
                        <span className="text-[#D97706]">{business?.subCategory}</span>
                      </div>
                      <p className="text-gray-800 mb-4">
                        Starting from{" "}
                        <span className="font-semibold">{business?.askingPrice}</span>
                      </p>
                      <Link href={`/details/${business?.slug}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </SplideSlide>
              ))
            ) : (
              <SplideSlide>
                <p className="text-center text-gray-500 py-10">No data found</p>
              </SplideSlide>
            )}
          </Splide>
        </div>
      )}
    </div>
  );
};

export default BusinessCard;