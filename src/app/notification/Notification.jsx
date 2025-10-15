
'use client'
import React, { useEffect } from "react";


import { X } from "lucide-react";
import dayjs from "dayjs";

import { message } from "antd";
import { useDeleteNotificationMutation, useGetNotificationQuery, useUpdateNotificationMutation } from "@/redux/Api/metaApi";
import { useGetProfileQuery } from "@/redux/Api/userApi";
import { Navigate } from "@/components/shared/Navigate";
import { toast } from "react-toastify";


const Notification = () => {
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: notificationData, isLoading } = useGetNotificationQuery();
  const [updateNotificationRead] = useUpdateNotificationMutation();
  const [deleteNotification] = useDeleteNotificationMutation();
  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();
  const role = profileData?.data?.role;
  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  
  const handleUpdate = async (id) => {
    await updateNotificationRead({ notificationId: id, role }).unwrap();
  };
  const handleDelete = async (id) => {
    try {
      const res = await deleteNotification({
        notificationId: id,
        role,
      }).unwrap();
      toast.success(res?.message);
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };


  return (
    <div className="container mx-auto lg:mt-8 mt-16 lg:px-0 px-4 pb-20 ">
      <div className="mt-20 md:mt-8 mb-5">
        <Navigate title={"Notification"} />
      </div>

      <div className="bg-white shadow rounded-lg divide-y">
        {notificationData?.data?.map((item) => (
          <div
            key={item._id}
            className="flex items-start gap-3 hover:bg-gray-50 transition relative"
          >
            {/* Content */}
            <div
              onClick={() => handleUpdate(item._id)}
              className={`flex-1 p-4 cursor-pointer ${
                item?.isRead ? "" : "bg-gray-100"
              }`}
            >
              <h3
                className={`text-lg break-all whitespace-normal ${
                  item?.isRead
                    ? "font-normal text-gray-800"
                    : "font-bold text-black"
                }`}
              >
                {item?.title}
              </h3>
              <p className="break-all whitespace-normal">{item?.message}</p>

              <p className="text-xs text-gray-400 mt-1">
                {dayjs(item?.createdAt).format("YYYY-MM-DD hh:mm A")}
              </p>
            </div>

            {/* Delete Button */}
            <button
              className="absolute top-2 right-2 h-6 w-6 text-gray-500 hover:text-red-500"
              onClick={() => handleDelete(item?._id)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}

        {notificationData?.data?.length === 0 && (
          <p className="text-center p-5 text-gray-500">
            No notifications found
          </p>
        )}
      </div>
    </div>
  );
};

export default Notification;
