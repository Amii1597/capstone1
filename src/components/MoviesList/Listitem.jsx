import { useEffect, useState } from "react"
import './Listitem.css'
const List = ({item})=>{
    const [movies, setMovies] = useState([])
    console.log(movies)
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9ddb382253msh9eb136b2c726e24p1b193bjsn719db9ff553b',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const fetchMovies = async()=>{
            await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${item}&year=2023`, options)
                .then(response => response.json())
                .then(response => setMovies(response.results.splice(4,4)))
                .catch(err => console.error(err));
        }
        fetchMovies();
    },[])
    return(
        <>
        <p >{item}</p>
        <div style={{display:"flex",overflow:"hidden",marginLeft:"2vw"}}>
            {movies.map((movie,idx)=>{
                console.log(movie?.primaryImage?.url)
                return (
                <div key={idx} style={{width:"20vw",margin:"2vw"}}>
                    <img src={movie?.primaryImage?.url} style={{objectFit:"cover", width:"20vw", height:"20vh",borderRadius:"12px"}}/>
                </div>
                )
            })}
        </div>
        </>
    )
}

export default List