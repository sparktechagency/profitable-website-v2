import React, { Suspense } from 'react'
import ContactUs from './ContactUs'




export const metadata = {
  title: "Contact Us: Profitable Business For Sale",
  description:
    "Reach PBFS via contact page — we’re here to guide your franchise & business purchase journey with personalized support and fast responses.",
};

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