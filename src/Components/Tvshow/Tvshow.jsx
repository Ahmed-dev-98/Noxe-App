import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Tvshow() {
const [getData, setgetData] = useState([])
const [loader, setLoader] = useState(false)
const [input, setinput] = useState("")



async function getTvshow() {
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=374c4b45eb002bf1e843fad60ba11369`)

  let res = data.results

  setgetData(res)
  setLoader(false)

  
}
function search(e) {
  let input = e.target.value 
  setinput(input)
  console.log(input);
  
}

useEffect(() => {
  getTvshow()
  setLoader(true)

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
    
      <div className="row">

        {getData.filter((item)=>item.name.toLowerCase().includes(input)).map((item , index)=>
        <div key={index} className="col-md-3 p-2 my-3 column-body ">
          
              <Link className='all-card' to={`/details/${item.id}/movie`}>
                        <div className='p-3 card-container bg-transparent text-center '>

          {item.poster_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+ item.poster_path} alt="" /> 
          : "img not included"}
          {item.name?<h4 className='mt-3 '>{item.name.slice(0,19)}..</h4>: "HOOOOOOOO" }
        </div>
        </Link>

        </div>

         ) }

      </div>
      </div>
}
    </div>
    
    </>
  )
}
