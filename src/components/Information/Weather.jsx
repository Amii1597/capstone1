import { useEffect, useState } from "react"
import './Weather.css'

const Weather = ()=>{
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [weather, setWeather] = useState(false)
    console.log(weather)
   
    useEffect(()=>{
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    useEffect(()=>{
        const fetchWeather = async()=>{
            await fetch("http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no")
                .then(async(data)=>await data.json()).then((data)=>setWeather(data)) 
        }
        fetchWeather()
    },[])
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedday)
    })
    return (
        <div className="weather_bottom"  >
            <div className="weather_top">
                <b>{date}</b>
                <b>{time}</b>
            </div>
            <div>
                {weather ?<div style={{display:"flex", color:"white", alignItems:"center", justifyContent:"space-evenly"}}> <div>
                    <img className="weather_image"  src={weather.current.condition.icon} />
                    <p>{weather.current.condition.text}</p>
                </div>
                <div>
                   <p style={{marginBottom:"12px", fontSize:"24px",marginTop:"10px"}}><b>{weather.current.temp_c}</b>C</p>
                    <p>{weather.current.pressure_mb} pressure</p>
                </div>
                <div>
                    <p className="weather_wind" >{weather.current.wind_kph} wind</p>
                    <p>{weather.current.humidity} humidity</p>
                </div></div>:<></>}
              </div>
        </div>
    )
}

export default Weather