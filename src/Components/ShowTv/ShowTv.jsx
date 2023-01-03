import React from 'react'
import {Link} from 'react-router-dom'
export default function ShowTv({item}) {
  return ( <>

    <div className="col-md-2 px-2 mb-2 column-body">
    <Link className='all-card' to={`/details/${item.id}/${item.media_type}`}>

      <div className="card-container bg-transparent position-relative">
        <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+ item.poster_path} alt="" />
        <div className=" rate position-absolute end-0 top-0">{item.vote_average?.toFixed(1)}</div>

        <h4 className='h6 py-2'>{item.name.slice(0,19)}..</h4>

      </div>
      </Link>
    </div>

    </>
  )
}
