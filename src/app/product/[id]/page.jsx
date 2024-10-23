import { product } from "@/lib/product";

const page = ({params}) => {
  const{title, id} = product.find(item => item.id == params.id)
 
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default page;