
<<<<<<< HEAD
=======

>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
import React, { Suspense } from 'react'


import FranchiseSale from './FranchiseForSaleDubai'



export const metadata = {
<<<<<<< HEAD
  title: "Franchise for Sale Dubai | Franchise Your Business in Dubai ",
  description:
    " Find the best franchise for sale in Dubai - lucrative franchise opportunities, expand or franchise your business in Dubai and grow with proven success models.",
   alternates: {  canonical: "https://profitablebusinessesforsale.com/franchise-for-sale-dubai"
=======
  title: "About Us - PBFS | Buy & Sell Businesses Online ",
  description:
    " Learn about PBFS, the trusted online marketplace for buying, selling, and investing in profitable businesses. Discover our mission to empower entrepreneurs and business owners worldwide. ",
   alternates: {  canonical: "https://profitablebusinessesforsale.com/businesses-for-sale-dubai"
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
   },
};

const Page = () => {

  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
       <FranchiseSale></FranchiseSale>
      </Suspense>
    </div>
  )
}

export default Page