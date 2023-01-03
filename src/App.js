import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayOut from './Components/MainLayOut/MainLayOut'
import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'
import Tvshow from './Components/Tvshow/Tvshow'
import Games from './Components/Games/Games'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import People from './Components/People/People'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NotFound from './Components/NotFound/NotFound'
import jwtDecode from 'jwt-decode'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Details from './Components/Details/Details'
import GamesDetails from './Components/GamesDetails/GamesDetails'

export default function App() {

  useEffect( ()=>{ if (localStorage.getItem("userToken")!== null ) {
    saveUserData()
  }
}, [])
  

  const [userData, setuserData] = useState(null)

function saveUserData() {
  let tokenData = localStorage.getItem("userToken")
  let decodedTokenData = jwtDecode(tokenData)
  setuserData(decodedTokenData)
  console.log("login done")

  
}
  let routes = createBrowserRouter([{
    path:"/" , element: <MainLayOut  setuserData={setuserData} userData={userData}/> , children :[
      {index:true,element: <Home saveUserData={saveUserData} />},
      {path:"home",element: <ProtectedRoute userData={userData}><Home/></ProtectedRoute> },
      {path:"movies",element: <ProtectedRoute userData={userData}><Movies/></ProtectedRoute> },
      {path:"tvshow",element: <ProtectedRoute userData={userData}><Tvshow/></ProtectedRoute> },
      {path:"games",element: <ProtectedRoute userData={userData}><Games/></ProtectedRoute>},
      {path:"about",element: <ProtectedRoute userData={userData}><About/></ProtectedRoute> },
      {path:"profile",element: <ProtectedRoute userData={userData}><Profile userData={userData}/></ProtectedRoute> },
      {path:"people",element: <ProtectedRoute userData={userData}><People/></ProtectedRoute> },
      {path:"details/:id/:media_type",element: <ProtectedRoute userData={userData}><Details/></ProtectedRoute> },
      {path:"details/:id/",element: <ProtectedRoute userData={userData}><GamesDetails/></ProtectedRoute> },
      {path:"login",element: <Login saveUserData={saveUserData}/>},
      {path:"register",element: <Register/>},

      {path : "*" , element :<ProtectedRoute userData={userData}><NotFound/></ProtectedRoute> },
    
    
    ]
  }])
  return (
    <>
    <RouterProvider router={routes}/>    
    
    
    
  </>
  )
}
