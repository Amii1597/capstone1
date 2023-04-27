import React from 'react'
import './Movie.css'
import List from '../components/MoviesList/Listitem'
import Profile from '../assets/MenBrowser.png'
import { useNavigate } from 'react-router-dom'
const Movies = ()=>{
  const navigate=useNavigate()
  const Backtohomepage=()=>{
navigate('/Homepage')
  }
    const movies = JSON.parse(window.localStorage.getItem("item"))
    return(
        <>
        <img src={Profile} onClick={Backtohomepage} className='movies_img'/>
     
        <div className='movies_body'>
        <p className='movies_Heading'>Super app</p>
        <p className='movies_Subheading'>Entertainment according to your choice</p>
        {movies.map((movie)=><List item={movie}/>)}
        </div>
        </>
    )
}


export default Movies
