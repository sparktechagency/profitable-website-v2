"use client"
import { product } from "@/lib/product";
import { FaStar } from "react-icons/fa";
import { review } from "@/lib/review";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
const Page = () => {
  const sizes = ["XS", "M", "L", "XL", "XXL"];
  const { id } = useParams();

  const [selectedSize, setSelectedSize] = useState("");

  const productItem = product.find((item) => item.id === Number(id));

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const [quantity, setQuantity] = useState(0);
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const {
    title,
    img_gallery,
    img,
    category,
    price,
    description,
    brand_name,
    product_description,
  } = productItem;

  return (
    <div className="m-3 lg:m-0">
      <div className="text-sm text-gray-500 mb-6 md:mt-11">
        <Link href="/" className="hover:underline">Account</Link> / <span>Men&apos;s Fashion</span> / <span className="text-black">{title}</span>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-8 lg:mt-20">
        <div className="lg:col-span-2">
        <div className="flex">
          <div>
            {img_gallery.map((imgg, index) => (
              <div key={index} className="bg-slate-300 m-2">
                <Image
                  src={imgg}
                  className="lg:h-[119px] h-[90px]"
                  width={200}
                  height={50}
                  alt={`Gallery Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="bg-slate-300 m-2 lg:h-[500px] w-full flex items-center justify-center">
            <Image
              className="w-[200px]"
              src={img}
              width={400}
              height={50}
              alt="Main Image"
            />
          </div>
        </div>
        </div>
        <div className="lg:col-span-1 my-6 lg:my-0">
          <h1 className="text-xl font-semibold">{title}</h1>
          <h1 className="text-orange-600 text-xl ">{category}</h1>
          <h1 className="text-[20px] font-medium">${price}</h1>
          <p>{description}</p>
          <p>{brand_name}</p> <hr className="border border-black" />
          <h1 className="flex text-xl mt-6">
            Size:{" "}
            <div className="size-buttons ml-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`ml-3 border px-3 py-1 rounded-md text-sm ${
                    selectedSize === size
                      ? "bg-orange-500 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </h1>
          <div className="flex  mt-8">
            <button onClick={decrementQuantity}
                disabled={quantity === 0} className="w-[40px] hover:bg-[#fe6201] py-[7px] hover:text-white  border border-black">
              -
            </button>{" "}
            {/* <h1>{quantity}</h1> */}
            <input type="button" className="bg-white w-[50px] text-black border-y border-black text-center " value={quantity}/>
            <button onClick={incrementQuantity} className="w-[40px] hover:bg-[#fe6201] hover:text-white  border border-black">
              +
            </button>
            <button className="bg-[#fe6201] mx-3 px-4 text-white border-none">
              Bye Now
            </button>
            <div className="flex gap-3">
              <CiHeart className="text-3xl border w-[70px] h-[40px]" />
              <PiShoppingCartLight className="text-3xl border w-[70px] h-[40px] " />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-11">
        <button className="bg-[#fe6201] px-20 py-2 rounded-md text-white mb-2">
          Description
        </button>
        <hr />

        <div className="">
          <div className="py-8">
            <p className="">{product_description}</p>
            <p className="mt-2">
              Symbol of lightness and delicacy, the hummingbird evokes curiosity
              and joy. Studio Design&apos; PolyFaune collection features classic
              products with colorful patterns, inspired by traditional Japanese
              origami. To wear with a chino or jeans. The sublimation textile
              printing process provides an exceptional color rendering and a
              color, guaranteed over time.
            </p>
          </div>
          <button className="bg-[#fe6201] rounded-md px-20 py-2 text-white mb-2">
            Ratings & Reviews
          </button>
        </div>
        <hr />
      </div>
      <div>
        {review.map((revie, index) => (
          
            <div key={index}>
              <div  className="py-4 pt-8">
            <div className="flex">
              <Image
                className="w-[50px] rounded-full bg-red-100"
                src={revie.img}
                width={200}
                height={20}
                alt="Main Image"
              />

              <div className="ml-4">
                <h2 className="text-lg">{revie.client_name}</h2>
                <p className="flex text-[#FFAD33]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div>
              {description}
            </div>
            </div><hr />
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Page;
