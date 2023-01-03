import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

export default function Register() {

  let navigate = useNavigate()

  const [user, setUser] = useState({
    first_name:"",
    last_name : "",
    email : "",
    password : "",
    age : "",
  });

  const [registerErorr, setregisterErorr] = useState("")
  const [loading, setloading] = useState(false)
  const [validateErorrs, setvalidateErorrs] = useState([])


  function getUserInfo(e) {
    let userInfo = {...user}
    userInfo[e.target.name] = e.target.value ;
    setUser(userInfo)
  }

  async function sendDataToApi() {

    let {data} = await axios.post('https://route-movies-api.vercel.app/signup' , user);

    
    if (data.message === "success") {
      setloading(false)
      navigate("/login")
      console.log("hi from api success")

      
    }
    else
    {
      console.log("hi from api else")
      setregisterErorr(data.message)
      setloading(false)

    }

    
  }
  function onSubmitFrom(e) {
    e.preventDefault();
    setloading(true)
    formValidation()
    let formValidationRes = formValidation()

    if (formValidationRes.error) {
      setloading(false)
      setvalidateErorrs(formValidationRes.error.details)
      console.log("hi from form validation res has erorr")


    }
    else
    {
      sendDataToApi()
      console.log("hi from form validation res hasnt erorr")

    }
    
  }

  function formValidation() {

    let scheme = Joi.object({
      first_name : Joi.string().min(3).max(10).required(),
      last_name : Joi.string().min(3).max(10).required(),
      age : Joi.number().min(16).max(70).required(),
      email : Joi.string().email( { minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password : Joi.string().pattern(/^[A-Z][a-z]{3,6}/)
    })
     return scheme.validate(user , {abortEarly:false})
  }







  return (
    <>
            <div className='w-50 mx-auto'>
      <h2>Registeration Form</h2>
      <form onSubmit={onSubmitFrom}>
        <div className='form-group'>
          <label className='my-2' htmlFor='first_name'>first Name : </label>
          <input onChange={getUserInfo} className='form-control' type="text" id='' name='first_name' />
          
          <label className='my-2' htmlFor='last_name'>last Name :</label>
          <input onChange={getUserInfo} className='form-control' type="text" id='' name='last_name' />
          
          <label className='my-2' htmlFor='email'>Email :</label>
          <input onChange={getUserInfo} className='form-control' type="email" id='' name='email' />
          
          <label className='my-2' htmlFor='password'> password :</label>
          <input onChange={getUserInfo} className='form-control' type="password" id='' name='password' />
          
          <label className='my-2' htmlFor='age'>age :</label>
          <input onChange={getUserInfo} className='form-control' type="number" id='' name='age' />



        </div>
        <div className='w-100 d-flex  '>

          <button type='submit' className='btn btn-success my-3  ms-auto '>
            {loading === true?<i className='fas fa-spinner spin '></i> : "Register"}
          </button>
        </div>
        {validateErorrs.map((err,index)=>{
          if (err.context.label === "password") {
           return <div key={index} className='alert alert-danger my-2' ><p> password should start with capital letter follwed by 3~6 letters </p></div>
          } 
          else {
            return <div key={index} className='alert alert-danger my-2' >{err.message} </div>
          }
        } )}

        {registerErorr.length > 0 ? <div className='alert alert-danger my-2' >{registerErorr} </div>:""}
        

      </form>


    </div>

    </>
  
  )
}
