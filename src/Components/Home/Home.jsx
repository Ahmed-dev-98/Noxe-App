import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShowGames from '../ShowGames/ShowGames'
import ShowTv from '../ShowTv/ShowTv'
import ShowMedia from '../ShowMedia/ShowMedia'
import ShowPeople from '../ShowPeople/ShowPeople'
import {Link} from 'react-router-dom'

export default function Home() {
const [trendingMovies, settrendingMovies] = useState([])
const [trendingTv, settrendingTv] = useState([])
const [trendingPeople, settrendingPeople] = useState([])
const [data, setData] = useState([])
const [loader, setLoader] = useState(false)


async function getTrending(mediaType , callback) {
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=374c4b45eb002bf1e843fad60ba11369`)

  callback(data.results)
  
}

async function getPopularityGames() {
    

  let{data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity` , {

    "headers": {
      'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    },
  }
  )
      setData(data)
      setLoader(false)

}


useEffect(() => {
  getTrending("movie" , settrendingMovies)
  getTrending("tv" , settrendingTv)
  getTrending("person" , settrendingPeople)
  getPopularityGames()
  setLoader(true)
} 
,[])



  return (
    <>
    {loader === true?   
      <section className='section-loader d-flex  justify-content-center align-items-center  '>
                <span className="loader mx-auto "></span>

      </section>
  :       
<div>
    <div className="row movies py-5 align-items-center justify-content-center">
    <div className="home-cards col-md-4">
      <div className="brdr mb-3"></div>
      <h2 className='h3'> Top trending movies <br/>to watch right now</h2>
      <p className='py-2 text-muted'>a list of Top ranked 10 movies ,this list update every week depends on trending Movies ,you can check the full list from the link below </p>
      <Link to={`/movies`}><button className='btn btn-primary'>Movise Section</button></Link>
    
          <div className="brdr mt-3"></div>

    </div>

    {trendingMovies.map( (item , index)=> <ShowMedia key={index} item={item} />  ).splice(0,10)}

    </div>


    
    <div className="row tv py-5 align-items-center justify-content-center">
    <div className="home-cards col-md-4 ">
            <div className="brdr mb-3"></div>
      <h2 className='h3'> Top trending Series <br/>to watch right now</h2>
      <p className='py-2 text-muted'>a list of Top ranked 10 Series ,this list update every week depends on trending Series ,you can check the full list from the link below </p>
      <Link to={`/tvshow`}><button className='btn btn-primary'>Series Section</button></Link>
          <div className="brdr mb-3"></div>

    </div>

    {trendingTv.map( (item , index)=> <ShowTv key={index} item={item} />  ).splice(0,10)}

    </div>    


    <div className="row tv py-5 align-items-center justify-content-center">
    <div className="home-cards col-md-4 ">
            <div className="brdr mb-3"></div>
      <h2 className='h3'> Top trending celebrites <br/>to check right now</h2>
      <p className='py-2 text-muted'>a list of Top 10 celebrites people ,this list update every week depends on trending people ,you can check the full list from the link below </p>
      <Link to={`/people`}><button className='btn btn-primary'>celebrites Section</button></Link>
          <div className="brdr mb-3"></div>

    </div>

    {trendingPeople.map( (item , index)=> <ShowPeople key={index} item={item} />  ).splice(0,10)}

    </div>    


    <div className="row games py-3 align-items-center justify-content-center">
    <div className="home-cards col-md-4 mb-4 ">
    <div className="brdr mb-3"></div>

      <h2 className='h3'> Top trending games <br/>to play right now</h2>
      <p className='py-2 text-muted'>a list of Top ranked 10 Games ,this list update every week depends on trending Games ,you can check the full list from the link below </p>
      <Link to={`/games`}><button className='btn btn-primary mb-2'>Games Section</button></Link>
        <div className="brdr mt-3"></div>

    </div>


    {data.filter((item)=> item.thumbnail !== null).map( (item , index)=> <ShowGames key={index} item={item} />  ).splice(0,10)}

    </div>    

    </div>
}
       </>
  )
}
