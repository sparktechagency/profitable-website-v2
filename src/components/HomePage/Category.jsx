
import { category } from "@/lib/category";
import Title from "../shared/Title";

import CategoryCard from "../card/CategoryCard";


const Category = () => {

  console.log(category)
  return (
    <div className="mb-11">
      <Title head={'category'} title={'Browse By Category'}></Title>

      <div className="grid grid-cols-5">
       {
        category.map((item,index)=> 
       <CategoryCard key={index} item={item}></CategoryCard>
       )
       }
      </div>
    </div>
  );
};

export default Category;