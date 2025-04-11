import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      I Am Navbar Counter {count}
    </div>
  )
}

export default Navbar
