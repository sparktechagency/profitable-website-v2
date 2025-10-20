

import React, { Suspense } from 'react'


import AboutPage from './AboutUsPage'



export const metadata = {
  title: "About Us - Buying & Selling Businesses at PBFS",
  description:
    "PBFS connects aspiring entrepreneurs with profitable franchise & business opportunities globally—transparent listings, expert support, and your path to real ownership.",
};

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