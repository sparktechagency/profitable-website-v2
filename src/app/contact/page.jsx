import React from "react";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
const page = () => {
  return (
    <div>
      <div className="text-sm text-gray-500 mb-6 mt-7 ml-3">
        <a href="/" className="hover:underline">
          Home
        </a>{" "}
        / <span>Contact</span>
      </div>

      <div className="md:max-w-[800px] m-auto md:my-64 p-4">
        <div className="grid md:grid-cols-2 ">
          <div className="md:border-r">
          <div className="flex">
            <div className="">
              <FiPhone className="bg-[#fe6201] text-4xl p-2 rounded-full text-white" />
            </div>
            <h3 className="mt-2 ml-3">Call To Us</h3>
          </div>
          <p className="py-3">We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          </div>
          <div className="md:pl-32 mt-4 md:mt-0">
            <div className="flex">
              <div className="">
                <FiPhone className="bg-[#fe6201] text-4xl p-2 rounded-full text-white" />
              </div>
              <h3 className="mt-2 ml-3">Call To Us</h3>
            </div>
            <p className="py-3">We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
