import React, { useContext } from 'react'
import { NameContext } from './NameContext'

const ChildContext = () => {
  const user=useContext(NameContext);
  return (
    <div>
      <h1>Hi My name is {user}</h1>
    </div>
  )
}

export default ChildContext
