import React, { Suspense } from 'react'

import FaqBusinessIdea from './FaqBusiness'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
        <FaqBusinessIdea></FaqBusinessIdea>
      </Suspense>
    </div>
  )
}

export default Page