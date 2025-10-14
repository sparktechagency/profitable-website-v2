import React, { Suspense } from 'react'


import Privecy from './Privecy'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
  
<Privecy></Privecy>
      </Suspense>
    </div>
  )
}

export default Page