import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const url="https://jsonplaceholder.typicode.com/posts"
  const [items,setItems]=useState([]);

  useEffect(()=>{
    const fetchItems=async()=>{
        const request=await fetch(url);
        const response= await request.json();
        setItems(response);
    }
    fetchItems();
  },[])
  return (
    <div>
      {items.map((item)=>(
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  )
}

export default UseEffect
