import React, { Suspense } from 'react'

import FaqBusinessIdea from './FaqBusiness'

export const metadata = {
  title: "FAQ's on List Business For Sale in Free - PBFS",
  description:
    "List a business for sale with no commission—PBFS’s makes it possible. On the PFBS FAQ page, they emphasize no hidden fees, no broker cuts, empowering sellers to list directly",
};



const Page = () => {
  return (
    <div>
       <Suspense fallback={<p>loading..</p>}>
        <FaqBusinessIdea></FaqBusinessIdea>
      </Suspense>
    </div>
  )
}

export default Page