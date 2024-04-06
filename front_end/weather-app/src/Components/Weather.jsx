import React from "react";
import WeatherCard from "./WeatherCard.jsx";
import './Weather.css'
import {useState, useEffect} from 'react'

function Weather() {

  const [zip, setZip] = useState("90003")
  const [tmpZip, setTmpZip] = useState("")

  const handleChangeProp = (e) => {
    setZip(tmpZip)
    e.preventDefault()
  }
  const changeInput = (e) => {
    setTmpZip(e.target.value)
    e.preventDefault()
  }

  return (
    <div className="app">
      <form>
        <input className="bar" id="input" placeholder="zip code..." onChange={(e) => changeInput(e)}/>
        <button className="bar" onClick={(e) => {
          handleChangeProp(e)
        }
        }>Search</button>
        <WeatherCard zip={zip}/>
      </form>
    </div>
  )
}

export default Weather
