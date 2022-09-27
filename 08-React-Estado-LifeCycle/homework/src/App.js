import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'

export default function App() {

  const [cities, setCities] = useState([]);

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(json => {
        if (json.main !== undefined) {
          const city = {
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            img: json.weather[0].icon,
            id: json.id,
            wind: json.wind.speed,
            temp: json.main.temp,
            name: json.name,
            weather: json.weather[0].main,
            clouds: json.clouds.all,
            latitud: json.coord.lat,
            longitud: json.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("city not found");
        }
      })
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
