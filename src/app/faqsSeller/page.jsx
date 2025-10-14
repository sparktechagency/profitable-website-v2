import React, { Suspense } from 'react'
import FaqSeller from './FaqSeller'


const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
        <FaqSeller></FaqSeller>
      </Suspense>
    </div>
  )
}

export default Page