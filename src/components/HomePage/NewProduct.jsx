
import Title from "../shared/Title";

import ProductCard from "../card/ProductCard";
import { newarrival } from "@/lib/newArival";
import NewArivalCard from "../card/NewArivalCard";
import Link from "next/link";

const NewProduct = () => {
  return (
    <div>
      <div className="flex mx-4 justify-between">
        <Title head={"This Month"} title={"New Arrival"}></Title>
        <div>
          <Link href={'/allnewproduct'}><button className="bg-[#fe6201] px-8 mt-24  py-2 text-white rounded-sm">View All</button></Link>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {newarrival.slice(0,4).map((item) => (
          <NewArivalCard item={item}></NewArivalCard>
        ))}
      </div>
    </div>
  );
};

export default NewProduct;
