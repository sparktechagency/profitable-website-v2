"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useGetTopCategtoryQuery } from "@/redux/Api/businessApi";
import { imageUrl } from "@/redux/Api/baseApi";

const Category = () => {
  const { data: categorie, isLoading, isError } = useGetTopCategtoryQuery();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Failed to load categories.</p>;

  return (
    <div>
      <div className="flex justify-between items-center mt-20">
        <div className="flex items-center">
          <div className="w-[5px] h-12 rounded-r bg-[#22C55E] mr-4 "></div>
          <div>
            <h2 className="md:text-2xl text-lg font-bold text-blue-500">
              Top Rated Category
            </h2>
            <p className="text-gray-600 text-sm max-w-3xl">
              Buy a business that’s built for success. Explore the most
              profitable and popular businesses for sale in the UAE, USA, UK,
              Australia, India, and beyond, curated for entrepreneurs and
              investors looking for ready-to-run opportunities.
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

      <div className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorie?.data?.map((category) => (
            <div
              key={category?._id}
              className="block group relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-[280px] w-full">
                <Image
                  src={`${imageUrl}/uploads/category-image/${category?.categoryImage}`}
                  alt={`${category?.category} category`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transition-all duration-500 transform translate-y-16 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-1">
                    {category?.category}
                  </h3>
                  <p className="text-sm font-medium mb-3">
                    {category?.totalBusinesses} Business Available
                  </p>
                  <p className="text-sm opacity-90">
                    Explore profitable listings and business opportunities in
                    this category.
                  </p>
                  <Link href={`/search?category=${category?.category}`}>
                    <button className="bg-[#2766FF] w-9 flex justify-center h-9 items-center rounded-full mt-2">
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
