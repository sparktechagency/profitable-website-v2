"use client";

import React, { useEffect, useState } from "react";
import img1 from "../../../../public/Home/mm.png";
import img2 from "../../../../public/Home/nn.png";
import img3 from "../../../../public/Home/oo.png";

import Link from "next/link";
import { useParams } from "next/navigation";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Lock } from "lucide-react";
import Image from "next/image";
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

  const { data: profileData } = useGetProfileQuery();

  const price = profileData?.data?.subscriptionPlanPrice;
  const role = profileData?.data?.role;

  const { id: businessId } = useParams();

  const { data: businessDetails } = useGetSingleIterestUserQuery({
    businessId,
  });

  const [updateSold] = useUpdateSoldMutation();

  const checkUserId = profileData?.data?._id;
  const checkBusinessId = businessDetails?.data?.business?.user;

  /* =========================
        SEO META TAG UPDATE
  ========================== */

  useEffect(() => {
    if (businessDetails?.data?.business) {
      const business = businessDetails.data.business;

      document.title =
        business.metaTitle || business.title || "Business Details";

      let metaDescription = document.querySelector('meta[name="description"]');

      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }

      metaDescription.setAttribute(
        "content",
        business.metaDescription ||
          business.description?.replace(/<[^>]*>/g, "").substring(0, 160) ||
          "Explore profitable business opportunities"
      );

      if (business.metaKeywords) {
        let metaKeywords = document.querySelector('meta[name="keywords"]');

        if (!metaKeywords) {
          metaKeywords = document.createElement("meta");
          metaKeywords.name = "keywords";
          document.head.appendChild(metaKeywords);
        }

        metaKeywords.setAttribute(
          "content",
          Array.isArray(business.metaKeywords)
            ? business.metaKeywords.join(", ")
            : business.metaKeywords
        );
      }

      const updateMetaTag = (property, content) => {
        let metaTag = document.querySelector(`meta[property="${property}"]`);

        if (!metaTag) {
          metaTag = document.createElement("meta");
          metaTag.setAttribute("property", property);
          document.head.appendChild(metaTag);
        }

        metaTag.setAttribute("content", content);
      };

      const imageFull = `${imageUrl}/Uploads/business-image/${business.image}`;

      updateMetaTag("og:title", business.metaTitle || business.title);
      updateMetaTag(
        "og:description",
        business.metaDescription ||
          business.description?.replace(/<[^>]*>/g, "").substring(0, 160)
      );
      updateMetaTag("og:image", imageFull);
      updateMetaTag("og:type", "website");

      updateMetaTag("twitter:title", business.metaTitle || business.title);
      updateMetaTag(
        "twitter:description",
        business.metaDescription ||
          business.description?.replace(/<[^>]*>/g, "").substring(0, 160)
      );
      updateMetaTag("twitter:image", imageFull);
      updateMetaTag("twitter:card", "summary_large_image");
    }
  }, [businessDetails]);

  /* =========================
        SOLD BUTTON
  ========================== */

  const handleSoldToggle = async () => {
    try {
      const newStatus = !businessDetails?.data?.business?.isSold;

      const res = await updateSold({
        businessId: businessDetails?.data?.business?._id,
        isSold: newStatus,
      }).unwrap();

      toast.success(res?.message);
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };

  /* =========================
        GOOGLE MAP
  ========================== */

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

        setCenter({
          lat: loc.lat(),
          lng: loc.lng(),
        });
      }
    });
  }, [businessDetails, isLoaded]);

  if (!isLoaded) return <div>Loading map...</div>;

  const business = businessDetails?.data?.business;

  return (
    <div className="container m-auto pb-20 lg:mt-8 mt-16 lg:px-0 px-4">

      <Navigate title={business?.title}></Navigate>

      {role &&
        role !== "Buyer" &&
        role !== "Investor" &&
        hasAccessToken &&
        checkUserId === checkBusinessId && (
          <div className="lg:grid grid-cols-3 gap-9">

            <div className="bg-white shadow p-4 text-center rounded">
              <div className="flex justify-center">
                <Image src={img1} alt="Total Views" width={48} height={48} />
              </div>
              <h1 className="font-semibold text-3xl py-3">Total Views</h1>
              <h2 className="text-[#22C55E] font-semibold text-xl">
                {businessDetails?.data?.business?.views ?? "0"}
              </h2>
            </div>

            <div className="bg-white shadow p-4 text-center rounded">
              <div className="flex justify-center">
                <Image src={img2} alt="Total Interests" width={48} height={48} />
              </div>
              <h1 className="font-semibold text-3xl py-3">Total Interests</h1>
              <h2 className="text-[#22C55E] font-semibold text-xl">
                {businessDetails?.data?.interestedUsers?.length ?? "0"}
              </h2>
            </div>

            <div className="bg-white shadow p-4 text-center rounded">
              <div className="flex justify-center">
                <Image src={img3} alt="Inquiries Received" width={48} height={48} />
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

      {/* Image + Info */}
      <div className="lg:grid grid-cols-2 gap-4 pt-11">

        <div>
          <Image
            className="w-full object-cover"
            src={`${imageUrl}/Uploads/business-image/${business?.image}`}
            alt="main business"
            width={600}
            height={400}
            priority
          />
        </div>

        <div className="mt-5 lg:mt-0">

          <button className="bg-[#C1E1FF] border border-[#0091FF] px-2 py-2 rounded">
            {business?.businessRole === "Francise Seller"
              ? "Franchise Seller"
              : business?.businessRole}
          </button>

          <h1 className="text-2xl text-[#0091FF]">{business?.title}</h1>

          <div className="space-y-2 my-3">

            <p>
              <span className="font-semibold">Business Type:</span>{" "}
              {business?.businessType}
            </p>

            <p>
              <span className="font-semibold">Price:</span>{" "}
              {business?.askingPrice}
            </p>

            <p>
              <span className="font-semibold">Country:</span>{" "}
              {business?.countryName}, {business?.city}, {business?.state}
            </p>

            <p>
              <span className="font-semibold">Reason:</span>{" "}
              {business?.reason}
            </p>

            <p>
              <span className="font-semibold">Ownership Type:</span>{" "}
              {business?.ownerShipType}
            </p>

          </div>

        </div>

      </div>

      {/* Description */}
      <div className="mt-3">
        <span className="font-semibold">Description: </span>
        <div
          dangerouslySetInnerHTML={{
            __html: business?.description,
          }}
          className="text-gray-700"
        />
      </div>

      {/* Map */}
      <h1 className="text-[#0091FF] font-bold text-3xl mt-9">Location</h1>

      <p className="mb-4">{business?.countryName}</p>

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
