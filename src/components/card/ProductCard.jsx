"use client"; 
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import useCart from "../useCart/useCart";
import useWish from "../useCart/useWish";
import StarRatings from "react-star-ratings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
  const { title, img, id, price, rating } = item;

  // Use the custom hook
  const { addToCart } = useCart();
  const { addToWish } = useWish();

  const handleAddToCart = () => {
    const product = { title, img, price, id };
    addToCart(product); 
    toast.success(`${title} added to the cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleAddToWish = () => {
    const product = { title, img, price, id };
    addToWish(product); 
    toast.success(`${title} added to wishlist!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="m-4">
      <div className="relative">
        <div className="bg-[#DFE1E3] rounded-sm flex items-center justify-center w-full h-[240px] group">
          <Link href={`/product/${id}`}>
            <Image
              className="w-[150px] transition-transform duration-300 ease-in-out"
              height={120}
              width={100}
              src={img}
              alt={title}
            />
          </Link>
          <div onClick={handleAddToWish} className="absolute top-3 right-3 bg-white p-1 rounded-full text-black text-xl">
            <CiHeart />
          </div>

          <div className="absolute bottom-0 w-full transform opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <button
              className="bg-[#fe6201] text-white px-3 py-2 rounded-b-sm w-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <h1 className="pt-2">{title}</h1>
      <div className="flex">
        <h1 className="text-lg text-[#fe6201] py-1">{price}</h1>
        <div className="flex text-[#FFAD33] mt-2 ml-3">
          <div className="-mt-1">
            <StarRatings
              rating={rating}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="3px"
              isSelectable={false}
            />
          </div>
          <span className=" ml-2 text-neutral-500">(65)</span>
        </div>
      </div>

      {/* Add ToastContainer at the end */}
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
