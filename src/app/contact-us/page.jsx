import React, { Suspense } from 'react'
import ContactUs from './ContactUs'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
      <ContactUs></ContactUs>
      </Suspense>
    </div>
  )
}

export default Page