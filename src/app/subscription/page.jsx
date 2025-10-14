import React, { Suspense } from 'react'

import Subscription from './Subscription'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
  
<Subscription></Subscription>
      </Suspense>
    </div>
  )
}

export default Page