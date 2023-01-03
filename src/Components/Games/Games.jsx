import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Games() {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const [input, setinput] = useState("")


  
  async function api() {
    
    let {data}=await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      
      
      "headers": {
        'X-RapidAPI-Key': '54d80b8623msh28965464a853ca0p1260b8jsn18ebb272b70a',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
      
    })
    setData(data)
    setLoader(false)
  } 
  function search(e) {
    let input = e.target.value 
    setinput(input)
    console.log(input);
    
  }
  
  useEffect(() => {
    setLoader(true)
api()
}, [])

  
  
  

  return ( 
    <>
    <div className="container py-5">

      {loader === true?   
      <section className='section-loader d-flex  justify-content-center align-items-center  '>
                <span className="loader mx-auto "></span>
      </section>
  :      
  <div>
  <input className="form-control w-75 mx-auto" onChange={search} type="search" placeholder="Search By Name" aria-label="Search"/>

  <div className=" row ">
      {data.filter((game)=>game.title.toLowerCase().includes(input)).map((game,index)=> 
      <div key={index} className=" col-md-3 p-2 my-3 column-body" >
        <Link className='all-card' to={`/details/${game.id}`}>
        <div className='p-3 card-container'>
  <img src={game.thumbnail} className="card-img-top w-100 " alt="..."/>

  <div className="card-body">
    <div className='d-flex justify-content-between align-content-center'>
    <h3 className='h4 title my-3'>{game.title.slice(0 , 12)}..</h3>
    <span className='bg-info text-white text-center align-self-center px-2 rounded-1 m-0'>Free</span>

    </div>
        <div className="">
    <p className="card-text text-muted">{game.short_description.slice(0,45)}...</p>
    <div className="d-flex justify-content-between align-items-center">
    {game.platform === "PC (Windows)"? <p className='mb-0'> <i className="fa-brands fa-windows"></i></p>: <span> <i className="fa-brands fa-chrome"></i></span>} 
    <p className='game-type text-dark px-1 mb-0 rounded-2 fw-semibold '>{game.genre}</p>
    </div>
    </div>
  </div>
  </div>
  </Link>

</div>
)}



      </div>
      </div>

}
    </div>
    </>
  )
}
