// src/app/blog/[id]/page.jsx
import React, { Suspense } from 'react'
import BlogDetails from './BlogDetails'

const Page = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <BlogDetails />
      </Suspense>
    </div>
  )
}

export default Page