import React, { Suspense } from 'react'


import AboutPage from './AboutUsPage'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
       <AboutPage></AboutPage>
      </Suspense>
    </div>
  )
}

export default Page