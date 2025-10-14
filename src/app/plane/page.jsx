import React, { Suspense } from 'react'


import SubscriptionPlan from './Plane'

const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
  <SubscriptionPlan></SubscriptionPlan>

      </Suspense>
    </div>
  )
}

export default Page