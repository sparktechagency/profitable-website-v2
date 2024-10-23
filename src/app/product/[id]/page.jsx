import { product } from "@/lib/product";
import Image from "next/image";

const page = async ({ params }) => {
  
  const { id } = await params; 
  const productItem = product.find((item) => item.id == id);


  const { title, img_gallery, img } = productItem;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div>
          {img_gallery.map((imgg, index) => (
            <div key={index}>
              <Image
                src={imgg}
                width={100}
                height={50}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div>
          <Image src={img} width={300} height={50} alt="Main Image" />
        </div>
      </div>
    </div>
  );
};

export default page;
