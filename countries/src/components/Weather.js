import axios from "axios"
import {useEffect, useState} from 'react'


const Weather = ({name, lon, lat}) => {
  const apiKey = process.env.REACT_APP_API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  console.log(url)
  const [weather, setWeather] = useState(null)
  
  useEffect(() => {
    axios
    .get(url)
    .then(response => {
      console.log(`data is ${response.data}`)
      setWeather(response.data)
    }) 
  }, [])  

  if (weather === null)
    return null
  else{
    return(
      <div>
        <h2>Weather in {name}</h2>
        <div>temp {weather.main.temp} celsius</div>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
        <div>wind {weather.wind.speed}</div>
      </div>
    )
  }
}

export default Weather