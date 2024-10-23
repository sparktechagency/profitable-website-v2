import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

const NewArivalCard = ({ item }) => {
  const { title, img, id, price } = item;
  return (
    <div className="m-4">
        <div className="relative">
        <Link href={`/product/${id}`}>
          <div className="bg-[#DFE1E3] rounded-sm flex items-center justify-center w-full h-[240px] group">
          <Image
              className="w-[150px] transition-transform duration-300 ease-in-out"
              height={120}
              width={100}
              src={img}
              alt={title}
            />
            <div className="absolute top-3 right-3 bg-white p-1 rounded-full text-black text-xl">
              <CiHeart />
              
            </div>

            <div className="absolute bottom-0 w-full transform opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <button className="bg-[#fe6201] text-white px-3 py-2 rounded-b-sm w-full">
                Add to Cart
              </button>
            </div>
          </div></Link>
        </div>

        <h1 className="pt-2">{title}</h1>
        <h1 className="text-lg text-[#fe6201] py-1">{price}</h1>
        <p className="flex text-[#FFAD33]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="-mt-1 ml-2 text-neutral-500">(65)</span>
        </p>
      </div>
    
  );
};

export default NewArivalCard;