import React from 'react'
import { useState, useEffect } from 'react'
const Box = ({data,idx, setCategories, categories})=>{
    const [selected, setSelected] = useState()
    const handleClick = (e)=>{
        if(categories.includes(data.id) ){
            const Selectedid = categories.indexOf(data.id)
            categories.splice(Selectedid,1)
       
            setCategories([...categories])
        }
        else{
            setCategories([...categories,data.id])
        }
        setSelected(!selected)
    }
    useEffect(()=>{
        setSelected(categories.includes(data.id)==true)
    })
    return (
        <div data={data}  onClick={(e)=>handleClick(e)}  key={idx} style={{background:data['color'],color:"white",padding:"4px",borderRadius:"12px",border:`${selected?"3px solid green":"3px solid white"}`}}>
            <p className='boxcenter'>{data.id}</p>
            {data.image}
        </div>
    )
}

export default Box