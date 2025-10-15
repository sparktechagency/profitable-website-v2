import React, { Suspense } from 'react'

import BusinessFromationppage from './BusinessFromotion'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
        <BusinessFromationppage></BusinessFromationppage>
      </Suspense>
    </div>
  )
}

export default Page