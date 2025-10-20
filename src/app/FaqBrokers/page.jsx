import React, { Suspense } from 'react'

import FaqBroker from './FaqBrokers'



export const metadata = {
  title: "Business Brokers Dubai – PBFS Broker FAQs",
  description:
    "Profitable Business For Sale FAQ for business brokers in Dubai. Learn how to list businesses, commission-free, and connect with buyers locally and online",
};

const Page = () => {

  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
       <FaqBroker></FaqBroker>
      </Suspense>
    </div>
  )
}

export default Page