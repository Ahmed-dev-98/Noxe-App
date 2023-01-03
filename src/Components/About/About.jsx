import React from 'react'

export default function About() {
  return (
    <div className='about-section'>
      <h2 className='text-center py-3'>welcome to NOxe web application</h2>
      <div className="container  ">
        <h4 className=' py-3'>who are we :</h4>
        <div className='text-warning'>

       <p>-NOxe in short is a free site for the weekly trending movies , tvshows and games ..</p>
       <p>-NOxe is automaticly updating every week using a several trusted API like themoviedb and rapid APi  ..  </p>
       <p>-NOxe's homepage contain top 10 of the three types of data ...   </p>
       </div>
       <h4 className='py-3'> dive deeper in NOxe : </h4>
       <div className='text-warning' >
       <p>-you can go to specific type of data by clicking on the left button at each section you will automaticly navigate to this section </p>
       <p>-there is search bar in every section which will help you find what you looking for , ( search bar only provide data if it's trending )</p>
       <p>when you clicking at your result , you will automaticly navigate to details page </p>
       <p>details page include photos , information and the orginal link to watch , play or buy it safely  </p>
       <p>enjoy using NOxe :) </p>
       </div>

      </div>
    </div>
  )
}

