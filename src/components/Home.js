 import React from 'react'
import { useState } from 'react'
 



 export default function Home() {
     const [name,setName] = useState('')
     const [option,setOption] =useState("")
     const [chec, setChec]  = useState(false)

    // prevent form submit button data
   function getFormData(e) {
       console.log(name,option,chec)
       e.preventDefault()
   }

     return (
         <div style={{position:"absolute", top:"10%", left:"40%"}}>
             <h1>handle react form</h1>
           <form onSubmit={getFormData}>
               <input onChange={(e) =>setName(e.target.value)} type="text" placeholder="name"/> <br></br>
               <select onChange={(e) => setOption(e.target.value)} >
                   <option>name</option>
                   <option>class</option>
                   <option>Rollno</option>

               </select> 
               <br></br>

               <input onChange ={(e) =>setChec(e.target.checked)} type="checkbox" /> <span>Accept terms and conditions</span>
               <br></br>
               <button type="submit"> Submit </button>

           </form>



         </div>
     )
 }
 