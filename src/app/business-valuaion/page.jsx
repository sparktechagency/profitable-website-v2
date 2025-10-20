import React, { Suspense } from 'react'

import BusinessValuationPage from './BusinessValuationPage'



export const metadata = {
  title: "Get Your Business Valuations - PBFS",
  description:
    "Learn how PBFS assesses business value using industry-standard methods like SDE, EBITDA, and market comparables for accurate pricing.",
};
const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
        <BusinessValuationPage></BusinessValuationPage>
      </Suspense>
    </div>
  )
}

export default Page