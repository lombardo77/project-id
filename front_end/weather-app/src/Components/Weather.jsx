import React from "react";
import WeatherCard from "./WeatherCard.jsx";
import './Weather.css'
import {useState, useEffect} from 'react'

function Weather() {

  const [zip, setZip] = useState("90003")

  const handleChangeProp = () => {
    setZip("20001")
    console.log(zip)
  }

  const handleClick = (e, val) => {
    handleChangeProp()
    e.preventDefault()
  }
  return (
    <div className="app">
      <form>
        <input id="input" placeholder="zip code..."/>
        <button onClick={handleClick}>Search</button>
        <WeatherCard zip={zip}/>
      </form>
    </div>
  )
}

export default Weather
