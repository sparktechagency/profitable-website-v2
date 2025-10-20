import React, { Suspense } from 'react'
import FaqInvestors from './FaqInvestor'


export const metadata = {
  title: "FAQ's For Startup Investment Oppurtunities in Dubai, UAE - PBFS",
  description:
    "PFBS connects you to UAE startup investment opportunities — invest in Dubai startups, explore where to find investors for startups UAE today",
};

const page = () => {
  return (
    <div>
      <Suspense fallback={<p>loading..</p>}>
      <FaqInvestors></FaqInvestors></Suspense>
    </div>
  )
}

export default page