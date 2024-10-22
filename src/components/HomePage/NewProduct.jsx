import { product } from "@/lib/product";
import Title from "../shared/Title";
import CategoryCard from "../card/CategoryCard";
import ProductCard from "../card/ProductCard";


const NewProduct = () => {
  
  return (
    <div>
      <Title head={'This Month'} title={"New Arrival"}></Title>
      <div className="grid grid-cols-4"> 
      {
        product.map((item)=> <ProductCard item={item}></ProductCard>)
      }
      </div>
    </div>
  );
};

export default NewProduct;