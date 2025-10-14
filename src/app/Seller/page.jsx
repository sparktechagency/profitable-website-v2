import React, { Suspense } from 'react'

import Seller from './SellerPage'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
  <Seller></Seller>

      </Suspense>
    </div>
  )
}

export default Page