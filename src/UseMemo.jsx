import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [name,setName]=useState(["ALok","Kingzie","Kartikey","Muku"]);
  const f=(arr)=>{
   return  [...arr].sort();
  }

  const sorted=useMemo(()=>{
    return f(name);
  },[name])

  const add=()=>{
    setName([...name,"Bhandup"]);
  }
  return (
    <div>
      <h3>Before</h3>
      {
        name.map((item,id)=>(
            <ul>
                <li key={id}>{item}</li>
            </ul>
        ))
        
      }
      <button onClick={add}>Add "Bhandup"</button>
      <h3>After</h3>
      {
        sorted.map((item,id)=>(
            <ul>
                <li key={id}>{item}</li>
            </ul>
        ))
      }

    </div>
  )
}

export default UseMemo
