
import { useState } from 'react';
import './App.css';
import Weatherresult from './Weatherresult';

function App() {
const APP_KEY="1ca93ba8044b4fe688a190436221211"
let cityinput=""
const [weatherData, setWeatherData] = useState([])

function cityText(){
document.querySelector("input").addEventListener("input",(e)=>{
  e.preventDefault();
  cityinput=e.target.value;
  console.log(cityinput);
})
}
async function getdata(value){
  if(value==="")return;
 const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY} &q=${value}&days=3&aqi=no&alerts=no `)
 const result=await data.json();
 setWeatherData(result.forecast.forecastday)
 console.log(result.forecast.forecastday);
}
  return (
   <div className='weathercondition' >
    <div className='search' >
    <input type="text" placeholder="Search a City ..." onChange={cityText}  />
    <button className='btn btn-info text-white'  onClick={()=> getdata(cityinput)} >Search</button>
    </div>
   {weatherData.map(item=>(
   <Weatherresult
   key={item.date}
    date={item.date} 
    mintemp={item.day.mintemp_c
    }
    maxtemp={item.day.maxtemp_c}
    condition={item.day.condition.text}
    icon={item.day.condition.icon}
   /> )) }
   </div>

  );
}

export default App;


