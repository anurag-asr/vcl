
import React from 'react'
import {useState} from "react"
// import { Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import "./Signup.css"

const Signup = () => {
    const [profession,setProfession]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const SignupCredential=(e)=>{
        e.preventDefault()
        const payload={
            email,password,profession
        }
        console.log(payload)
        fetch("http://localhost:3000/signup",{
            method: 'POST', 
            headers: {
           'Content-Type': 'application/json'},
            body: JSON.stringify(payload)}
            ).then(()=>navigate("/login"))
    }
      return (
    <form onSubmit={SignupCredential} className="form1">
        <h1>SignUp Page</h1>
        <span>profession : </span>
        <select onChange={(e)=>{setProfession(e.target.value)}}>
            <option value=""></option>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
        </select>
        <br />
        <p>Name *</p>
        <input type="name" placeholder='enter your name'  onChange={(e)=>{setEmail(e.target.value)}}/>
        <br />
        <p>Password *</p>
        <input type="password" placeholder='password'  onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="submit" className='submit'/>

    </form>
  )
}

export default Signup