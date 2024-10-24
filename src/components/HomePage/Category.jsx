import { category } from "@/lib/category";
import Title from "../shared/Title";

import CategoryCard from "../card/CategoryCard";

const Category = () => {
  console.log(category);
  return (
    <div className="mb-11">
      <div className="ml-4">
        <Title head={"category"} title={"Browse By Category"}></Title>
        <div></div>
      </div>

      <div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2">
          {category.map((item, index) => (
            <CategoryCard key={index} item={item}></CategoryCard>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Category;
