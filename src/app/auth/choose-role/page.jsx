import React, { Suspense } from 'react'

import ChooseRole from './ChooseRole'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
       <ChooseRole></ChooseRole>
      </Suspense>
    </div>
  )
}

export default Page