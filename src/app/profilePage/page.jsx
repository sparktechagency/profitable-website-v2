import React, { Suspense } from 'react'


import ProfilePage from './ProfilePage'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
  
<ProfilePage></ProfilePage>
      </Suspense>
    </div>
  )
}

export default Page