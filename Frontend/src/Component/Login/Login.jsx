import React from 'react'
import "./Login.css"
import {useState} from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

export const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("")
    const navigate=useNavigate();

    const logincredential=async(e)=>{
        e.preventDefault()
        const payload={
            email,password
        }
        fetch("http://localhost:3000/login",{
            method: 'POST', 
            headers: {
           'Content-Type': 'application/json'},
            body: JSON.stringify(payload)}
            )
            .then((res)=>res.json())
            .then((res)=>{
             localStorage.setItem("token",res.token)
            console.log(res)
            res.profession=="student" ? navigate("/student") : navigate("/staff")  
          })
            .catch((Err)=>{console.log("error",Err)})
    }

  return (
<form onSubmit={logincredential} className="form1">
    <h4>LOGIN CREDENTIAL</h4>
    <hr></hr>
    <p>Email Address *</p>
    <input type="name" placeholder='enter ur name' onChange={(e)=>{setEmail(e.target.value)}}/>

    <p>Password *</p>
    <input type="password" placeholder='password' onChange={(e)=>{setpassword(e.target.value)}}/>
    <br />

    <input type ="submit" className="submit"/>
    <Link to="/signup"  style={{ textDecoration: 'none'}}><div className="create">CREATE MY ACOOUNT</div></Link>
 </form>

  )
}
