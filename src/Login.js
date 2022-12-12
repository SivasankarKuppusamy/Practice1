import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Login() {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>{ 
      event.preventDefault();
      if(username.length == 0 && password.length ==0){
        setError(true);
      }
      if(username =="Admin" && password =="Admin"){
        setError(true);
      }
      if(username && password ){
      const loginObj={
          uname:username,
          pass:password
      }
      console.log(loginObj);
      alert(JSON.stringify(loginObj));
      navigate("/");

    }
    }
  return (
    <div className='login'>
    <h1>Login Page!</h1>
    <div className='input'>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input><br></br>
    <div>{
      error&&username.length==0? <label style={{color:"red"}}>Username is Required</label>:""
    }</div>
    Password :  <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
    <div>{
      error&&password.length==0? <label style={{color:"red"}}>Password is Required</label>:""
    }</div>
    <div>{
      !error&&password.length<=8? <label style={{color:"red"}}>Password should me minimum of 8 length</label>:""
    }</div>
    <input type="submit" id="sub-btn"></input>
<Link to='/forget'>Forget Password</Link>
    </form>
    </div>
    </div>
  )
}
export default Login