import React from 'react'
import {Link} from 'react-router-dom'
export default function ShowPeople({item}) {
  return ( <>

    <div className="col-md-2 px-2 mb-2 column-body">
    <Link className='all-card' to={`/details/${item.id}/person`}>

      <div className="card-container bg-transparent position-relative">
        <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+ item.profile_path} alt="" />
        <h4 className='h6 py-2'>{item.name.slice(0,19)}..</h4>

      </div>
      </Link>
    </div>

    </>
  )
}
