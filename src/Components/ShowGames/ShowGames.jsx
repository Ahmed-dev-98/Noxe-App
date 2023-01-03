import React from 'react'

import {Link} from "react-router-dom"
export default function ShowGames({item}) {
    return ( <>
    
        <div className="col-md-2  px-2 mb-2 column-body">
        <Link className='all-card' to={`/details/${item.id}`}>
          <div className="card-container bg-transparent position-relative">
            {item.thumbnail? <img className='w-100' src={item.thumbnail} alt="" /> : null}
            <h4 className='h6 py-2'>{item.title.slice(0,19)}..</h4>
    
          </div>
          </Link>

        </div>
        </>
      )
    }
    