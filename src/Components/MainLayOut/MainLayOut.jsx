import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function MainLayOut({userData , setuserData}) {
let Navigate = useNavigate()
  function logOut(){
    localStorage.removeItem("userToken")
    setuserData(null)
    Navigate("/login")
    
  }
 
  return (
    <>
    <Navbar logOut={logOut} userData={userData}/>
    <div className="container">
    <Outlet/>
    </div>
    </>
  )
}
