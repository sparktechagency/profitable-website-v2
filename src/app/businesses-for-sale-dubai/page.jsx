

import React, { Suspense } from 'react'


import BusinessSale from './BusinessSaleForDubai'



export const metadata = {
<<<<<<< HEAD
  title: "Business for Sale in Dubai | Buy Profitable Business Dubai ",
  description:
    " Explore top business for sale in Dubai - find small & profitable business opportunities, buy a business in Dubai, and invest in thriving ventures today.",
=======
  title: "About Us - PBFS | Buy & Sell Businesses Online ",
  description:
    " Learn about PBFS, the trusted online marketplace for buying, selling, and investing in profitable businesses. Discover our mission to empower entrepreneurs and business owners worldwide. ",
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
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