
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherCard from './components/WeatherCard/WeatherCard'
import { Weather_Api_url, Weather_Api_Key } from './api'
import { useState } from 'react'
import Forecast from './components/forecast/forecast'

function App() {
  const [currentWeather, setCurrentWeather]= useState(null);
  const [forecast, setForecast]= useState(null);

 const handleOnSearchChange=(searchData)=>{
  const [lat,lon]=searchData.value.split(" ");
  const currentWeatherFetch=fetch(`${Weather_Api_url}/weather?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`);
  const ForecastWeatherFetch=fetch(`${Weather_Api_url}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`);
  Promise.all([currentWeatherFetch,ForecastWeatherFetch]).then(
    async (response)=>{
      const weatherResponse= await response[0].json();
      const forecastResponse= await response[1].json();

      setCurrentWeather({city: searchData.label,...weatherResponse});
      setForecast({city: searchData.label,...forecastResponse});
    }
  ).catch(error=>console.log(error))
 }

 console.log(currentWeather)
 console.log(forecast)

  return (
    <div className="container">
    <SearchBar  onSearchChange={handleOnSearchChange} /> 
    {currentWeather && <WeatherCard data={currentWeather} />}
    {forecast && <Forecast data={forecast}/>}
    </div>
  )
}

export default App

