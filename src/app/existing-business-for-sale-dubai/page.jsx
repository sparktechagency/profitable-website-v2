

import React, { Suspense } from 'react'
import ExistingDubai from './ExistingBusinessForSaleDubai';



export const metadata = {
  title: "Businesses for Sale USA | Buy Profitable Opportunities in USA ",
  description:
    "Explore verified businesses for sale across the United States with Profitable Businesses for Sale (PBFS). Discover profitable companies, small businesses, and investment opportunities across industries. Compare listings and start your journey to business ownership today.",
   alternates: {  canonical: "https://profitablebusinessesforsale.com/existing-business-for-sale-dubai"
   },
};

const Page = () => {

  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
      <ExistingDubai></ExistingDubai>
      </Suspense>
    </div>
  )
}

export default Page