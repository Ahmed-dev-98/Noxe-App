import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
export default function Details() {

    let { media_type ,id } = useParams();
const [itemDetails, setitemDetails] = useState({})
const [loader, setLoader] = useState(false)


    async function getDetails(id , media_type ) {

        let {data} = await axios.get (`https://api.themoviedb.org/3/${media_type}/${id}?api_key=374c4b45eb002bf1e843fad60ba11369&language=en-US`)
    setitemDetails(data)
    setLoader(false)
    }
    
    useEffect(() => {
        getDetails(id , media_type)
        setLoader(true)


    } , [])
    

  return (
    <>
          {loader === true?   
      <section className='section-loader d-flex  justify-content-center align-items-center  '>
                <span className="loader mx-auto "></span>
      </section>
  :      

    <div className="row py-5">

        <div className="col-md-3">
            {itemDetails.poster_path?<img className='w-100' src={`https://image.tmdb.org/t/p/w500`+ itemDetails.poster_path} alt="" />
            :<img className='w-100' src={`https://image.tmdb.org/t/p/w500`+ itemDetails.profile_path} alt="" />}
        
        </div>

        <div className="col-md-8">
            <div><h3> {itemDetails.title} {itemDetails.name}</h3></div> 
            <h5 className='text-muted'>{itemDetails.tagline}</h5>
            {itemDetails.homepage?<div> <a href={itemDetails.homepage} target="_blanck">{itemDetails.homepage} </a></div> : ""}
            <div className="">
                <div className="category d-flex py-2">
                {itemDetails.genres?.map((genre , index)=> <div key={index} className='me-2 radios-3'> <p  className='bg-info px-3 m-0 rounded-1'> {genre.name}</p> </div> )}
                </div>
                <div className='py-3'>  

                {itemDetails.vote_average?<div><p> Vote : {itemDetails.vote_average?.toFixed(1)}</p></div>:
                <div><h5> talent : {itemDetails.known_for_department}</h5></div>}         

                {itemDetails.vote_count?<div><p>Vote count : {itemDetails.vote_count}</p></div> : 
                <div><h5>place of birth : {itemDetails.place_of_birth}</h5></div>}
                
                <div><h5>Popularity : {itemDetails.popularity}</h5></div>

                {itemDetails.release_date || itemDetails.first_air_date?<div><h5> Release date :{itemDetails.first_air_date} {itemDetails.release_date} </h5></div> :
                <div><h5>date of birth : {itemDetails.birthday} </h5></div>}
            </div>
                <div className="overview"><p className='text-muted'> {itemDetails.overview} {itemDetails.biography?.split(" ").splice(0,100).join(" ")} </p></div>










                </div>
        </div>
    </div>
}
    
    
    
    </>
  )
}
