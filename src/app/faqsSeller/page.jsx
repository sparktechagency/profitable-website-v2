import React, { Suspense } from 'react'
import FaqSeller from './FaqSeller'



export const metadata = {
  title: "PBFS – How to Sell your Business Online | UAE Businesses",
  description:
    "Find the solution related to your business with PBFS. Learn how to sell your business online and explore profitable Businesses For Sale in UAE.",
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