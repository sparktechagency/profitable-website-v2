import Category from "./Category";
import Hero from "./Hero";
import NewProduct from "./NewProduct";
import OurProduct from "./OurProduct";


export default function HomePage() {
  return (
    <>
    <Hero></Hero><hr />
    <Category></Category><hr />
    <NewProduct></NewProduct>
    <OurProduct></OurProduct>
    </>
  );
}
