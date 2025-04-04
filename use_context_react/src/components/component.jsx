import React, {useContext} from 'react'
import {counterContext } from '../../context/context'

const component = () => {
    const value = useContext(counterContext)
  return (
    <div>
      {value.count}
    </div>
  )
}

export default component
