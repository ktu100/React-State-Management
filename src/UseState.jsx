import React, { useState } from 'react'

const UseState = () => {
  const [count,setCount]=useState(0);
  const [name,setName]=useState("");
  const [items,setItems]=useState(["Alok","Kartikey","Kingzie"]);

  const handleClick=()=>{
    setCount(count+1);
  }
  const AddName=()=>{
    setItems([...items,name]);
    setName("");
  }
  return (
    <div>
      <button onClick={handleClick}>Counter{count}</button>
      {items.map((item)=>(
        <li key={item}>{item}</li>
      ))}
      <input 
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={AddName}>Add Name</button>
    </div>
  )
}

export default UseState
