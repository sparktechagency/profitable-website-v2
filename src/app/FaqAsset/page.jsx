import React, { Suspense } from 'react'

import FaqAssetSeller from './FaqAssest'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
       <FaqAssetSeller></FaqAssetSeller>
      </Suspense>
    </div>
  )
}

export default Page