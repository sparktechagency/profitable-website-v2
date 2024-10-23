import { product } from "@/lib/product";
import Title from "../shared/Title";
import ProductCard from "../card/ProductCard";
import Link from "next/link";


const OurProduct = () => {
  return (
    <div>
      <div className="flex mx-4 justify-between">
        <Title head={"This Month"} title={"New Arrival"}></Title>
        <div>
          <button className="bg-[#fe6201] px-8 mt-24  py-2 text-white rounded-sm">View All</button>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {product.slice(0,8).map((item) => (
          <ProductCard item={item}></ProductCard>
        ))}
        
      </div>
      <div className="flex justify-center">
      <Link href={'/allproduct'}><button className="bg-[#fe6201] px-6 mt-5   py-2 text-white rounded-sm">View All Product</button></Link>
      </div>
    </div>
  );
};

export default OurProduct;