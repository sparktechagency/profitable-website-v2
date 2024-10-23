"use client";
import NewArivalCard from "@/components/card/NewArivalCard";
import Title from "@/components/shared/Title";
import { newarrival } from "@/lib/newArival";
import React, { useState } from "react";

export default function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

 
  const totalPages = Math.ceil(newarrival.length / itemsPerPage);


  const currentItems = newarrival.slice(
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
      <div className="flex justify-between">
        <Title head={"This Month"} title={"New Arrival"}></Title>
        <div className="mt-20 mr-4">
          <label className="input input-bordered bg-neutral-200 border-none rounded-sm flex items-center w-[500px] h-12">
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
      <div className="grid grid-cols-4">
        <div className="col-span-1 mt-4">
          <h1 className="bg-[#fe6201] text-white p-2 text-3xl rounded-md">
            Filters
          </h1>
          <div className="flex justify-between py-5">
            <h3 className="text-[#fe6201]  font-semibold">Category</h3>
            <h1>⬇️</h1>
          </div>
          <div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
            </div>
            <div className="flex gap-4 ">
            <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                      
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
            </div>
            <div>
              <div className="flex justify-between py-6">
                <h3 className="text-[#fe6201]  font-semibold">Category</h3>
                <h1>⬇️</h1>
              </div>
              <div className="flex ">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                     
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-4 ">
              <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                     
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-4 ">
              <div className="form-control">
                  <label className="label cursor-pointer">
                    
                    <input
                      type="checkbox"
                     
                      className="checkbox rounded-md border border-black"
                    />
                    <span className="label-text pl-3">Remember me</span>
                  </label>
                </div>
              </div>
              <label className="input mt-6 input-bordered border-black rounded-md flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <h1>$</h1>
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3">
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
