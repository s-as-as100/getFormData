 import React from 'react'
import { useState } from 'react'
import User from '../User'
 



 export default function Home() {
     const [name,setName] = useState('')
     const [option,setOption] =useState("")
     const [chec, setChec]  = useState(false)
     const[loggedIn,setLoggedIn] = useState(true)

    // pass function as props 
    function alt() {
        alert(" function pass as porps")
    }



    // prevent form submit button data
   function getFormData(e) {
       console.log(name,option,chec)
       e.preventDefault()
   }

     return (
         <div style={{position:"absolute", top:"10%", left:"40%"}}>
                {
                    loggedIn? <h1> please login</h1> : <h2> no login</h2>
                }

             <h1>handle react form</h1>
           <form onSubmit={getFormData} value={name} >
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
               <button  > clear </button>


           </form>
           <User data={alt} />



         </div>
     )
 }
 