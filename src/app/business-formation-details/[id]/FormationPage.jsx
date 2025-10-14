"use client";

import { useEffect } from "react";
import { Tag } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";

import InterenstFormation from "@/components/AllBusinessFilter/InterenstFormation";
import { useGetSingleFormatQuery } from "@/redux/Api/businessApi";
import { imageUrl } from "@/redux/Api/baseApi";


const FormationPage = () => {
  const { id: formationId } = useParams();

  const {
    data: singleData,
    isLoading,
    isError,
  } = useGetSingleFormatQuery({ formationId });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError || !singleData?.data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Failed to load formation details.</p>
      </div>
    );
  }

  const formation = singleData?.data;

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 w-full px-5 pb-10">
      {/* Left Side (Details) */}
      <div className="p-5 space-y-8 w-full md:w-1/2">
        <div className="flex flex-col gap-5 mt-11">
          {/* Image Section */}
          <div className="md:flex gap-5 items-center">
            <div className="relative w-[100px] h-[100px]">
              <Image
                src={`${imageUrl}/uploads/formation-image/${formation?.image}`}
                alt={formation?.title}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="space-y-3 mt-6 md:mt-0">
              <h1 className="text-3xl font-bold text-[#0091FF]">
                {formation?.title}
              </h1>
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-5">
            <p className="text-gray-700 leading-relaxed">
              {formation?.detail}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Interest Form) */}
      <div className="w-full mt-11 md:w-1/2">
        <InterenstFormation formationId={formationId} />
      </div>
    </div>
  );
};

export default FormationPage;
