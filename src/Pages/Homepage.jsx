import React from 'react'
// import Notes from '../components/Information/Notes'
import Data from '../components/Information/Data'
// import Weather from '../components/Information/Weather'
// import News from '../components/Information/News'
// import Timer from '../components/Information/Timer'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  const navigate=useNavigate()
  const click=()=>{
    navigate('/Movie')
  }
  return (
<>
<div style={{display:'flex'}}>

  <Data/>
 {/* <Notes/> 
   <News/> */}
   
   
</div>
<div>
{/* <Weather/>
  <Timer/> */}
  <button className='next_page' onClick={click}>Browse</button>
</div>
</>
  )
}

export default Homepage
// Wheather api: http://weatherapi.com
// News api: http://newsapi.org
// b3e6a0b697a8452c8d99ff7b3ffd5dbb