'use client'
import React from "react";
import { ArrowRight } from "lucide-react";
import { useGetAllFormateQuery } from "@/redux/Api/businessApi";
import Link from "next/link";
import { imageUrl } from "@/redux/Api/baseApi";
import Image from "next/image";
import dayjs from "dayjs";

const BusinessFormationPage = () => {
  const { data: getAllFormat, isLoading, isError } = useGetAllFormateQuery();
  console.log(getAllFormat);

  // ✅ Function to create SEO-friendly slugs
  const createSlug = (title) => {
    return title
      ?.toLowerCase()
      .replace(/[^\w\s-]/g, "") // remove special characters
      .trim()
      .replace(/\s+/g, "-"); // replace spaces with hyphens
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError || !getAllFormat?.data)
    return <p>Failed to load business formation data.</p>;

  return (
    <div className="container mx-auto px-5 pt-20 pb-10">
      {/* Header Section */}
      <div className="relative flex flex-col items-start gap-5 pl-5 mb-5">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#22C55E] z-[1] rounded-r-full"></div>
        <div className="ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0091FF] mb-6 leading-tight">
            Explore Expert Business Insights & Growth Strategies
          </h1>
          <p className="text-lg md:text-xl text-[#000000] leading-relaxed max-w-2xl">
            Read blogs that guide you through buying, selling, and growing profitable businesses. Discover tips, trends, and success stories from global entrepreneurs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {getAllFormat?.data?.map((service) => {
            const slug = createSlug(service?.title);
            return (
              <div
                key={service?._id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl overflow-hidden border border-gray-100 h-full flex flex-col"
              >
                {/* Service Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${imageUrl}/Uploads/formation-image/${service?.image}`}
                    alt={service?.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {service?.title}
                    </h2>

                    {/* Date & Time Display */}
                    <p className="text-gray-400 text-sm mb-2">
                      {dayjs(service?.createdAt).format("MMMM D, YYYY, h:mm A")}
                    </p>

                    {/* <div
                      dangerouslySetInnerHTML={{ __html: service?.detail }}
                    /> */}
                  </div>

                  <Link href={`/blog/${service?.slug}`}>
                    <button className="mt-auto w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-lg">
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessFormationPage;
