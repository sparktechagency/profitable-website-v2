import React, { Suspense } from 'react'


import FaqSeller from './FaqFranchise'

export const metadata = {
  title: "FAQ's of Franchise For Sale Online in Dubai, UAE - PBFS",
  description:
    "At Profitable Business For Sale they sell UAE 's Cheap Franchise in Sale and solving all queries through their FAQ's",
};

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
  <FaqSeller></FaqSeller>

      </Suspense>
    </div>
  )
}

export default Page