import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <ul>
      <NavLink className={(e)=>{return e.isActive?"white":""}} to="/"><li>Home</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"white":""}} to="/about"><li>About</li></NavLink>
      <NavLink className={(e)=>{return e.isActive?"white":""}} to="/login"><li>Login</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
