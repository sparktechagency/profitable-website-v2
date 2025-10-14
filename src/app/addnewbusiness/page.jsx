import React, { Suspense } from 'react'


import AddNewBusiness from './AddNewBusiness'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
      <AddNewBusiness></AddNewBusiness>
      </Suspense>
    </div>
  )
}

export default Page