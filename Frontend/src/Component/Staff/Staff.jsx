import React from 'react'
import { useEffect ,useState} from 'react'
import "./Staff.css"
import axios from "axios"

const Staff = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/staff").then((res)=>{setData(res.data)})
  },[])
  return (
   <div>
     <tbody>
        <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone-no</th>
        <th>resume-Preview</th>
        <th>Resume-downloade</th>
      </tr>
    </table>
    <table>
    {
      data.length>0 && data.map((elem)=>(
          <tr>
             <td>{elem.name}</td>
             <td>{elem.email}</td>
             <td>{elem.phone}</td>
             <td>{elem.resume}</td>
             <td></td>
          </tr>
       
      ))
    }
    </table>
  
    </tbody>
   </div>
  
  )
}

export default Staff