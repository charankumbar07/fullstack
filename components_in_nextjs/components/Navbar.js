import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex  justify-between px-2 bg-cyan-600'>
        <div>NEXT.JS</div>
      <ul className='flex gap-2'>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/about'}><li>About</li></Link>
        <Link href={'/contact'}><li>Contact Us</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
