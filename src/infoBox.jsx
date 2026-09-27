import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./infoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({info}){
    

  const coldUrl = "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800";

const hotUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800";

const rainUrl = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800";
    return(
       
        <div className='info'>
            <h2> Weather-Info </h2>
<div className='card'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? rainUrl: info.temp>15 ?hotUrl:coldUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {info.city}
{
  info.humidity > 80 
    ? <ThunderstormIcon />
    : info.temp > 15 
      ? <SunnyIcon />
      : <AcUnitIcon />
}
     
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <div> temp : {info.temp}&deg;C </div>
         <div> tempMin : {info.tempMin}&deg;C </div>
         <div> temp_max : {info.temp_max}&deg;C </div>
         <div> humidity : {info.humidity}&deg;C </div>
         <p><i> The weather can be describe as <b>{info.weather}</b> and feelslike <b>{info.feelslike}&deg; C</b></i></p>
        </Typography>
      </CardContent>
      
    </Card>

       </div>
        </div>
    )
}