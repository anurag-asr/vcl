import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Login } from '../Component/Login/Login'
import Signup from '../Component/Signup/Signup'
import Staff from '../Component/Staff/Staff'
import Student from '../Component/Student/Student'

export const Routing = () => {
  return (
    <Routes>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/student" element={<Student/>}/>
       <Route path="/staff" element={<Staff/>}/>
    </Routes>
  )
}
