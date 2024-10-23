import { category } from "@/lib/category";
import Title from "../shared/Title";

import CategoryCard from "../card/CategoryCard";

const Category = () => {
  console.log(category);
  return (
    <div className="mb-11">
      <div>
        <Title head={"category"} title={"Browse By Category"}></Title>
        <div></div>
      </div>

      <div>
        <div className="grid grid-cols-5">
          {category.map((item, index) => (
            <CategoryCard key={index} item={item}></CategoryCard>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="bg-black text-white px-5 py-1">Prev</button>
          <button className="bg-black text-white px-5 py-1">next</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
