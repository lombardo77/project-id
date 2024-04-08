import {useState, useEffect} from 'react'
import daySunny from "../../img/1530392_weather_sun_sunny_temperature_icon.png"
import dayRainy from "../../img/1530362_weather_clouds_cloudy_forecast_rain_icon.png"
import night from "../../img/1530382_weather_moon_moonlight_night_icon.png"
import nightRainy from "../../img/1530379_weather_clouds_moon_night_rain_icon.png"
import dayCloudy from "../../img/1530369_weather_cloud_clouds_cloudy_icon.png"
import nightCloudy from "../../img/1530377_weather_fog_foggy_moon_night_icon.png"

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
  let img = NaN
  if (parseInt(data.percipitation) > 20) { // is it rainy
    if (isNight(parseInt(data.sunrise), parseInt(data.sunset), parseInt(data.time))) { //night and rainy
      img = nightRainy
    } else { //day and rainy
      img = dayRainy
    }
  } else { //is it not rainy
    if (isNight(parseInt(data.sunrise), parseInt(data.sunset), parseInt(data.time))) { //night and not rainy
      if (data.cloud_cover > 30) {
        img = nightCloudy
      } else {
        img = night
      }
    } else { //day and sunny
      if (data.cloud_cover > 30) {
        img = dayCloudy
      } else {
        img = daySunny
      }
    }

  }

  return (
    <>
    <div className="info">
    <h1> {data.name} </h1>
    <img src={img} className='img'/>
    <h1 id='temp'>{data.temperature_2m} °F</h1>
    <h2>{data.relative_humidity_2m}% humidity</h2>
    <h2>Feels like {data.apparent_temperature} °F</h2>
    </div>
    </>
  )
  
}

export default WeatherCard; 
