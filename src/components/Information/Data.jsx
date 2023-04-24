import Image from '../../assets/MenData.png'
import './Data.css'

const Item = ({color,categories})=>{
    return(
        <div className='data_store' >
       {categories.map((category)=>(
                <button style={{background:`${color}`, borderRadius:"12px",width:"100px", color:"white", border:"none",padding:"6px", height:"30px",flexShrink:0, margin:"10px"}}>{category}  <b className='data_crosssign' >X</b></button>
        ))}
        </div>
    )
}
const Data = ()=>{
    const info = JSON.parse(window.localStorage.getItem("userData"))
    const item = JSON.parse(window.localStorage.getItem("item"))
    return (
        <div className='data_box' >
        <div>
            <img className='data_img' src={Image} />
        </div>
        <div className='data_infobox' >
            <p  className='data_name' >{info.name}</p>
            <p className='data_email' >{info.email}</p>
            <p className='data_username'>{info.username}</p>
            <Item className='save_data' categories={item} color={"#9F94FF"}/>
        </div>
        </div>
    )
}

export default Data