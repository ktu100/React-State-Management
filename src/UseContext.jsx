import React, { useState } from 'react'
import { NameContext } from './NameContext';
import ChildContext from './ChildContext';

const UseContext = () => {
  const [user,setUser]=useState("Kartikey");
  return (
    <div>
      <NameContext.Provider value={user}>
        <ChildContext/>
      </NameContext.Provider>
    </div>
  )
}

export default UseContext
