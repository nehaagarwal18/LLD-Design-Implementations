import React from 'react'
import { weatherAppImages, weatherIcons } from '../../constants'

const WeatherInfo = ({data, city}) => {
  const {main, description} = data?.weather?.[0] || {}
  const {temp, humidity, temp_max, temp_min, feels_like} = data?.main || 0
  const {speed} = data?.wind || 0

  const convertToCelsius = (temp) => {
    return temp-273.15
  }
  return (
    <div className="p-4 text-center">
        <h1 className="text-4xl mb-8">{city}</h1>
        <img className="mx-auto w-[150px] h-[150px]" src={weatherAppImages[main]} alt={`${main}-img`}/>
        {temp && <h1 className="text-3xl font-bold mt-4">{convertToCelsius(temp).toFixed(0)}°C</h1>}
        <p>{description}</p>
        <div className="flex justify-center gap-6 mt-6 bg-gray">
            <div>
                <h3 className="font-bold">Max</h3>
                <p>{convertToCelsius(temp_max).toFixed(0)}°C</p>
            </div>
            <div>
                <h3 className="font-bold">Min</h3>
                <p>{convertToCelsius(temp_min).toFixed(0)}°C</p>
            </div>
        </div>
        <div className="mt-10 w-[40%] mx-auto flex justify-between">
            <div>
                <img className="w-[40px] h-[40px]" src={weatherIcons['wind']} alt="wind-icon"/>
                <span>{speed}</span>
            </div>
            <div>
                <img className="w-[40px] h-[40px]" src={weatherIcons['feelsLike']} alt="feels-like-icon"/>
                <span>{feels_like}</span>
            </div>
            <div>
                <img className="w-[40px] h-[40px]" src={weatherIcons['humidity']} alt="humidity-icon"/>
                <span>{humidity}</span>
            </div>
        </div>
    </div>
  )
}

export default WeatherInfo