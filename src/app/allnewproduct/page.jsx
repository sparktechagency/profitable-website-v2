"use client";
import NewArivalCard from "@/components/card/NewArivalCard";
import Title from "@/components/shared/Title";
import { newarrival } from "@/lib/newArival";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const itemsPerPage = 8;

  const totalPages = Math.ceil(newarrival.length / itemsPerPage);

  // Category filter function
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Price filter function
  const handlePriceChange = (range) => {
    setSelectedPriceRange(range);
  };

  // Filtered data based on category and price
  const filteredItems = newarrival.filter((item) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(item.category);
    
    let priceMatch = true;
    if (selectedPriceRange === "low") priceMatch = item.price < 20;
    else if (selectedPriceRange === "mid") priceMatch = item.price >= 20 && item.price <= 60;
    else if (selectedPriceRange === "high") priceMatch = item.price > 60;

    return categoryMatch && priceMatch;
  });

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
      <div className="md:flex justify-between">
        <div className="ml-4">
          <Title head={"This Month"} title={"New Arrival"}></Title>
        </div>
        <div className="md:mt-20 md:mr-4">
          <label className="input input-bordered bg-neutral-200 border-none rounded-sm flex items-center md:w-[500px] m-4 md:m-0 h-12">
            <input
              type="text"
              className="grow text-sm"
              placeholder="What are you looking for?"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-100 "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-4">
        <div className="col-span-1 mt-4 m-4">
          <h1 className="bg-[#fe6201] text-white p-2 text-3xl rounded-md">
            Filters
          </h1>
          <div className="flex justify-between py-5">
            <h3 className="text-[#fe6201]  font-semibold">Category</h3>
            <h1>
              <IoIosArrowDown />
            </h1>
          </div>
          <div>
            {[
              "Woman's Fashion",
              "Men's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby's & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((category) => (
              <div className="flex gap-4" key={category}>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      onChange={() => handleCategoryChange(category)}
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">{category}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between py-6">
              <h3 className="text-[#fe6201]  font-semibold">Price</h3>
              <h1>
                <IoIosArrowDown />
              </h1>
            </div>
            <div className="flex">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    onChange={() => handlePriceChange("low")}
                    className="radio rounded-md border border-black"
                  />
                  <span className="label-text pl-3">Value Under $20</span>
                </label>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    onChange={() => handlePriceChange("mid")}
                    className="radio rounded-md border border-black"
                  />
                  <span className="label-text pl-3">Mid-range $20-$60</span>
                </label>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    onChange={() => handlePriceChange("high")}
                    className="radio rounded-md border border-black"
                  />
                  <span className="label-text pl-3">High-end $60 & Above</span>
                </label>
              </div>
            </div>
            <label className="input mt-6 input-bordered border-black rounded-md flex items-center gap-2">
                <input type="text" className="grow" placeholder="Enter budget" />
                <h1>$</h1>
              </label>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {currentItems.map((item) => (
              <NewArivalCard key={item.id} item={item}></NewArivalCard>
            ))}
          </div>
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
