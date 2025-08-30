import { useState } from "react";
import "./style.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function App() {

const navigate = useNavigate() 
const[user,setuser]=useState("")
const[pass,setpass]=useState("")

function handleuser(evt){
 
  setuser(evt.target.value)
}

function handlepass(evt){

  setpass(evt.target.value)

}

function check()
{
  var logindetails = axios.get("http://localhost:3000/login?username=${user}&password=${pass}" )
  logindetails.then(function(data){
    if(data.data == true)
    {
      navigate("/success")
    }
    else{
      navigate("/fail")
    }
  })
}

  return(
     <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
   <div>
    <input onChange={handleuser} name="username" placeholder="username"></input>
    <input onChange={handlepass} name="password" placeholder="password"></input>
    <button onClick={check}>Login</button>
   </div>
   </div>
   </div>
  )
}

export default App;