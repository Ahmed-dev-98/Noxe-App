import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {

  let navigate = useNavigate()


  const [user, setUser] = useState({
    email : "",
    password : "",
  });
  
  const [LoginErorr, setLoginErorr] = useState("")
  const [loading, setloading] = useState(false)
  const [validateErorrs, setvalidateErorrs] = useState([])


  function getUserInfo(e) {
    let userInfo = {...user}
    userInfo[e.target.name] = e.target.value ;
    setUser(userInfo)
  }

  async function sendDataToApi() {

    let {data} = await axios.post('https://route-movies-api.vercel.app/signin' , user);

    
    if (data.message === "success") {

      setloading(false)
      localStorage.setItem("userToken", data.token);
      saveUserData();
      navigate("/home")
      

      
    }
    else
    {
      
      setLoginErorr(data.message)
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
      


    }
    else
    {
      sendDataToApi()
      

    }
    
  }

  function formValidation() {

    let scheme = Joi.object({
      email : Joi.string().email( { minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password : Joi.string().pattern(/^[A-Z][a-z]{3,6}/)
    })
     return scheme.validate(user , {abortEarly:false})
  }







  return (
    <>
            <div className='w-50 mx-auto'>
      <h2 className='mx-auto'>Login </h2>
      <form onSubmit={onSubmitFrom}>
        <div className='form-group'>
          
          <label className='my-2' htmlFor='email'>Email :</label>
          <input onChange={getUserInfo} className='form-control' type="email" id='' name='email' />
          
          <label className='my-2' htmlFor='password'> password :</label>
          <input onChange={getUserInfo} className='form-control' type="password" id='' name='password' />
          
        </div>
        <div className='w-100 d-flex  '>

          <button type='submit' className='btn btn-success my-3  ms-auto '>
            {loading === true?<i className='fas fa-spinner spin '></i> : "Login"}
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

        {LoginErorr.length > 0 ? <div className='alert alert-danger my-2' >{LoginErorr} </div>:""}
        

      </form>


    </div>

    </>
  
  )
}
