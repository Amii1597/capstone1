import './item.css'
import React from 'react'

const Item = ({color,id,setCategories,categories})=>{
    
    const handleClick = ()=>{
         const index = categories.indexOf(id)
            categories.splice(index,1)
            setCategories([...categories])
    }
    return(
        <div className='item_body'>
       {categories.map((category)=>(
                <button style={{background:`${color}`, borderRadius:"12px",width:"100px", color:"white", border:"none",padding:"6px", height:"30px",flexShrink:0, margin:"10px"}} onClick={handleClick}>{category}  <b className='item_b'>X</b></button>
        ))}
        </div>
    )
}

export default Item