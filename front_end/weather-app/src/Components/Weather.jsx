import React from "react";
import WeatherCard from "./WeatherCard.jsx";
import './Weather.css'

function Weather() {
  return (
    <div>
      <div>
        <input name="myInput" placeholder="zip code..."/>
      </div>
      <div>
        <button>Search</button>
      </div>
      <div>
        <WeatherCard/>
      </div>
    </div>
  )
}

export default Weather
