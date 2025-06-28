import React, { useState } from 'react'

const useToggle = () => {
  const [visible,setVisible]=useState(false);
  const toggle=()=>{
    setVisible(prev=>!prev);
  }
  return (
    [visible,toggle]
  )
}

export default useToggle
