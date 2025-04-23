import React from 'react'

const page = () => {
  return (
    <div>
      Login Page
    </div>
  )
}

export default page

export async function generateMetadata({ params }) {
    return {
      title: 'This is mate data',
    }
  }