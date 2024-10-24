"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


const Page = () => {

  const inputRefs = useRef([]);

  // Handle OTP input field focus move
  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < 5) {
      // Move to the next input field if it's not the last one
      inputRefs.current[index + 1].focus();
    } else if (e.target.value.length === 1 && index === 5) {
      // Optionally, submit the form if on the last input
    }
  };
  
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-white via-orange-50 to-white">
    <div className="flex w-3/4 max-w-5xl rounded-lg overflow-hidden">
      
      {/* Left Side - Image/Illustration */}
      <div className="w-1/2 p-8 flex justify-center items-center">
        <div className="text-center">
          <div className=" text-white ">
            <Image className='w-[400px]' src={'/img/verify.png'} width={500} height={200} alt='login'/>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 mt-14">
        <h2 className="text-xl  my-11  font-bold text-gray-800 ">Verify Otp</h2>
        <p className="my-6">We&apos;ll send a verification code to your email. Check your inbox and enter the code here.</p>
        
        <form className="space-y-6">
            <div className="grid grid-cols-6 gap-4">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength="1"
                    className="bg-[#00000000] text-3xl text-center border rounded border-black h-[70px] focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onInput={(e) => handleInputChange(e, i)}
                    ref={(el) => (inputRefs.current[i] = el)} // Store input refs
                  />
                ))}
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-400">Didn&apos;t receive code?</p>
              <p className="font-semibold">Resend</p>
            </div>

            <Link href={'/signIn/newpass'}><button
              type="submit"
              className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
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