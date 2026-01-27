import { baseApi } from "./baseApi";

const businessApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getCount: builder.query({
    //     query: () => {
    //         return {
    //             url: `/meta/get-dashboard-meta-data`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    getFaq: builder.query({
      query: ({ userRole }) => {
        return {
          url: `/faq/get-all-faq?role=${userRole}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

<<<<<<< HEAD

=======
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
    // getAllBusiness: builder.query({
    //     query: () => {
    //         return {
    //             url: `business/all-business`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    // getUserGrowth: builder.query({
    //     query: (year) => {
    //         return {
    //             url: `/meta/user-chart-data?year=${year}`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    // getFaq: builder.query({
    //     query: () => {
    //         return {
    //             url: `/manage/get-faq`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    addFaq: builder.mutation({
      query: (data) => {
        return {
          url: "/faq/create-faq",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateFaq: builder.mutation({
      query: ({ formData, id }) => {
        return {
          url: `/faq/update-faq?faqId=${id}`,
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    deleteFaq: builder.mutation({
      query: (id) => {
        return {
          url: `/faq/delete-faq?faqId=${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getTermsConditions: builder.query({
      query: () => {
        return {
          url: "/home/get-terms-condition",
          method: "GET",
        };
      },
      providesTags: ["terms"],
    }),

<<<<<<< HEAD

  getRefundPolicy: builder.query({
=======
    getRefundPolicy: builder.query({
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
      query: () => {
        return {
          url: "/home/get-refund-policy",
          method: "GET",
        };
      },
      providesTags: ["terms"],
    }),

<<<<<<< HEAD
  


=======
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
    postSubscriber: builder.mutation({
      query: (email) => {
        return {
          url: "/subscriber/create-subscriber",
          method: "POST",
          body: email,
        };
      },
      invalidatesTags: ["terms"],
    }),

    postSchedule: builder.mutation({
      query: (data) => {
        return {
          url: "/schedule/make-schedule",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

    getPrivecy: builder.query({
      query: () => {
        return {
          url: "home/get-privacy-policy",
          method: "GET",
        };
      },
      providesTags: ["terms"],
    }),

    getUnreadNotification: builder.query({
      query: () => {
        return {
          url: "/notification/get-unread-notification",
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getNotification: builder.query({
      query: () => {
        return {
          url: "/notification/get-all-notification",
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

<<<<<<< HEAD
     updateNotification: builder.mutation({
=======
    updateNotification: builder.mutation({
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
      query: ({ role, notificationId }) => {
        return {
          url: `/notification/update-notification?role=${role}&notificationId=${notificationId}`,
          method: "PATCH",
<<<<<<< HEAD
          
=======
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    deleteNotification: builder.mutation({
      query: ({ role, notificationId }) => {
        return {
          url: `/notification/delete-notification?role=${role}&notificationId=${notificationId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    postChat: builder.mutation({
      query: (data) => {
        return {
          url: "/chat/post-chat",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

    // postPrivecy: builder.mutation({
    //     query: (data) => {
    //         return {
    //             url: "/manage/add-privacy-policy",
    //             method: "POST",
    //             body: data,
    //         };
    //     },
    //     invalidatesTags: ["terms"],
    // }),
  }),
});

export const {
  useGetFaqQuery,
  usePostScheduleMutation,
  useGetTermsConditionsQuery,
  useGetPrivecyQuery,
  useAddFaqMutation,
  usePostSubscriberMutation,
  useDeleteFaqMutation,
  useUpdateFaqMutation,
  usePostChatMutation,
  useGetNotificationQuery,
  useDeleteNotificationMutation,
  useGetUnreadNotificationQuery,
  useUpdateNotificationMutation,
<<<<<<< HEAD
  useGetRefundPolicyQuery
=======
  useGetRefundPolicyQuery,
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
} = businessApi;
