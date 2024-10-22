import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const { title, img, id ,price} = item;
  return (

    <div className="m-4">
      <div className=" ">
        <div className="bg-[#DFE1E3] rounded-sm flex items-center justify-center w-full h-[250px]">
          <Image
            className="w-[150px]"
            height={120}
            width={200}
            src={img}
            alt={title}
          />
        </div>
      </div>
      

      <h1 className=" pt-2">
        {title}
      </h1>

      <h1 className="text-lg text-[#fe6201] py-1">{price}</h1>
      <p className="flex text-[#FFAD33] "><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span className="-mt-1 ml-2 text-neutral-500">(65)</span></p>
    </div>
  );
};

export default ProductCard;