import {useState, useEffect} from 'react'
function WeatherCard( {zip = "07052" }) {
  const [data, setData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://127.0.0.1:8000/?zip=${zip}`)
      result.json().then(json => setData(json))
      console.log(zip)
    }
    fetchData()
  }, []);
  console.log(data)
  return (
    <h1>{data.temperature_2m}</h1>
  )
  
}

export default WeatherCard; 
