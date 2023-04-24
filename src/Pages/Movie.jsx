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
        <img src={Profile} onClick={Backtohomepage} style={{position:"absolute",top:"5vh",right:"3vw",height:"70px",width:"70px"}}/>
     
        <div style={{width:"35vw",minHeight:"100vh",background:"black",overflowX:"hidden"}}>
        <p style={{color:"green",fontSize:"3rem",margin:"1vw"}}>Super app</p>
        <p style={{color:"white",fontSize:"2rem",margin:"3vw"}}>Entertainment according to your choice</p>
        {movies.map((movie)=><List item={movie}/>)}
        </div>
        </>
    )
}


export default Movies
