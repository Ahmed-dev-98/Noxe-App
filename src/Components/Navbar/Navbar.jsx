import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar({userData , logOut}) {
  return ( <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" > Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

      {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="home" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="movies" >Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="tvshow" >Tvshow</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="people" >People</Link>
        </li>   
             <li className="nav-item">
          <Link className="nav-link" to="games" >Games</Link>
        </li>


      </ul>: ""}
      <div className={`social-links ${styles.socialMedia}  `}>
      <a href='https://www.facebook.com/profile.php?id=100004156359433' target="_blank" className="social-media fa-brands fa-facebook-f mx-2 text-white">
      </a>
      <a href='https://github.com/Ahmed-dev-98' target="_blank" className="fa-brands fa-github mx-2 text-white" >

      </a>
      <a href='https://www.instagram.com/ahmed7190hassan/' target="_blank" className="social-media fa-brands fa-instagram mx-2 text-white">

      </a>
      <a href='https://twitter.com/icarus_111' target="_blank" className="social-media fa-brands fa-twitter mx-2 text-white">
        
      </a>

      </div>
      <div>
        {userData?
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
          <Link className="nav-link" to="about" >About</Link>
        </li>

                <li className="nav-item">
                  <Link className="nav-link" to="profile" >profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login" onClick={logOut} >Logout</Link>
                </li>

              </ul>
        :       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="login" >Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register" >Register</Link>
        </li>
        </ul>
 }

      </div>

    </div>
  </div>
</nav>    
    
    </>
  )
}
