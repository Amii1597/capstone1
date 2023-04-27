import React from 'react'
import action from '../../assets/Action.png'
import drama from '../../assets/Drama.png'
import fantasy from '../../assets/Fantasy.png'
import fiction from '../../assets/Fiction.png'
import horror from '../../assets/Horror.png'
import music from '../../assets/Music.png'
import romance from '../../assets/Romance.png'
import thriller from '../../assets/Thriller.png'
import western from '../../assets/Western.png'
import Item from '../Global/Item'
import Box from '../Global/Box'
import "./Category.css";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const item=[
    {
        id:"Action",
        color:"#FF5209",
        image:<img style={{width:"160px", height:"120px"}}  src={action}/>
    },
    {
        id:"Drama",
        color:"#D7A4FF",
        image:<img style={{width:"160px", height:"120px"}}  src={drama}/>
    },{
        id:"Fantasy",
        color:" #FF4ADE",
        image:<img style={{width:"160px", height:"120px"}}  src={fantasy}/>
    },
    {
        id:"Fiction",
        color:"#6CD061",
        image:<img style={{width:"160px", height:"120px"}}  src={fiction}/>
    },
    {
        id:"Horror",
        color:"#7358FF",
        image:<img style={{width:"160px", height:"120px"}}  src={horror}/>
    },
    {
        id:"Music",
        color:"#E61E32",
        image:<img style={{width:"160px", height:"120px"}}  src={music}/>
    },{
        id:"Romance",
        color:"#11B800",
        image:<img style={{width:"160px", height:"120px"}}  src={romance}/>
    },{
        id:"Thriller",
        color:"#84C2FF",
        image:<img style={{width:"160px", height:"120px"}}  src={thriller}/>
    },{
        id:"Western",
        color:"#912500",
        image:<img style={{width:"160px", height:"120px"}}  src={western}/>
    }
]
const Category = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()


    const handleSignUp = ()=>{
       window.localStorage.setItem("item", JSON.stringify([...categories]))
         navigate("/Homepage")
    }
  return (
 <>
     <div style={{ display: "flex" }}>
     {/* left Side */}
            <div className='leftR'>
                <p className='heading'>Super app</p>
                <p className='Heading'>Choose your entertainment category</p>
                <div className='selecteditem'>
                <Item categories={categories} color={"green"}       setCategories={setCategories}/>
                </div>
                </div>
{/* Right side  */}
                <div className='rightside'>
                {item.map((data,idx)=>
                    <Box data={data} idx={idx} categories={categories}  setCategories={setCategories}/>
                )}
            </div>
        </div>
        {/* Button */}
            <button className='button' onClick={handleSignUp}>Next Page</button>
 </>
  )
}


export default Category