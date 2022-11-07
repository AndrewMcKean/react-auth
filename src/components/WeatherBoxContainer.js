import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import WeatherBox from './WeatherBox';

const weatherIcons = ["Clouds", "Rain", "Sun"];

export default function ContentBoxContainer() {
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");


  useEffect(() => {
    
    function getWeather() {
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d0a10211ea3d36b0a6423a104782130e&units=metric`;

            const configuration = {
              method: "get",
              url: apiUrl,
            };

            axios(configuration)
              .then((result) => {
                setTemp(result.data.main.temp);
                setLocation(result.data.name);
                
                if((result.data.weather[0].main) === "Clouds") {
                  setIcon(weatherIcons[0]);
                } else if((result.data.weather[0].main) === "Rain") {
                  setIcon(weatherIcons[1]);
                } else {
                  setIcon(weatherIcons[2]);
                }
              })             
              .catch((error) => {
                error = new Error();
              })
          })
        } else {
          console.log("Geolocation not supported");
        }

    }

    getWeather();
    


    }, [])

  return (
    <WeatherBox cardTitle="Weather" location={location} temp={temp} icon={icon} />
  )
}