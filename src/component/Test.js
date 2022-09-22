import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Test() {
  
   let [jsonUserData1, setData]=useState();
  let [count , setCount]=useState(0);
  let [count2 , setCount2]=useState(0);
  
  
  let another=()=>{
    setCount2(count);
  }  
  
  let hitUrl=()=>{
        setCount(2);
        another();

    }
   useEffect(()=>{
    hitUrl();
    console.log("hit url called",count);
   },[hitUrl])
   
   
   let handler=()=>{
    setCount2(count2-1);

   }

    return (
    <div>
        count:{count}<br/>
        count2:{count2}
        <button className='btn btn-primary' onClick={handler}>click</button>
    </div>
  )
}
