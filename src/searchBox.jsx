
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city , setCity ]= useState("")
    let [error , seterror] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e005cccd08162fe80672842a118b719a"

    

    let getWeatherInfo= async()=>{
        try{ let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
         let jsonResponce = await responce.json();
         console.log(jsonResponce);

         let result = {
            city : city, 
          temp: jsonResponce.main.temp, 
          tempMin: jsonResponce.main.temp_min, 
          temp_max: jsonResponce.main.temp_max, 
          humidity : jsonResponce.main.humidity, 
          feelslike : jsonResponce.main.feels_like, 
          weather : jsonResponce.weather[0].description

         }
         console.log(result)
         return result;

        }catch(error){
            throw error;

        }
        
        
         
    }

     let onchageValue = (event)=>{
        setCity(event.target.value);
     }

         let onSubmit =async (event)=>{
try{
     event.preventDefault();
          console.log(city)
          let newresult = await getWeatherInfo()
          updateInfo(newresult);
         setCity("");

}catch (error){
 seterror(true)
}
       
        
         }

    return (
        <div className="SearchBox">
        
          <form onSubmit={onSubmit}>
          <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={onchageValue}/>
          <br/><br/>
        <Button variant="contained" type="submit">Search</Button>

        </form>
        <br />
        {error &&  <p style={{color: "red"}}>no such place exist</p>
        }
        </div>
    )

}