import Image from "next/image";

const CategoryCard = ({ item }) => {
  const { title, img, id } = item;
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

      <h1 className="text-center text-[#fe6201]   pt-2">
        {title}
      </h1>
    </div>
  );
};

export default CategoryCard;
