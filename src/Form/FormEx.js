import React, { useState } from 'react'

function FormEx() {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const formHandler=(event)=>{ 
        event.preventDefault();
        const loginObj={
            uname:username,
            pass:password
        }
        console.log(loginObj)
    }
  return (
    <div className='login'>
    <h1>Login Page!</h1>
    <div className='input'>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input><br></br>
    Password :  <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
    <input type="submit" id="sub-btn"></input>
    </form>
    </div>
    </div>
  )
}

export default FormEx