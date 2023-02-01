// import { useState } from "react"

import {React,useState} from 'react'


const Registration = () => {
  
  
const[input,setInput]=useState({name:"",email:"",gender:"",age:"",education:"",occupation:"",city:"",pincode:""})
  const onChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const addNote = async (name,email,gender,age,education,occupation,city,pincode) => {

    const response = await fetch("http://localhost:5000/createUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify({name,email,gender,age,education,occupation,city,pincode})
    });

    const note = await response.json();
    // console.log(note)
    setInput(input.concat(note))
  }
  const handleClick=(e)=>{
    e.preventDefault()
    addNote(input.name,input.email,input.gender,input.age,input.education,input.occupation,input.city,input.pincode)
  }
  return (
    <div>
        
      <form>
  {/* <fieldset disabled> */}
    <legend>Pick your slots</legend>
    <p>Our team of certified professionals are determined to have your back through your recovery journey.
    </p>
    <div class="mb-3">
      <label for="name" class="name">name</label>
      <input type="text" id="disabledTextInput" class="form-control" onChange={onChange} placeholder="name" name="name" value={input.name}/>
    </div>
    <div class="mb-3">
      <label for="email" class="email">email</label>
      <input type="text" id="disabledTextInput" class="form-control" onChange={onChange} placeholder="email" name="email" value={input.email}/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">gender</label>
      <input type="text" id="disabledTextInput" class="form-control" onChange={onChange} placeholder="gender" name="gender" value={input.gender}/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">age</label>
      <input type="text" id="disabledTextInput" class="form-control" onChange={onChange} placeholder="age" name="age" value={input.age}/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">education</label>
      <input type="text" id="disabledTextInput" class="form-control" onChange={onChange} placeholder="education" name="education" value={input.education}/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">occupation</label>
      <input type="text" id="disabledTextInput" class="form-control" onChange={onChange} placeholder="occupation" name="occupation" value={input.occupation}/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">city</label>
      <input type="text" id="disabledTextInput" class="form-control" onChange={onChange} placeholder="city" name="city" value={input.city}/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">pincode</label>
      <input type="text" id="disabledTextInput" class="form-control" onChange={onChange} placeholder="pincode" name="pincode" value={input.pincode}/>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
        <label class="form-check-label" for="disabledFieldsetCheck">
         
        </label>
      </div>
    </div>
   
    <button type="submit" onClick={handleClick} class="btn btn-primary my-3">Submit</button>
  {/* </fieldset> */}
</form>
    <button type="submit" class="btn btn-primary mx-5">view</button>
    <button type="submit" class="btn btn-primary mx-5">call us</button>
    <button type="submit" class="btn btn-primary mx-5">call us</button>
    </div>
  )
}

export default Registration
