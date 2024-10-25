"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


const Page = () => {

  const inputRefs = useRef([]);


  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < 5) {
  
      inputRefs.current[index + 1].focus();
    } else if (e.target.value.length === 1 && index === 5) {
     
    }
  };
  
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-white via-orange-50 to-white">
    <div className="w-full max-w-md p-8 ">
      
      
    

    
      <div className="md:w-1/2 md:mt-14">
        <h2 className="text-2xl  my-4  font-bold text-gray-800 ">Verify your account</h2>
        <p className="my-1">We will send you one time password this</p>
        <p>email adress.</p>
        <p className="text-center my-3">(foisalrk2@gmail.com)</p>
        
        <form className="space-y-6">
            <div className="grid grid-cols-6 gap-4">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength="1"
                    className="bg-[#00000000] text-3xl text-center border rounded border-black md:h-[70px] h-[50px] focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onInput={(e) => handleInputChange(e, i)}
                    ref={(el) => (inputRefs.current[i] = el)} 
                  />
                ))}
            </div>
           

            <Link href={'/'}><button
              type="submit"
              className="w-full py-2 mt-5 px-4 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Submit
            </button></Link>
          </form>
      </div>
    </div>
  </div>
  );
};

export default Page;