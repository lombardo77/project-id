import {useState, useEffect} from 'react'
import sunny from "../../img/1530392_weather_sun_sunny_temperature_icon.png"
import rainy from "../../img/1530370_weather_clouds_hail_hailstone_snow_icon.png"

function WeatherCard(props) {
  const zip = props.zip
  const [data, setData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://127.0.0.1:8000/?zip=${zip}`)
      result.json().then(json => setData(json))
    }
    fetchData()
  }, [zip]);

  const isNight = (sunrise, sunset, time) => {
    if (sunset <= sunrise) {
      sunset += 24
    }
    if (time < sunset && time > sunrise) {
      return false
    } else {
      return true 
    }
  }
  console.log(data)
  let percip = NaN
  let dayTime = NaN
  if (parseInt(data.percipitation) > 20) { // is it rainy
    if (isNight(parseInt(data.sunrise), parseInt(data.sunset), parseInt(data.time))) {
      console.log("night")
    } else {
      console.log("day")
    }
  } else { //is it sunny
     if (isNight(parseInt(data.sunrise), parseInt(data.sunset), parseInt(data.time))) {
      console.log("night")
    } else {
      console.log("day")
    }

  }

  
  
  return (
    <>
    <p>tmp: {data.temperature_2m}</p>
    <img src={sunny}/>
    <p>humidity: {data.relative_humidity_2m}%</p>
    <p>apparent temp: {data.apparent_temperature}</p>
    </>
  )
  
}

export default WeatherCard; 
