import React, { useReducer, useState } from 'react'

const UseReducer = () => {
  const [state,dispatch]=useReducer(reducer,[
    {type:"apple",price:90,frequency:2},
    {type:"banana",price:50,frequency:6},
    {type:"mango",price:70,frequency:4}
  ])

  const [name1,setName1]=useState('');
  const [name2,setName2]=useState('');
  const [b,setB]=useState(0);

  function reducer(state,action){
    switch(action.type){
        case 'ADD_ITEM':
            const list=[];
                for(let i=0;i<state.length;i++){
                    if(state[i].type===action.payload)list.push({...state[i],frequency:state[i].frequency+1});
                    else list.push(state[i]);
                }
            return list;
        case 'DELETE_ITEM':
            const l=[];
            for(let i=0;i<state.length;i++){
                if(state[i].type===action.payload)l.push({...state[i],frequency:Math.max(state[i].frequency-1,0)});
                else l.push(state[i]);
            }
            return l;
            return bill;
        default:
            return state;

    }
  }

  const bill=()=>{
    let ans=0;
    for(let i=0;i<state.length;i++){
        ans+=state[i].frequency*state[i].price;
    }
    setB(ans);
  }
  return (
    <div>
      {
        state.map((item,id)=>(
            <ul>
                <li key={id}>{item.type} {item.frequency}</li>
            </ul>
        ))
      }
      <input type='text' value={name1} onChange={(e)=>{
        setName1(e.target.value);
      }}>
      </input>
      <button onClick={()=>{
        dispatch({type:'ADD_ITEM',payload:name1})
        setName1('');
      }}>Add Item</button>


      <input type='text' value={name2} onChange={(e)=>{
        setName2(e.target.value);
      }}>
      </input>
      <button onClick={()=>{
        dispatch({type:'DELETE_ITEM',payload:name2})
        setName2('');
      }}>Delete Item</button>
      <button onClick={bill}>Show Bill</button>
      <h1>{`The Total Bill:${b}`}</h1>
    </div>
  )
}

export default UseReducer
