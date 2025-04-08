import React from 'react'
import { memo } from 'react'
const Navbar = ({getadjective,adjective}) => {
    console.log("navbar rendered")
  return (
    <div>
      i Am {adjective} Humanh
      <button onClick={()=>{getadjective()}}>{getadjective()}</button>
    </div>
  )
  
}

export default memo(Navbar)