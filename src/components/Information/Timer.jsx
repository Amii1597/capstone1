// import React from 'react'
// import './Timer.css'
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import Up from '../../assets/up.png'
// import Down from '../../assets/Down.png'
// import { useState } from 'react'
// const Timer = () => {

//   const[seconds,setSeconds]=useState(0)
//   const[minutes,setMinutes]=useState(0)
//   const[hours,setHours]=useState(0)
//   const[playing,setPlaying]=useState(false)
// // increment time
//   const increaseSecond=()=>{
//     if(seconds==59){
//       return
//     }setSeconds((sec)=>sec+1)
//   }
//   const increaseMinute=()=>{
//     if(minutes==59){
//       return
//     }setMinutes((min)=>min+1)
//   }
//   const increaseHour=()=>{
//    setHours((hours)=>hours+1)
//   }
// //  Decrement Time
// const decreaseSeconds=()=>{
//   if(seconds==0){
//     return
//   }
//   setSeconds((sec)=>sec-1)
// }
// const decreaseMinutes=()=>{
//   if(minutes==0){
//     return
//   }
//   setMinutes((min)=>min-1)
// }
// const decreaseHours=()=>{
//   if(hours==0){
//     return
//   }
//   setHours((hours)=>hours-1)
// }
// function toHoursAndMinutes(totalSeconds){
//   const totalMinutes=Math.floor(totalSeconds/60);
//   const seconds=totalSeconds % 60;
//   const hours=Math.floor(totalMinutes/60);
//   const minutes=totalMinutes % 60;
//   return `${hours}:${minutes}:${seconds}`;
// }


//   return (
// <> 
// <div className="timer_body">
//   <div>
// <CountdownCircleTimer isPlaying={playing} duration={seconds+minutes*60+hours*60*60} colors={["#ff6a6a"]}>
//   {({remainingTime})=><b className='timer_remaining'>{toHoursAndMinutes(remainingTime)}</b>}
// </CountdownCircleTimer>
//   </div>
//   {/* set timer according to your work */}
// <div className='timer_firstlayer'>
//   <div className='timer_secondlayer'>
//   {/* Hours */}
//     <div style={{textAlign:"center",padding:"6px"}}>
//       <p>Hours</p>
//       <img className='timer_image' src={Up} onClick={increaseHour} />
//       <p>{hours}</p>
//       <img  className='timer_image' src={Down} onClick={decreaseHours}/>
//     </div>
//     {/* Minutes */}
//     <div>
//       <p>Minutes</p>
//       <img  className='timer_image' src={Up} onClick={increaseMinute}/>
//       <p>{minutes}</p>
//       <img  className='timer_image' src={Down} onClick={decreaseMinutes}/>
//     </div>
//     {/* Seconds */}
//     <div>
//       <p>Second</p>
//       <img  className='timer_image' src={Up} onClick={increaseSecond}/>
//       <p>{seconds}</p>
//       <img  className='timer_image' src={Down} onClick={decreaseSeconds}/>
//     </div>
//   </div>
//   <div onClick={()=>setPlaying((prev)=>!prev)} className='timer_button'>
//   {playing?<p>Pause</p>:<p>Start</p>}

//   </div>
// </div>
// </div>

// </>
//   )
// }

// export default Timer