import React, { useRef, useState } from 'react'

const UseRef = () => {
  const name=useRef();
  const [items,setItems]=useState([]);

  const handleAdd=()=>{
    setItems([...items,name.current.value]);
  }
  return (
    <div>
      {
        items.map((item)=>(
            <ul>
                <li key={item}>{item}</li>
            </ul>
        ))
      }
      <input type="text" ref={name}></input>
      <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default UseRef
