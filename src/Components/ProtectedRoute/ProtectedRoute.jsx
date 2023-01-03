import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(userData) {
    if (localStorage.getItem("userToken")) {
     return userData.children;

    }
    else 
    {
        return <Navigate to="/login"/>

    }
    
}
