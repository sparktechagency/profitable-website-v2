import React, { Suspense } from 'react'

import SchedualeCall from './SchedualeCall'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
        <SchedualeCall></SchedualeCall>
      </Suspense>
    </div>
  )
}

export default Page