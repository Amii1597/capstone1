// import React, { useState } from 'react'
// import './Note.css'
// import Edit  from '../../assets/Pen.png'
// import Black from '../../assets/black circle.png'
// const Notes = () => {
//     const[note,setNote]=useState(JSON.parse(window.localStorage.getItem("text")))
//     const handleChange=(e)=>{
//         setNote(e.target.value)
//         window.localStorage.setItem("note",JSON.stringify(note))
//     }
    
//   return (
//     <>
//         <div className='notes_body'>
//             <p className='notes_heading'>All Notes</p>
//             <textarea className='notes_area' value={note} onChange={(e)=>handleChange(e)}/>
//             <img className='notes_edit' src={Black}/>
//             <img className='notes_pen' src={Edit}/>
//         </div>
//     </>
//   )
// }

// export default Notes