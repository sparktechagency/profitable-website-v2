import React, { Suspense } from 'react'

import BusinessValuationPage from './BusinessValuationPage'

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