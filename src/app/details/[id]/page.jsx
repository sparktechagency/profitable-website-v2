"use client";

import React, { useEffect, useState } from "react";
import img1 from "../../../../public/Home/mm.png";
import img2 from "../../../../public/Home/nn.png";
import img3 from "../../../../public/Home/oo.png";

import Link from "next/link"; // Replace react-router-dom Link
import { useParams } from "next/navigation"; // Replace react-router-dom useParams

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Lock } from "lucide-react";
import Image from "next/image"; // Import Image from next/image
import { useGetProfileQuery } from "@/redux/Api/userApi";
import {
  useGetSingleIterestUserQuery,
  useUpdateSoldMutation,
} from "@/redux/Api/businessApi";
import { imageUrl } from "@/redux/Api/baseApi";
import { Navigate } from "@/components/shared/Navigate";
import { toast } from "react-toastify";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const libraries = ["places"];
const mapContainerStyle = { width: "100%", height: "300px" };

const MyBusinessDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  const user =
    typeof window !== "undefined" && typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  const hasAccessToken =
    typeof window !== "undefined" && typeof localStorage !== "undefined"
      ? localStorage.getItem("accessToken")
      : null;

  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();
  const price = profileData?.data?.subscriptionPlanPrice;
  const role = profileData?.data?.role;
  const { id: businessId } = useParams(); // Use Next.js useParams

  const { data: businessDetails } = useGetSingleIterestUserQuery({
    businessId,
  });

  console.log("first", businessDetails);
  const [updateSold] = useUpdateSoldMutation();
  const checkUserId = profileData?.data?._id;
  const checkBusinessId = businessDetails?.data?.business?.user;


  const handleSoldToggle = async () => {
    try {
      const newStatus = !businessDetails?.data?.business?.isSold;
      const res = await updateSold({ businessId: businessDetails?.data?.business?._id, isSold: newStatus }).unwrap();
      toast.success(res?.message);
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };

  const [center, setCenter] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;

    const city = businessDetails?.data?.business?.city || "";
    const state = businessDetails?.data?.business?.state || "";
    const country = businessDetails?.data?.business?.countryName || "";

    const address = `${city}, ${state}, ${country}`.trim();
    if (!address) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const loc = results[0].geometry.location;
        setCenter({ lat: loc.lat(), lng: loc.lng() });
      }
    });
  }, [businessDetails, isLoaded]);

  if (!isLoaded) return <div>Loading map...</div>;
  console.log(businessDetails?.data?.business?.businessRole);
  return (
    <div className="container m-auto pb-20 lg:mt-8 mt-16 lg:px-0 px-4">
      <Navigate title={businessDetails?.data?.business?.title}></Navigate>
      {role &&
        role !== "Buyer" &&
        role !== "Investor" &&
        hasAccessToken &&
        checkUserId === checkBusinessId && (
          <div className="lg:grid grid-cols-3 gap-9">
            <div className="bg-white shadow p-4 text-center rounded">
              <div className="flex justify-center">
                <Image
                  src={img1}
                  alt="Total Views"
                  width={48} // Estimated width based on typical icon size
                  height={48} // Estimated height
                  className="object-contain"
                />
              </div>
              <h1 className="font-semibold text-3xl py-3">Total Views</h1>
              <h2 className="text-[#22C55E] font-semibold text-xl">
                {businessDetails?.data?.business?.views ?? "0"}
              </h2>
            </div>

            <div className="bg-white shadow p-4 text-center rounded">
              <div className="flex justify-center">
                <Image
                  src={img2}
                  alt="Total Interests"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h1 className="font-semibold text-3xl py-3">Total Interests</h1>
              <h2 className="text-[#22C55E] font-semibold text-xl">
                {businessDetails?.data?.interestedUsers?.length ?? "0"}
              </h2>
            </div>

            <div className="bg-white shadow p-4 text-center rounded">
              <div className="flex justify-center">
                <Image
                  src={img3}
                  alt="Inquiries Received"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h1 className="font-semibold text-3xl py-3">
                Inquiries Received
              </h1>
              <h2 className="text-[#22C55E] font-semibold text-xl">
                {businessDetails?.data?.interestedUsers?.length ?? "0"}
              </h2>
            </div>
          </div>
        )}

      <div className="lg:grid grid-cols-2 gap-4 pt-11">
        <div>
          <Image
            className="w-full object-cover"
            src={`${imageUrl}/Uploads/business-image/${businessDetails?.data?.business?.image}`}
            alt="main business"
            width={600} // Estimated width based on full-width image
            height={400} // Estimated height
            priority={true} // Prioritize as main image
          />
        </div>

        <div className="mt-5 lg:mt-0">
          <button className="bg-[#C1E1FF] border border-[#0091FF] px-2 py-2 rounded">
            {businessDetails?.data?.business?.businessRole === "Francise Seller"
              ? "Franchise Seller"
              : businessDetails?.data?.business?.businessRole}
          </button>
          <h1 className="text-2xl text-[#0091FF]">
            {businessDetails?.data?.business?.title}
          </h1>
          <div className="space-y-2 my-3">
            <p>
              <span className="font-semibold">Business Type:</span>{" "}
              {businessDetails?.data?.business?.businessType}
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              {businessDetails?.data?.business?.askingPrice}
            </p>
            <p>
              <span className="font-semibold">Business Type:</span>{" "}
              {businessDetails?.data?.business?.businessType}
            </p>
            <p>
              <span className="font-semibold">Country:</span>{" "}
              {businessDetails?.data?.business?.countryName},{" "}
              {businessDetails?.data?.business?.city},{" "}
              {businessDetails?.data?.business?.state}
            </p>
            <p>
              <span className="font-semibold">Reason:</span>{" "}
              {businessDetails?.data?.business?.reason}
            </p>
            <p>
              <span className="font-semibold">Ownership Type:</span>{" "}
              {businessDetails?.data?.business?.ownerShipType}
            </p>
          </div>
          <div className="flex gap-5">
            {role &&
              role !== "Buyer" &&
              role !== "Investor" &&
              hasAccessToken &&
              checkUserId === checkBusinessId && (
                <Link
                  href={`/EditNewBusiness/${businessDetails?.data?.business?._id}`}
                >
                  <button className="bg-[#0091FF] px-4 py-1 rounded text-white">
                    Edit {businessDetails?.data?.business?.title}
                  </button>
                </Link>
              )}

            {role &&
              hasAccessToken &&
              checkUserId === checkBusinessId &&
              role !== "Buyer" &&
              role !== "Investor" && (
                <div className="relative inline-block">
                  {(price === 0 || price === null) &&
                    !(role === "Business Idea Lister" && price === 0) && (
                      <div className="absolute -top-3 -right-3 bg-white rounded-full shadow p-1">
                        <Lock className="w-4 h-4 text-gray-400" />
                      </div>
                    )}

                  <button
                    onClick={() => {
                      if (
                        (price === 0 || price === null) &&
                        !(role === "Business Idea Lister" && price === 0)
                      ) {
                        toast.error("Please buy subscription");
                      } else {
                        window.location.href = `/interestBuyer/${businessDetails?.data?.business?.slug}`;
                      }
                    }}
                    className={`px-4 py-1 rounded text-white transition-all ${
                      (price === 0 || price === null) &&
                      !(role === "Business Idea Lister" && price === 0)
                        ? "bg-gray-400 hover:bg-gray-400"
                        : "bg-[#0091FF] hover:bg-[#0091FF]"
                    }`}
                  >
                    {role === "Business Idea Lister"
                      ? "Interested Investor"
                      : "Interested Buyers"}
                  </button>
                </div>
              )}

            {role &&
              hasAccessToken &&
              checkUserId !== checkBusinessId &&
              ((role === "Buyer" &&
                businessDetails?.data?.business?.businessRole !==
                  "Business Idea Lister") ||
                role === "Investor" ||
                (role === "Broker" &&
                  businessDetails?.data?.business?.businessRole !==
                    "Business Idea Lister")) && (
                <Link
                  href={`/business-details-with-form/${businessDetails?.data?.business?.slug}`}
                >
                  <button className="bg-[#0091FF] hover:bg-[#0091FF] text-white px-5 py-1 rounded">
                    Interested
                  </button>
                </Link>
              )}

            {role &&
              hasAccessToken &&
              checkUserId !== checkBusinessId &&
              ((role === "Buyer" &&
                businessDetails?.data?.business?.businessRole !==
                  "Business Idea Lister") ||
                role === "Investor" ||
                (role === "Broker" &&
                  businessDetails?.data?.business?.businessRole !==
                    "Business Idea Lister")) && (
                <div className="relative inline-block">
                  {(price === 0 || price === null) && (
                    <div className="absolute -top-3 -right-3 bg-white rounded-full shadow p-1">
                      <Lock className="w-4 h-4 text-gray-400" />
                    </div>
                  )}

                  {price === 0 || price === null ? (
                    <button
                      onClick={() => toast.error("Please buy subscription")}
                      className="px-5 py-1 rounded text-white bg-gray-400 cursor-not-allowed"
                    >
                      Contact
                    </button>
                  ) : (
                    // ✅ Active button (normal link)
                    <Link
                      href={`/buyer-contact-info/${businessDetails?.data?.business?.user}`}
                    >
                      <button className="px-5 py-1 rounded text-white bg-[#0091FF] hover:bg-[#0077DD] transition-all">
                        Contact
                      </button>
                    </Link>
                  )}
                </div>
              )}

            {role &&
              role !== "Buyer" &&
              role !== "Investor" &&
              hasAccessToken &&
              checkUserId === checkBusinessId && (
                <button
                  onClick={handleSoldToggle}
                  className="bg-[#0091FF] hover:bg-[#0091FF] text-white px-5 py-1 rounded"
                >
                  {businessDetails?.data?.business?.isSold ? "Unsold" : "Sold"}
                </button>
              )}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <span className="font-semibold">Description: </span>
        <div
          dangerouslySetInnerHTML={{
            __html: businessDetails?.data?.business?.description,
          }}
          className="text-gray-700"
        />
      </div>

      <h1 className="text-[#0091FF] font-bold text-3xl mt-9">Location</h1>
      <p className="mb-4">{businessDetails?.data?.business?.countryName}</p>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={center || { lat: 23.8103, lng: 90.4125 }}
      >
        {center && <Marker position={center} />}
      </GoogleMap>
    </div>
  );
};

export default MyBusinessDetails;
