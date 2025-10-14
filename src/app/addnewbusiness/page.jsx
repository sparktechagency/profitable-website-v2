import { Suspense } from 'react'


import AddNewBusiness from './AddNewBusiness'

const Page = () => {
  return (
    <div>
       <Suspense>
      <AddNewBusiness></AddNewBusiness>
      </Suspense>
    </div>
  )
}

export default Page