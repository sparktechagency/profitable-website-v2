"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWish from "@/components/useCart/useWish";
import { MdDeleteOutline } from "react-icons/md";
import Title from "@/components/shared/Title";
import { product } from "@/lib/product";
import { CiHeart } from "react-icons/ci";
export default function Wish() {
  const { wishItems } = useWish();
  
  

  

  return (
    <div className="p-4 mt-16">
      <div className="flex justify-between px-4">
      <h1 className="  mb-4">Wishlist ({wishItems.length})</h1>
      <button className="border border-orange-600 px-7 py-2 text-orange-600">Move All To Bag</button>
      </div>
      {wishItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            {wishItems.map((item) => (
              
                <div key={item.id} className="m-4">
                  <div className="relative">
                    <div className="bg-[#DFE1E3] rounded-sm flex items-center justify-center w-full h-[240px] group">
                      <Link href={`/product/${item.id}`}>
                        <Image
                          className="w-[150px] transition-transform duration-300 ease-in-out"
                          height={120}
                          width={100}
                          src={item.img}
                          alt={item.title}
                        />
                      </Link>
                      <div
                        
                        className="absolute top-3 right-3 bg-white p-1 rounded-full text-black text-xl"
                      >
                        <MdDeleteOutline />
                      </div>

                      <div className="absolute bottom-0 w-full transform opacity-100 transition-opacity duration-300 ease-in-out">
                        <button
                          className="bg-[#fe6201] text-white px-3 py-2 rounded-b-sm w-full"
                         
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <h1 className="pt-2">{item.title}</h1>
                  <div className="flex">
                    <h1 className="text-lg text-[#fe6201] py-1">{item.price}</h1>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      )}
      <div>
        <div className="flex justify-between px-4">
        <div className="flex">
        <Title  ></Title> <span className="md:mt-16 mt-6 text-lg">Just For You</span>
        </div>
        <div>
        <Link href={'/allproduct'}><button className="border md:mt-11 mt-4 border-orange-600 px-7 py-2 text-orange-600">See All</button></Link>
        </div>
        </div>
        <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {product.slice(0,4).map((item) => (
          <div key={item.id} className="m-4">
          <div className="relative">
            <div className="bg-[#DFE1E3] rounded-sm flex items-center justify-center w-full h-[240px] group">
              <Link href={`/product/${item.id}`}>
                <Image
                  className="w-[150px] transition-transform duration-300 ease-in-out"
                  height={120}
                  width={100}
                  src={item.img}
                  alt={item.title}
                />
              </Link>
              <div
                
                className="absolute top-3 right-3 bg-white p-1 rounded-full text-black text-xl"
              >
                <CiHeart />
              </div>

              <div className="absolute bottom-0 w-full transform opacity-100 transition-opacity duration-300 ease-in-out">
                <button
                  className="bg-[#fe6201] text-white px-3 py-2 rounded-b-sm w-full"
                 
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <h1 className="pt-2">{item.title}</h1>
          <div className="flex">
            <h1 className="text-lg text-[#fe6201] py-1">{item.price}</h1>
          </div>
        </div>
        ))}
        
      </div>
        </div>
      </div>
    </div>
  );
}
