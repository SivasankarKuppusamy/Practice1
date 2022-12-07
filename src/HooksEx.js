import React, { useEffect, useState } from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)
    const inc1=()=>{
        setCount(count+1)
    }
    const inc5=()=>{
        setCount(count+5)
    }
    const dec1=()=>{
        setCount(count-1)
    }
    useEffect(()=>{
        document.title="Title";
        console.log(count)
    })
    
  return (
    <div>
    <button onClick={inc1} >Increase 1</button>
    <button onClick={dec1} >Decrease 1</button>
    <button onClick={inc5} >Increase 5</button><br></br>
    {count}
    </div>
  )
}

export default HooksEx
