

import React, { Suspense } from 'react'


import BusinessSale from './BusinessSaleForDubai'



export const metadata = {
  title: "About Us - PBFS | Buy & Sell Businesses Online ",
  description:
    " Learn about PBFS, the trusted online marketplace for buying, selling, and investing in profitable businesses. Discover our mission to empower entrepreneurs and business owners worldwide. ",
   alternates: {  canonical: "https://profitablebusinessesforsale.com/businesses-for-sale-dubai"
   },
};

const Page = () => {

  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
       <BusinessSale></BusinessSale>
      </Suspense>
    </div>
  )
}

export default Page