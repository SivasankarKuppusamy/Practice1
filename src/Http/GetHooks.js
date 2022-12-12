import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetHooks() {
  const [info,setInfo]=useState([])
  useEffect(()=>{
    axios.get("Db.json").then(e=>{setInfo(e.data)
    })
    
  })
  return (
    <div>
    <p>{info.map((i)=><li>{i.id}    {i.name}</li>)}</p>
    </div>
  )
}

export default GetHooks