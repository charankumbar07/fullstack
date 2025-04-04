import React, {useContext} from 'react'
import Component from './component'
import { counterContext } from '../../context/context'
const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component/></span>I Am button</button>
    </div>
  )
}

export default Button