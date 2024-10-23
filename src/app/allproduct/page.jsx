
import ProductCard from "@/components/card/ProductCard";
import { product } from "@/lib/product";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
export default function page() {
  return (
    <div>
      <div>
        <img className="w-full" src="/img/productBanner.png" />
      </div>

      <div>
        <div className="bg-blue-300 w-[70px] rounded-lg p-2">
          <img className="w-[70px]" src="/img/productLogo.png" />
        </div>
        <div>
          <h1>Game Haven</h1>
          <p className="flex text-[#FFAD33]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="-mt-1 ml-2 text-neutral-500">(65)</span>
        </p>
        <h3>805 Positive Seller Ratings</h3>
        </div>
      </div>
      <div>
        <h1>All Product</h1>
        <div className="flex mx-4 justify-between">
        
        
      </div>
      <div className="grid grid-cols-4">
        {product.map((item) => (
          <ProductCard item={item}></ProductCard>
        ))}
        
      </div>
      <div className="flex justify-center">
      <Link href={'/allproduct'}><button className="bg-[#fe6201] px-6 mt-5   py-2 text-white rounded-sm">View All Product</button></Link>
      </div>
      </div>
    </div>
  );
}
