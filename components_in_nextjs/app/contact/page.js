import React from 'react'
import Script from 'next/script'
const contact = () => {
    return (
        <div>
            <Script>
                {`
                alert("Welcome to contact page")
                `}
            </Script>
            <div>
                Hey i am Contact page
            </div>
        </div>
    )
}

export default contact
export const metadata = {
    title: "It is Contact page",
    description: "Generated by create next app",
  };