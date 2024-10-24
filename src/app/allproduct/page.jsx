
"use client"
import ProductCard from "@/components/card/ProductCard";
import { product } from "@/lib/product";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the number of pages
  const totalPages = Math.ceil(product.length / itemsPerPage);

  // Get current items for the page
  const currentItems = product.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers for Next and Prev buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <div className="my-11">
        <img className="w-full" src="/img/productBanner.png" />
      </div>

      <div className="flex justify-center">
        <div className="flex">
          <div className="flex items-center mr-3">
            <div className="bg-blue-300 w-[60px] rounded-lg p-2">
              <img className="w-[60px]" src="/img/productLogo.png" />
            </div>
          </div>
          <div>
            <h1 className="md:text-5xl text-2xl text-orange-600">Game Haven</h1>
            <p className="flex text-[#FFAD33] my-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="-mt-1 ml-2 text-neutral-500">(65)</span>
            </p>
            <h3 className="text-xl text-gray-500">
              805 Positive Seller Ratings
            </h3>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold pb-8 pl-4 pt-11">All Product</h1>
        <div className="flex mx-4 justify-between"></div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {currentItems.map((item) => (
              <ProductCard key={item.id} item={item}></ProductCard>
            ))}
        </div>
        <div className="">
        <div className="join mt-7 flex justify-start items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="btn bg-white shadow-none border-none"
            >
              PREV
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <input
                key={index}
                className={`join-item btn bg-white rounded-md border-none shadow-none btn-square ${
                  currentPage === index + 1 ? "btn-active" : ""
                }`}
                type="radio"
                name="options"
                aria-label={`${index + 1}`}
                checked={currentPage === index + 1}
                onChange={() => setCurrentPage(index + 1)}
              />
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="btn bg-white border-none shadow-none"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
