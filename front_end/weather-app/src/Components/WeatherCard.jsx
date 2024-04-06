import {useState, useEffect} from 'react'

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

  return (
    <>
    <p>tmp: {data.temperature_2m}</p>
    <p>humidity: {data.relative_humidity_2m}%</p>
    <p>apparent temp: {data.apparent_temperature}</p>
    </>
  )
  
}

export default WeatherCard; 
