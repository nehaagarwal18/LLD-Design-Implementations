import React, {useEffect, useState} from 'react'
import WeatherInfo from './WeatherInfo'
import LocationSelector from './LocationSelector';
const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherContainer = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [city, setCity] = useState('Bengaluru')


//   function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(success, error);
//     } else {
//        console.log("Geolocation is not supported by this browser")
//     }
//   }

//   function success(position) {
//     setLatitude(position.coords.latitude)
//     setLongitude(position.coords.longitude)
//   }

//   function error() {
//     alert("Sorry, no position available.");
//   }

  function getLatLong() {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},IN&limit=3&appid=${weather_api_key}`)
    .then(res => res.json())
    .then(data => {
      setLongitude(data[0].lon)
      setLatitude(data[0].lat)
    })
    .catch(err => console.log(err))
  }

  function getWeatherDetails() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}`)
    .then(res => res.json())
    .then(data => {
      setWeatherDetails(data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getLatLong();
  }, [city])

  useEffect(() => {
    getWeatherDetails()
  }, [latitude, longitude])

  return (
    <div className="text-white flex justify-center m-auto h-screen" style={{background: 'linear-gradient(to bottom, #00cc99 0%, #ccccff 100%)'}}>
        <div>
            <h1 className="mt-10 font-bold text-3xl text-center">Weather</h1>
            <div className="mt-10 p-4 w-[700px] flex flex-col justify-center m-auto" style={{background: '#00000033' }}>
                    <LocationSelector handleCityChange={(e) => {
                        setCity(e.target.value)
                    }}/>
                    <WeatherInfo data={weatherDetails} city={city}/>
            </div>
        </div>
    </div>
  )
}

export default WeatherContainer