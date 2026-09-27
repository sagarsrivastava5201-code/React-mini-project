import { useState } from "react"
import InfoBox from "./infoBox"
import SearchBox from "./searchBox"
export default function WeatherApp(){
   let [weatherInfo, setWeatherInfo]=  useState({
        city :  "delhi ", 
        feelslike : 30.99, 
        humidity: 67, 
        temp : 28.39, 
        tempMin: 28.39, 
        temp_max: 28.39, 
        weather: "broken clouds"
    })

    let updateInfo = (newresult)=>{
        setWeatherInfo(newresult)
    }
    return (
        <div style={{textAlign : "center "}}>
            <h2>Weather App By Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    )
}