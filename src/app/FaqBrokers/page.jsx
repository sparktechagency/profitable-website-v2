import React, { Suspense } from 'react'

import FaqBroker from './FaqBrokers'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
       <FaqBroker></FaqBroker>
      </Suspense>
    </div>
  )
}

export default Page