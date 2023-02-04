import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import "./Student.css"

const Student = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [resume,setResume]=useState([])

    // console.log(x)
    function Payload(){
      
    }
    const studentDetails=async(e)=>{
      e.preventDefault()
      console.log(resume)
      
      // payload.append("upload",resume,resume.name)
      // console.log(payload)
      // console.log(resume.name,resume)
      // await fetch("http://localhost:3000/student",{
      //     method: 'PATCH', 
      //     headers: {
      //    'Content-Type': 'application/json',
      //   },
      //     body: JSON.stringify(resume)}
      //     )
      await axios.patch("http://localhost:3000/student",resume)
    }
  return (
    <form onSubmit={studentDetails} className="form">
      <h3>Student Portal</h3>
        <input type="name" placeholder='enter your name' onChange={(e)=>{setName(e.target.value)}} /> <br />
        <input type="text"  placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}}/> <br />
        <input type="number" placeholder="enter your contact number" onChange={(e)=>{setPhone(e.target.value)}}/><br />
        <input type="file" name="upload" accept="application/pdf" onChange={(e)=>{(setResume(e.target.files[0]))}} /><br />
        <input type="submit" className='submit'/>
    </form>
  )
}

export default Student